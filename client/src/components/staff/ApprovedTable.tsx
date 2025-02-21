import React, { useRef, useState } from "react";
import { ReleaseDateModal } from "../modal/staff/ReleaseModal";
import { ApplicationFileModal } from "../modal/staff/ApplicationFilesModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ReleaseDateData } from "../../types/application";
import Swal from "sweetalert2";
import { UploadDocument } from "../../http/post/document";

import '../../assets/scrollStyle.css'
import { useFetchApprovedByStatus } from "../../hook/useFetchApprovedByStatus";
import { SubmitToReleaser } from "../../http/put/application";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faFileExport, faWarehouse } from "@fortawesome/free-solid-svg-icons";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

interface ApproveTableProps {
    searchTerm: string,
    selectedMonth: string,
    staffRole: string;
    ReleaserReport?: boolean;
}

export function ApproveTable({ searchTerm, selectedMonth, staffRole, ReleaserReport }: ApproveTableProps) {

    const [openReleaseModal, setOpenReleaseModal] = useState<boolean>(false);
    const [openFile, setOpenFile] = useState<boolean>(false);

    const [selectedApplicationCode, setSelectedApplicationCode] = useState<string>(); 
    const [releaseDateData, setReleaseDateData] = useState<ReleaseDateData>(); 
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const queryClient = useQueryClient();


    const handleRowClick = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, application_code: string) => {
        if ((e.target as HTMLElement).tagName !== "BUTTON" && (e.target as HTMLElement).tagName !== "INPUT") {
            setOpenFile(true);
            setSelectedApplicationCode(application_code)
        }
    };


    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const triggerFileInput = (e: React.MouseEvent, applicationId: string) => {
        e.stopPropagation(); 
        setSelectedApplicationCode(applicationId); 
        fileInputRef.current?.click(); 
    };


    const onOpenReleaseModal = (e: React.MouseEvent, applicationId: number, email: string, user_id: number) => {
        handleButtonClick(e);
        setOpenReleaseModal(true);
        setReleaseDateData({
            application_id: applicationId,
            email,
            user_id,
            status: "Approved"
        }); 
    }

   

    const uploadDocumentMutation = useMutation({
        mutationFn: UploadDocument,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["approved_applications"] });

            Swal.fire({
                icon: "success",
                title: "File Uploaded Successfully",
                showConfirmButton: false,
                timer: 1500,
            });
        },

        onMutate: () => {
            Swal.fire({
                title: 'Please wait...',
                text: 'Your request is being processed',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            });
        },

        onError: (error: unknown) => {
            console.error("Document Upload Error:", error);
        },
    });


    const submitToReleaserMutation = useMutation({
        mutationFn: SubmitToReleaser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["approved_applications"] });

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Application Submitted to Releaser",
                showConfirmButton: false,
                timer: 1500,
            });
        },

        onMutate: () => {
            Swal.fire({
                title: 'Please wait...',
                text: 'Your request is being processed',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            });
        },

        onError: (error: unknown) => {
            console.error("Submit to releaser error:", error);
        },
    });


    const handleDocumentUpload = async (file : File, applicationCode: string) => {

        try {
            const formData = new FormData();
            formData.append("document", file);
            formData.append("application_code", applicationCode);

            uploadDocumentMutation.mutate(formData)
            
        } catch (error) {
            console.error("File upload failed", error);
            alert("File upload failed");
        }
    }


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        console.log("filename: ", file?.name);
        
        if (file && selectedApplicationCode) {
            handleDocumentUpload(file, selectedApplicationCode); 
        }
    };

    const handleSubmitToReleaser = (application_id: number) => {
        submitToReleaserMutation.mutate(application_id.toString());
    }


    const { approvedApplication } = useFetchApprovedByStatus(staffRole, searchTerm, selectedMonth);
    

    return (
        <>
            {openReleaseModal && staffRole === 'releaser' && <ReleaseDateModal setOpenReleaseModal={setOpenReleaseModal} releaseDateData={releaseDateData} />}

            {openFile && staffRole === 'scanner'&&  <ApplicationFileModal setOpenFile={setOpenFile} selectedApplicationCode={selectedApplicationCode} />}

            <div className="flex flex-col bg-orange-100 w-full h-[70%] rounded-md ">
                <div>
                    <div className="inline-block min-w-full py-2 ">
                        <div className="overflow-hidden overflow-y-auto h-[400px] p-5 custom-scrollbar">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Application Code</th>
                                        <th scope="col" className="px-6 py-4">Name</th>
                                        <th scope="col" className="px-6 py-4">Address</th>
                                        <th scope="col" className="px-6 py-4">Permit Type</th>

                                        {staffRole === 'releaser' && (
                                            <th scope="col" className="px-6 py-4">Action</th>
                                        )}

                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {approvedApplication.length === 0 ? (
                                        <tr>
                                            <td colSpan={staffRole === 'releaser' ? 6 : 5} className="text-center py-4 text-gray-900 text-xl font-semibold pt-5">
                                                No application available
                                            </td>
                                        </tr>
                                    ) : (
                                        approvedApplication.map((item) => (
                                        <tr
                                            key={item.application_id}
                                            onClick={(e) => handleRowClick(e, item.applicationCode)}
                                            className={`border-b border-neutral-500 transition duration-300 ease-in-out  cursor-pointer`}
                                        >
                                            <td className="whitespace-nowrap px-3 py-2 font-medium">{item.applicationCode}</td>
                                            <td className="whitespace-nowrap px-3 py-2 font-medium">
                                            {item.firstname} {item.middleInitial} {item.lastName}
                                            </td>
                                            <td className="whitespace-normal px-3 py-2 break-words">
                                            {item.addressNo} {item.barangay} {item.street} {item.municipality} {item.zipCode}
                                            </td>
                                            <td className="whitespace-nowrap pl-6 py-4">{item.permit_type}</td>

                                            

                                            {/* SCANNER CAPABILITIES */}

                                            {staffRole === 'scanner' && !ReleaserReport && (
                                                <td className="whitespace-nowrap py-4">
                                                    <div className="flex gap-3">
                                                    <input
                                                        type="file"
                                                        ref={fileInputRef}
                                                        style={{ display: "none" }}
                                                        onClick={handleButtonClick}
                                                        onChange={handleFileChange}
                                                    />

                                                        <HoverCard>
                                                            <HoverCardTrigger>
                                                                <button
                                                                    onClick={(e) => {
                                                                    triggerFileInput(e, item.applicationCode);
                                                                    }}
                                                                    className="bg-orange-700 text-white font-bold p-3 rounded-md hover:opacity-75"
                                                                >
                                                                    <FontAwesomeIcon icon={faWarehouse}/>
                                                                </button>
                                                            </HoverCardTrigger>
                                                        
                                                            <HoverCardContent>
                                                                Scan/Store Documents Hover
                                                            </HoverCardContent>
                                                        
                                                        </HoverCard> 

                                                        <HoverCard>
                                                            <HoverCardTrigger>
                                                                <button
                                                                    onClick={(e) => {
                                                                        handleButtonClick(e);
                                                                        handleSubmitToReleaser(item.application_id)
                                                                        console.log("Submit clicked");
                                                                    }}
                                                                    className="bg-green-600 text-white font-bold p-3 rounded-md hover:opacity-75"
                                                                >
                                                                    <FontAwesomeIcon icon={faCircleCheck}/>
                                                                </button>
                                                            </HoverCardTrigger>
                                                        
                                                            <HoverCardContent>
                                                                Submit Documents Hover
                                                            </HoverCardContent>
                                                        
                                                        </HoverCard> 

                                                   

                                                    
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
                                                                    onOpenReleaseModal(e, item.application_id, item.email, item.user_id)
                                                                }
                                                                className="bg-orange-700 text-white font-bold p-3 rounded-md hover:opacity-75"
                                                                >
                                                                    <FontAwesomeIcon icon={faFileExport}/>
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
    );
}
