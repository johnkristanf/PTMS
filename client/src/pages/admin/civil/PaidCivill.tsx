import { useState } from "react"
import { SideBar } from "../../../components/SideBar"
import { PaidTable } from "../../../components/admin/PaidTable"
import { DropdownDate } from "../../../components/DropdownDate"
import { PTMSHeader } from "../../../components/PtmsHeader";

import AdminRequestAccessModal from "../../../components/admin/AdminRequestAccessModal";
import StaffRequestAccessModal from "../../../components/admin/StaffRequestAccessModal";
import { useFetchStaffPendingAR } from "../../../hook/useFetchStaffPendingAR";
import AdminArNotifButton from "../../../components/admin/AdminARNotifButton";

function PaidCivilPage(){

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

    const { pendingAccessReqest } = useFetchStaffPendingAR();


    return(
        <>
            { openStaffAccessModal && (<StaffRequestAccessModal />) }
            { openAdminAccessModal && (<AdminRequestAccessModal />) }

            <div className="flex justify-between items-center h-[125vh] w-full bg-white">
                <SideBar role={"civil"}/>

                <div className="w-[78%] h-full flex justify-center items-center mr-5">

                    <PTMSHeader />

                    <div className="flex flex-col gap-2 w-full h-[80%] mt-32">

                        <div className="flex justify-between">
                            <h1 className="text-orange-400 text-4xl font-bold">Applicants</h1>
                            <div className="flex items-center gap-3">

                                <div className="flex gap-1">
                                    {pendingAccessReqest && pendingAccessReqest.length > 0 && (
                                        <div className="flex items-center justify-center text-white bg-red-500 rounded-full w-4 h-4 text-sm">
                                            {pendingAccessReqest.length}
                                        </div>
                                    )}

                                    <button 
                                        className="text-2xl hover:opacity-75 hover:cursor-pointer text-sm bg-gray-500 text-white rounded-md p-2"
                                        onClick={toggleStaffAccessModal}
                                    >
                                        Staff AR 
                                    </button>
                                </div>

                                <AdminArNotifButton toggleAdminAccessModal={toggleAdminAccessModal}/>


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
                            adminType="civil" 
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default PaidCivilPage