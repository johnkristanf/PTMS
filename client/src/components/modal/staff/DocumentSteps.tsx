import { useState } from 'react'
import { DocumentStep2 } from './steps/Step2'
import { DocumentStep3 } from './steps/Step3'
import { DocumentStep4 } from './steps/Step4'
import { DocumentStep1 } from './steps/Step1'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Swal from 'sweetalert2'
import { FinishScanning } from '@/http/put/document'
import { Application } from '@/types/application'
import { firstStepRequirementsKeyMapping } from '@/types/document'

export function DocumentStepsComponent({
    applicationData,
    first_step_req_documents,
    applicant_form_documents,
    completion_form_documents,
    additional_form_documents,
    setOpenStepsDialogAppCode,
}: {
    applicationData: Application
    first_step_req_documents: string[]
    applicant_form_documents: string[]
    completion_form_documents: string[]
    additional_form_documents: string[]
    setOpenStepsDialogAppCode: React.Dispatch<React.SetStateAction<string | null>>
}) {
    const stepsHeader = ['Step 1', 'Step 2', 'Step 3', 'Step 4']
    const [step, setStep] = useState<number>(0)
    const queryClient = useQueryClient()

    const nextStep = () => {
        if (step === 0) {
            const expected = getExpectedApplicantForms(applicationData.scope_type).length
            const uploaded = applicant_form_documents.length

            if (uploaded < expected) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Incomplete Applicant Forms',
                    text: `Please upload all required applicant forms before continuing.`,
                })
                return
            }
        }

        if (step < stepsHeader.length - 1) {
            setStep(step + 1)
        }
    }

    const prevStep = () => {
        if (step > 0) setStep(step - 1)
    }

    console.log('applicationData: ', applicationData)
    console.log('applicationID: ', applicationData.application_id)
    console.log('applicantCode: ', applicationData.applicationCode)

    const finishScanningMutation = useMutation({
        mutationFn: FinishScanning,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['approved_applications'] })

            Swal.fire({
                icon: 'success',
                title: 'Finish Scanning',
                showConfirmButton: false,
                timer: 2000,
            })

            setTimeout(() => {
                setOpenStepsDialogAppCode(null)
            }, 2500)
        },

        onMutate: () => {
            Swal.fire({
                title: 'Please wait...',
                text: 'Your request is being processed',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading()
                },
            })
        },

        onError: (error: unknown) => {
            console.error('Set Finish Scanning Error:', error)
        },
    })

    const handleFinishScanning = () => {
        finishScanningMutation.mutate(applicationData.application_id)
    }

    function getExpectedApplicantForms(scope: string): string[] {
        const scopeSet = new Set(scope.split(','))

        const expected = [
            { key: 'building', match: 'Building-' },
            { key: 'electrical', match: 'Electrical-' },
            { key: 'plumbing', match: 'Plumbing-' },
            { key: 'mechanical', match: 'Mechanical-' },
            { key: 'electronics', match: 'Electronics-' },
            { key: 'fencing', match: 'Fencing-' },
            { key: 'excavation', match: 'Excavation-' },
        ]

        return expected
            .filter(({ match }) => [...scopeSet].some((item) => item.startsWith(match)))
            .map(({ key }) => key)
    }

    return (
        <div>
            {/* STEP 1: Progress bar for applicant form uploads */}
            {step === 0 && (
                <div className="mb-4 mt-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-orange-700">
                            Applicant Forms Progress
                        </span>
                        <span className="text-sm text-gray-600">
                            {applicant_form_documents.length} /{' '}
                            {getExpectedApplicantForms(applicationData.scope_type).length}
                        </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div
                            className="bg-orange-700 h-2 transition-all"
                            style={{
                                width: `${Math.min(
                                    Math.round(
                                        (applicant_form_documents.length /
                                            getExpectedApplicantForms(applicationData.scope_type)
                                                .length) *
                                            100
                                    ),
                                    100
                                )}%`,
                            }}
                        ></div>
                    </div>
                </div>
            )}

            {/* STEP 2: Progress bar for first step requiment uploads */}
            {step === 1 && (
                <div className="mb-4 mt-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-orange-700">
                            First Step Requirements Progress
                        </span>
                        <span className="text-sm text-gray-600">
                            {first_step_req_documents.length} /{' '}
                            {Object.values(firstStepRequirementsKeyMapping).length}
                        </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div
                            className="bg-orange-700 h-2 transition-all"
                            style={{
                                width: `${Math.min(
                                    Math.round(
                                        (first_step_req_documents.length /
                                            Object.values(firstStepRequirementsKeyMapping).length) *
                                            100
                                    ),
                                    100
                                )}%`,
                            }}
                        ></div>
                    </div>
                </div>
            )}

            {/* STEP 3: Progress bar for completion form uploads */}
            {step === 2 && (
                <div className="mb-4 mt-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-orange-700">
                            Completion Forms Progress
                        </span>
                        <span className="text-sm text-gray-600">
                            {completion_form_documents.length} /{' '}
                            {getExpectedApplicantForms(applicationData.scope_type).length}
                        </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div
                            className="bg-orange-700 h-2 transition-all"
                            style={{
                                width: `${Math.min(
                                    Math.round(
                                        (completion_form_documents.length /
                                            getExpectedApplicantForms(applicationData.scope_type)
                                                .length) *
                                            100
                                    ),
                                    100
                                )}%`,
                            }}
                        ></div>
                    </div>
                </div>
            )}

            {/* MAIN CENTER CONTENT */}

            <div className="py-6 text-center">
                {/* APPLICANT FORM UPLOAD */}
                {step === 0 && <DocumentStep1 applicationData={applicationData} />}

                {/* FIRST STEP REQUIRMENTS UPLOAD*/}
                {step === 1 && <DocumentStep2 applicationData={applicationData} />}

                {/* COMPLETION FORM UPLOAD */}
                {step === 2 && <DocumentStep3 applicationData={applicationData} />}

                {/* ADDITIONAL FORM UPLOAD */}
                {step === 3 && (
                    <DocumentStep4
                        applicationID={applicationData.application_id}
                        applicantCode={applicationData.applicationCode}
                        additional_form_documents={additional_form_documents}
                    />
                )}
            </div>

            {/* STEP CHANGER BUTTONS */}

            <div className="flex justify-between mt-2">
                <button
                    onClick={prevStep}
                    disabled={step === 0}
                    className="bg-gray-500 text-white disabled:opacity-50 p-3 rounded-md"
                >
                    Back
                </button>

                {step === stepsHeader.length - 1 ? (
                    <button
                        onClick={handleFinishScanning}
                        className="bg-orange-700 disabled:opacity-50 text-white p-3 rounded-md"
                    >
                        Finish
                    </button>
                ) : (
                    <button
                        onClick={nextStep}
                        disabled={
                            // STEP 1 NEXT DISABLED BUTTON CONDITION
                            (step === 0 &&
                                applicant_form_documents.length <
                                    getExpectedApplicantForms(applicationData.scope_type).length) ||
                            // STEP 2 NEXT DISABLED BUTTON CONDITION
                            (step === 1 &&
                                first_step_req_documents.length <
                                    Object.values(firstStepRequirementsKeyMapping).length) ||
                            // STEP 3 NEXT DISABLED BUTTON CONDITION
                            (step === 2 &&
                                completion_form_documents.length <
                                    getExpectedApplicantForms(applicationData.scope_type).length) ||
                            // LAST STEP NEXT DISABLED BUTTON CONDITION
                            step === stepsHeader.length - 1
                        }
                        className="bg-orange-700 disabled:opacity-50 text-white p-3 rounded-md"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    )
}
