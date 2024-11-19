import { useState } from "react";
import { PendingTable } from "../../../components/staff/PendingTable";
import { SideBar } from "../../../components/SideBar";
import { PTMSHeader } from "../../../components/PtmsHeader";
import { DropdownDate } from "../../../components/DropdownDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import StaffRequestAccessModal from "../../../components/modal/staff/StaffAccessRequest";

function ReceiverPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");


  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState<boolean>(false);
   
  const toggleNotificationModal = () => setIsNotificationModalOpen((prevState) => !prevState);
  

  // Himoe ni og new modal para sa mga request na granted or denied where user_id = loginAccount.id
  // tas naay button na mo login na siya sa pikas role or delete
  // tas butngig note and modal na ang permission kay mo last lang og isa ka adlaw
  
  return (

    <>
            {
                isNotificationModalOpen && (<StaffRequestAccessModal />)
            }

      <div className="flex justify-between items-center h-[110vh] bg-white">
        <SideBar role={"receiver"} />

        <div className="w-[80%] h-full flex justify-center items-center mr-1">
          <PTMSHeader />

          <div className="flex flex-col gap-2 w-full h-[80%] mt-24 pr-3 pl-2">

            <div className="flex justify-between mb-5">
              <h1 className="text-orange-400 text-4xl font-bold">Pending Applications</h1>

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

            <PendingTable searchTerm={searchTerm} selectedMonth={selectedMonth} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReceiverPage;
