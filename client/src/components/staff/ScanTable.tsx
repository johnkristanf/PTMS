import { useState } from "react"
import { ApplicantInformationModalStaff } from "../modal/staff/ApplicantInformationModalStaff";
import { useQuery } from "@tanstack/react-query";
import { FetchPendingApplicantInfo } from "../../http/get/application";
import { Application } from "../../types/application";



export function ScannerTable({searchTerm}: {
    searchTerm: string
}){


    const [informationModal, setInformationModal] = useState<boolean>();
    const [applicantInfo, setApplicantInfo] = useState<Application>()


    const { data: response, isLoading } = useQuery({
        queryKey: ["pending_applications", searchTerm],
        queryFn: async () => {
            const data = await FetchPendingApplicantInfo(searchTerm)
            return data
        },
    });

    const pendingApplications: Application[] = response?.data

    const openApplicationInformationModal = (data: Application) => {
        setApplicantInfo(data)
        setInformationModal(true)
    }

    

    if(isLoading) return <div className="text-white font-bold text-xl">Fetching Pending Applications...</div>


    return(

        <>

            {
                (applicantInfo && informationModal) && <ApplicantInformationModalStaff setInformationModal={setInformationModal} applicantInfo={applicantInfo} />
            }


            <div className="flex flex-col bg-white w-full h-[70%] rounded-md">

                <div className="overflow-y-auto overflow-x-hidden sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">

                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                            <th scope="col" className="px-3 py-3">Name</th>
                            <th scope="col" className="px-3 py-3">Address</th>
                            <th scope="col" className="px-3 py-3">Permit Type</th>
                            <th scope="col" className="px-3 py-3">Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                        {pendingApplications.length === 0 ? (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-4 text-center">
                                                No results found
                                            </td>
                                        </tr>
                                    ) : (
                                        pendingApplications.map((data) => (
                                            <tr
                                                key={data.application_id}
                                                className=" font-bold border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                <td className="whitespace-nowrap px-2 py-2">{data.firstname} {data.middleInitial} {data.lastName} </td>
                                                <td className="whitespace-nowrap px-2 py-2">{data.addressNo} {data.barangay} {data.street} {data.municipality} {data.zipCode}</td>
                                                <td className="whitespace-nowrap px-2 py-2">{data.permit_type}</td>

                                                <td className="whitespace-nowrap px-2 py-2">
                                                    <div className="flex gap-5">
                                                        <button
                                                            onClick={() => openApplicationInformationModal(data)}
                                                            className="bg-orange-500 rounded-md p-3 text-white font-bold hover:opacity-75"
                                                        >
                                                            Information
                                                        </button>

                                                      
                                                    </div>

                                                    <div className="flex gap-5">
                                                        <button
                                                            className="bg-green-800 rounded-md p-3 text-white font-bold hover:opacity-75"
                                                        >
                                                            Scan
                                                        </button>
                                                      
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