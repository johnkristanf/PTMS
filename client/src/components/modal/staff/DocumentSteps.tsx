import { useState } from "react";
import { DocumentStep2 } from "./steps/Step2";
import { DocumentStep3 } from "./steps/Step3";
import { DocumentStep4 } from "./steps/Step4";
import { DocumentStep1 } from "./steps/Step1";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FinishScanning } from "@/http/put/document";


export function DocumentStepsComponent({ applicationID, applicantCode, applicant_form_documents, completion_form_documents, additional_form_documents } : {
    applicationID: number,
    applicantCode: string | undefined,
    applicant_form_documents: string[],
    completion_form_documents: string[],
    additional_form_documents: string[]
}) {


    const stepsHeader = ["Step 1", "Step 2", "Step 3" , "Step 4"];
    const [step, setStep] = useState<number>(0);
    const queryClient = useQueryClient();



    const nextStep = () => {
        if (step < stepsHeader.length - 1) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 0) setStep(step - 1);
    };

    console.log("applicationID: ", applicationID );
    console.log("applicantCode suddddd: ", applicantCode );
    console.log("applicant_form_documents: ", applicant_form_documents );
    console.log("additional_form_documents: ", additional_form_documents );



    const finishScanningMutation = useMutation({
        mutationFn: FinishScanning,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["approved_applications"] });

            Swal.fire({
                icon: "success",
                title: "Finish Scanning",
                showConfirmButton: false,
                timer: 1500,
            });
        },

        onMutate: () => {
            Swal.fire({
                title: 'Please wait...',
                text: 'Your request is being processed',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            });
        },

        onError: (error: unknown) => {
            console.error("Set Finish Scanning Error:", error);
        },
    });



    const handleFinishScanning = () => {
        finishScanningMutation.mutate(applicationID)
    }
    

    return (

        <div>

                {/* STEPS HEADER */}
                <div className="flex justify-between border-b pb-3">
                    {stepsHeader.map((label, index) => (
                        <button
                            key={index}
                            onClick={() => setStep(index)}
                            className={`text-lg font-bold px-4 pb-2 transition ${
                                step === index ? "text-orange-700 border-b-2 border-orange-700" : "text-gray-500"
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>


                {/* MAIN CENTER CONTENT */}

                <div className="py-6 text-center">

                    {/* APPLICANT FORM UPLOAD */}
                    {step === 0 && <DocumentStep1 applicationID={applicationID} applicantCode={applicantCode} applicant_form_documents={applicant_form_documents} /> }

                    {/* FIRST STEP REQUIRMENTS UPLOAD*/}
                    {step === 1 && <DocumentStep2 applicationID={applicationID} applicantCode={applicantCode} />}

                    {/* COMPLETION FORM UPLOAD */}
                    {step === 2 && <DocumentStep3 applicationID={applicationID} applicantCode={applicantCode} completion_form_documents={completion_form_documents}/>}

                    {/* ADDITIONAL FORM UPLOAD */}
                    {step === 3 && <DocumentStep4 applicationID={applicationID} applicantCode={applicantCode} additional_form_documents={additional_form_documents} />}
                </div>


                {/* STEP CHANGER BUTTONS */}

                <div className="flex justify-between mt-2">
                    <button onClick={prevStep} disabled={step === 0} className="bg-gray-500 text-white disabled:opacity-50 p-3 rounded-md">
                        Back
                    </button>

                        {
                            step === stepsHeader.length - 1 ? (
                                <button onClick={handleFinishScanning} className="bg-orange-700 disabled:opacity-50 text-white p-3 rounded-md">
                                    Finish
                                </button>

                            ) : (
                                <button onClick={nextStep} disabled={step === stepsHeader.length - 1} className="bg-orange-700 disabled:opacity-50 text-white p-3 rounded-md">
                                    Next
                                </button>
                            )

                        }
                </div>

        </div>
                
    );
}
