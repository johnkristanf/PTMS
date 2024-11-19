import { SideBar } from "../../../components/SideBar";
import { DropdownDate } from "../../../components/DropdownDate";
import { TrashTable } from "../../../components/staff/TrashTable";
import { PTMSHeader } from "../../../components/PtmsHeader";
import { useState } from "react";
import AdminRequestAccessModal from "../../../components/admin/StaffRequestAccessModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function TrashApplicationElectricalPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>(""); 

  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState<boolean>(false);
   
  const toggleNotificationModal = () => setIsNotificationModalOpen((prevState) => !prevState);
  
  return (

    <>
            {
                isNotificationModalOpen && (<AdminRequestAccessModal />)
            }

      <div className="flex justify-between items-center h-[125vh] bg-white">
        <SideBar role={"electrical"} />

        <div className="w-[80%] h-full flex justify-center items-center mr-1">
          <PTMSHeader />

          <div className="flex flex-col gap-2 w-full h-[80%] mt-32 px-3">

            <div className="flex justify-between mb-5">
              <h1 className="text-orange-400 text-4xl font-bold">Trash Applications</h1>

              <div className="flex items-center gap-3">

                    <FontAwesomeIcon 
                        icon={faBell}
                        className="text-2xl hover:opacity-75 hover:cursor-pointer"
                        onClick={toggleNotificationModal}
                    />

                    <DropdownDate
                        searchTerm={searchTerm}
                        selectedMonth={selectedMonth}
                        setSearchTerm={setSearchTerm}
                        setSelectedMonth={setSelectedMonth}
                    />
              </div>

            </div>

            <TrashTable 
              searchTerm={searchTerm}
              selectedMonth={selectedMonth}
            />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default TrashApplicationElectricalPage;
