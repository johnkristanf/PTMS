import { ReleaseDateData } from "../../types/application";

import '../../assets/scrollStyle.css'
import { useState } from "react";
import { ReleaseDateModal } from "../modal/staff/ReleaseModal";
import { useFetchDisapprovedByStatus } from "../../hook/useFetchDisapprovedByStatus";

interface DisapprovedTableFC {
    searchTerm: string,
    selectedMonth: string,
    isReleaser?: boolean
}

export function DisapprovedTable({searchTerm, selectedMonth, isReleaser}: DisapprovedTableFC){

    const [openReleaseModal, setOpenReleaseModal] = useState<boolean>(false);
    const [releaseDateData, setReleaseDateData] = useState<ReleaseDateData>(); 
    


    const onOpenReleaseModal = (e: React.MouseEvent, applicationId: number, email: string, user_id: number) => {
        e.stopPropagation();

        setOpenReleaseModal(true);
        setReleaseDateData({
            application_id: applicationId,
            email,
            user_id,
            status: "Disapproved"

        }); 
    }

    
    const { disapprovedApplication } = useFetchDisapprovedByStatus(isReleaser, searchTerm, selectedMonth);
    
    console.log("disapprovedApplication: ", disapprovedApplication);
    
    
    return(

        <>
            {openReleaseModal && isReleaser && <ReleaseDateModal setOpenReleaseModal={setOpenReleaseModal} releaseDateData={releaseDateData} />}

            <div className="flex flex-col bg-orange-100 w-full h-[70%] rounded-md p-2">

                <div className="overflow-x-auto custom-scrollbar">
                    <div className="inline-block min-w-full py-2 ">

                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium border-neutral-500">
                            <tr>
                                <th scope="col" className="px-6 py-4">Name</th>
                                <th scope="col" className="px-6 py-4">Email</th>
                                <th scope="col" className="px-6 py-4">Address</th>
                                <th scope="col" className="px-6 py-4">Permit Type</th>

                                {
                                    isReleaser && (
                                        <th scope="col" className="px-6 py-4">Actions</th>
                                    )
                                }
                                
                            </tr>
                        </thead>

                        <tbody>
                            {disapprovedApplication.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="text-center py-4 text-gray-900 text-xl font-semibold pt-5">
                                        No application available
                                    </td>
                                </tr>
                            ) : (
                                disapprovedApplication.map((item) => (
                                <tr
                                    key={item.application_id}
                                    className="border-b border-neutral-500 transition duration-300 ease-in-out"
                                >
                                    <td className="whitespace-nowrap px-3 py-2 font-medium">
                                    {item.firstname} {item.middleInitial} {item.lastName}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-2 font-medium">{item.email}</td>
                                    <td className="whitespace-normal px-3 py-2 break-words">
                                    {item.addressNo} {item.barangay} {item.street} {item.municipality}{" "}
                                    {item.zipCode}
                                    </td>
                                    <td className="whitespace-nowrap pl-6 py-4">{item.permit_type}</td>
                     
                                    {
                                        isReleaser && item.release_date == "" && (

                                            <td className="whitespace-nowrap pl-4 py-4">
                                                <button
                                                    onClick={(e) =>
                                                        onOpenReleaseModal(e, item.application_id, item.email, item.user_id)
                                                    }
                                                    className="bg-orange-500 text-white font-bold p-3 rounded-md hover:opacity-75"
                                                >
                                                Release
                                                </button>
                                            </td>
                                        )
                                    }
                                    
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