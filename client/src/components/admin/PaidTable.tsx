import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import '../../assets/scrollStyle.css'

import { FetchPaidApplications } from "../../http/get/application";
import { Application, DisapprovalData } from "../../types/application";
import ArchitecturalRequirements from "../pdfs/requirements/ArchitecturalRequirements";
import CivilRequirements from "../pdfs/requirements/CivilRequirements";
import ElectricalRequirements from "../pdfs/requirements/ElectricalRequirements";
import Swal from "sweetalert2";
import { UpdateApplicationApprovedAdmin } from "../../http/put/application";
import { classNames } from "../../helpers/classNames";
import { DisapprovedModal } from "../modal/admin/DisapprovedModal";

export function PaidTable({ searchTerm, adminType }: {
    searchTerm: string,
    adminType?: string
}){

    const queryClient = useQueryClient();

    const [openDisapprovedModal, setOpenDisapprovedModal] = useState<boolean>(false);
    const [requirementsModal, setRequirementsModal] = useState<boolean | undefined>(false);
    const [applicationID, setApplicationID] = useState<number>();
    const [allRequirementsChecked, setAllRequirementsChecked] = useState<boolean>(false); 

    const [disapprovalData, setDisapprovalData] = useState<DisapprovalData>();

    const { data: response } = useQuery({
        queryKey: ["paid_applications", searchTerm],
        queryFn: async () => {
            const data = await FetchPaidApplications(searchTerm);
            return data;
        },
    });

    const paidApplication: Application[] = response?.data || [];

    console.log("paidApplication: ", paidApplication)
    console.log("allRequirementsChecked: ", allRequirementsChecked)

    const openRequirements = (applicationID: number) => {
        setRequirementsModal(true)
        setApplicationID(applicationID)
    }

    const mutation = useMutation({
        mutationFn: UpdateApplicationApprovedAdmin,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["paid_applications"] });

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Application Approved",
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


    const onApprove = (application_id: number, admin_approved: string) => {
        const admins = admin_approved.split(',').length

        if(admins == 2){
            Swal.fire({
                title: "Approve this Application?",
                text: "You are the last admin to approve this application. Applicant can now procceed to the next step",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#ff981a",
                cancelButtonColor: "#000000",
                confirmButtonText: "Yes",
            }).then((result) => {
                if (result.isConfirmed) {
    
                    if(adminType){
                        const data = {
                            application_id,
                            admin_approved: adminType,
                        };
        
                        mutation.mutate(data);
                    }
                    
                }
            });

        } else {
            
            Swal.fire({
                title: "Approve this Application?",
                text: "This changes cannot be revert",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#ff981a",
                cancelButtonColor: "#000000",
                confirmButtonText: "Yes",
            }).then((result) => {
                if (result.isConfirmed) {
    
                    if(adminType){
                        const data = {
                            application_id,
                            admin_approved: adminType,
                        };
        
                        mutation.mutate(data);
                    }
                    
                }
            });
        }

        
    }


    const onOpenDisapprovedModal = (data: DisapprovalData) => {
        setDisapprovalData(data)
        setOpenDisapprovedModal(true);
    }
    

    return(
        <>

            {
                (adminType == "architectural" && requirementsModal && applicationID) && (
                    <ArchitecturalRequirements 
                        applicationID={applicationID} 
                        setRequirementsModal={setRequirementsModal} 
                        setAllRequirementsChecked={setAllRequirementsChecked}
                        allRequirementsChecked={allRequirementsChecked}
                    />
                )
            }

            {
                (adminType == "civil" && requirementsModal && applicationID) && (
                    <CivilRequirements 
                        applicationID={applicationID} 
                        setRequirementsModal={setRequirementsModal} 
                        setAllRequirementsChecked={setAllRequirementsChecked}
                        allRequirementsChecked={allRequirementsChecked}

                    />
                )
            }   


            {
                (adminType == "electrical" && requirementsModal && applicationID) && (
                    <ElectricalRequirements 
                        applicationID={applicationID} 
                        setRequirementsModal={setRequirementsModal} 
                        setAllRequirementsChecked={setAllRequirementsChecked}
                        allRequirementsChecked={allRequirementsChecked}

                    />
                )
            }


            {
                openDisapprovedModal && (
                    <DisapprovedModal 
                        disapprovalData={disapprovalData}
                        setOpenDisapprovedModal={setOpenDisapprovedModal}
                    />
                )
            }

            
            
            <div className="flex flex-col bg-orange-100 w-full h-[70%] rounded-md p-2 mt-3">
                <div className="overflow-y-auto overflow-hidden w-full custom-scrollbar-extrasmall">
                    <div className="inline-block min-w-full py-2">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-3 py-2">Application Code</th>
                                        <th scope="col" className="px-3 py-2">Name</th>
                                        <th scope="col" className="px-3 py-2">Address</th>
                                        <th scope="col" className="px-3 py-2">Admins Approved</th>
                                        <th scope="col" className="px-3 py-2">Permit Type</th>
                                        <th scope="col" className="px-3 py-2">Evaluate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paidApplication.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} className="text-center py-4 text-gray-900 text-xl font-semibold pt-5">
                                                No application available
                                            </td>
                                        </tr>
                                    ) : (
                                        paidApplication.map((item) => (
                                            <tr key={item.application_id} className="border-b">
                                                <td className="whitespace-nowrap px-3 py-2 font-medium">{item.applicationCode}</td>
                                                <td className="whitespace-nowrap px-3 py-2 font-medium">
                                                    {item.firstname} {item.middleInitial} {item.lastName}
                                                </td>
                                                <td className="whitespace-normal px-3 py-2 break-words">
                                                    {item.addressNo} {item.barangay} {item.street} {item.municipality} {item.zipCode}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-2">
                                                    {item.admin_approved !== "" ? item.admin_approved : "0"}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-2">{item.permit_type}</td>
                                                <td className="whitespace-nowrap py-4">
                                                    <div className="flex gap-2">
                                                        {adminType && !item.admin_approved.split(",").includes(adminType) && (
                                                            <button
                                                                onClick={() => openRequirements(item.application_id)}
                                                                className="bg-orange-400 rounded-md p-3 text-white font-bold hover:opacity-75"
                                                            >
                                                                Requirements
                                                            </button>
                                                        )}

                                                        {adminType && item.admin_approved.split(",").includes(adminType) ? (
                                                            <h1 className="text-green-500 font-bold text-md">Application Approved</h1>
                                                        ) : (
                                                            <button
                                                                onClick={() => onApprove(item.application_id, item.admin_approved)}
                                                                className={classNames(
                                                                    allRequirementsChecked ? "bg-green-700" : "bg-gray-400 hover:cursor-not-allowed",
                                                                    "text-white font-bold p-3 rounded-md hover:opacity-75"
                                                                )}
                                                                disabled={!allRequirementsChecked}
                                                            >
                                                                Approve
                                                            </button>
                                                        )}

                                                        {adminType && !item.admin_approved.split(",").includes(adminType) && (
                                                            <button
                                                                onClick={() =>
                                                                    onOpenDisapprovedModal({
                                                                        application_id: item.application_id,
                                                                        firstname: item.firstname,
                                                                        middleInitial: item.middleInitial,
                                                                        lastName: item.lastName,
                                                                        email: item.email,
                                                                        user_id: item.user_id,
                                                                    })
                                                                }
                                                                className="bg-red-600 text-white font-bold p-3 rounded-md hover:opacity-75"
                                                            >
                                                                Disapprove
                                                            </button>
                                                        )}
                                                    </div>
                                                </td>
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