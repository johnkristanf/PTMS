import { useState } from "react";
import { DropdownDate } from "../../../components/DropdownDate";
import { PTMSHeader } from "../../../components/PtmsHeader";
import { SideBar } from "../../../components/SideBar";
import { ApproveTable } from "../../../components/staff/ApprovedTable";
import AdminRequestAccessModal from "../../../components/admin/AdminRequestAccessModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function ApprovedCivilPage(){

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedMonth, setSelectedMonth] = useState<string>(""); 

    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState<boolean>(false);
   
    const toggleNotificationModal = () => setIsNotificationModalOpen((prevState) => !prevState);
    
    return(

        <>
            {
                isNotificationModalOpen && (<AdminRequestAccessModal />)
            }

            <div className="flex justify-between items-center h-[125vh] bg-white">
                <SideBar role={"civil"}/>

                <div className="w-[78%] h-full flex justify-center items-center">

                    <PTMSHeader />

                    <div className="flex flex-col justify-start gap-2 w-full h-[80%] mr-5 mt-32">

                        <div className="flex justify-between">
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
                            staffRole="" 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApprovedCivilPage