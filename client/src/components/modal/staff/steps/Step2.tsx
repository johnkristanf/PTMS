import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { UploadDocument } from '@/http/post/document'
import Swal from 'sweetalert2'
import { Application, FirstStepRequirements } from '@/types/application'
import { FetchFirstStepRequirements } from '@/http/get/application'
import { useEffect, useRef, useState } from 'react'
import { formatDocumentFirstStepKey } from '@/lib/utils'
import { classNames } from '@/helpers/classNames'
import { UpdateFirstStepReqDocuments } from '@/http/put/document'
import { FirstStepReqDocument, firstStepRequirementsKeyMapping } from '@/types/document'

// type RequirementsWithoutID = Omit<FirstStepRequirements, 'application_id'>;

export function DocumentStep2({ applicationData }: { applicationData: Application }) {
    console.log('applicationID in Step 2: ', applicationData.application_id)
    console.log('applicantCode in Step 2: ', applicationData.applicationCode)
    console.log('first_step_req_documents in Step 2: ', applicationData.first_step_req_documents)

    const [documents, setDocuments] = useState<string[]>(
        applicationData.first_step_req_documents || []
    )

    const updateApplicantFormDocumentsMutation = useMutation({
        mutationFn: UpdateFirstStepReqDocuments,
        onSuccess: (response) => {
            Swal.close()
            queryClient.invalidateQueries({ queryKey: ['approved_applications'] })
            console.log('Update Response: ', response)
        },

        onMutate: () => {
            Swal.fire({
                title: 'Please wait...',
                text: 'Your request is being processed',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading()
                },
            })
        },

        onError: (error: unknown) => {
            Swal.close()
            console.error('Document Upload Error:', error)
        },
        onSettled: () => {
            Swal.close()
        },
    })

    const [activeRequirementKey, setActiveRequirementKey] = useState<string | null>(null)
    const queryClient = useQueryClient()

    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const handleScanClick = (key: string) => {
        setActiveRequirementKey(key)
        fileInputRef.current?.click()
    }

    const { data: response } = useQuery({
        queryKey: ['first_step_requirements', applicationData.application_id],
        queryFn: async () => {
            return await FetchFirstStepRequirements(applicationData.application_id)
        },
    })

    const first_step_requirements: FirstStepRequirements = response?.data || {}

    console.log('first_step_requirements: ', first_step_requirements)

    const uploadDocumentMutation = useMutation({
        mutationFn: UploadDocument,

        onMutate: () => {
            Swal.fire({
                title: 'Please wait...',
                text: 'Your request is being processed',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading()
                },
            })
        },

        onError: (error: unknown) => {
            console.error('Document Upload Error:', error)

            Swal.fire({
                icon: 'error',
                title: 'Failed to Upload File',
                text: 'Please try again uploading file with lower file size',
                showConfirmButton: false,
                timer: 1500,
            })
        },
    })

    const handleDocumentUpload = async (
        file: File,
        applicationCode: string,
        requirementKey: string
    ) => {
        console.log('requirementKey handleDocumentUpload: ', requirementKey)

        try {
            const formData = new FormData()
            formData.append('document', file)
            formData.append('application_code', applicationCode)

            uploadDocumentMutation.mutate(formData, {
                onSuccess: () => {
                    const updatedDocuments = [...new Set([...documents, requirementKey])] // Prevent duplicates

                    const data: FirstStepReqDocument = {
                        application_id: applicationData.application_id,
                        first_step_req_documents: updatedDocuments,
                    }

                    updateApplicantFormDocumentsMutation.mutate(data)
                    setDocuments(updatedDocuments)

                    queryClient.invalidateQueries({ queryKey: ['approved_applications'] })

                    Swal.fire({
                        icon: 'success',
                        title: 'File Uploaded Successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    })
                },
            })
        } catch (error) {
            console.error('File upload failed', error)
            alert('File upload failed')
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        console.log('filename: ', file?.name)

        if (file && applicationData.applicationCode && activeRequirementKey) {
            handleDocumentUpload(file, applicationData.applicationCode, activeRequirementKey)
        }
    }

    const reversedMapping: { [key: string]: string } = Object.entries(
        firstStepRequirementsKeyMapping
    ).reduce((acc, [longText, fieldName]) => {
        acc[fieldName] = longText
        return acc
    }, {} as { [key: string]: string })

    useEffect(() => {
        setDocuments(applicationData.first_step_req_documents || [])
    }, [applicationData.first_step_req_documents])

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Only First Step Requirements</h1>

            {/* Display List */}
            <div className="flex flex-col gap-2">
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />

                {Object.entries(first_step_requirements).map(([key, value], index) => {
                    if (key === 'application_id' || key === 'requirements_id') return null

                    const requirementsTitle =
                        reversedMapping[key] || formatDocumentFirstStepKey(key)

                    return (
                        <div
                            key={index}
                            className="flex justify-between items-center border p-2 rounded"
                        >
                            <span
                                className={classNames(
                                    String(value) === 'false' ? 'text-gray-500' : '',
                                    'mr-1'
                                )}
                            >
                                {requirementsTitle}
                            </span>

                            {String(value) !== 'false' && !documents.includes(key) && (
                                <button
                                    onClick={() => handleScanClick(key)}
                                    className="bg-orange-700 text-white px-4 py-1 rounded hover:opacity-75"
                                >
                                    Scan
                                </button>
                            )}

                            {documents.includes(key) && (
                                <span className="text-green-600 text-sm font-medium">Scanned</span>
                            )}
                        </div>
                    )
                })}
            </div>

            {/* Input and Add Button */}
            {/* <div className="flex gap-2 mb-4 mt-5">
            <input
                type="text"
                // onChange={(e) => setNewDocument(e.target.value)}
                className="border p-2 rounded w-[85%] focus:outline-orange-700"
                placeholder="Enter document name"
            />

            <button
                // onClick={addDocument}
                className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-800"
            >
            +
            </button>

        </div> */}
        </div>
    )
}
