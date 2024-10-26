import { useState } from "react";
import { DropdownDate } from "../../../components/DropdownDate";
import { PTMSHeader } from "../../../components/PtmsHeader";
import { SideBar } from "../../../components/SideBar";
import { DisapprovedTable } from "../../../components/staff/DisapprovedTable";

function DisapprovedElectricalPage(){

    const [searchTerm, setSearchTerm] = useState<string>("");
    // const [selectedWeek, setSelectedWeek] = useState<string>("");
    const [selectedMonth, setSelectedMonth] = useState<string>(""); 

    return(
        <div className="flex justify-between items-center h-[125vh] w-full bg-white">

            <SideBar role={"electrical"} />

            <div className="w-[76%] h-full flex justify-center items-center mr-5">

                <PTMSHeader />

                <div className="flex flex-col justify-start gap-2 w-full h-[80%] mt-32">

                    <div className="flex justify-between">
                        <h1 className="text-orange-500 text-4xl font-bold">Disapproved Applications</h1>
                        <div className="flex gap-3">
                            <DropdownDate
                               searchTerm={searchTerm}
                               selectedMonth={selectedMonth}
                               setSearchTerm={setSearchTerm}
                               setSelectedMonth={setSelectedMonth}
                            />
                        </div>
                    </div>

                    <DisapprovedTable
                        searchTerm={searchTerm}
                        selectedMonth={selectedMonth}
                    />
                </div>
            </div>
        </div>
    )
}

export default DisapprovedElectricalPage