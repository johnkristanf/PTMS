import { useState } from "react";
import { SideBar } from "../../../components/SideBar";
import { StaffAccountModalForm } from "../../../components/modal/StaffAccountModal";

import {  StaffAccountFetch } from "../../../types/auth";
import StaffAccountsTable from "../../../components/admin/StaffAccountsTable";
import { EditStaffAccountModalForm } from "../../../components/modal/EditStaffAccountModal";
import { PTMSHeader } from "../../../components/PtmsHeader";

function StaffAccountsCivilPage() {

    const [openModalForm, setOpenModalForm] = useState<boolean>(false);
    const [staffData, setStaffData] = useState<StaffAccountFetch>()

   

    return(
        <div className="flex justify-between items-center h-[125vh] bg-white">

            <SideBar role="civil" />

            {
                openModalForm && <StaffAccountModalForm setOpenModalForm={setOpenModalForm} />
            }

            {
                staffData && <EditStaffAccountModalForm  staff_id={staffData.id} name={staffData.name} email={staffData.email} setStaffData={setStaffData} />
            }

            <div className="w-[77%] h-full flex gap-5  justify-center">

                <PTMSHeader />

                <div className="flex flex-col w-full h-full pt-16 gap-4 mt-20">

                    <div className="flex justify-between w-full pr-16">
                        <h1 className="text-orange-400 font-bold text-4xl">Staff Accounts</h1>
                        <button 
                            onClick={() => setOpenModalForm(true)}
                            className="text-white font-bold bg-gray-600 rounded-md p-2 hover:opacity-75">
                            Create Staff Account
                        </button>
                    </div>

                    <div className="flex w-full flex-wrap gap-5 h-[60%]">

                        <StaffAccountsTable setStaffData={setStaffData} />
                     
                    </div>

                     
                </div>

              
            </div>
        </div>
    )
}


export default StaffAccountsCivilPage