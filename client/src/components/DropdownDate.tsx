import { ChangeEvent } from "react";
import { dropDownMonths } from "../helpers/dropdownlist";

interface DropdownDateProps {
  searchTerm: string;
  selectedMonth: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSelectedMonth: React.Dispatch<React.SetStateAction<string>>;
}

export const DropdownDate: React.FC<DropdownDateProps> = ({
  searchTerm,
  selectedMonth,
  setSearchTerm,
  setSelectedMonth,
}) => {
    
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleMonthChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };


  return (
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

      {/* <select
        value={selectedWeek}
        className="bg-gray-500 text-white p-2 rounded-md focus:outline-none"
        onChange={handleWeekChange}
      >
        {dropDownWeeks.map((week, index) => (
          <option key={index} value={String(week)}>
            {week}
          </option>
        ))}
      </select> */}

      <input
        type="search"
        className="bg-gray-500 rounded-md p-2 font-bold text-white placeholder-white focus:outline-none"
        placeholder="Search Applicant"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};
