import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { CheckedElectricalRequirements } from '../../../http/put/application';
import { FetchElectricalRequirements } from '../../../http/get/application';
import { ElectricalRequirementFormData } from '../../../types/application';



const ElectricalRequirements = ({ applicationID, setRequirementsModal, setAllRequirementsChecked, allRequirementsChecked }: {
    applicationID: number
    setRequirementsModal: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    setAllRequirementsChecked: React.Dispatch<React.SetStateAction<boolean>>,
    allRequirementsChecked: boolean
}) => {
    const { register, handleSubmit, watch } = useForm<ElectricalRequirementFormData>();
    const [isChanged, setIsChanged] = useState(false);

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: CheckedElectricalRequirements,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["pending_applications"] });

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Electrical Requirements Checked!",
                showConfirmButton: true,
            }).then(result => {
                if (result.isConfirmed || result.isDismissed) setRequirementsModal(false)
            })
        },
        onError: (error: unknown) => {
            console.error("Checking Requirements Error:", error);
        },
    });

    const onSubmit: SubmitHandler<ElectricalRequirementFormData> = data => {
        data.application_id = applicationID;
        console.log("ElectricalRequirementFormData", data)
        mutation.mutate(data);
    };

    const { data: response } = useQuery({
        queryKey: ["electrical_requirements", applicationID],
        queryFn: async () => {
            const data = await FetchElectricalRequirements(applicationID);
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


    console.log("electrical requirements: ", response?.data);
    



    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-75"></div>

            <div className="w-full fixed top-3 left-0 h-screen flex justify-center ">

                <div className="flex flex-col items-center h-[95%] py-4 w-[55%] bg-white rounded-md">
                    <h1 className='font-bold text-3xl mb-5'>Electrical Requirements</h1>
                    <h1 className='font-semibold mb-8'>
                        Requirement Status: 
                        <span className={`${allRequirementsChecked ? 'text-green-600': 'text-red-800'} ml-1 font-bold`}>
                            {allRequirementsChecked ? 'Completed': 'Incomplete'}
                        </span> 
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-sm w-full h-full overflow-auto">
                        <div className="grid grid-cols-1 gap-3 p-2">
                            <h1 className='text-lg font-bold mt-5'>Electrical plans and technical specifications containing the following:</h1>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Location_Site_Plan ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input 
                                    type="checkbox" 
                                    {...register("Location_Site_Plan")} 
                                    defaultChecked={response?.data.Location_Site_Plan}
                                    disabled={response?.data.Location_Site_Plan ? true : false}
                                    className="mr-2 h-5 w-5 text-green-600"
                                />
                                Location and Site Plans
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Legend_Symbols ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input 
                                    type="checkbox" 
                                    {...register("Legend_Symbols")} 
                                    defaultChecked={response?.data.Legend_Symbols} 
                                    disabled={response?.data.Legend_Symbols ? true : false}
                                    className="mr-2 checkbox-large" 
                                />
                                Legend or Symbols
                            </label>

                                <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.General_Notes ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>

                                <input 
                                    type="checkbox" 
                                    {...register("General_Notes")} 
                                    defaultChecked={response?.data.General_Notes} 
                                    disabled={response?.data.General_Notes ? true : false}
                                    className="mr-2 checkbox-large" 
                                />
                                General Notes and/or Specifications
                            </label>

                                <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Electrical_Layout ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>

                                <input 
                                    type="checkbox" 
                                    {...register("Electrical_Layout")} 
                                    defaultChecked={response?.data.Electrical_Layout} 
                                    disabled={response?.data.Electrical_Layout ? true : false}
                                    className="mr-2 checkbox-large" 
                                />
                                Electrical Layout
                            </label>

                                <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Schedule_Loads ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>

                                <input 
                                    type="checkbox" 
                                    {...register("Schedule_Loads")} 
                                    defaultChecked={response?.data.Schedule_Loads} 
                                    disabled={response?.data.Schedule_Loads ? true : false}
                                    className="mr-2 checkbox-large" 
                                />
                                Schedule of Loads, Transformers, Generating/UPS Units (Total kVA for each of the preceding items shall be indicated in the schedule) 
                            </label>

                                <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Design_Analysis ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>

                                <input 
                                    type="checkbox" 
                                    {...register("Design_Analysis")} 
                                    defaultChecked={response?.data.Design_Analysis} 
                                    disabled={response?.data.Design_Analysis ? true : false}
                                    className="mr-2 checkbox-large" 
                                />
                                Design Analysis
                            </label>

                                <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.One_Line_Diagram ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>

                                <input 
                                    type="checkbox" 
                                    {...register("One_Line_Diagram")} 
                                    defaultChecked={response?.data.One_Line_Diagram} 
                                    disabled={response?.data.One_Line_Diagram ? true : false}
                                    className="mr-2 checkbox-large" 
                                />
                                One Line Diagram
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

export default ElectricalRequirements;
