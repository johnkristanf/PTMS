import { SideBar } from "../../../components/SideBar"
import { EditAccountForm } from "../../../components/staff/form/EditAccount"

function EditScannerAccountPage(){
    return(
        <div className="flex justify-between items-center h-screen bg-white">
            <SideBar role={"scanner"}/>

            <div className="w-[75%] h-full flex justify-center items-center">

                <div className="flex flex-col gap-2 w-full h-[80%] mr-5">

                    <div className="flex justify-between">
                        <h1 className="text-orange-500 text-4xl font-bold">Edit Account</h1>
                    </div>

                    <EditAccountForm />
                </div>
            </div>
        </div>
    )
}

export default EditScannerAccountPage