import { useState } from "react";
import { DropdownDate } from "../../../components/DropdownDate";
import { PTMSHeader } from "../../../components/PtmsHeader";
import { SideBar } from "../../../components/SideBar";
import { DisapprovedTable } from "../../../components/staff/DisapprovedTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import AdminRequestAccessModal from "../../../components/admin/StaffRequestAccessModal";

function DisapprovedCivilPage(){

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedMonth, setSelectedMonth] = useState<string>("");

    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState<boolean>(false);
   
    const toggleNotificationModal = () => setIsNotificationModalOpen((prevState) => !prevState);

    return(

        <>
            {
                isNotificationModalOpen && (<AdminRequestAccessModal />)
            }

            <div className="flex justify-between items-center h-[125vh] w-full bg-white">

                <SideBar role={"civil"} />

                <div className="w-[75%] h-full flex justify-center items-center mr-5">
                    <PTMSHeader />

                    <div className="flex flex-col justify-start gap-2 w-full h-[80%] mt-32">

                        <div className="flex justify-between">
                            <h1 className="text-orange-400 text-4xl font-bold">Disapproved Applications</h1>
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

                        <DisapprovedTable
                            searchTerm={searchTerm}
                            selectedMonth={selectedMonth}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default DisapprovedCivilPage