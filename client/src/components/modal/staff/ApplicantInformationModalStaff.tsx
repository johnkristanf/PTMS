import { ApplicantInformationFormStaff } from "../../staff/form/ApplicantInformation";
import { Application } from "../../../types/application";


export function ApplicantInformationModalStaff({ setInformationModal, applicantInfo }: {
    setInformationModal: React.Dispatch<React.SetStateAction<boolean>>
    applicantInfo: Application | undefined
}){

  
    return(
         <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center">

            <div className="fixed top-0 bg-gray-600 opacity-75 w-full h-screen"></div>

            <div className="flex flex-col bg-white rounded-md p-8 fixed top-5 w-1/2 h-[90%] overflow-auto">

                <div className="flex flex-col justify-between items-center mb-3">

                    <div className="flex flex-col w-full">
                        <h1 className="font-semibold text-lg">{applicantInfo?.permit_type} Permit</h1>
                        <h1 className="font-bold text-3xl">Applicant Information</h1>
                    </div>

                    { applicantInfo && <ApplicantInformationFormStaff applicantInfo={applicantInfo} setInformationModal={setInformationModal}/> }
                    
                </div>

               

            </div>
        </div>
    )
}