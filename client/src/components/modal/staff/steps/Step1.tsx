import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UploadDocument } from '@/http/post/document'
import Swal from 'sweetalert2'
import { UpdateApplicantFormDocuments } from '@/http/put/document'
import { ApplicantFormDocument } from '@/types/document'
import { Application } from '@/types/application'

export function DocumentStep1({ applicationData }: { applicationData: Application }) {
    console.log('applicationCode: ', applicationData.applicationCode)
    console.log('applicant_form_documents: ', applicationData.applicant_form_documents)

    const [documents, setDocuments] = useState<string[]>(
        applicationData.applicant_form_documents || []
    )
    const queryClient = useQueryClient()

    const updateApplicantFormDocumentsMutation = useMutation({
        mutationFn: UpdateApplicantFormDocuments,
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

    useEffect(() => {
        setDocuments(applicationData.applicant_form_documents || [])
    }, [applicationData.applicant_form_documents])

    console.log('document new: ', documents)

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

    const handleDocumentUpload = async (file: File, applicationCode: string, key: string) => {
        try {
            const formData = new FormData()
            formData.append('document', file)
            formData.append('application_code', applicationCode)

            uploadDocumentMutation.mutate(formData, {
                onSuccess: () => {
                    const updatedDocuments = [...new Set([...documents, key])] // Prevent duplicates

                    const data: ApplicantFormDocument = {
                        application_id: applicationData.application_id,
                        applicant_form_documents: updatedDocuments,
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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const file = e.target.files?.[0]

        console.log('filename: ', file?.name)

        if (file && applicationData.applicationCode) {
            handleDocumentUpload(file, applicationData.applicationCode, key)
        }
    }

    const scopeTypeArray = applicationData.scope_type.split(',')
    const scopeSet = new Set(scopeTypeArray)

    const scopeMappings = [
        {
            key: 'building',
            label: 'Building Applicant Form',
            condition: [...scopeSet].some((item) => item.startsWith('Building-')),
        },
        {
            key: 'electrical',
            label: 'Electrical Applicant Form',
            condition: [...scopeSet].some((item) => item.startsWith('Electrical-')),
        },
        {
            key: 'plumbing',
            label: 'Plumbing Applicant Form',
            condition: [...scopeSet].some((item) => item.startsWith('Plumbing-')),
        },
        {
            key: 'mechanical',
            label: 'Mechanical Applicant Form',
            condition: [...scopeSet].some((item) => item.startsWith('Mechanical-')),
        },
        {
            key: 'electronics',
            label: 'Electronics Applicant Form',
            condition: [...scopeSet].some((item) => item.startsWith('Electronics-')),
        },
        {
            key: 'fencing',
            label: 'Fencing Applicant Form',
            condition: [...scopeSet].some((item) => item.startsWith('Fencing-')),
        },
        {
            key: 'excavation',
            label: 'Excavation Applicant Form',
            condition: [...scopeSet].some((item) => item.startsWith('Excavation-')),
        },
    ]

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Only Applicant Form for every Services</h1>

            {/* Display List */}
            <div className="flex flex-col gap-2">
                {scopeMappings
                    .filter((scope) => scope.condition)
                    .map(({ key, label }) => {
                        const isUploaded = documents.includes(key)

                        return (
                            <div
                                key={key}
                                className="flex justify-between items-center border p-2 rounded"
                            >
                                <input
                                    type="file"
                                    id={`file-${key}`}
                                    style={{ display: 'none' }}
                                    onClick={(e) => e.stopPropagation()}
                                    onChange={(e) => handleFileChange(e, key)}
                                />

                                <span className="font-semibold">
                                    {label}
                                    {isUploaded && (
                                        <span className="ml-2 text-green-600 text-sm">
                                            Scanned
                                        </span>
                                    )}
                                </span>

                                {!isUploaded && (
                                <button
                                    onClick={() => document.getElementById(`file-${key}`)?.click()}
                                    className="bg-orange-700 text-white px-4 py-1 rounded hover:opacity-75"
                                >
                                    Scan
                                </button>
                                )}
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
