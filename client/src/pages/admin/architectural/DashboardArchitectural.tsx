import { useState } from "react"
import { SideBar } from "../../../components/SideBar"
import { PTMSHeader } from "../../../components/PtmsHeader";

import AdminArNotifButton from "../../../components/admin/AdminARNotifButton";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  

import DashboardStaffARModal from "../../../components/admin/DashboardStaffARModal";
import DashboardAdminARModal from "../../../components/admin/DashboardAdminARModal";

import { ApplicationPerBarangay, ApplicationPerPermitTypeChart, ApplicationPerYearChart, MonthlyAssessmentChart } from "../../../components/admin/Charts";
import StaffARNotifButton from "../../../components/staff/StaffARNotifButton";


function ArchitecturalDashboardPage() {

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
                <SideBar role={"architectural"} />

                <div className="w-full flex justify-center fixed top-0">
                
                </div>


                <div className="w-full h-full flex justify-center items-center mr-2">

                    <PTMSHeader />
                    

                    <div className="flex flex-col gap-2 w-full h-[80%] mt-32 px-5 font-semibold">
                        <div className="flex justify-between">
                            <h1 className="text-orange-700 text-4xl font-bold">Dashboard</h1>
                            <div className="flex items-center gap-3">

                            <HoverCard>
                                <HoverCardTrigger>
                                    <StaffARNotifButton toggleStaffAccessModal={toggleStaffAccessModal}/>
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    Notification for staff that want to have an access to another staff account.
                                </HoverCardContent>
                            </HoverCard>



                            <HoverCard>
                                <HoverCardTrigger>
                                    <AdminArNotifButton toggleAdminAccessModal={toggleAdminAccessModal} />
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    Notification for other admin wanting to have an access over your account
                                </HoverCardContent>
                            </HoverCard>



                                
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-8 gap-24 ml-5">
                            <ApplicationPerYearChart />
                            <ApplicationPerPermitTypeChart />
                        </div>

                        <div className="w-full flex justify-center ">
                            <div className="w-1/2 p-2">
                                <ApplicationPerBarangay />
                            </div>

                            <div className="w-1/2 p-2">
                                <MonthlyAssessmentChart />
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>

    )
}





export default ArchitecturalDashboardPage;
