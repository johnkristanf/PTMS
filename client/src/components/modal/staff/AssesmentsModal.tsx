
import { SubmitHandler, useForm } from "react-hook-form";
import { AssessmentModalProps } from "../../../types/props";
import { SetAssesment } from "../../../http/post/assessment";
import { AssessmentTypes } from "../../../types/assessment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FetchAssessments } from "../../../http/get/assesments";
import { useState } from "react";
import AssessmentsPDF from "../../pdfs/Assessments";
import Swal from "sweetalert2";

export const AssessmentsModal: React.FC<AssessmentModalProps> = ({ applicantAssessmentInfo, setAssessment }) => {
    const { register, handleSubmit, reset } = useForm<AssessmentTypes>();
    const [renderAssessmentPDF, setRenderAssessmentPDF] = useState<boolean>(false)


    const applicationId = applicantAssessmentInfo.application_id;
    const assessmentQuery = useQuery({
        queryKey: ['assessments', applicationId],
        queryFn: async () => {
          const data = await FetchAssessments(applicationId)
          return data
        },
    })
    const assessments = assessmentQuery.data

    console.log("assessments", assessments)

    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    };
    const formattedDate = today.toLocaleDateString('en-US', options);


    const orderOfPayment: {
        registerName: string;
        label: string;
        inputType: string;
        value: string;
        disabled: boolean
    }[] = []

   const assessmentList: {
        registerName: string;
        label: string;
        value: number;
    }[] = []

    if(assessments){

        orderOfPayment.push(
            { registerName: "assessment_controlNo", label: "Assessment Control Number", inputType: "number", value: assessments.assessment_controlNo, disabled: false },
            { registerName: "date", label: "Date", inputType: "text", value: formattedDate, disabled: true },

            { registerName: "applicant_name", label: "Name", inputType: "text", value: applicantAssessmentInfo.applicant_name, disabled: true },
            { registerName: "permit_type", label: "Permit Type", inputType: "text", value: applicantAssessmentInfo.permit_type, disabled: true  },

            { registerName: "project_proposed", label: "Project Proposed", inputType: "text", value: assessments.project_proposed, disabled: false },
            { registerName: "location", label: "Location", inputType: "text", value: assessments.location, disabled: false },

            { registerName: "units", label: "Units", inputType: "number", value: assessments.units, disabled: false }
        );
    
        assessmentList.push(
            { registerName: "building_construction", label: "Building Construction Fee (₱)", value: assessments.building_construction },
            { registerName: "electrical_installation", label: "Electrical Installation Fee (₱)", value: assessments.electrical_installation },

            { registerName: "mechanical_installation", label: "Mechanical Installation Fee (₱)", value: assessments.mechanical_installation },
            { registerName: "plumbing_installation", label: "Plumbing Installation Fee (₱)", value: assessments.plumbing_installation },

            { registerName: "electronics_installation", label: "Electronic Installation Fee (₱)", value: assessments.electronics_installation },
            { registerName: "building_accessories", label: "Building Accessories Fee (₱)", value: assessments.building_accessories },

            { registerName: "other_accessories", label: "Other Accessories Fee (₱)", value: assessments.other_accessories },
            { registerName: "building_occupancy", label: "Building Occupancy Fee (₱)", value: assessments.building_occupancy },

            { registerName: "building_inspection", label: "Building Inspection Fee (₱)", value: assessments.building_inspection },
            { registerName: "fines_surcharges_penalties", label: "Fines/Surcharges/Penalties (₱)", value: assessments.fines_surcharges_penalties }
        );

        assessments.applicantName = applicantAssessmentInfo.applicant_name
        assessments.permitType = applicantAssessmentInfo.permit_type
    }
    
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: SetAssesment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["assessments"] });
            
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Assessment Added!",
                showConfirmButton: true,
            });

            setRenderAssessmentPDF(true);

            reset();

        },
        onError: (error) => {
            console.error("Set Assessment:", error);
        },
    });


    const onSubmit: SubmitHandler<AssessmentTypes> = (data) => {

        console.log("assessments", data)
        
        const convertedData = {
            ...data,
            building_construction: parseFloat(data.building_construction as unknown as string),
            electrical_installation: parseFloat(data.electrical_installation as unknown as string),
            mechanical_installation: parseFloat(data.mechanical_installation as unknown as string),
            plumbing_installation: parseFloat(data.plumbing_installation as unknown as string),
            electronics_installation: parseFloat(data.electronics_installation as unknown as string),
            building_accessories: parseFloat(data.building_accessories as unknown as string),
            other_accessories: parseFloat(data.other_accessories as unknown as string),
            building_occupancy: parseFloat(data.building_occupancy as unknown as string),
            building_inspection: parseFloat(data.building_inspection as unknown as string),
            fines_surcharges_penalties: parseFloat(data.fines_surcharges_penalties as unknown as string),
        };

        if (applicantAssessmentInfo.application_id) {
            convertedData.application_id = applicantAssessmentInfo.application_id;
        }

        mutation.mutate(convertedData)
        reset();
    };


    return (
        <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center">
            <div className="fixed top-0 bg-gray-600 opacity-75 w-full h-screen"></div>

            {
                assessments && renderAssessmentPDF ? (
                    <AssessmentsPDF application_id={applicationId} setAssessment={setAssessment} />
                ) : (

                    <div className="flex flex-col bg-white rounded-md p-8 fixed top-12 w-1/2 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-5">
                            <div className="flex flex-col">
                                <h1 className=" font-bold text-3xl">Set Permit Assessments</h1>
                            </div>
                            
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                            <h1 className="text-center font-bold text-xl">ORDER OF PAYMENT</h1>

                            {
                                orderOfPayment.map((data, index) => (

                                    <div key={index} className="flex flex-col gap-2">

                                        <label className="font-bold">{data.label}</label>
                                        <input 
                                            type={data.inputType} 
                                            defaultValue={data.value}
                                            disabled={data.disabled}
                                            {...register(data.registerName as keyof AssessmentTypes)}
                                            className={
                                                `${data.disabled ? 'bg-gray-500 text-white': 'bg-gray-300 hover:opacity-75'} p-3 font-bold rounded-md placeholder-gray-600 focus:outline-orange-500`
                                            }
                                        />
                                        
                                    </div>
                                    
                                ))
                            }

                            <h1 className="text-center font-bold text-xl">ASSESSMENTS</h1>
                            {
                                assessmentList.map((data, index) => (
                                    <div key={index} className="flex flex-col gap-2">

                                        <label className="font-bold">{data.label}</label>
                                        <input 
                                            type="number" 
                                            defaultValue={data.value}
                                            {...register(data.registerName as keyof AssessmentTypes)}
                                            className="p-3 bg-gray-300 font-bold rounded-md placeholder-gray-600 focus:outline-none hover:opacity-75"
                                        />

                                    </div>
                                ))
                            }

                            <div className="flex flex-col gap-3">
                                <button 
                                    className="bg-orange-500 text-white font-bold rounded-md p-2 mt-1 hover:opacity-75"
                                    type="submit"
                                >
                                    Save
                                </button>

                                <button 
                                    className="bg-black text-white font-bold rounded-md p-2 hover:opacity-75" 
                                    onClick={() => setAssessment(false)}
                                    >
                                        Close 
                                </button>
                            </div>

                            
                        </form>
                    </div>
                )
            }

            
        </div>
    );
};
