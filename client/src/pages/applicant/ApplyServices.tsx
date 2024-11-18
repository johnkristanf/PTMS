import { classNames } from '../../helpers/classNames';
import { ServiceModalForm } from '../../components/modal/ServiceModalForm';
import { useState } from 'react';
import { SideBar } from '../../components/SideBar';
import { PTMSHeader } from '../../components/PtmsHeader';

function ApplyServicesPage() {
    const [selectedService, setSelectedService] = useState<string>();
    const [serviceModalOpen, setServiceModalOpen] = useState<boolean>(false);

    // const services = [
    //     { name: "Building Permit", permit_type: "Building" },
    //     { name: "Plumbing / Sanitary Permit", permit_type: "Plumbing" },
    //     { name: "Electronics Permit", permit_type: "Electronics" },
    //     { name: "Electrical Permit", permit_type: "Electrical" },
    //     { name: "Mechanical Permit", permit_type: "Mechanical" },
    //     { name: "Fence Permit", permit_type: "Fence" },
    //     { name: "Excavation Permit", permit_type: "Excavation" },
    //     { name: "Signed Permit", permit_type: "Signed" },
    //     { name: "Demolition Permit", permit_type: "Demolition" },
    // ];


    const solo_permit = [
        { name: "Plumbing / Sanitary Permit", permit_type: "Plumbing" },
        { name: "Electronics Permit", permit_type: "Electronics" },
    ];

    const individual_permit = [
        { name: "Excavation Permit", permit_type: "Excavation", info: "Required for digging or trenching work to ensure project conducted safely" },
        { name: "Signed Permit", permit_type: "Signed", info: "Confirms Authorization for a specific project or activity"},
        { name: "Demolition Permit", permit_type: "Demolition", info: "Approval required for safe and regulated tearing down of structures" },

    ];

    const clickService = (permit_type: string) => {
        setSelectedService(permit_type);
        setServiceModalOpen(true);
    };

    return (
        <div className='flex justify-between items-center h-screen w-full bg-white'>
            <SideBar role='applicant' />

            <div className="flex-col flex items-center w-[60%] h-[50%] rounded-md p-8 mr-36">
                <PTMSHeader />

                <div className="flex w-full font-bold ">
                    <h1 className='text-xl text-gray-600'>Step 1:</h1>
                    <h1 className='text-2xl text-center flex-1'>Apply Services</h1>
                </div>

                

                <div className="flex w-full justify-center mt-5">

                    <div className="flex flex-col w-full">
                        <div className="flex gap-8 w-full mt-5 font-semibold">
                            <button
                                onClick={() => clickService("Building")}
                                className={classNames("p-2 w-full h-[70%] bg-orange-400 rounded-md text-white font-bold hover:bg-gray-400")}
                            >
                                Building Permit
                            </button>

                            <div className="flex flex-col items-center w-full">
                                <h1> - Applying building permit includes: </h1>
                                <h1>Plumbing | Sanitary</h1>
                                <h1>Electronics | Electrical</h1>
                                <h1>Mechanical | Fence</h1>
                            </div>
                        </div>

                        <div className="flex flex-col w-[80%] gap-4 font-semibold">
                            <h1 className='text-xl'>Solo Permit:</h1>
                            {
                                solo_permit.map((permit) => (
                                    <button
                                        key={permit.name}
                                        onClick={() => clickService(permit.permit_type)}
                                        className={classNames("p-2 w-[60%] h-[90%] bg-orange-400 rounded-md text-white font-bold hover:bg-gray-400")}
                                    >
                                        {permit.name}
                                    </button>

                                ))
                            }
                        </div>
                    </div>

                    <div className="border-l-2 border-gray-600 h-full mx-8"></div>
                    

                    <div className="flex flex-col font-semibold w-[90%] gap-6">
                        <h1 className='text-xl'>Individual Permit:</h1>
                        {
                            individual_permit.map((permit) => (
                                <div 
                                    key={permit.name} 
                                    className="flex gap-8"
                                >
                                    <button
                                        onClick={() => clickService(permit.permit_type)}
                                        className={classNames("p-2 w-[60%] h-[90%] bg-orange-400 rounded-md text-white font-bold hover:bg-gray-400")}
                                    >
                                        {permit.name}
                                    </button>

                                    <h1> - {permit.info}</h1>
                                </div>
                                
                            ))
                        }
                    </div>
                        

                </div>

                {/* <h1 className='font-semibold text-lg mt-[12rem]'>2024 | PTMS</h1> */}

            </div>
            {(serviceModalOpen && selectedService) && <ServiceModalForm selectedService={selectedService} setServiceModalOpen={setServiceModalOpen} />}
        </div>
    );
}

export default ApplyServicesPage;
