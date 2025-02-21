import { useState } from "react";
import '../../assets/scrollStyle.css'

import { ApplicantInformationModalStaff } from "../modal/staff/ApplicantInformationModalStaff";
import { useQuery } from "@tanstack/react-query";
import { FetchPendingApplicantInfo } from "../../http/get/application";
import { Application, AssessmentApplicationData } from "../../types/application";
import { AssessmentsModal } from "../modal/staff/AssesmentsModal";
import { AssessmentCheckListModal } from "../modal/staff/AssesmentChecklist";
import RequirementsModalStaff from "../modal/staff/RequirementsModalStaff";
import { dropDownSelectType } from "../../types/dropdown";
import { faAddressCard, faFileLines, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export function PendingTable({ searchTerm, selectedMonth }: dropDownSelectType) {

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
        queryKey: ["pending_applications", searchTerm, selectedMonth],
        queryFn: async () => {
            const data = await FetchPendingApplicantInfo(searchTerm, selectedMonth);
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

        <div className="flex flex-col bg-orange-100 w-[99%] h-[70%] rounded-md">
                <div className=" p-3">
                    <div className="inline-block min-w-full py-2">
                        <div className="overflow-hidden overflow-y-auto h-[400px] custom-scrollbar">


                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium border-gray-500">
                                    <tr>
                                        <th scope="col" className="px-4 py-4">Name</th>
                                        <th scope="col" className="px-4 py-4">Address</th>
                                        <th scope="col" className="px-4 py-4">Permit Type</th>
                                        <th scope="col" className="px-4 py-4">Verification</th>
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
                                                className="font-bold border-b border-gray-500"
                                            >
                                                <td className="whitespace-nowrap px-2 py-3">
                                                    {data.firstname} {data.middleInitial} {data.lastName}
                                                </td>

                                                <td className="whitespace-normal break-words px-2 py-3"> {/* Updated Address Column */}
                                                    {data.addressNo} {data.barangay} {data.street}{" "}
                                                    {data.municipality} {data.zipCode}
                                                </td>
                                                
                                                <td className="whitespace-nowrap px-2 py-3">
                                                    {data.permit_type}
                                                </td>

                                                <td className="whitespace-nowrap px-2 py-3">
                                                    <div className="flex gap-5">

                                                        <HoverCard>
                                                                <HoverCardTrigger>
                                                                    <button
                                                                        onClick={() => openFirstStepRequirements(data.application_id)}
                                                                        className="bg-sky-600 text-white font-bold p-3 rounded-md hover:opacity-75"
                                                                    >
                                                                        <FontAwesomeIcon icon={faFileLines}/>
                                                                    </button>
                                                                </HoverCardTrigger>

                                                                <HoverCardContent>
                                                                    <div className="text-center">
                                                                        Step 1: <br /> Check if the applicant <br /> requirements is completed.
                                                                    </div>
                                                                </HoverCardContent>

                                                        </HoverCard>


                                                        <HoverCard>
                                                                <HoverCardTrigger>
                                                                    <button
                                                                        onClick={() => openAssessments(data)}
                                                                        className="bg-green-700 rounded-md p-3 text-white font-bold hover:opacity-75"
                                                                    >
                                                                        <FontAwesomeIcon icon={faReceipt}/>
                                                                    </button>

                                                                </HoverCardTrigger>

                                                                <HoverCardContent>
                                                                    <div className="text-center">
                                                                        Step 2: <br /> Assessment setting after <br /> the requirements <br /> needed is fulfilled.
                                                                    </div>

                                                                    
                                                                </HoverCardContent>

                                                        </HoverCard>


                                                        <HoverCard>
                                                                <HoverCardTrigger>
                                                                    <button
                                                                        onClick={() => openApplicationInformationModal(data)}
                                                                        className="bg-orange-700 rounded-md p-3 text-white font-bold hover:opacity-75"
                                                                    >
                                                                        <FontAwesomeIcon icon={faAddressCard}/>
                                                                    </button>

                                                                </HoverCardTrigger>

                                                                <HoverCardContent>
                                                                    <div className="text-center">
                                                                        Step 3: <br /> Application code  setting after <br /> the assessment is <br /> paid.
                                                                    </div>
                                                                </HoverCardContent>

                                                        </HoverCard>

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

