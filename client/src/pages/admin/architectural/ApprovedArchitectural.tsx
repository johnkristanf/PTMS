import { useState } from "react";
import { DropdownDate } from "../../../components/DropdownDate";
import { PTMSHeader } from "../../../components/PtmsHeader";
import { SideBar } from "../../../components/SideBar";
import { ApproveTable } from "../../../components/staff/ApprovedTable";
import AdminRequestAccessModal from "../../../components/admin/AdminRequestAccessModal";
import StaffRequestAccessModal from "../../../components/admin/StaffRequestAccessModal";
import AdminArNotifButton from "../../../components/admin/AdminARNotifButton";
import StaffARNotifButton from "../../../components/staff/StaffARNotifButton";

function ApprovedArchitecturalPage(){

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


    return(

        <>
            { openStaffAccessModal && (<StaffRequestAccessModal />) }
            { openAdminAccessModal && (<AdminRequestAccessModal />) }

            <div className="flex justify-between items-center h-[125vh] bg-white">
                <SideBar role={"architectural"}/>

                <div className="w-full h-full flex justify-center items-center">
                    <PTMSHeader /> 

                    <div className="flex flex-col justify-start gap-2 w-full h-[80%] ml-5 mr-5 mt-32">

                        <div className="flex justify-between">
                            <h1 className="text-orange-700 text-4xl font-bold">Approved Applications</h1>
                            <div className="flex items-center gap-3">

                                <StaffARNotifButton  toggleStaffAccessModal={toggleStaffAccessModal}/>

                                <AdminArNotifButton toggleAdminAccessModal={toggleAdminAccessModal}/>

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
                            staffRole="" 
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ApprovedArchitecturalPage