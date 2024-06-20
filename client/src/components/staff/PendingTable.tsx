import { useState } from "react";
import { ApplicantInformationModalStaff } from "../modal/staff/ApplicantInformationModalStaff";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FetchPendingApplicantInfo } from "../../http/get/application";
import { Application, AssessmentApplicationData } from "../../types/application";
import { UpdateApplicationStatus } from "../../http/put/application";
import Swal from "sweetalert2";
import { AssessmentsModal } from "../modal/staff/AssesmentsModal";
import { AssessmentCheckListModal } from "../modal/staff/AssesmentChecklist";
import RequirementsModal from "../modal/applicant/RequirementsModal";
import RequirementsModalStaff from "../modal/staff/RequirementsModalStaff";

export function PendingTable({ searchTerm }: { searchTerm: string }) {

    const [applicantAssessmentInfo, setApplicantAssessmentInfo] = useState<AssessmentApplicationData>({
        application_id: 0,
        applicant_name: "",
        permit_type: "",
    });

    const [assessment, setAssessment] = useState<boolean>(false);
    const [assessmentChecklist, setAssessmentChecklist] = useState<boolean>(false); 
    const [requirementsListModal, setRequirementsListModal] = useState<boolean>(false); 

    const [informationModal, setInformationModal] = useState<boolean>(false);
    const [applicantInfo, setApplicantInfo] = useState<Application>();

    const [applicationID, setApplicationID] = useState<number>()

    const openAssessments = (application: Application) => {

        const { application_id, firstname, middleInitial, lastName, permit_type, assessment_status } = application;

        setApplicantAssessmentInfo({
            application_id: application_id || 0,
            applicant_name: `${firstname} ${middleInitial} ${lastName}`,
            permit_type: permit_type || "",
        });

        if (assessment_status === "pending" || assessment_status === "paid") {
            setAssessmentChecklist(true);
        } else {
            setAssessment(true);
        }
    };

    const { data: response, isLoading } = useQuery({
        queryKey: ["pending_applications", searchTerm],
        queryFn: async () => {
            const data = await FetchPendingApplicantInfo(searchTerm);
            return data;
        },
    });

    const pendingApplications: Application[] = response?.data || [];

    const openApplicationInformationModal = (data: Application) => {
        setApplicantInfo(data);
        setInformationModal(true);
    };

    
    const openFirstStepRequirements = (application_id: number) => {
        setApplicationID(application_id);
        setRequirementsListModal(true);
    };


    // kaning gi comment na logic after ni ma butngan og application code

    // const queryClient = useQueryClient();

    // const mutation = useMutation({
    //     mutationFn: UpdateApplicationStatus,
    //     onSuccess: () => {
    //         queryClient.invalidateQueries({ queryKey: ["pending_applications"] });

    //         Swal.fire({
    //             position: "top-end",
    //             icon: "success",
    //             title: "Applicant Paid!",
    //             showConfirmButton: false,
    //             timer: 1500,
    //         });
    //     },
    //     onError: (error: any) => {
    //         console.error("Signup error:", error);
    //     },
    // });

    // const setPaidApplication = (application_id: number) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "That this applicant has successfully completed paid assessments.",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             const data = {
    //                 application_id,
    //                 status: "Paid",
    //             };

    //             mutation.mutate(data);
    //         }
    //     });
    // };

    // const getCurrentDate = () => {
    //     const date = new Date();
    //     const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    //     return date.toLocaleDateString(undefined, options);
    // };
    if (isLoading) return <div className="text-white font-bold text-xl">Fetching Pending Applications...</div>;

    return (
        <>
            

            {assessment && (
                <AssessmentsModal
                    applicantAssessmentInfo={applicantAssessmentInfo}
                    setAssessment={setAssessment}
                />
            )}

            {assessmentChecklist && (
                <AssessmentCheckListModal
                    applicationID={applicantAssessmentInfo.application_id}
                    setAssessmentChecklist={setAssessmentChecklist}
                />
            )}

            {requirementsListModal && applicationID && (  
                <RequirementsModalStaff
                    applicationID={applicationID}
                    setShowRequirements={setRequirementsListModal}
                />
            )}

            {applicantInfo && informationModal && (
                <ApplicantInformationModalStaff
                    setInformationModal={setInformationModal}
                    applicantInfo={applicantInfo}
                />

            )}

            <div className="flex flex-col bg-orange-100 w-full h-[70%] rounded-md">
                <div className="overflow-y-auto overflow-x-hidden sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden p-2">


                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-4 py-4">Name</th>
                                        <th scope="col" className="px-4 py-4">Address</th>
                                        <th scope="col" className="px-4 py-4">Permit Type</th>
                                        <th scope="col" className="px-4 py-4">Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {pendingApplications.length === 0 ? (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-4 text-center">
                                                No results found
                                            </td>
                                        </tr>

                                    ) : (
                                        pendingApplications.map((data) => (
                                            <tr
                                                key={data.application_id}
                                                className="font-bold border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                                            >
                                                <td className="whitespace-nowrap px-2 py-3">
                                                    {data.firstname} {data.middleInitial} {data.lastName}
                                                </td>

                                                <td className="whitespace-nowrap px-2 py-3">
                                                    {data.addressNo} {data.barangay} {data.street}{" "}
                                                    {data.municipality} {data.zipCode}
                                                </td>
                                                
                                                <td className="whitespace-nowrap px-2 py-3">
                                                    {data.permit_type}
                                                </td>

                                                <td className="whitespace-nowrap px-2 py-3">
                                                    <div className="flex gap-5">

                                                        <button
                                                            onClick={() => openFirstStepRequirements(data.application_id)}
                                                            className="bg-green-700 text-white font-bold p-3 rounded-md hover:opacity-75"
                                                        >
                                                            Requirements
                                                        </button>


                                                        <button
                                                            onClick={() => openAssessments(data)}
                                                            className="bg-gray-500 rounded-md p-3 text-white font-bold hover:opacity-75"
                                                        >
                                                            Assessments
                                                        </button>


                                                        <button
                                                            onClick={() => openApplicationInformationModal(data)}
                                                            className="bg-orange-500 rounded-md p-3 text-white font-bold hover:opacity-75"
                                                        >
                                                            Information
                                                        </button>

                                                       
                                                    </div>
                                                </td>
                                            </tr>

                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
