import { classNames } from '../../helpers/classNames';
import { ServiceModalForm } from '../../components/modal/ServiceModalForm';
import { useState } from 'react';
import { SideBar } from '../../components/SideBar';
import { PTMSHeader } from '../../components/PtmsHeader';

function ApplyServicesPage() {
    const [selectedService, setSelectedService] = useState<string>();
    const [serviceModalOpen, setServiceModalOpen] = useState<boolean>(false);

    const services = [
        { name: "Building Permit", permit_type: "Building" },
        { name: "Plumbing Permit", permit_type: "Plumbing" },
        { name: "Electronics Permit", permit_type: "Electronics" },
        { name: "Fence Permit", permit_type: "Fence" },
        { name: "Excavation Permit", permit_type: "Excavation" },
        { name: "Sanitary Permit", permit_type: "Sanitary" },
        { name: "Demolition Permit", permit_type: "Demolition" },
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
                
                <h1 className='font-bold text-2xl'>Apply Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full mt-5">

                    {services.map((data) => (
                        <button
                            onClick={() => clickService(data.permit_type)}
                            key={data.name}
                            className={classNames("p-4 w-full bg-orange-400 rounded-md text-white font-bold hover:bg-gray-400")}
                        >
                            {data.name}
                        </button>
                    ))}

                </div>

                <h1 className='font-semibold text-lg mt-[12rem]'>2024 | PTMS</h1>

            </div>
            {(serviceModalOpen && selectedService) && <ServiceModalForm selectedService={selectedService} setServiceModalOpen={setServiceModalOpen} />}
        </div>
    );
}

export default ApplyServicesPage;
