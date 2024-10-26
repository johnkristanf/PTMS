import { SideBar } from "../../../components/SideBar";
import { DropdownDate } from "../../../components/DropdownDate";
import { RetiredTable } from "../../../components/staff/RetiredTable";
import { PTMSHeader } from "../../../components/PtmsHeader";
import { useState } from "react";

function RetiredApplicationPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>(""); 
  
  return (
    <div className="flex justify-between items-center h-[110vh] bg-white">
      <SideBar role={"receiver"} />

      <div className="w-[80%] h-full flex justify-center items-center mr-1">
        <PTMSHeader />

        <div className="flex flex-col gap-2 w-full h-[80%] mt-32 px-3">

          <div className="flex justify-between mb-5">
            <h1 className="text-orange-400 text-4xl font-bold">Retired Applications</h1>

            <div className="flex gap-3">
                  <DropdownDate
                      searchTerm={searchTerm}
                      selectedMonth={selectedMonth}
                      setSearchTerm={setSearchTerm}
                      setSelectedMonth={setSelectedMonth}
                  />
            </div>

          </div>

          <RetiredTable />
          
        </div>
      </div>
    </div>
  );
}

export default RetiredApplicationPage;
