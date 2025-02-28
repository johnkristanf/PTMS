import { useState } from "react"
import { SideBar } from "../../../components/SideBar"
import { PaidTable } from "../../../components/admin/PaidTable"
import { DropdownDate } from "../../../components/DropdownDate"
import { PTMSHeader } from "../../../components/PtmsHeader";

import StaffRequestAccessModal from "../../../components/admin/StaffRequestAccessModal";
import AdminRequestAccessModal from "../../../components/admin/AdminRequestAccessModal";
import AdminArNotifButton from "../../../components/admin/AdminARNotifButton";

import StaffARNotifButton from "../../../components/staff/StaffARNotifButton";


function PaidArchitecturalPage() {

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
            { openStaffAccessModal && (<StaffRequestAccessModal setOpenStaffAccessModal={setOpenStaffAccessModal}/>) }
            { openAdminAccessModal && (<AdminRequestAccessModal setOpenAdminAccessModal={setOpenAdminAccessModal}/>) }

            <div className="flex justify-between items-center h-[125vh] w-full bg-white">
                <SideBar role={"architectural"} />

                <div className="w-full flex justify-center fixed top-0">
                
                </div>


                <div className="w-full h-full flex justify-center items-center mr-2">

                    <PTMSHeader />
                    

                    <div className="flex flex-col gap-2 w-full h-[80%] mt-32 px-5 font-semibold">
                        <div className="flex justify-between">
                            <h1 className="text-orange-700 text-4xl font-bold">Applicants</h1>
                            <div className="flex items-center gap-3">

                                <StaffARNotifButton toggleStaffAccessModal={toggleStaffAccessModal}/>

                                <AdminArNotifButton toggleAdminAccessModal={toggleAdminAccessModal} />


                                <DropdownDate
                                    searchTerm={searchTerm}
                                    selectedMonth={selectedMonth}
                                    setSearchTerm={setSearchTerm}
                                    setSelectedMonth={setSelectedMonth}
                                />
                                
                            </div>
                        </div>

                        <PaidTable 
                            searchTerm={searchTerm} 
                            selectedMonth={selectedMonth} 
                            adminType="architectural" 
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default PaidArchitecturalPage
