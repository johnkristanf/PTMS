import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { CheckedArchituralRequirements } from '../../../http/put/application';
import { ArchitecturalRequirementFormData } from '../../../types/application';
import { FetchArchiteturalRequirements } from '../../../http/get/application';

const ArchitecturalRequirements = ({ applicationID, setRequirementsModal }: {
    applicationID: number
    setRequirementsModal: React.Dispatch<React.SetStateAction<boolean | undefined>>
}) => {
    const { register, handleSubmit, reset, watch } = useForm<ArchitecturalRequirementFormData>();
    const [isChanged, setIsChanged] = useState(false);

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: CheckedArchituralRequirements,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["pending_applications"] });

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Architectural Requirements Checked!",
                showConfirmButton: true,
            }).then(result => {
                if(result.isConfirmed || result.isDismissed) setRequirementsModal(false)
            })
        },
        onError: (error: any) => {
            console.error("Checking Requirements Error:", error);
        },
    });

    const onSubmit: SubmitHandler<ArchitecturalRequirementFormData> = data => {
        data.application_id = applicationID;
        console.log("ArchitecturalRequirementFormData", data)
        mutation.mutate(data);
    };

    const { data: response } = useQuery({
        queryKey: ["pending_applications", applicationID],
        queryFn: async () => {
            const data = await FetchArchiteturalRequirements(applicationID);
            return data;
        },
        
    });

    useEffect(() => {
        const subscription = watch(() => {
            setIsChanged(true);
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    console.log("response?.data architectural", response?.data);

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-75"></div>

            <div className="w-full fixed top-3 left-0 h-screen flex justify-center ">

                <div className="flex flex-col items-center h-[95%] py-4 w-[55%] bg-white rounded-md">
                    <h1 className='font-bold text-3xl mb-5'>Architectural Requirements</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-sm w-full h-[100%] overflow-auto">
                        <div className="grid grid-cols-1 gap-3 p-5">
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Ramps")} defaultChecked={response?.data.Ramps} className="mr-2 checkbox-large" />
                                Accessible ramps
                            </label>

                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Stairs")} defaultChecked={response?.data.Stairs} className="mr-2 checkbox-large" />
                                Accessible stairs
                            </label>

                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("WalkWays")} defaultChecked={response?.data.WalkWays} className="mr-2 checkbox-large" />
                                Accessible entrances, corridors, and walkways
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Comfort_Rooms")} defaultChecked={response?.data.Comfort_Rooms} className="mr-2 checkbox-large" />
                                Accessible functional areas/comfort rooms
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Switches_Controls")} defaultChecked={response?.data.Switches_Controls} className="mr-2 checkbox-large" />
                                Accessible switches, controls
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Drinking_Fountains")} defaultChecked={response?.data.Drinking_Fountains} className="mr-2 checkbox-large" />
                                Accessible drinking fountains
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Telephone_Booth")} defaultChecked={response?.data.Telephone_Booth} className="mr-2 checkbox-large" />
                                Accessible public telephone booths
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Automatic_AlarmSystem")} defaultChecked={response?.data.Automatic_AlarmSystem} className="mr-2 checkbox-large" />
                                Accessible audio visual and automatic alarm system
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Directional_Signs")} defaultChecked={response?.data.Directional_Signs} className="mr-2 checkbox-large" />
                                Accessible access symbols and directional signs
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Reserved_Parking")} defaultChecked={response?.data.Reserved_Parking} className="mr-2 checkbox-large" />
                                Reserved parking for disabled persons
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Wallbay_Sections")} defaultChecked={response?.data.Wallbay_Sections} className="mr-2 checkbox-large" />
                                Typical wall/bay sections from ground to roof
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Stairs_Interior_Exterior")} defaultChecked={response?.data.Stairs_Interior_Exterior} className="mr-2 checkbox-large" />
                                Stairs, interior and exterior
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Fire_Exit")} defaultChecked={response?.data.Fire_Exit} className="mr-2 checkbox-large" />
                                Fire escapes/exits
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("BuiltIn_Cabinets")} defaultChecked={response?.data.BuiltIn_Cabinets} className="mr-2 checkbox-large" />
                                Built-in cabinets, counters, and fixed furniture
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Partitions")} defaultChecked={response?.data.Partitions} className="mr-2 checkbox-large" />
                                All types of partitions
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Schedule_Doors_Windows")} defaultChecked={response?.data.Schedule_Doors_Windows} className="mr-2 checkbox-large" />
                                Schedule of Doors and Windows
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Schedule_Finishes")} defaultChecked={response?.data.Schedule_Finishes} className="mr-2 checkbox-large" />
                                Schedule of Finishes
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Other_Architectural_Elements")} defaultChecked={response?.data.Other_Architectural_Elements} className="mr-2 checkbox-large" />
                                Details of other major Architectural Elements
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Space_Plan")} defaultChecked={response?.data.Space_Plan} className="mr-2 checkbox-large" />
                                Space Plan/s or layout/s of architectural interior/s
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Architecture_Interior")} defaultChecked={response?.data.Architecture_Interior} className="mr-2 checkbox-large" />
                                Architectural interior perspective/s
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Furniture_Furnishing_Equipments")} defaultChecked={response?.data.Furniture_Furnishing_Equipments} className="mr-2 checkbox-large" />
                                Furniture/furnishing/equipment/process layout/s
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Detail_Design_Architectural")} defaultChecked={response?.data.Detail_Design_Architectural}
                                className="mr-2 checkbox-large" />
                                Detail design of major architectural interior elements
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Plan_Layout_Interior")} defaultChecked={response?.data.Plan_Layout_Interior} className="mr-2 checkbox-large" />
                                Plan and layout of interior wall partitions
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Interior_Wall_Elevations")} defaultChecked={response?.data.Interior_Wall_Elevations} className="mr-2 checkbox-large" />
                                Interior wall elevations showing finishes
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Floor_Ceiling_WallPatterns_Details")} defaultChecked={response?.data.Floor_Ceiling_WallPatterns_Details} className="mr-2 checkbox-large" />
                                Floor/ceiling/wall patterns and finishing details
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("List_Material_Used")} defaultChecked={response?.data.List_Material_Used} className="mr-2 checkbox-large" />
                                List of materials used
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Cost_Estimates")} defaultChecked={response?.data.Cost_Estimates} className="mr-2 checkbox-large" />
                                Cost Estimates
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Plans_Specific_Locations")} defaultChecked={response?.data.Plans_Specific_Locations} className="mr-2 checkbox-large" />
                                Plans and specific locations of all accessibility facilities
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Design_Accessibility_Facilities")} defaultChecked={response?.data.Design_Accessibility_Facilities} className="mr-2 checkbox-large" />
                                Detailed design of all such accessibility facilities
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Plan_Evacuation_Route")} defaultChecked={response?.data.Plan_Evacuation_Route} className="mr-2 checkbox-large" />
                                Layout plan of each floor indicating the fire evacuation route
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Details_Windows_FireExits")} defaultChecked={response?.data.Details_Windows_FireExits} className="mr-2 checkbox-large" />
                                Details of windows, fire exits with grilled windows and ladders
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Details_FireResistive_Vertical_Openings")} defaultChecked={response?.data.Details_FireResistive_Vertical_Openings} className="mr-2 checkbox-large" />
                                Details of fire-resistive construction of enclosures
                            </label>
                            <label className="flex items-center font-semibold text-lg">
                                <input type="checkbox" {...register("Details_FireResistive_Decorative_Materials")} defaultChecked={response?.data.Details_FireResistive_Decorative_Materials} className="mr-2 checkbox-large" />
                                Details of fire-resistive construction materials
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

export default ArchitecturalRequirements;
