import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { CheckedCivilRequirements } from '../../../http/put/application';
import { FetchCivilRequirements } from '../../../http/get/application';
import { CivilRequirementFormData } from '../../../types/application';



const CivilRequirements = ({ applicationID, setRequirementsModal, setAllRequirementsChecked, allRequirementsChecked }: {
    applicationID: number
    setRequirementsModal: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    setAllRequirementsChecked: React.Dispatch<React.SetStateAction<boolean>>,
    allRequirementsChecked: boolean
})  => {
    const { register, handleSubmit, watch } = useForm<CivilRequirementFormData>();
    const [isChanged, setIsChanged] = useState(false);

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: CheckedCivilRequirements,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["pending_applications"] });

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Civil Requirements Checked!",
                showConfirmButton: true,
            }).then(result => {
                if (result.isConfirmed || result.isDismissed) setRequirementsModal(false)
            })
        },
        onError: (error: unknown) => {
            console.error("Checking Requirements Error:", error);
        },
    });

    const onSubmit: SubmitHandler<CivilRequirementFormData> = data => {
        data.application_id = applicationID;
        console.log("CivilRequirementFormData", data)
        mutation.mutate(data);
    };

    const { data: response } = useQuery({
        queryKey: ["civil_requirements", applicationID],
        queryFn: async () => {
            const data = await FetchCivilRequirements(applicationID);
            return data;
        },
    });

    useEffect(() => {
        // Check if all the fields from the response are true
        if (response?.data) {
            const allChecked = Object.values(response.data).every(Boolean);
            setAllRequirementsChecked(allChecked);
        }
    }, [response, setAllRequirementsChecked]);

    useEffect(() => {
        const subscription = watch(() => {
            setIsChanged(true);
        });
        return () => subscription.unsubscribe();
    }, [watch]);


    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-75"></div>

            <div className="w-full fixed top-3 left-0 h-screen flex justify-center ">

                <div className="flex flex-col items-center h-[95%] py-4 w-[55%] bg-white rounded-md">
                    <h1 className='font-bold text-3xl mb-5'>Civil Requirements</h1>
                    <h1 className='font-semibold mb-8'>
                        Requirement Status: 
                        <span className={`${allRequirementsChecked ? 'text-green-600': 'text-red-800'} ml-1 font-bold`}>
                            {allRequirementsChecked ? 'Completed': 'Incomplete'}
                        </span> 
                    </h1>


                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-sm w-full h-[100%] overflow-auto">
                        <div className="grid grid-cols-1 gap-3 p-5">
    
                        <h1 className='text-lg font-bold'>Civil plans and technical specifications containing the following:</h1>

                        <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Site_Development_Plan ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                            <input 
                                type="checkbox" 
                                {...register("Site_Development_Plan")} 
                                defaultChecked={response?.data.Site_Development_Plan} 
                                disabled={response?.data.Site_Development_Plan ? true : false}
                                className="mr-2 checkbox-large" 
                            />
                            Site Development Plan
                        </label>

                        <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Foundation_Plans ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                            <input 
                                type="checkbox" 
                                {...register("Foundation_Plans")} 
                                defaultChecked={response?.data.Foundation_Plans} 
                                disabled={response?.data.Foundation_Plans ? true : false}
                                className="mr-2 checkbox-large" 
                            />
                            Foundation Plans and Details at scale of not less than 1:100.
                        </label>

                        <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Roof_Floor_Framing_Plans ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                            <input 
                                type="checkbox" 
                                {...register("Roof_Floor_Framing_Plans")} 
                                defaultChecked={response?.data.Roof_Floor_Framing_Plans} 
                                disabled={response?.data.Roof_Floor_Framing_Plans ? true : false}
                                className="mr-2 checkbox-large" 
                            />
                            Floor/Roof Framing Plans and Details at scale of not less than 1:100.
                        </label>

                        <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Details_Schedule_Civil_WorkElements ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                            <input 
                                type="checkbox" 
                                {...register("Details_Schedule_Civil_WorkElements")} 
                                defaultChecked={response?.data.Details_Schedule_Civil_WorkElements} 
                                disabled={response?.data.Details_Schedule_Civil_WorkElements ? true : false}
                                className="mr-2 checkbox-large" 
                            />
                            Details and Schedules of structural and civil works elements including those for deep wells, water reservoir, pipe lines and sewer system.
                        </label>

                        <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Structural_Analysis_Design ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                            <input 
                                type="checkbox" 
                                {...register("Structural_Analysis_Design")} 
                                defaultChecked={response?.data.Structural_Analysis_Design} 
                                disabled={response?.data.Structural_Analysis_Design ? true : false}
                                className="mr-2 checkbox-large" 
                            />
                            Structural Analysis and Design for all buildings/structures except for one storey and single detached building/structure with a total floor area of 20.00 sq. meters or less.
                        </label>

                        <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Boring_Load_Test ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                            <input 
                                type="checkbox" 
                                {...register("Boring_Load_Test")} 
                                defaultChecked={response?.data.Boring_Load_Test} 
                                disabled={response?.data.Boring_Load_Test ? true : false}
                                className="mr-2 checkbox-large" 
                            />
                            Boring and Load Tests
                        </label>

                        <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Seismic_Analysis ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                            <input 
                                type="checkbox" 
                                {...register("Seismic_Analysis")} 
                                defaultChecked={response?.data.Seismic_Analysis} 
                                disabled={response?.data.Seismic_Analysis ? true : false}
                                className="mr-2 checkbox-large" 
                            />
                            Seismic Analysis
                        </label>


                        </div>

                        <div className="flex flex-col items-center w-full gap-4 mt-5">
                            {
                                !allRequirementsChecked && (
                                    <button type="submit" disabled={!isChanged} className={`w-[85%] text-white font-bold py-2 px-4 rounded w-1/2 ${isChanged ? 'bg-orange-500 hover:opacity-75' : 'bg-gray-500 cursor-not-allowed'}`}>
                                        Save
                                    </button>
                                )
                            }

                            <button
                                onClick={() => setRequirementsModal(false)}
                                className='w-[85%] bg-black hover:opacity-75 text-white font-bold py-2 px-4 rounded w-1/2'>
                                Back
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CivilRequirements;
