import React, { useState } from 'react'
import { ReleaseDateModal } from '../modal/staff/ReleaseModal'
import { ApplicationFileModal } from '../modal/staff/ApplicationFilesModal'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ReleaseDateData } from '../../types/application'
import Swal from 'sweetalert2'

import '../../assets/scrollStyle.css'
import { useFetchApprovedByStatus } from '../../hook/useFetchApprovedByStatus'
import { SubmitToReleaser } from '../../http/put/application'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faFile, faFileExport, faWarehouse } from '@fortawesome/free-solid-svg-icons'

import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from '@/components/ui/dialog'

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { DocumentStepsComponent } from '../modal/staff/DocumentSteps'
import { classNames } from '@/helpers/classNames'

interface ApproveTableProps {
    searchTerm: string
    selectedMonth: string
    staffRole: string
    ReleaserReport?: boolean
}

export function ApproveTable({
    searchTerm,
    selectedMonth,
    staffRole,
    ReleaserReport,
}: ApproveTableProps) {
    const [openReleaseModal, setOpenReleaseModal] = useState<boolean>(false)
    const [openFile, setOpenFile] = useState<boolean>(false)

    const [openStepsDialogAppCode, setOpenStepsDialogAppCode] = useState<string | null>(null)

    const [selectedApplicationCode, setSelectedApplicationCode] = useState<string>()
    const [releaseDateData, setReleaseDateData] = useState<ReleaseDateData>()

    const queryClient = useQueryClient()

    const openFilesModal = (application_code: string) => {
        // If the click target is inside a button, don't trigger the file modal.
        setOpenFile(true)
        setSelectedApplicationCode(application_code)
    }

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    // const triggerFileInput = (e: React.MouseEvent, applicationId: string) => {
    //     fileInputRef.current?.click();
    // };

    const triggerOpenDocumentSteps = (e: React.MouseEvent, applicationId: string) => {
        e.stopPropagation()
        setSelectedApplicationCode(applicationId)
    }

    const onOpenReleaseModal = (
        e: React.MouseEvent,
        applicationId: number,
        email: string,
        user_id: number
    ) => {
        handleButtonClick(e)
        setOpenReleaseModal(true)
        setReleaseDateData({
            application_id: applicationId,
            email,
            user_id,
            status: 'Approved',
        })
    }

    const submitToReleaserMutation = useMutation({
        mutationFn: SubmitToReleaser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['approved_applications'] })

            Swal.fire({
                icon: 'success',
                title: 'Application Submitted to Releaser',
                showConfirmButton: false,
                timer: 1500,
            })
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
            console.error('Submit to releaser error:', error)
        },
    })

    const handleSubmitToReleaser = (application_id: number) => {
        submitToReleaserMutation.mutate(application_id.toString())
    }

    const { approvedApplication } = useFetchApprovedByStatus(staffRole, searchTerm, selectedMonth)

    return (
        <>
            {openReleaseModal && staffRole === 'releaser' && (
                <ReleaseDateModal
                    setOpenReleaseModal={setOpenReleaseModal}
                    releaseDateData={releaseDateData}
                />
            )}

            {openFile && staffRole === 'scanner' && (
                <ApplicationFileModal
                    setOpenFile={setOpenFile}
                    selectedApplicationCode={selectedApplicationCode}
                />
            )}

            <div className="flex flex-col bg-orange-100 w-full h-[70%] rounded-md ">
                <div>
                    <div className="inline-block min-w-full py-2 ">
                        <div className="overflow-hidden overflow-y-auto h-[400px] p-5 custom-scrollbar">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">
                                            Application Code
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Address
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Permit Type
                                        </th>

                                        {staffRole === 'releaser' && (
                                            <th scope="col" className="px-6 py-4">
                                                Action
                                            </th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {approvedApplication.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan={staffRole === 'releaser' ? 6 : 5}
                                                className="text-center py-4 text-gray-900 text-xl font-semibold pt-5"
                                            >
                                                No application available
                                            </td>
                                        </tr>
                                    ) : (
                                        approvedApplication.map((item) => (
                                            <tr
                                                key={item.application_id}
                                                className={`border-b border-neutral-500 transition duration-300 ease-in-out  cursor-pointer`}
                                            >
                                                <td className="whitespace-nowrap px-3 py-2 font-medium">
                                                    {item.applicationCode}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-2 font-medium">
                                                    {item.firstname} {item.middleInitial}{' '}
                                                    {item.lastName}
                                                </td>
                                                <td className="whitespace-normal px-3 py-2 break-words">
                                                    {item.addressNo} {item.barangay} {item.street}{' '}
                                                    {item.municipality} {item.zipCode}
                                                </td>
                                                <td className="whitespace-nowrap pl-6 py-4">
                                                    {item.permit_type}
                                                </td>

                                                {/* SCANNER CAPABILITIES */}

                                                {staffRole === 'scanner' && !ReleaserReport && (
                                                    <td className="whitespace-nowrap py-4">
                                                        <div className="flex gap-3">
                                                            {/* SCAN DOCUMENT BUTTON */}

                                                            <button
                                                                onClick={() =>
                                                                    openFilesModal(
                                                                        item.applicationCode
                                                                    )
                                                                }
                                                                className="bg-white text-black font-bold p-3 rounded-md hover:opacity-75"
                                                            >
                                                                <FontAwesomeIcon icon={faFile} />
                                                            </button>

                                                            <Dialog
                                                                open={
                                                                    openStepsDialogAppCode ===
                                                                    item.applicationCode
                                                                }
                                                                onOpenChange={(open) =>
                                                                    setOpenStepsDialogAppCode(
                                                                        open
                                                                            ? item.applicationCode
                                                                            : null
                                                                    )
                                                                }
                                                            >
                                                                <DialogTrigger
                                                                    onClick={(e) => {
                                                                        triggerOpenDocumentSteps(
                                                                            e,
                                                                            item.applicationCode
                                                                        )
                                                                    }}
                                                                    className="bg-orange-700 text-white font-bold p-3 rounded-md hover:opacity-75"
                                                                    asChild
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={faWarehouse}
                                                                    />
                                                                </DialogTrigger>

                                                                <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />

                                                                <DialogContent className="mt-8 overflow-y-auto max-h-[80vh]">
                                                                    <DocumentStepsComponent
                                                                        applicationData={item}
                                                                        first_step_req_documents={
                                                                            item.first_step_req_documents ||
                                                                            []
                                                                        }
                                                                        applicant_form_documents={
                                                                            item.applicant_form_documents ||
                                                                            []
                                                                        }
                                                                        completion_form_documents={
                                                                            item.completion_form_documents ||
                                                                            []
                                                                        }
                                                                        additional_form_documents={
                                                                            item.additional_form_documents ||
                                                                            []
                                                                        }
                                                                        setOpenStepsDialogAppCode={
                                                                            setOpenStepsDialogAppCode
                                                                        }
                                                                    />
                                                                </DialogContent>
                                                            </Dialog>

                                                            {/* SUBMIT DOCUMENT BUTTON */}
                                                            {/* <HoverCard>
                                                            <HoverCardTrigger> */}
                                                            <button
                                                                onClick={(e) => {
                                                                    handleButtonClick(e)
                                                                    handleSubmitToReleaser(
                                                                        item.application_id
                                                                    )
                                                                    console.log('Submit clicked')
                                                                }}
                                                                disabled={!item.is_finish_scanning}
                                                                className={classNames(
                                                                    !item.is_finish_scanning
                                                                        ? 'bg-gray-500 cursor-not-allowed'
                                                                        : 'bg-green-600',
                                                                    'text-white font-bold p-3 rounded-md hover:opacity-75'
                                                                )}
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={faCircleCheck}
                                                                />
                                                            </button>
                                                            {/* </HoverCardTrigger>
                                                        
                                                            <HoverCardContent>
                                                                Submit Documents Hover
                                                            </HoverCardContent>
                                                        
                                                        </HoverCard>  */}
                                                        </div>
                                                    </td>
                                                )}

                                                {/* RELEASER CAPABILITIES */}
                                                {staffRole === 'releaser' && (
                                                    <td className="whitespace-nowrap pl-4 py-4">
                                                        <HoverCard>
                                                            <HoverCardTrigger>
                                                                <button
                                                                    onClick={(e) =>
                                                                        onOpenReleaseModal(
                                                                            e,
                                                                            item.application_id,
                                                                            item.email,
                                                                            item.user_id
                                                                        )
                                                                    }
                                                                    className="bg-orange-700 text-white font-bold p-3 rounded-md hover:opacity-75"
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={faFileExport}
                                                                    />
                                                                </button>
                                                            </HoverCardTrigger>

                                                            <HoverCardContent>
                                                                Release Approved Documents Hover
                                                            </HoverCardContent>
                                                        </HoverCard>
                                                    </td>
                                                )}
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
