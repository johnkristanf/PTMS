import { useState } from "react";
import { SideBar } from "../../../components/SideBar";
import { DropdownDate } from "../../../components/DropdownDate";
import { DisapprovedTable } from "../../../components/staff/DisapprovedTable";
import { PTMSHeader } from "../../../components/PtmsHeader";

function DisapprovedReleaserPage() {

  const [searchTerm, setSearchTerm] = useState<string>("");
  // const [selectedWeek, setSelectedWeek] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");

  return (
    <div className="flex justify-between items-center h-[125vh] bg-white">
      <SideBar role={"releaser"} />

      <div className="w-[80%] h-full flex justify-center items-center mr-1">
        <PTMSHeader />

        <div className="flex flex-col gap-2 w-full h-[80%] mt-32 px-3">

          <div className="flex justify-between mb-5">
            <h1 className="text-orange-400 text-4xl font-bold">Disapproved Applications</h1>

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
            isReleaser={true}
          />
          
        </div>
      </div>
    </div>
  );
}

export default DisapprovedReleaserPage;
