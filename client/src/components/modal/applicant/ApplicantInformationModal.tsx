import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppliedServices } from "../../../types/application";
import { ApplicantInformationFormApplicant } from "../../applicant/form/ApplicantForm";

import '../../../assets/scrollStyle.css'


export function ApplicantInformationModalApplicant({setInformationModal, applicantInfo}: {
    setInformationModal: React.Dispatch<React.SetStateAction<boolean | undefined>>
    applicantInfo: AppliedServices | undefined
}){

    const serviceType = applicantInfo?.serviceType;

  
    return(
         <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center">

            <div className="fixed top-0 bg-gray-600 opacity-75 w-full h-screen"></div>

            <div className="flex flex-col bg-white rounded-md p-8 fixed top-20 mt-1 w-1/2 h-[85%] overflow-auto custom-scrollbar">

                <div className="flex flex-col justify-between items-center mb-3">

                    <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-xl mb-2">{applicantInfo?.permit_type} Permit</h1>
                            <h1 className="font-bold text-3xl">Applicant Information</h1>
                        </div>

                        <FontAwesomeIcon 
                            icon={faX} 
                            onClick={() => setInformationModal(false)}
                            className="text-xl hover:opacity-75 hover:cursor-pointer font-bold"
                        />
                    </div>

                    <div className="flex justify-center w-full gap-5 mt-5 font-semibold">

                        <div className="flex gap-1">
                            <input type="checkbox" checked readOnly />
                            <label>{serviceType}</label>
                        </div>

                        

                    </div>

                
                    <ApplicantInformationFormApplicant applicantInfo={applicantInfo}/>
                    
                </div>

               

            </div>
        </div>
    )
}