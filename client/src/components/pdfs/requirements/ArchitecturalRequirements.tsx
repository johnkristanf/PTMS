import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { CheckedArchituralRequirements } from '../../../http/put/application';
import { ArchitecturalRequirementFormData } from '../../../types/application';
import { FetchArchiteturalRequirements } from '../../../http/get/application';

const ArchitecturalRequirements = ({ applicationID, setRequirementsModal, setAllRequirementsChecked, allRequirementsChecked }: {
    applicationID: number
    setRequirementsModal: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    setAllRequirementsChecked: React.Dispatch<React.SetStateAction<boolean>>,
    allRequirementsChecked: boolean
})  => {
    const { register, handleSubmit, watch } = useForm<ArchitecturalRequirementFormData>();
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
        onError: (error: unknown) => {
            console.error("Checking Requirements Error:", error);
        },
    });

    const onSubmit: SubmitHandler<ArchitecturalRequirementFormData> = data => {
        data.application_id = applicationID;
        console.log("ArchitecturalRequirementFormData", data)
        mutation.mutate(data);
    };

    const { data: response } = useQuery({
        queryKey: ["architectural_requirements", applicationID],
        queryFn: async () => {
            const data = await FetchArchiteturalRequirements(applicationID);
            return data;
        },
        
    });


    useEffect(() => {
        // Check if all the fields from the response are true
        if (response?.data) {
            const allChecked = Object.values(response.data).every(Boolean);
            console.log("allChecked", allChecked);
            
            setAllRequirementsChecked(allChecked);
        }
    }, [response, setAllRequirementsChecked]);

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
                    <h1 className='font-semibold mb-8'>
                        Requirement Status: 
                        <span className={`${allRequirementsChecked ? 'text-green-600': 'text-red-800'} ml-1 font-bold`}>
                            {allRequirementsChecked ? 'Completed': 'Incomplete'}
                        </span> 
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-sm w-full h-[100%] overflow-auto">
                        <div className="grid grid-cols-1 gap-3 p-5">

                            <h1 className='text-xl font-bold'>Details, in the form of plans, elevations/sections:</h1>
                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Ramps ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Ramps")}
                                    defaultChecked={response?.data.Ramps}
                                    disabled={response?.data.Ramps ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Accessible ramps
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Stairs ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Stairs")}
                                    defaultChecked={response?.data.Stairs}
                                    disabled={response?.data.Stairs ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Accessible stairs
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.WalkWays ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("WalkWays")}
                                    defaultChecked={response?.data.WalkWays}
                                    disabled={response?.data.WalkWays ? true : false}

                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Accessible entrances, corridors, and walkways
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Comfort_Rooms ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Comfort_Rooms")}
                                    defaultChecked={response?.data.Comfort_Rooms}
                                    disabled={response?.data.Comfort_Rooms ? true : false}

                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Accessible functional areas/comfort rooms
                            </label>


                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Switches_Controls ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Switches_Controls")}
                                    defaultChecked={response?.data.Switches_Controls}
                                    disabled={response?.data.Switches_Controls ? true : false}

                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Accessible switches, controls
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Drinking_Fountains ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Drinking_Fountains")}
                                    defaultChecked={response?.data.Drinking_Fountains}
                                    disabled={response?.data.Drinking_Fountains ? true : false}

                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Accessible drinking fountains
                            </label>


                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Telephone_Booth ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Telephone_Booth")}
                                    defaultChecked={response?.data.Telephone_Booth}
                                    disabled={response?.data.Telephone_Booth ? true : false}

                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Accessible public telephone booths 
                            </label>


                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Automatic_AlarmSystem ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Automatic_AlarmSystem")}
                                    defaultChecked={response?.data.Automatic_AlarmSystem}
                                    disabled={response?.data.Automatic_AlarmSystem ? true : false}

                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Accessible audio visual and automatic alarm system
                            </label>


                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Directional_Signs ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Directional_Signs")}
                                    defaultChecked={response?.data.Directional_Signs}
                                    disabled={response?.data.Directional_Signs ? true : false}

                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Accessible access symbols and directional signs 
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Reserved_Parking ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Reserved_Parking")}
                                    defaultChecked={response?.data.Reserved_Parking}
                                    disabled={response?.data.Reserved_Parking ? true : false}

                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Reserved parking for disabled persons 
                            </label>


                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Wallbay_Sections ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Wallbay_Sections")}
                                    defaultChecked={response?.data.Wallbay_Sections}
                                    disabled={response?.data.Wallbay_Sections ? true : false}

                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Typical wall/bay sections from ground to roof
                            </label>


                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Stairs_Interior_Exterior ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Stairs_Interior_Exterior")}
                                    defaultChecked={response?.data.Stairs_Interior_Exterior}
                                    disabled={response?.data.Stairs_Interior_Exterior ? true : false}

                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Stairs, interior and exterior 
                            </label>


                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Fire_Exit ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Fire_Exit")}
                                    defaultChecked={response?.data.Fire_Exit}
                                    disabled={response?.data.Fire_Exit ? true : false}

                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Fire escapes/exits
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.BuiltIn_Cabinets ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("BuiltIn_Cabinets")}
                                    defaultChecked={response?.data.BuiltIn_Cabinets}
                                    disabled={response?.data.BuiltIn_Cabinets ? true : false}

                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Built-in cabinets, counters, and fixed furniture
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Partitions ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Partitions")}
                                    defaultChecked={response?.data.Partitions}
                                    disabled={response?.data.Partitions ? true : false}

                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                All types of partitions
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Schedule_Doors_Windows ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Schedule_Doors_Windows")}
                                    defaultChecked={response?.data.Schedule_Doors_Windows}
                                    disabled={response?.data.Schedule_Doors_Windows ? true : false}

                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Schedule of Doors and Windows
                            </label>


                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Schedule_Finishes ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Schedule_Finishes")}
                                    defaultChecked={response?.data.Schedule_Finishes}
                                    disabled={response?.data.Schedule_Finishes ? true : false}

                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Schedule of Doors and Windows
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Other_Architectural_Elements ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Other_Architectural_Elements")}
                                    defaultChecked={response?.data.Other_Architectural_Elements}
                                    disabled={response?.data.Other_Architectural_Elements ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Details of other major Architectural Elements
                            </label>

                            {/* INTERIOR DESIGN REQUIREMENTS */}
                            <h1 className='text-xl font-bold mt-5'>Architectural Interiors/Interior Design:</h1>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Space_Plan ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Space_Plan")}
                                    defaultChecked={response?.data.Space_Plan}
                                    disabled={response?.data.Space_Plan ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Space Plan/s or layout/s of architectural interior/s
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Architecture_Interior ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Architecture_Interior")}
                                    defaultChecked={response?.data.Architecture_Interior}
                                    disabled={response?.data.Architecture_Interior ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Architectural interior perspective/s
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Furniture_Furnishing_Equipments ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Furniture_Furnishing_Equipments")}
                                    defaultChecked={response?.data.Furniture_Furnishing_Equipments}
                                    disabled={response?.data.Furniture_Furnishing_Equipments ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Furniture/furnishing/equipment/process layout/s
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Detail_Design_Architectural ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Detail_Design_Architectural")}
                                    defaultChecked={response?.data.Detail_Design_Architectural}
                                    disabled={response?.data.Detail_Design_Architectural ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Detail design of major architectural interior elements
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Plan_Layout_Interior ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Plan_Layout_Interior")}
                                    defaultChecked={response?.data.Plan_Layout_Interior}
                                    disabled={response?.data.Plan_Layout_Interior ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Plan and layout of interior wall partitions
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Interior_Wall_Elevations ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Interior_Wall_Elevations")}
                                    defaultChecked={response?.data.Interior_Wall_Elevations}
                                    disabled={response?.data.Interior_Wall_Elevations ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Interior wall elevations showing finishes
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Floor_Ceiling_WallPatterns_Details ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Floor_Ceiling_WallPatterns_Details")}
                                    defaultChecked={response?.data.Floor_Ceiling_WallPatterns_Details}
                                    disabled={response?.data.Floor_Ceiling_WallPatterns_Details ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Floor/ceiling/wall patterns and finishing details
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.List_Material_Used ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("List_Material_Used")}
                                    defaultChecked={response?.data.List_Material_Used}
                                    disabled={response?.data.List_Material_Used ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                List of materials used
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Cost_Estimates ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Cost_Estimates")}
                                    defaultChecked={response?.data.Cost_Estimates}
                                    disabled={response?.data.Cost_Estimates ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Cost Estimates
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Plans_Specific_Locations ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Plans_Specific_Locations")}
                                    defaultChecked={response?.data.Plans_Specific_Locations}
                                    disabled={response?.data.Plans_Specific_Locations ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Plans and specific locations of all accessibility facilities
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Design_Accessibility_Facilities ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Design_Accessibility_Facilities")}
                                    defaultChecked={response?.data.Design_Accessibility_Facilities}
                                    disabled={response?.data.Design_Accessibility_Facilities ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Detailed design of all such accessibility facilities
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Plan_Evacuation_Route ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Plan_Evacuation_Route")}
                                    defaultChecked={response?.data.Plan_Evacuation_Route}
                                    disabled={response?.data.Plan_Evacuation_Route ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Layout plan of each floor indicating the fire evacuation route
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Details_Windows_FireExits ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Details_Windows_FireExits")}
                                    defaultChecked={response?.data.Details_Windows_FireExits}
                                    disabled={response?.data.Details_Windows_FireExits ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Details of windows, fire exits with grilled windows and ladders
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Details_FireResistive_Vertical_Openings ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Details_FireResistive_Vertical_Openings")}
                                    defaultChecked={response?.data.Details_FireResistive_Vertical_Openings}
                                    disabled={response?.data.Details_FireResistive_Vertical_Openings ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Details of fire-resistive construction of enclosures
                            </label>

                            <label className={`flex items-center font-semibold text-md p-2 rounded-md ${response?.data.Details_FireResistive_Decorative_Materials ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                                <input
                                    type="checkbox"
                                    {...register("Details_FireResistive_Decorative_Materials")}
                                    defaultChecked={response?.data.Details_FireResistive_Decorative_Materials}
                                    disabled={response?.data.Details_FireResistive_Decorative_Materials ? true : false}
                                    className="mr-2 form-checkbox h-5 w-5 text-green-600"
                                />
                                Details of fire-resistive construction materials
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

export default ArchitecturalRequirements;
