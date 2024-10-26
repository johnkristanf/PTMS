import { useState } from "react";
import { SideBar } from "../../../components/SideBar";
import { ApproveTable } from "../../../components/staff/ApprovedTable";
import { DropdownDate } from "../../../components/DropdownDate";
import { PTMSHeader } from "../../../components/PtmsHeader";

function ScannerReportPage() {

  const [searchTerm, setSearchTerm] = useState<string>("");
  // const [selectedWeek, setSelectedWeek] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>(""); 

  return (
    <div className="flex justify-between items-center h-[110vh] bg-white">
      <SideBar role={"scanner"} />

      <div className="w-[80%] h-full flex justify-center items-center mr-1">

        <PTMSHeader />

        <div className="flex flex-col gap-2 w-full h-[80%] mt-32 px-3">
          <div className="flex justify-between mb-5">
            <h1 className="text-orange-500 text-4xl font-bold">Report</h1>

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
            staffRole={"scanner"} 
            ScannerReport={true} 
          />

        </div>
      </div>
    </div>
  );
}

export default ScannerReportPage;
