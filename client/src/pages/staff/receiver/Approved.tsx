import { SideBar } from "../../../components/SideBar";
import { ApproveTable } from "../../../components/staff/ApprovedTable";

function ApprovedApplicationPage(){
    return(
        <div className="flex justify-between items-center h-screen bg-orange-100">
            <SideBar role={"staff"}/>

            <div className="w-[78%] h-full flex justify-center items-center">

                <div className="flex flex-col justify-start gap-2 w-full h-[80%] mr-5">

                    <div className="flex justify-between">
                        <h1 className="text-orange-500 text-4xl font-bold">Approved Applications</h1>
                        <input type="search" 
                            className="bg-gray-500 rounded-md p-2 font-bold text-white placeholder-white focus:outline-none" 
                            placeholder="Search Applicant"
                        />
                    </div>

                    <ApproveTable staffRole="receiver" />
                </div>
            </div>
        </div>
    )
}

export default ApprovedApplicationPage