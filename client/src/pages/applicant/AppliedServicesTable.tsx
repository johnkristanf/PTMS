import { useState } from 'react';
import { SideBar } from "../../components/SideBar"
import { ApplicantInformationModalApplicant } from '../../components/modal/applicant/ApplicantInformationModal';
import { FetchAppliedServices } from '../../http/get/application';
import { AppliedServices } from '../../types/application';
import { useQuery } from '@tanstack/react-query';
import RequirementsModal from '../../components/modal/applicant/RequirementsModal';
import BuildingPDF from '../../components/pdfs/Building';

import '../../assets/scrollStyle.css'
import { PTMSHeader } from '../../components/PtmsHeader';
import { classNames } from '../../helpers/classNames';
import PlumbingPDF from '../../components/pdfs/Plumbing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import ElectronicsPermit from '../../components/pdfs/Electronics';
import ElectricalPermit from '../../components/pdfs/Electrical';
import MechanicalPermit from '../../components/pdfs/Mechanical';
import FencingPermit from '../../components/pdfs/Fencing';
import ExcavationPermit from '../../components/pdfs/Excavation';
import SignagePermit from '../../components/pdfs/Signage';
import DemolitionPermit from '../../components/pdfs/Demolition';
import ElectricalCompletionPDF from '../../components/pdfs/completions/Electrical';
import BuildingCompletionPDF from '../../components/pdfs/completions/Building';
import PlumbingCompletionPDF from '../../components/pdfs/completions/Plumbing';
import ElectronicsCompletionPDF from '../../components/pdfs/completions/Electronics';
import FenceCompletionPDF from '../../components/pdfs/completions/Fence';
import ExcavationCompletionPDF from '../../components/pdfs/completions/Excavation';
import SignedCompletionPDF from '../../components/pdfs/completions/Signed';
import DemolitionCompletionPDF from '../../components/pdfs/completions/Demolition';
import MechanicalCompletionPDF from '../../components/pdfs/completions/Mechanical';

function ServicesPage(){

    const [permits, setPermits] = useState<AppliedServices | undefined>();
    const [applicantInfo, setApplicantInfo] = useState<AppliedServices>();
    const [informationModal, setInformationModal] = useState<boolean>();
    const [showRequirements, setShowRequirements] = useState<boolean>(false);

    const [openCompletion, setOpenCompletion] = useState<boolean>(false);

    const [showOptionsId, setShowOptionsId] = useState<number | null | undefined>(); // Track the ID of clicked ellipsis


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
        <div className="flex justify-between items-start h-[130vh] w-full bg-white">

            <SideBar role={"applicant"}/>

            {
                (applicantInfo && informationModal) && <ApplicantInformationModalApplicant applicantInfo={applicantInfo} setInformationModal={setInformationModal} />
            }

           
            {/* PERMIT PDFS MODAL */}
                {
                    !openCompletion && permits && permits.permit_type === "Building" && <BuildingPDF permitInfo={permits} setPermitsInfo={setPermits} />
                }

                {
                    !openCompletion && permits && permits.permit_type === "Plumbing" && <PlumbingPDF permitInfo={permits} setPermitsInfo={setPermits} />
                }

                {
                    !openCompletion && permits && permits.permit_type === "Electronics" && <ElectronicsPermit permitInfo={permits} setPermitsInfo={setPermits} />
                }

                {
                    !openCompletion && permits && permits.permit_type === "Electrical" && <ElectricalPermit permitInfo={permits} setPermitsInfo={setPermits} />
                }

                {
                    !openCompletion && permits && permits.permit_type === "Mechanical" && <MechanicalPermit permitInfo={permits} setPermitsInfo={setPermits} />
                }

                {
                    !openCompletion && permits && permits.permit_type === "Fence" && <FencingPermit permitInfo={permits} setPermitsInfo={setPermits} />
                }

                {
                    !openCompletion && permits && permits.permit_type === "Excavation" && <ExcavationPermit permitInfo={permits} setPermitsInfo={setPermits} />
                }

                {
                    !openCompletion && permits && permits.permit_type === "Signed" && <SignagePermit permitInfo={permits} setPermitsInfo={setPermits} />
                }

                {
                    !openCompletion && permits && permits.permit_type === "Demolition" && <DemolitionPermit permitInfo={permits} setPermitsInfo={setPermits} />
                }

            {/* END::PERMIT PDFS MODAL */}


            {
                showRequirements && <RequirementsModal setShowRequirements={setShowRequirements} role='applicant'/>
            }


            {/* COMPLETION PDFS MODAL */}


                {
                    openCompletion && permits && permits.permit_type === "Building"  && <BuildingCompletionPDF permitInfo={permits} setPermitsInfo={setPermits} /> 
                }

                {
                    openCompletion && permits && permits.permit_type === "Plumbing"  && <PlumbingCompletionPDF permitInfo={permits} setPermitsInfo={setPermits} /> 
                }

                {
                    openCompletion && permits && permits.permit_type === "Electronics"  && <ElectronicsCompletionPDF permitInfo={permits} setPermitsInfo={setPermits} /> 
                }

                {
                    openCompletion && permits && permits.permit_type === "Electrical"  && <ElectricalCompletionPDF permitInfo={permits} setPermitsInfo={setPermits} /> 
                }


                {
                    openCompletion && permits && permits.permit_type === "Mechanical"  && <MechanicalCompletionPDF permitInfo={permits} setPermitsInfo={setPermits} /> 
                }

                {
                    openCompletion && permits && permits.permit_type === "Fence"  && <FenceCompletionPDF permitInfo={permits} setPermitsInfo={setPermits} /> 
                }

                {
                    openCompletion && permits && permits.permit_type === "Excavation"  && <ExcavationCompletionPDF permitInfo={permits} setPermitsInfo={setPermits} /> 
                }


                {
                    openCompletion && permits && permits.permit_type === "Signed"  && <SignedCompletionPDF permitInfo={permits} setPermitsInfo={setPermits} /> 
                }

                {
                    openCompletion && permits && permits.permit_type === "Demolition"  && <DemolitionCompletionPDF permitInfo={permits} setPermitsInfo={setPermits} /> 
                }

            {/* END::COMPLETION PDFS MODAL */}


           

            <div className="flex justify-center items-start h-screen w-[79%] pt-32">
                <PTMSHeader />

                <div className="flex flex-col gap-5 w-full pb-5">

                    <div className="flex flex-col">
                        <h1 className='font-bold text-xl text-gray-600 mb-5'>Step 3:</h1>
                        <h1 className="text-4xl font-bold text-orange-500">Applied Services</h1>
                    </div>

                    <div className="flex gap-3 pr-12">

                                <div className="flex flex-col bg-orange-100 h-[70%] rounded-md">

                                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">

                                        <div className="overflow-auto p-3 max-h-96 custom-scrollbar">
                                            <table className="min-w-full text-left text-sm font-light">
                                            <thead className="border-b font-medium border-neutral-500">
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
                                                        className="border-b border-neutral-500"
                                                    >

                                                        <td className="whitespace-nowrap pl-6 py-4 font-medium">{data.firstname} {data.middleInitial} {data.lastName}</td>
                                                        <td className="whitespace-nowrap pl-6 py-4">{data.permit_type}</td>
                                                        <td 
                                                            className={classNames(
                                                                data.status == "Approved" ? 'text-green-700' : '',
                                                                data.status == "Disapproved" ? 'text-red-800': '',
                                                                data.status == "Trash" ? 'text-red-800': '',
                                                                data.status == "Pending" ? 'text-gray-500': '',
                                                                data.status == "Paid" ? 'text-green-700': '',
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
                                                                    className="bg-green-700 rounded-md p-2 text-white font-bold hover:opacity-75"
                                                                    >
                                                                    Application Form
                                                                </button>


                                                                <button 
                                                                    onClick={() => setShowRequirements(true)}
                                                                    className="bg-sky-600 text-white font-bold p-2 rounded-md hover:opacity-75"
                                                                    >
                                                                    Requirements
                                                                </button>
                                                                

                                                                <FontAwesomeIcon 
                                                                    icon={faEllipsisVertical} 
                                                                    className='text-2xl mt-1 p-1 hover:cursor-pointer hover:opacity-75'
                                                                    onClick={() =>
                                                                        setShowOptionsId(showOptionsId === data.application_id ? null : data.application_id)
                                                                    }
                                                                />

                                                                {showOptionsId === data.application_id && (
                                                                    <div 
                                                                            className="font-semibold w-[200px] absolute top-1/2 right-[18rem] flex flex-col gap-3 ml-2 p-4 bg-gray-300 text-black p-2 rounded-md shadow-md z-10"
                                                                        >

                                                                        <button 
                                                                            disabled={data.status != 'Approved'}
                                                                            className={classNames(
                                                                                "w-full text-white p-2 hover:opacity-75 rounded-md cursor-pointer text-center",
                                                                                data.status != 'Approved' ? 'hover:cursor-not-allowed bg-gray-400': 'bg-orange-600'
                                                                            )}

                                                                            onClick={() => {
                                                                                    setShowOptionsId(null)
                                                                                    setOpenCompletion(true)
                                                                                    setPermits(data)
                                                                                }}
                                                                            >
                                                                                Completion
                                                                        </button>
                                                                        
                                                                        <button 
                                                                            disabled={data.status != 'Approved'}
                                                                            className={classNames(
                                                                                "w-full text-white p-2 hover:opacity-75 rounded-md cursor-pointer text-center",
                                                                                data.status != 'Approved' ? 'hover:cursor-not-allowed bg-gray-400': 'bg-orange-600'
                                                                            )}

                                                                            >
                                                                                Occupancy
                                                                        </button>
                                                                    </div>
                                                                )}

                                                                
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
                                

                        <div className=" rounded-md p-5 h-1/2 ">
                            <h1 className='font-bold text-xl'>Note:</h1>

                            <div className="flex flex-col gap-5">
                                <h1 className='font-bold text-sm'>Please secure copies of requirements 
                                    and permits to be submitted to City's Engineering Office. Completion and occupancy cannot be 
                                    access once your application is disapproved
                                </h1>

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
