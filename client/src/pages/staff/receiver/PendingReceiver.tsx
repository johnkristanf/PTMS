import { ChangeEvent, useState } from "react";
import { PendingTable } from "../../../components/staff/PendingTable";
import { SideBar } from "../../../components/SideBar";
import { PTMSHeader } from "../../../components/PtmsHeader";
import { dropDownMonths, dropDownWeeks } from "../../../helpers/dropdownlist";

function ReceiverPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedWeek, setSelectedWeek] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>(""); // State to track the selected month

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleMonthChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value); 
  };

  const handleWeekChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedWeek(event.target.value); 
  };

  console.log("mont: ", selectedMonth);
  console.log("week: ", selectedWeek);
  

  return (
    <div className="flex justify-between items-center h-[110vh] bg-white">
      <SideBar role={"receiver"} />

      <div className="w-[80%] h-full flex justify-center items-center mr-1">
        <PTMSHeader />

        <div className="flex flex-col gap-2 w-full h-[80%] mt-24 pr-3 pl-2">

          <div className="flex justify-between mb-5">
            <h1 className="text-orange-400 text-4xl font-bold">Pending Applications</h1>

            <div className="flex gap-3">
              <select
                className="bg-gray-500 text-white p-2 rounded-md focus:outline-none"
                value={selectedMonth}
                onChange={handleMonthChange} 
              >
                {dropDownMonths.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>

              <select 
                value={selectedWeek}
                className="bg-gray-500 text-white p-2 rounded-md focus:outline-none"
                onChange={handleWeekChange}
              >
                  {dropDownWeeks.map((week, index) => (
                    <option key={index} value={String(week)}>
                      {week}
                    </option>
                ))}
              </select>

              <input
                type="search"
                className="bg-gray-500 rounded-md p-2 font-bold text-white placeholder-white focus:outline-none"
                placeholder="Search Applicant"
                value={searchTerm}
                onChange={handleSearchChange}
              />

            </div>
          </div>

          <PendingTable searchTerm={searchTerm} selectedMonth={selectedMonth} selectedWeek={selectedWeek} />
        </div>
      </div>
    </div>
  );
}

export default ReceiverPage;
