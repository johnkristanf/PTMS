import { SideBar } from "../../../components/SideBar";
import { DropdownDate } from "../../../components/DropdownDate";
import { TrashTable } from "../../../components/staff/TrashTable";
import { PTMSHeader } from "../../../components/PtmsHeader";
import { useState } from "react";
import AdminRequestAccessModal from "../../../components/admin/AdminRequestAccessModal";
import StaffRequestAccessModal from "../../../components/admin/StaffRequestAccessModal";
import AdminArNotifButton from "../../../components/admin/AdminARNotifButton";
import StaffARNotifButton from "../../../components/staff/StaffARNotifButton";

function TrashApplicationArhictecturalPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>(""); 

  const [openStaffAccessModal, setOpenStaffAccessModal] = useState<boolean>(false);
  const [openAdminAccessModal, setOpenAdminAccessModal] = useState<boolean>(false);
   
  const toggleStaffAccessModal = () => {
    setOpenStaffAccessModal((prevState) => {
        if (!prevState) setOpenAdminAccessModal(false);
        return !prevState;
    });
  };

  const toggleAdminAccessModal = () => {
      setOpenAdminAccessModal((prevState) => {
          if (!prevState) setOpenStaffAccessModal(false); 
          return !prevState;
      });
  };

    
  
  return (

    <>
        { openStaffAccessModal && (<StaffRequestAccessModal />) }
        { openAdminAccessModal && (<AdminRequestAccessModal />) }

      <div className="flex justify-between items-center h-[120vh] bg-white">
        <SideBar role={"architectural"} />

        <div className="w-full h-full flex justify-center items-center mr-1">
          <PTMSHeader />

          <div className="flex flex-col gap-2 w-full h-[80%] mt-32 px-3">

            <div className="flex justify-between mb-5">
              <h1 className="text-blue-700 text-4xl font-bold">Trash Applications</h1>

              <div className="flex items-center gap-3">

                    <StaffARNotifButton toggleStaffAccessModal={toggleStaffAccessModal}/>


                    <AdminArNotifButton toggleAdminAccessModal={toggleAdminAccessModal}/>
                    

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

export default TrashApplicationArhictecturalPage;
