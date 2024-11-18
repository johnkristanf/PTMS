import { useState } from "react"
import { SideBar } from "../../../components/SideBar"
import { PaidTable } from "../../../components/admin/PaidTable"
import { DropdownDate } from "../../../components/DropdownDate"
import { PTMSHeader } from "../../../components/PtmsHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import AdminRequestAccessModal from "../../../components/admin/AdminRequestAccessModal";


function PaidArchitecturalPage() {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedMonth, setSelectedMonth] = useState<string>(""); 

    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState<boolean>(false);
   
    const toggleNotificationModal = () => setIsNotificationModalOpen((prevState) => !prevState);
    

    return (

        <>
            {
                isNotificationModalOpen && (<AdminRequestAccessModal />)
            }

            <div className="flex justify-between items-center h-[125vh] w-full bg-white">
                <SideBar role={"architectural"} />

                <div className="w-full flex justify-center fixed top-0">
                
                </div>


                <div className="w-[80%] h-full flex justify-center items-center mr-2">

                    <PTMSHeader />
                    

                    <div className="flex flex-col gap-2 w-full h-[80%] mt-32 px-5">
                        <div className="flex justify-between">
                            <h1 className="text-orange-400 text-4xl font-bold">Applicants</h1>
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
