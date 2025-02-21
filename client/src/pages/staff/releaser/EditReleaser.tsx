import { PTMSHeader } from "../../../components/PtmsHeader"
import { SideBar } from "../../../components/SideBar"
import { EditAccountForm } from "../../../components/staff/form/EditAccount"

function EditReleaserAccountPage(){
    return(
        <div className="flex justify-between items-center h-[125vh] bg-white">
            <SideBar role={"releaser"}/>

            <div className="w-full h-full flex justify-center items-center">
                <PTMSHeader />

                <div className="flex flex-col gap-2 w-full h-[80%] mr-5 mt-6 p-8">

                    <div className="flex justify-between">
                        <h1 className="text-orange-700 text-4xl font-bold">Edit Account</h1>
                    </div>

                    <EditAccountForm />
                </div>
            </div>
        </div>
    )
}

export default EditReleaserAccountPage