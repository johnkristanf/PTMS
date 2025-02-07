import { useState } from "react";
import { SideBar } from "../../../components/SideBar";
import { DropdownDate } from "../../../components/DropdownDate";
import { ApproveTable } from "../../../components/staff/ApprovedTable";
import { PTMSHeader } from "../../../components/PtmsHeader";

function ApplicationReleaserPage() {

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>(""); 
    
  return (
    <div className="flex justify-between items-center h-[125vh] bg-white">
      <SideBar role={"releaser"} />

      <div className="w-full h-full flex justify-center items-center mr-1">
        <PTMSHeader />

        <div className="flex flex-col gap-2 w-full h-[80%] mt-32 px-3">

          <div className="flex justify-between mb-5">
            <h1 className="text-blue-700 text-4xl font-bold">Applications</h1>

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
            staffRole="releaser" 
          />
          
        </div>
      </div>
    </div>
  );
}

export default ApplicationReleaserPage;
