import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import '../../assets/scrollStyle.css'

import { FetchPaidArchitectural } from "../../http/get/application";
import { Application } from "../../types/application";
import ArchitecturalRequirements from "../pdfs/requirements/ArchitecturalRequirements";
import CivilRequirements from "../pdfs/requirements/CivilRequirements";
import ElectricalRequirements from "../pdfs/requirements/ElectricalRequirements";

export function PaidTable({ searchTerm, adminType }: {
    searchTerm: string,
    adminType?: string
}){

    const [requirementsModal, setRequirementsModal] = useState<boolean | undefined>(false);
    const [applicationID, setApplicationID] = useState<number>();

    const { data: response } = useQuery({
        queryKey: ["paid_architectured", searchTerm],
        queryFn: async () => {
            const data = await FetchPaidArchitectural(searchTerm);
            return data;
        },
    });

    const paidApplication: Application[] = response?.data || [];

    const openRequirements = (applicationID: number) => {
        setRequirementsModal(true)
        setApplicationID(applicationID)
    }

    return(
        <>

            {
                (adminType == "architectural" && requirementsModal && applicationID) && <ArchitecturalRequirements applicationID={applicationID} setRequirementsModal={setRequirementsModal} />
            }

            {
                (adminType == "civil" && requirementsModal && applicationID) && <CivilRequirements applicationID={applicationID} setRequirementsModal={setRequirementsModal} />
            }
            
            {
                (adminType == "electrical" && requirementsModal && applicationID) && <ElectricalRequirements applicationID={applicationID} setRequirementsModal={setRequirementsModal} />
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
                                        <th scope="col" className="px-3 py-2">Permit Type</th>
                                        <th scope="col" className="px-3 py-2">Evaluate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paidApplication.map((item) => (
                                        <tr
                                            key={item.application_id}
                                            className="border-b"
                                        >
                                            <td className="whitespace-nowrap px-3 py-2 font-medium">{item.applicationCode}</td>
                                            <td className="whitespace-nowrap px-3 py-2 font-medium">{item.firstname} {item.middleInitial} {item.lastName}</td>
                                            <td className="whitespace-normal px-3 py-2 break-words">
                                                {item.addressNo} {item.barangay} {item.street}{" "}
                                                {item.municipality} {item.zipCode}
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2">{item.permit_type}</td>
                                            <td className="whitespace-nowrap py-4">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => openRequirements(item.application_id)}
                                                        className="bg-orange-400 rounded-md p-3 text-white font-bold hover:opacity-75"
                                                    >
                                                        Requirements
                                                    </button>
                                                    <button className="bg-green-700 text-white font-bold p-3 rounded-md hover:opacity-75">
                                                        Approve
                                                    </button>
                                                    <button className="bg-red-600 text-white font-bold p-3 rounded-md hover:opacity-75">
                                                        Disapprove
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>

       
    )
}