import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import '../../../assets/scrollStyle.css';
import { FetchAssessments } from '../../../http/get/assesments';
import { AssessmentRender, AssessmentsFormData } from '../../../types/assessment';
import { SetPaidAssessment } from '../../../http/post/assessment';
import Swal from 'sweetalert2';
import { ChangeEvent, useEffect, useState } from 'react';

type FeeKey = 
    "building_construction" |
    "electrical_installation" |
    "mechanical_installation" |
    "plumbing_installation" |
    "electronics_installation" |
    "building_accessories" |
    "other_accessories" |
    "building_occupancy" |
    "building_inspection" |
    "fines_surcharges_penalties" |
    "total_assessments";

export const AssessmentCheckListModal = ({ applicationID, setAssessmentChecklist }: {
    applicationID: number | undefined
    setAssessmentChecklist: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    
    const queryClient = useQueryClient();
    const [orNumberType, setOrNumberType] = useState<string>();

    const assessmentQuery = useQuery({
        queryKey: ['assessments', applicationID],
        queryFn: async () => {
            const data = await FetchAssessments(applicationID)
            return data
        },
    });

    const assessments: AssessmentRender | undefined = assessmentQuery.data;

    const feeNames: { name: string, key: FeeKey }[] = [
        { name: "Building Construction Fee", key: "building_construction" },
        { name: "Electrical Installation Fee", key: "electrical_installation" },
        { name: "Mechanical Installation Fee", key: "mechanical_installation" },
        { name: "Plumbing Installation Fee", key: "plumbing_installation" },
        { name: "Electronic Installation Fee", key: "electronics_installation" },
        { name: "Building Accessories Fee", key: "building_accessories" },
        { name: "Other Accessories Fee", key: "other_accessories" },
        { name: "Building Occupancy Fee", key: "building_occupancy" },
        { name: "Building Inspection Fee", key: "building_inspection" },
        { name: "Fines/Surcharges/Penalties", key: "fines_surcharges_penalties" },
        { name: "Total Assessments", key: "total_assessments" }
    ];

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<AssessmentsFormData>({
        defaultValues: {
            applicationID: applicationID,
            datePaid: new Date().toISOString().split("T")[0],
            orNumber: ''
        }
    });

    const mutation = useMutation({
        mutationFn: SetPaidAssessment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["pending_applications"] });

            Swal.fire({
                icon: "success",
                title: "Assessment Paid Successfully!",
                showConfirmButton: true,
                confirmButtonColor: '#c2410c'
            });

            setAssessmentChecklist(false)
        },
        onError: (error: unknown) => {
            console.error("Signup error:", error);
        },
    });

    const onSubmit: SubmitHandler<AssessmentsFormData> = data => {
        console.log(data);
        mutation.mutate(data);
    };

    useEffect(() => {
        if (orNumberType === 'exempted') {
          setValue('orNumber', 'Exempted');
        }   
    }, [orNumberType, setValue]);


    const onORTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setOrNumberType(e.target.value);
    }

    const statusColor = assessments?.status.toLowerCase() === 'paid' ? 'text-green-500' : 'text-gray-500';
    const isPaid = assessments?.status.toLowerCase() === 'paid';

    return (
        <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center">
            <div className="fixed top-0 bg-gray-600 opacity-75 w-full h-screen"></div>
            
            <div className="fixed top-16 w-full h-[90%] flex items-center justify-center rounded-md p-5">
                <div className="bg-white w-[70%] p-5 rounded-md h-full overflow-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full flex items-center justify-between gap-8 mb-3">
                            <div className="flex flex-col gap-2">
                                <h1 className='text-3xl font-semibold'>Assessments</h1>
                                <h1 className='font-semibold text-lg'>Payment Status: <span className={statusColor}>{ assessments?.status.toUpperCase() }</span> </h1>
                            </div>
                            {
                                !isPaid ? (
                                    <div className="flex gap-5">
                                        <div className="flex flex-col gap-2">
                                            <label className="font-semibold">Date Paid:</label>
                                            <input 
                                                type="date" 
                                                {...register("datePaid")} 
                                                defaultValue={new Date().toISOString().split("T")[0]} // Sets default to today's date
                                                className={errors.datePaid ? "border-red-500" : ""}
                                                required
                                            />
                                            {!isPaid && errors.datePaid && <span className="text-red-500">This field is required</span>}
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="font-semibold">OR Number:</label>

                                            <div className="relative"> 
                                                {orNumberType === "number" ? (
                                                    <input
                                                        type="number"
                                                        placeholder="Enter OR Number"
                                                        {...register("orNumber")}
                                                        required
                                                        className={`bg-gray-400 rounded-md p-2 placeholder-black focus:outline-white text-white placeholder:text-white w-full ${
                                                        errors.orNumber ? "border-red-500" : ""
                                                        }`}
                                                    />
                                                ) : (
                                                    <input
                                                        type="text"
                                                        value="Exempted"
                                                        {...register("orNumber")}
                                                        disabled
                                                        className="bg-gray-400 rounded-md p-2 text-white w-full hover:cursor-not-allowed"
                                                    />
                                                )}
                                                    <select
                                                        className="w-[12%] absolute right-[2px] top-[1px] bg-gray-400 rounded-r-md p-1 text-white focus:outline-none w-16" // Adjust width as needed
                                                        onChange={onORTypeChange}
                                                    >
                                                        <option value="number">Number</option>
                                                        <option value="exempted">Exempted</option>
                                                    </select>
                                            </div>
                                            </div>
                                    </div>

                                ) : (
                                    <div className="flex flex-col gap-5 font-semibold">

                                        <div className="flex gap-2">
                                            <label >Payor:</label>
                                            <label >{assessments.full_name}</label>
                                        </div>

                                        <div className="flex gap-2">
                                            <label >Date Paid:</label>
                                            <label >{assessments.date_paid}</label>
                                        </div>

                                        <div className="flex gap-2">
                                            <label>OR Number:</label>
                                            <label>{assessments.or_number}</label>
                                        </div>

                                    </div>
                                )
                            }

                        </div>


                        {/* Hidden input for applicationID */}
                        <input type="hidden" {...register("applicationID")} />

                        {/* TABLE DIV */}
                        <div className="flex flex-col bg-white w-full h-full rounded-md">
                            <div className="overflow-y-auto overflow-x-hidden custom-scrollbar h-96">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="w-full text-left text-sm font-light">
                                            <thead className="border-b font-medium dark:border-neutral-500">
                                                <tr>
                                                    <th scope="col" className="px-4 py-4">Assessment List</th>
                                                    <th scope="col" className="px-4 py-4">{isPaid ? 'Amount Paid': 'Amount Due'}</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {feeNames.map(fee => (
                                                    <tr key={fee.key} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                        <td className="whitespace-nowrap pl-6 py-4 font-medium">{fee.name}</td>
                                                        <td className="whitespace-nowrap pl-6 py-4">₱ {fee.key === "total_assessments" ? assessments?.[fee.key] : assessments?.[fee.key]}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END OF TABLE DIV */}
                        
                        <div className="flex justify-between items-center w-full mt-5 px-8">
                            <div className="flex items-center mt-2 gap-3  text-md">
                                <h1 className='font-semibold'>Assessed by:</h1>
                                <h1 className='font-semibold '>Peter Alfred D. Cabalda</h1>
                            </div>
                            <div className="flex gap-3 w-[30%]">
                                <button
                                    onClick={() => setAssessmentChecklist(false)}
                                    className={`bg-black rounded-md p-2 ${!isPaid ? 'w-[50%]': 'w-full' } text-white hover:opacity-75`}>
                                    Close
                                </button>
                                {!isPaid && (
                                    <button
                                        type='submit'
                                        className='bg-orange-700 rounded-md p-2 w-[50%] text-white hover:opacity-75'>
                                        Save
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

