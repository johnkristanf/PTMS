import { useState } from 'react';
import { SideBar } from "../../components/SideBar"
import { ApplicantInformationModalApplicant } from '../../components/modal/applicant/ApplicantInformationModal';
import { FetchAppliedServices } from '../../http/get/application';
import { AppliedServices } from '../../types/application';
import { useQuery } from '@tanstack/react-query';
import RequirementsModal from '../../components/modal/applicant/RequirementsModal';
import ElectronicsPDF from '../../components/pdfs/Electronics';
import BuildingPDF from '../../components/pdfs/Building';

import '../../assets/scrollStyle.css'
import CompletionPDF from '../../components/pdfs/Completion';
import PlumbingPDF from '../../components/pdfs/Plumbing';
import FencePDF from '../../components/pdfs/Fence';
import { PTMSHeader } from '../../components/PtmsHeader';
import { classNames } from '../../helpers/classNames';

function ServicesPage(){

    const [permits, setPermits] = useState<AppliedServices | undefined>();
    const [applicantInfo, setApplicantInfo] = useState<AppliedServices>();
    const [informationModal, setInformationModal] = useState<boolean>();
    const [showRequirements, setShowRequirements] = useState<boolean>(false);
    const [openCompletion, setOpenCompletion] = useState<boolean>(false);

    const { data: response, isLoading } = useQuery({
        queryKey: ["applied_services"],
        queryFn: FetchAppliedServices,
    });

    const appliedServices: AppliedServices[] = response?.data;

    console.log("appliedServices: ", appliedServices)

    const openApplicationModal = (data: AppliedServices) => {
        setApplicantInfo(data)
        setInformationModal(true)
    }

    if(isLoading) return <div className="text-white font-bold text-3xl">Fetching Staff Accounts.......</div>

    return(
        <div className="flex justify-between items-center h-screen w-full bg-white">

            <SideBar role={"applicant"}/>

            {
                (applicantInfo && informationModal) && <ApplicantInformationModalApplicant applicantInfo={applicantInfo} setInformationModal={setInformationModal} />
            }

            {
                showRequirements && <RequirementsModal setShowRequirements={setShowRequirements} role='applicant'/>
            }

            {
                permits && permits.permit_type === "Building" && <BuildingPDF permitInfo={permits} setPermitsInfo={setPermits} />
            }

            {
                permits && permits.permit_type === "Electronics" && <ElectronicsPDF setPermitsInfo={setPermits} />
            }

            {
                permits && permits.permit_type === "Plumbing" && <PlumbingPDF setPermitsInfo={setPermits} />
            }


            {
                permits && permits.permit_type === "Fence" && <FencePDF setPermitsInfo={setPermits} />
            }

            {openCompletion && <CompletionPDF setOpenCompletion={setOpenCompletion} /> }

            <div className="flex justify-center items-start h-screen w-[79%] pt-32">
                <PTMSHeader />

                <div className="flex flex-col gap-5 w-full pb-5">
                    <h1 className="text-4xl font-bold text-orange-500">Applied Services</h1>

                    <div className="flex gap-3 pr-12">

                                <div className="flex flex-col bg-orange-50 h-[70%] rounded-md">

                                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">

                                        <div className="overflow-auto p-3 max-h-96 custom-scrollbar">
                                            <table className="min-w-full text-left text-sm font-light">
                                            <thead className="border-b font-medium dark:border-neutral-500">
                                                <tr>
                                                    <th scope="col" className="px-6 py-4">Name</th>
                                                    <th scope="col" className="px-6 py-4">Permit Type</th>
                                                    <th scope="col" className="px-6 py-4">Status</th>
                                                    <th scope="col" className="px-6 py-4">Actions</th>

                                                </tr>
                                            </thead>

                                            <tbody>

                                            {
                                                appliedServices && appliedServices.map((data) => (

                                                    <tr 
                                                        key={data.application_id}
                                                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                                                        >

                                                        <td className="whitespace-nowrap pl-6 py-4 font-medium">{data.firstname} {data.middleInitial} {data.lastName}</td>
                                                        <td className="whitespace-nowrap pl-6 py-4">{data.permit_type}</td>
                                                        <td 
                                                            className={classNames(
                                                                data.status == "Approved" ? 'text-green-700' : '',
                                                                data.status == "Disapproved" ? 'text-red-800': '',
                                                                data.status == "Pending" ? 'text-gray-500': '',
                                                                "whitespace-nowrap pl-6 py-4 font-bold uppercase"
                                                            )}
                                                        >
                                                            {data.status}
                                                        </td>

                                                        <td className="whitespace-nowrap pl-6 py-4">
                                                            <div className="flex gap-5">
                                                                <button 
                                                                    onClick={() => openApplicationModal(data)}
                                                                    className="bg-orange-400 rounded-md p-2 text-white font-bold hover:opacity-75"
                                                                    >
                                                                    View Information
                                                                </button>

                                                                <button 
                                                                    onClick={() => setPermits(data)}
                                                                    className="bg-gray-500 rounded-md p-2 text-white font-bold hover:opacity-75"
                                                                    >
                                                                    Application Form
                                                                </button>


                                                                <button 
                                                                    onClick={() => setShowRequirements(true)}
                                                                    className="bg-black text-white font-bold p-2 rounded-md hover:opacity-75"
                                                                    >
                                                                    Requirements
                                                                </button>

                                                                <button 
                                                                    onClick={() => setOpenCompletion(true)}
                                                                    className={` ${data.status != 'Approved' ? 'hover:cursor-not-allowed bg-gray-400': 'bg-green-700 '} text-white font-bold p-2 rounded-md hover:opacity-75`}
                                                                    disabled={data.status != 'Approved'}
                                                                    >
                                                                    Completion
                                                                </button>
                                                            </div>
                                                        </td>

                                                    </tr>

                                                ))
                                            }

                                            
                                            
                                            </tbody>
                                            </table>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                

                        <div className="bg-white rounded-md p-5 h-1/2">
                            <h1 className='font-bold text-xl'>Note:</h1>

                            <div className="flex flex-col gap-5">
                                <h1 className='font-bold text-sm'>Please secure copies of requirements and permits to be submitted to City's Engineering Office</h1>

                                <div className="flex flex-col text-gray-500 font-bold text-sm">
                                    <h1>Thank You</h1>
                                    <h1>City Engineering Office</h1>
                                </div>    
                            </div>
                        </div>

                       

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage;
