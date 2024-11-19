import { useState } from "react"
import { SideBar } from "../../../components/SideBar"
import { PaidTable } from "../../../components/admin/PaidTable"
import { DropdownDate } from "../../../components/DropdownDate"
import { PTMSHeader } from "../../../components/PtmsHeader";

import StaffRequestAccessModal from "../../../components/admin/StaffRequestAccessModal";
import AdminRequestAccessModal from "../../../components/admin/AdminRequestAccessModal";


function PaidArchitecturalPage() {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedMonth, setSelectedMonth] = useState<string>(""); 

    const [openStaffAccessModal, setOpenStaffAccessModal] = useState<boolean>(false);
    const [openAdminAccessModal, setOpenAdminAccessModal] = useState<boolean>(false);
   
    const toggleStaffAccessModal = () => setOpenStaffAccessModal((prevState) => !prevState);
    const toggleAdminAccessModal = () => setOpenAdminAccessModal((prevState) => !prevState);
    

    return (

        <>
            { openStaffAccessModal && (<StaffRequestAccessModal />) }
            { openAdminAccessModal && (<AdminRequestAccessModal />) }

            <div className="flex justify-between items-center h-[125vh] w-full bg-white">
                <SideBar role={"architectural"} />

                <div className="w-full flex justify-center fixed top-0">
                
                </div>


                <div className="w-[80%] h-full flex justify-center items-center mr-2">

                    <PTMSHeader />
                    

                    <div className="flex flex-col gap-2 w-full h-[80%] mt-32 px-5 font-semibold">
                        <div className="flex justify-between">
                            <h1 className="text-orange-400 text-4xl font-bold">Applicants</h1>
                            <div className="flex items-center gap-3">

                                <button 
                                    className="text-2xl hover:opacity-75 hover:cursor-pointer text-sm bg-gray-500 text-white rounded-md p-2"
                                    onClick={toggleStaffAccessModal}
                                >
                                    Staff AR 
                                </button>

                                <button 
                                    className="text-2xl hover:opacity-75 hover:cursor-pointer text-sm bg-gray-500 text-white rounded-md p-2"
                                    onClick={toggleAdminAccessModal}
                                >
                                    Admin AR
                                </button>


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
