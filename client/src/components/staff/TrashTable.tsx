import { useQuery } from "@tanstack/react-query";
import { dropDownSelectType } from "../../types/dropdown";
import { Application } from "../../types/application";
import { FetchTrashApplication } from "../../http/get/application";
import { useState } from "react";
import { ApplicationFileModal } from "../modal/staff/ApplicationFilesModal";

export function TrashTable({ searchTerm, selectedMonth }: dropDownSelectType){

    const [openFile, setOpenFile] = useState<boolean>(false);
    const [selectedApplicationCode, setSelectedApplicationCode] = useState<string>();

    const { data: response } = useQuery({
        queryKey: ["trash_applications", searchTerm, selectedMonth],
        queryFn: async () => {
            const data = await FetchTrashApplication(searchTerm, selectedMonth);
            return data;
        },
    });

    const handleViewDocuments = (application_code: string) => {
        setOpenFile(true);
        setSelectedApplicationCode(application_code)
    };

    const trashApplications: Application[] = response?.data || [];

    console.log("trashApplications: ", trashApplications);

    
    return(

        <>
            {
                openFile && (
                    <ApplicationFileModal 
                        setOpenFile={setOpenFile} 
                        selectedApplicationCode={selectedApplicationCode} 
                    />
            )}

            <div className="flex flex-col bg-orange-100 w-full h-[70%] rounded-md">

                <div className="overflow-x-auto p-5">
                    <div className="inline-block min-w-full py-2 ">

                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" className="px-6 py-4">Name</th>
                                <th scope="col" className="px-6 py-4">Email</th>
                                <th scope="col" className="px-6 py-4">Address</th>
                                <th scope="col" className="px-3 py-4">Permit</th>
                                <th scope="col" className="px-3 py-4">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                                        {trashApplications.length === 0 ? (
                                            <tr>
                                                <td colSpan={4} className="px-6 py-4 text-center">
                                                    No results found
                                                </td>
                                            </tr>

                                        ) : (
                                            trashApplications.map((data) => (
                                                <tr
                                                    key={data.application_id}
                                                    className="font-semibold border-b"
                                                >
                                                    <td className="whitespace-nowrap px-2 py-3">
                                                        {data.firstname} {data.middleInitial} {data.lastName}
                                                    </td>

                                                    <td className="whitespace-nowrap px-2 py-3">
                                                        {data.email} 
                                                    </td>

                                                    <td className="whitespace-normal break-words px-2 py-3"> {/* Updated Address Column */}
                                                        {data.addressNo} {data.barangay} {data.street}{" "}
                                                        {data.municipality} {data.zipCode}
                                                    </td>
                                                    
                                                    <td className="whitespace-nowrap px-2 py-3">
                                                        {data.permit_type}
                                                    </td>

                                                    <td className="whitespace-nowrap px-2 py-3">
                                                        <button 
                                                            className="bg-orange-400 rounded-md p-3 text-white hover:opacity-75"
                                                            onClick={() => handleViewDocuments(data.applicationCode)}

                                                        >
                                                            View Documents
                                                        </button>
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