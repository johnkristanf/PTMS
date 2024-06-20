import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { CheckedElectricalRequirements } from '../../../http/put/application';
import { FetchCivilRequirements, FetchElectricalRequirements } from '../../../http/get/application';
import { ElectricalRequirementFormData } from '../../../types/application';



const ElectricalRequirements = ({ applicationID, setRequirementsModal }: {
    applicationID: number
    setRequirementsModal: React.Dispatch<React.SetStateAction<boolean | undefined>>
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
        onError: (error: any) => {
            console.error("Checking Requirements Error:", error);
        },
    });

    const onSubmit: SubmitHandler<ElectricalRequirementFormData> = data => {
        data.application_id = applicationID;
        console.log("ElectricalRequirementFormData", data)
        mutation.mutate(data);
    };

    const { data: response } = useQuery({
        queryKey: ["pending_applications", applicationID],
        queryFn: async () => {
            const data = await FetchElectricalRequirements(applicationID);
            return data;
        },
    });

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
                    <h1 className='font-bold text-3xl mb-5'>Electrical Requirements</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-sm w-full h-[100%] overflow-auto">
                        <div className="grid grid-cols-1 gap-3 p-5">
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Location_Site_Plan")} defaultChecked={response?.data.Location_Site_Plan} className="mr-2 checkbox-large" />
                                Location and Site Plans
                            </label>

                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Legend_Symbols")} defaultChecked={response?.data.Legend_Symbols} className="mr-2 checkbox-large" />
                                Legend or Symbols
                            </label>

                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("General_Notes")} defaultChecked={response?.data.General_Notes} className="mr-2 checkbox-large" />
                                General Notes and/or Specifications
                            </label>

                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Electrical_Layout")} defaultChecked={response?.data.Electrical_Layout} className="mr-2 checkbox-large" />
                                Electrical Layout
                            </label>

                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Schedule_Loads")} defaultChecked={response?.data.Schedule_Loads} className="mr-2 checkbox-large" />
                                Schedule of Loads, Transformers, Generating/UPS Units (Total kVA for each of the preceding items shall be indicated in the schedule) 
                            </label>

                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Design_Analysis")} defaultChecked={response?.data.Design_Analysis} className="mr-2 checkbox-large" />
                                Design Analysis
                            </label>

                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("One_Line_Diagram")} defaultChecked={response?.data.One_Line_Diagram} className="mr-2 checkbox-large" />
                                One Line Diagram
                            </label>
                        </div>

                        <div className="flex flex-col items-center w-full gap-4 mt-5">
                            <button type="submit" disabled={!isChanged} className={`w-[85%] text-white font-bold py-2 px-4 rounded w-1/2 ${isChanged ? 'bg-orange-500 hover:opacity-75' : 'bg-gray-500 cursor-not-allowed'}`}>
                                Save
                            </button>

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
