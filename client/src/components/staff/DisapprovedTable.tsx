import { useQuery } from "@tanstack/react-query";
import { FetchDisApprovedApplications } from "../../http/get/application";
import { Application } from "../../types/application";

import '../../assets/scrollStyle.css'

export function DisapprovedTable(){

    // it it just static data apply the real search next time
    const searchTerm = "";

    const { data: response } = useQuery({
        queryKey: ["paid_applications", searchTerm],
        queryFn: async () => {
            const data = await FetchDisApprovedApplications(searchTerm);
            return data;
        },
    });

    const disapprovedApplication: Application[] = response?.data || [];

    
    return(

        <div className="flex flex-col bg-orange-100 w-full h-[70%] rounded-md p-2">

            <div className="overflow-x-auto custom-scrollbar">
                <div className="inline-block min-w-full py-2 ">

                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                            <th scope="col" className="px-6 py-4">Name</th>
                            <th scope="col" className="px-6 py-4">Email</th>
                            <th scope="col" className="px-6 py-4">Address</th>
                            <th scope="col" className="px-6 py-4">Permit Type</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            disapprovedApplication.map((item) => (
                                <tr
                                    key={item.application_id}
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                                >
                                    <td className="whitespace-nowrap px-3 py-2 font-medium">{item.firstname} {item.middleInitial} {item.lastName}</td>
                                    <td className="whitespace-nowrap px-3 py-2 font-medium">{item.email}</td>
                                    <td className="whitespace-normal px-3 py-2 break-words">
                                        {item.addressNo} {item.barangay} {item.street}{" "}
                                        {item.municipality} {item.zipCode}
                                    </td>
        
                                    <td className="whitespace-nowrap pl-6 py-4">{item.permit_type}</td>                    
                                </tr>
                            ))
                        }
                       

                        
                       
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}