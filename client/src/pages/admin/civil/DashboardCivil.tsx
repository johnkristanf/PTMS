import { useState } from "react"
import { SideBar } from "../../../components/SideBar"
import { PTMSHeader } from "../../../components/PtmsHeader";

import AdminArNotifButton from "../../../components/admin/AdminARNotifButton";


import DashboardAdminARModal from "../../../components/admin/DashboardAdminARModal";
import DashboardStaffARModal from "../../../components/admin/DashboardStaffARModal";
import { ApplicationPerBarangay, ApplicationPerPermitTypeChart, ApplicationPerYearChart } from "../../../components/admin/Charts";
import StaffARNotifButton from "../../../components/staff/StaffARNotifButton";


function CivilDashboardPage() {

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
            { openStaffAccessModal && (<DashboardStaffARModal setOpenStaffAccessModal={setOpenStaffAccessModal}/>) }
            { openAdminAccessModal && (<DashboardAdminARModal setOpenAdminAccessModal={setOpenAdminAccessModal}/>) }

            <div className="flex justify-between items-center h-[125vh] w-full bg-white">
                <SideBar role={"civil"} />

                <div className="w-full flex justify-center fixed top-0">
                
                </div>


                <div className="w-full h-full flex justify-center items-center mr-2">

                    <PTMSHeader />
                    

                    <div className="flex flex-col gap-2 w-full h-[80%] mt-32 px-5 font-semibold">
                        <div className="flex justify-between">
                            <h1 className="text-orange-700 text-4xl font-bold">Dashboard</h1>
                            <div className="flex items-center gap-3">

                                <StaffARNotifButton toggleStaffAccessModal={toggleStaffAccessModal}/>
                                
                                <AdminArNotifButton toggleAdminAccessModal={toggleAdminAccessModal} />


                                
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-8 gap-24 ml-5">
                            <ApplicationPerYearChart />
                            <ApplicationPerPermitTypeChart />
                        </div>

                        <div className="w-full flex justify-end">
                            <ApplicationPerBarangay />

                        </div>


                    </div>
                </div>
            </div>
        </>

    )
}





export default CivilDashboardPage;
