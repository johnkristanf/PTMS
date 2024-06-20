import { useState } from "react"
import { SideBar } from "../../../components/SideBar"
import { PaidTable } from "../../../components/admin/PaidTable"
import { DropdownDate } from "../../../components/DropdownDate"


function PaidArchitecturalPage() {

    const months: string[] = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const weeks: number[] = Array.from({ length: 4 }, (_, i) => i + 1); 

    const [searchTerm, setSearchTerm] = useState<string>("");

   

    return (
        <div className="flex justify-between items-center h-screen w-full bg-white">
            <SideBar role={"architectural"} />

            <div className="w-full flex justify-center fixed top-0">
               
            </div>

            <div className="w-[79%] h-full flex justify-center items-center mr-2">
                <div className="flex flex-col gap-2 w-full h-[80%]">
                    <div className="flex justify-between">
                        <h1 className="text-orange-500 text-4xl font-bold">Applicants</h1>
                        <div className="flex gap-3">
                            <DropdownDate
                                options={months}
                                optionFormatter={(month) => month}
                            />

                            <DropdownDate
                                options={weeks}
                                optionFormatter={(week) => `${week} week${week > 1 ? 's' : ''} ago`}
                            />

                            <input
                                type="search"
                                className="bg-gray-500 rounded-md p-2 font-bold text-white placeholder-white focus:outline-none"
                                placeholder="Search Applicant"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <PaidTable searchTerm={searchTerm} adminType="architectural" />
                </div>
            </div>
        </div>
    )
}

export default PaidArchitecturalPage
