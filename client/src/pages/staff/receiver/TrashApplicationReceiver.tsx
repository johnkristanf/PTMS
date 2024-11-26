import { SideBar } from "../../../components/SideBar";
import { DropdownDate } from "../../../components/DropdownDate";
import { TrashTable } from "../../../components/staff/TrashTable";
import { PTMSHeader } from "../../../components/PtmsHeader";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import StaffRequestAccessModal from "../../../components/modal/staff/StaffAccessRequest";
import { useFetchStaffAR } from "../../../hook/useFetchStaffAR";

function TrashApplicationReceiverPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>(""); 

  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState<boolean>(false);
   
  const toggleNotificationModal = () => setIsNotificationModalOpen((prevState) => !prevState);

  const { staffAccessRequests } = useFetchStaffAR();

  
  return (

    <>
            {
                isNotificationModalOpen && (<StaffRequestAccessModal />)
            }
      <div className="flex justify-between items-center h-[120vh] bg-white">
        <SideBar role={"receiver"} />

        <div className="w-[80%] h-full flex justify-center items-center mr-1">
          <PTMSHeader />

          <div className="flex flex-col gap-2 w-full h-[80%] mt-32 px-3">

            <div className="flex justify-between mb-5">
              <h1 className="text-orange-400 text-4xl font-bold">Trash Applications</h1>

              <div className="flex items-center gap-3">

                  <div className="flex">
                    {staffAccessRequests && staffAccessRequests.length > 0 && (
                          <div className="flex items-center justify-center text-white bg-red-500 rounded-full w-4 h-4 text-sm">
                              {staffAccessRequests.length}
                          </div>
                      )}

                      {/* Bell Icon */}
                      <FontAwesomeIcon
                          icon={faBell}
                          className="text-2xl hover:opacity-75 hover:cursor-pointer"
                          onClick={toggleNotificationModal}
                      />
                  </div>

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

export default TrashApplicationReceiverPage;