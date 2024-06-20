import { ChangeEvent, useState } from "react";
import { PendingTable } from "../../../components/staff/PendingTable";
import { SideBar } from "../../../components/SideBar";
import { DropdownDate } from "../../../components/DropdownDate";

function ReceiverPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const months: string[] = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const weeks: number[] = Array.from({ length: 4 }, (_, i) => i + 1);  

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex justify-between items-center h-screen bg-white">
      <SideBar role={"receiver"} />

      <div className="w-[79%] h-full flex justify-center items-center mr-2">
        <div className="flex flex-col gap-2 w-full h-[80%]">

          <div className="flex justify-between mb-5">
            <h1 className="text-orange-500 text-4xl font-bold">Pending Applications</h1>

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
                    onChange={handleSearchChange}
                  />
              </div>

          </div>

          <PendingTable searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
}

export default ReceiverPage;
