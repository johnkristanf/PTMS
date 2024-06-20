import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { CheckedCivilRequirements } from '../../../http/put/application';
import { FetchCivilRequirements } from '../../../http/get/application';
import { CivilRequirementFormData } from '../../../types/application';



const CivilRequirements = ({ applicationID, setRequirementsModal }: {
    applicationID: number
    setRequirementsModal: React.Dispatch<React.SetStateAction<boolean | undefined>>
}) => {
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
        onError: (error: any) => {
            console.error("Checking Requirements Error:", error);
        },
    });

    const onSubmit: SubmitHandler<CivilRequirementFormData> = data => {
        data.application_id = applicationID;
        console.log("CivilRequirementFormData", data)
        mutation.mutate(data);
    };

    const { data: response } = useQuery({
        queryKey: ["pending_applications", applicationID],
        queryFn: async () => {
            const data = await FetchCivilRequirements(applicationID);
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
                    <h1 className='font-bold text-3xl mb-5'>Civil Requirements</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-sm w-full h-[100%] overflow-auto">
                        <div className="grid grid-cols-1 gap-3 p-5">
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Site_Development_Plan")} defaultChecked={response?.data.Site_Development_Plan} className="mr-2 checkbox-large" />
                                Site Development Plan
                            </label>

                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Foundation_Plans")} defaultChecked={response?.data.Foundation_Plans} className="mr-2 checkbox-large" />
                                Foundation Plans and Details at scale of not less than 1:100.
                            </label>

                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Roof_Floor_Framing_Plans")} defaultChecked={response?.data.Roof_Floor_Framing_Plans} className="mr-2 checkbox-large" />
                                Floor/Roof Framing Plans and Details at scale of not less than 1:100.
                            </label>

                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Details_Schedule_Civil_WorkElements")} defaultChecked={response?.data.Details_Schedule_Civil_WorkElements} className="mr-2 checkbox-large" />
                                Details and Schedules of structural and civil works elements including those for deep wells, water reservoir, pipe lines and sewer system.
                            </label>

                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Structural_Analysis_Design")} defaultChecked={response?.data.Structural_Analysis_Design} className="mr-2 checkbox-large" />
                                Structural Analysis and Design for all buildings/structures except for one storey and single detached building/structure with a total floor area of 20.00 sq. meters or less.
                            </label>

                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Boring_Load_Test")} defaultChecked={response?.data.Boring_Load_Test} className="mr-2 checkbox-large" />
                                Boring and Load Tests
                            </label>

                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Seismic_Analysis")} defaultChecked={response?.data.Seismic_Analysis} className="mr-2 checkbox-large" />
                                Seismic Analysis
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

export default CivilRequirements;
