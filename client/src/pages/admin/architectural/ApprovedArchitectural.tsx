import { useState } from "react";
import { DropdownDate } from "../../../components/DropdownDate";
import { PTMSHeader } from "../../../components/PtmsHeader";
import { SideBar } from "../../../components/SideBar";
import { ApproveTable } from "../../../components/staff/ApprovedTable";

function ApprovedArchitecturalPage(){

    const [searchTerm, setSearchTerm] = useState<string>("");
    // const [selectedWeek, setSelectedWeek] = useState<string>("");
    const [selectedMonth, setSelectedMonth] = useState<string>(""); 

    return(
        <div className="flex justify-between items-center h-[125vh] bg-white">
            <SideBar role={"architectural"}/>

            <div className="w-[78%] h-full flex justify-center items-center">
                <PTMSHeader /> 

                <div className="flex flex-col justify-start gap-2 w-full h-[80%] mr-5 mt-32">

                    <div className="flex justify-between">
                        <h1 className="text-orange-400 text-4xl font-bold">Approved Applications</h1>
                        <div className="flex gap-3">

                            <DropdownDate
                               searchTerm={searchTerm}
                               selectedMonth={selectedMonth}
                               setSearchTerm={setSearchTerm}
                               setSelectedMonth={setSelectedMonth}
                            />

                        </div>
                    </div>

                    <ApproveTable 
                        searchTerm={searchTerm} 
                        selectedMonth={selectedMonth} 
                        staffRole="" 
                    />
                </div>
            </div>
        </div>
    )
}

export default ApprovedArchitecturalPage