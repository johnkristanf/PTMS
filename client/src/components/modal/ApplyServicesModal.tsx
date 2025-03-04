import { classNames } from '../../helpers/classNames';
import { ServiceModalForm } from '../../components/modal/ServiceModalForm';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faX } from '@fortawesome/free-solid-svg-icons';


import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  

function ApplyServiceModal({ setServisesApplyModalOpen }: {
    setServisesApplyModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
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
        { name: "Electrical Permit", permit_type: "Electrical" },
        { name: "Electronics Permit", permit_type: "Electronics" },
        { name: "Excavation Permit", permit_type: "Excavation" },
        { name: "Mechanical Permit", permit_type: "Mechanical" },
        { name: "Fencing Permit", permit_type: "Fencing" }
    ];

    const individual_permit = [
        { name: "Signed Permit", permit_type: "Signed", info: "Confirms Authorization for a specific project or activity" },
        { name: "Demolition Permit", permit_type: "Demolition", info: "Ensures safe of approval for the removal of structures" },
    ];


    const clickService = (permit_type: string) => {
        setSelectedService(permit_type);
        setServiceModalOpen(true);
    };


    // FONT SIZE FOLLOW FORMAT TITLE, MENU, DESCRIPTION

    return (
        <div className='absolute top-6 w-full h-full flex justify-center'>

            <div className="fixed top-0 bg-gray-600 opacity-75 w-[110%] h-screen"></div>

            <div className="absolute top-0 bg-white flex-col flex items-center w-[80%] h-full rounded-md p-8 mt-24 overflow-y-auto">

                <div className="flex w-full font-bold ">
                    {/* <h1 className='text-xl text-gray-600'>Step 1:</h1> */}

                    <div className="flex justify-between items-center w-full">
                        <h1 className='text-[2rem] flex-1'>Apply Services: </h1>
                        <FontAwesomeIcon 
                            icon={faX} 
                            className='text-2xl font-bold hover:opacity-75 hover:cursor-pointer'
                            onClick={() => setServisesApplyModalOpen(false)}
                        />
                    </div>
                </div>

                

                <div className="flex w-full justify-center mt-2 ">

                    <div className="flex flex-col w-full gap-6">
                        <div className="flex justify-center w-full mt-5 font-semibold gap-2">
                            <button
                                onClick={() => clickService("Building")}
                                className={classNames("p-2 w-[60%] h-full border border-orange-700 text-orange-700 rounded-md font-bold hover:bg-orange-700 hover:text-white")}
                            >
                                Building Permit
                            </button>


                            <HoverCard>
                                <HoverCardTrigger>
                                    <FontAwesomeIcon icon={faInfoCircle}/>
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    <div className="flex flex-col items-center w-full text-md">
                                        <h1>Building permit includes: </h1>
                                        <h1>Excavation | Plumbing</h1>
                                        <h1>Electronics | Electrical</h1>
                                        <h1>Mechanical | Fencing</h1>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>



                            
                        </div>

                        <div className="grid grid-cols-3 gap-4 font-semibold mt-5">
                            {solo_permit.map((permit) => (
                                <button
                                    key={permit.name}
                                    onClick={() => clickService(permit.permit_type)}
                                    className={classNames(
                                        "p-2 w-[80%] h-full  border border-orange-700 text-orange-700 rounded-md font-bold hover:bg-orange-700 hover:text-white"
                                    )}
                                >
                                    {permit.name}
                                </button>
                            ))}
                        </div>

                    </div>

                    {/* <div className="border-l-2 border-gray-600 h-full mx-8"></div> */}
                        

                </div>

                <div className="flex flex-col font-semibold w-full gap-6 mt-8">
                        <h1 className='text-xl'>Other Services:</h1>
                        {
                            individual_permit.map((permit) => (
                                <div 
                                    key={permit.name} 
                                    className="flex gap-2"
                                >
                                    <button
                                        onClick={() => clickService(permit.permit_type)}
                                        className={classNames("p-2 w-[30%] h-full border border-orange-700 text-orange-700 rounded-md font-bold hover:bg-orange-700 hover:text-white")}
                                    >
                                        {permit.name}
                                    </button>

                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <FontAwesomeIcon icon={faInfoCircle}/>
                                        </HoverCardTrigger>

                                        <HoverCardContent>
                                            <h1 className='text-md'>{permit.info}</h1>
                                        </HoverCardContent>
                                    </HoverCard>

                                </div>
                                
                            ))
                        }
                </div>

                {/* <h1 className='font-semibold text-lg mt-[12rem]'>2024 | PTMS</h1> */}

            </div>
            {(serviceModalOpen && selectedService) && <ServiceModalForm selectedService={selectedService} setServiceModalOpen={setServiceModalOpen} role='receiver'/>}
        </div>
    );
}

export default ApplyServiceModal;
