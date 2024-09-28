import { DropdownDate } from "../../../components/DropdownDate";
import { PTMSHeader } from "../../../components/PtmsHeader";
import { SideBar } from "../../../components/SideBar";
import { DisapprovedTable } from "../../../components/staff/DisapprovedTable";

function DisapprovedArchitecturalPage(){

    const months: string[] = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const weeks: number[] = Array.from({ length: 4 }, (_, i) => i + 1); 

    return(
        <div className="flex justify-between items-center h-[125vh] w-full bg-white">

            <SideBar role={"architectural"} />

            <div className="w-[76%] h-full flex justify-center items-center mr-5">
                <PTMSHeader /> 

                <div className="flex flex-col justify-start gap-2 w-full h-[80%] mt-32">

                    <div className="flex justify-between">
                        <h1 className="text-orange-400 text-4xl font-bold">Disapproved Applications</h1>
                        <div className="flex gap-3">
                            <DropdownDate
                                options={months}
                                optionFormatter={(month) => month}
                            />

                            <DropdownDate
                                options={weeks}
                                optionFormatter={(week) => `${week} week${week > 1 ? 's' : ''} ago`}
                            />

                            <input
                                type="search"
                                className="bg-gray-500 rounded-md p-2 font-bold text-white placeholder-white focus:outline-none"
                                placeholder="Search Applicant"
                            />
                        </div>
                    </div>

                    <DisapprovedTable />
                </div>
            </div>
        </div>
    )
}

export default DisapprovedArchitecturalPage