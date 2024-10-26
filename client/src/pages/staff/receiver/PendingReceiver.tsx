import { useState } from "react";
import { PendingTable } from "../../../components/staff/PendingTable";
import { SideBar } from "../../../components/SideBar";
import { PTMSHeader } from "../../../components/PtmsHeader";
import { DropdownDate } from "../../../components/DropdownDate";

function ReceiverPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // const [selectedWeek, setSelectedWeek] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  

  return (
    <div className="flex justify-between items-center h-[110vh] bg-white">
      <SideBar role={"receiver"} />

      <div className="w-[80%] h-full flex justify-center items-center mr-1">
        <PTMSHeader />

        <div className="flex flex-col gap-2 w-full h-[80%] mt-24 pr-3 pl-2">

          <div className="flex justify-between mb-5">
            <h1 className="text-orange-400 text-4xl font-bold">Pending Applications</h1>

            <DropdownDate
              searchTerm={searchTerm}
              //    selectedWeek={selectedWeek}
              selectedMonth={selectedMonth}
              setSearchTerm={setSearchTerm}
              //    setSelectedWeek={setSelectedWeek}
              setSelectedMonth={setSelectedMonth} 
            />
          </div>

          <PendingTable searchTerm={searchTerm} selectedMonth={selectedMonth} />
        </div>
      </div>
    </div>
  );
}

export default ReceiverPage;
