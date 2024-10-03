import { useRef, useState } from "react";
import { ReleaseDateModal } from "../modal/staff/ReleaseModal";
import { ApplicationFileModal } from "../modal/staff/ApplicationFilesModal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FetchApprovedApplications } from "../../http/get/application";
import { Application } from "../../types/application";
import Swal from "sweetalert2";
import { UploadDocument } from "../../http/post/document";

import '../../assets/scrollStyle.css'

interface ApproveTableProps {
    staffRole: string;
    ScannerReport?: boolean;
}

export function ApproveTable({ staffRole, ScannerReport }: ApproveTableProps) {
    const [openReleaseModal, setOpenReleaseModal] = useState<boolean>(false);
    const [openFile, setOpenFile] = useState<boolean>(false);
    const [selectedApplicationCode, setSelectedApplicationCode] = useState<string>(); 
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

    // this just static data apply the real search algorithm next time
    const searchTerm = "";

    const { data: response } = useQuery({
        queryKey: ["approved_applications", searchTerm],
        queryFn: async () => {
            const data = await FetchApprovedApplications(searchTerm);
            return data;
        },
    });

    const mutation = useMutation({
        mutationFn: UploadDocument,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["approved_applications"] });

            Swal.fire({
                position: "top-end",
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
            console.error("Signup error:", error);
        },
    });


    const handleDocumentUpload = async (file : File, applicationCode: string) => {

        try {
            const formData = new FormData();
            formData.append("document", file);
            formData.append("application_code", applicationCode);

            mutation.mutate(formData)
            
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


    const approvedApplication: Application[] = response?.data || [];

    return (
        <>
            {openReleaseModal && staffRole === 'releaser' && <ReleaseDateModal setOpenReleaseModal={setOpenReleaseModal} />}

            {openFile && staffRole === 'scanner'&&  <ApplicationFileModal setOpenFile={setOpenFile} selectedApplicationCode={selectedApplicationCode} />}

            <div className="flex flex-col bg-orange-100 w-full h-[70%] rounded-md ">
                <div>
                    <div className="inline-block min-w-full py-2 ">
                        <div className="overflow-hidden overflow-y-auto h-[400px] p-5 custom-scrollbar">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Application Code</th>
                                        <th scope="col" className="px-6 py-4">Name</th>
                                        <th scope="col" className="px-6 py-4">Address</th>
                                        <th scope="col" className="px-6 py-4">Permit Type</th>
                                        {staffRole === 'releaser' && (
                                            <th scope="col" className="px-6 py-4">Release Date</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        approvedApplication.map((item) => (
                                            <tr
                                                key={item.application_id}
                                                onClick={(e) => handleRowClick(e, item.applicationCode)}
                                                className={`border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-600 cursor-pointer`}
                                            >
                                                <td className="whitespace-nowrap px-3 py-2 font-medium">{item.applicationCode}</td>
                                                <td className="whitespace-nowrap px-3 py-2 font-medium">{item.firstname} {item.middleInitial} {item.lastName}</td>
                                                <td className="whitespace-normal px-3 py-2 break-words">
                                                    {item.addressNo} {item.barangay} {item.street}{" "}
                                                    {item.municipality} {item.zipCode}
                                                </td>
        
                                                <td className="whitespace-nowrap pl-6 py-4">{item.permit_type}</td>
        
                                                {/* RELEASER CAPABILITIES */}
                                                {staffRole === 'releaser' && (
                                                    <td className="whitespace-nowrap pl-6 py-4">N/A</td>
                                                )}


                                                {/* SCANNER CAPABILITIES */}

                                                {staffRole === 'scanner' && !ScannerReport && (
                                                    <td className="whitespace-nowrap py-4">
                                                        <div className="flex gap-3">

                                                            <input
                                                                type="file"
                                                                ref={fileInputRef}
                                                                style={{ display: "none" }}
                                                                onClick={handleButtonClick}
                                                                onChange={handleFileChange}
                                                            />

                                                            <button 
                                                                onClick={(e) => { triggerFileInput(e, item.applicationCode) }} 
                                                                className="bg-orange-500 text-white font-bold p-3 rounded-md hover:opacity-75"
                                                            >
                                                                Upload
                                                            </button>


                                                            <button 
                                                                onClick={(e) => {
                                                                    handleButtonClick(e);
                                                                    console.log("Submit clicked");
                                                                }} 
                                                                className="bg-green-600 text-white font-bold p-3 rounded-md hover:opacity-75"
                                                            >
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </td>
                                                )}


                                                {/* RELEASER CAPABILITIES */}
                                                {staffRole === 'releaser' && (
                                                    <td className="whitespace-nowrap py-4">
                                                        <button
                                                            onClick={(e) => {
                                                                handleButtonClick(e);
                                                                setOpenReleaseModal(true);
                                                            }}
                                                            className="bg-orange-500 text-white font-bold p-3 rounded-md hover:opacity-75"
                                                        >
                                                            Release
                                                        </button>
                                                    </td>
                                                )}
                                            </tr>
                                        ))
                                    }
                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
