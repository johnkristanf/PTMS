import { useState } from "react";
import { SideBar } from "../../../components/SideBar";
import { ApproveTable } from "../../../components/staff/ApprovedTable";
import { DropdownDate } from "../../../components/DropdownDate";
import { PTMSHeader } from "../../../components/PtmsHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import AdminRequestAccessModal from "../../../components/admin/AdminRequestAccessModal";

function ReleaserPage() {

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
                isNotificationModalOpen && (<AdminRequestAccessModal />)
            }

      <div className="flex justify-between items-center h-[125vh] bg-white">
        <SideBar role={"releaser"} />

        <div className="w-[80%] h-full flex justify-center items-center mr-1">

          <PTMSHeader />

          <div className="flex flex-col gap-2 w-full h-[80%] mt-32 px-3">

            <div className="flex justify-between mb-5">
              <h1 className="text-orange-400 text-4xl font-bold">Approved Applications</h1>

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

            <ApproveTable 
              searchTerm={searchTerm} 
              selectedMonth={selectedMonth}  
              staffRole={"releaser"} 
            />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default ReleaserPage;
