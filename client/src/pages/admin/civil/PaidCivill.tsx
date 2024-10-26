import { useState } from "react"
import { SideBar } from "../../../components/SideBar"
import { PaidTable } from "../../../components/admin/PaidTable"
import { DropdownDate } from "../../../components/DropdownDate"
import { PTMSHeader } from "../../../components/PtmsHeader";

function PaidCivilPage(){

    const [searchTerm, setSearchTerm] = useState<string>("");
    // const [selectedWeek, setSelectedWeek] = useState<string>("");
    const [selectedMonth, setSelectedMonth] = useState<string>(""); 

    return(
        <div className="flex justify-between items-center h-[125vh] w-full bg-white">
            <SideBar role={"civil"}/>

            <div className="w-[78%] h-full flex justify-center items-center mr-5">

                <PTMSHeader />

                <div className="flex flex-col gap-2 w-full h-[80%] mt-32">

                    <div className="flex justify-between">
                        <h1 className="text-orange-400 text-4xl font-bold">Applicants</h1>
                        <div className="flex gap-3">
                            <DropdownDate
                               searchTerm={searchTerm}
                               selectedMonth={selectedMonth}
                               setSearchTerm={setSearchTerm}
                               setSelectedMonth={setSelectedMonth}
                            />
                        </div>
                    </div>

                    <PaidTable 
                        searchTerm={searchTerm} 
                        selectedMonth={selectedMonth}  
                        adminType="civil" 
                    />
                </div>
            </div>
        </div>
    )
}

export default PaidCivilPage