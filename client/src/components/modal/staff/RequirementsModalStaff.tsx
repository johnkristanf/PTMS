import { useState, useEffect } from 'react';
import '../../../assets/scrollStyle.css';
import { FirstStepRequirements, FirstStepRequirementsFetching } from '../../../types/application';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { UpdateFirstStepRequirements } from '../../../http/put/application';
import { FetchCheckedRequirements } from '../../../http/get/application';

type RequirementsWithoutID = Omit<FirstStepRequirements, 'application_id'>;

function RequirementsModalStaff({ applicationID, setShowRequirements }: {
    applicationID: number;
    setShowRequirements: React.Dispatch<React.SetStateAction<boolean>>;
}) {

    const queryClient = useQueryClient();

    const fullyAccomplished = [
        "Fully Accomplished Application Form",
    ];

    const supportingDocuments = [
        "Latest Certified true copy of Land Title (ROD)",
        "Latest Tax Declaration",
        "Latest Tax Clearance",
    ];

    const notRegisteredLotOwner = [
        "Notarized Deed of Absolute Sale",
        "Notarized Contract of Lease Sale",
        "Notarized Affidavit of Consent",
        "Notarized Extra-Judicial Partition/Affidavit of Heirship with Consent",
        "Certificate of Award/Affidavit of Undertaking/any document showing proof of authority (Government of Public Land)",
    ];

    const fiveSetsOf = [
        "Plans",
        "Specifications",
        "Bill of Materials and Cost Estimate",
        "Structural Analysis",
    ];

    const dulySignedSealed = [
        "A duly licensed Architect or Civil Engineer",
        "In case of architectural, A duly licensed Sanitary Engineer or Master Plumber, in case of",
        "A duly licensed Professional Mechanical Engineer, in case of",
        "A duly licensed Professional Electronics Engineer, in case of Electrical",
    ];

    const otherDocuments = [
        "Barangay Clearance where the project is located",
        "Locational Clearance",
    ];

    const itemKeyMapping: { [key: string]: keyof RequirementsWithoutID } = {
        "Fully Accomplished Application Form": "accomplished_form",
        "Latest Certified true copy of Land Title (ROD)": "landTitle",
        "Latest Tax Declaration": "taxDeclaration",
        "Latest Tax Clearance": "taxClearance",
        "Notarized Deed of Absolute Sale": "deedSale",
        "Notarized Contract of Lease Sale": "leaseSale",
        "Notarized Affidavit of Consent": "affidavitConsent",
        "Notarized Extra-Judicial Partition/Affidavit of Heirship with Consent": "partitionHeirship",
        "Certificate of Award/Affidavit of Undertaking/any document showing proof of authority (Government of Public Land)": "certificateAward",
        "Plans": "plans",
        "Specifications": "specifications",
        "Bill of Materials and Cost Estimate": "billMaterials",
        "Structural Analysis": "structuralAnalysis",
        "A duly licensed Architect or Civil Engineer": "architectEngineer",
        "In case of architectural, A duly licensed Sanitary Engineer or Master Plumber, in case of": "sanitaryEngineer",
        "A duly licensed Professional Mechanical Engineer, in case of": "mechanicalEngineer",
        "A duly licensed Professional Electronics Engineer, in case of Electrical": "electronicsEngineer",
        "Barangay Clearance where the project is located": "barangayClearance",
        "Locational Clearance": "locationalClearance",
    };

    const initialRequirementsState: RequirementsWithoutID = {
        accomplished_form: false,
        landTitle: false,
        taxDeclaration: false,
        taxClearance: false,
        deedSale: false,
        leaseSale: false,
        affidavitConsent: false,
        partitionHeirship: false,
        certificateAward: false,
        plans: false,
        specifications: false,
        billMaterials: false,
        structuralAnalysis: false,
        architectEngineer: false,
        sanitaryEngineer: false,
        mechanicalEngineer: false,
        electronicsEngineer: false,
        barangayClearance: false,
        locationalClearance: false,
    };

    const [checkRequirements, setCheckRequirements] = useState<RequirementsWithoutID>(initialRequirementsState);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = itemKeyMapping[event.target.name];
        setCheckRequirements({
            ...checkRequirements,
            [key]: event.target.checked,
        });
    };

    const mutation = useMutation({
        mutationFn: UpdateFirstStepRequirements,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["pending_applications"] });

            Swal.fire({
                icon: "success",
                title: "Requirements Checked Successfully",
                showConfirmButton: false,
                timer: 1500,
            });
        },
        onError: (error: any) => {
            console.error("Signup error:", error);
        },
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const allChecked = Object.values(checkRequirements).every(value => value);

        if (!allChecked) {
            Swal.fire({
                icon: "warning",
                title: "Incomplete Requirements",
                text: "Please make sure all requirements are checked before submitting.",
                confirmButtonColor: "#ff981a",
            });
            return;
        }

        const requirements: FirstStepRequirements = {
            application_id: applicationID,
            ...checkRequirements
        };

        mutation.mutate(requirements);
        queryClient.invalidateQueries({ queryKey: ["pending_applications"] });
        setShowRequirements(false);
    };

    const { data: response } = useQuery({
        queryKey: ["requirements", applicationID],
        queryFn: async () => {
            const data = await FetchCheckedRequirements(applicationID);
            return data;
        },
    });

    useEffect(() => {
        if (response?.data) {
            const fetchedRequirements: RequirementsWithoutID = {
                accomplished_form: response.data.accomplished_form,
                landTitle: response.data.landTitle,
                taxDeclaration: response.data.taxDeclaration,
                taxClearance: response.data.taxClearance,
                deedSale: response.data.deedSale,
                leaseSale: response.data.leaseSale,
                affidavitConsent: response.data.affidavitConsent,
                partitionHeirship: response.data.partitionHeirship,
                certificateAward: response.data.certificateAward,
                plans: response.data.plans,
                specifications: response.data.specifications,
                billMaterials: response.data.billMaterials,
                structuralAnalysis: response.data.structuralAnalysis,
                architectEngineer: response.data.architectEngineer,
                sanitaryEngineer: response.data.sanitaryEngineer,
                mechanicalEngineer: response.data.mechanicalEngineer,
                electronicsEngineer: response.data.electronicsEngineer,
                barangayClearance: response.data.barangayClearance,
                locationalClearance: response.data.locationalClearance,
            };
            setCheckRequirements(fetchedRequirements);
        }
    }, [response]);

    const renderCheckboxes = (items: string[], title: string) => (
        <div className="mb-4">
            <h2 className="font-semibold">{title}</h2>
            {items.map(item => (
                <div key={item} className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        name={item}
                        checked={checkRequirements[itemKeyMapping[item]] || false}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                    />
                    <label className="text-black">{item}</label>
                </div>
            ))}
        </div>
    );

    // Check if all requirements are met
    const allChecked = response?.data ? Object.values(response.data).every(value => value) : false;

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-75"></div>

            <div className="w-full fixed top-3 left-0 h-screen flex justify-center">
                <div className="flex flex-col items-center h-[95%] py-4 w-[55%] bg-white rounded-md p-5 overflow-auto custom-scrollbar">
                    <h1 className='text-black text-2xl font-bold my-3'>FIRST STEP REQUIREMENTS</h1>

                    <form onSubmit={handleSubmit}>
                        {renderCheckboxes(fullyAccomplished, 'Fully Accomplished Application Form')}
                        {renderCheckboxes(supportingDocuments, 'Supporting Documents')}
                        {renderCheckboxes(notRegisteredLotOwner, 'Not Registered Lot Owner')}
                        {renderCheckboxes(fiveSetsOf, 'Five Sets Of')}
                        {renderCheckboxes(dulySignedSealed, 'Duly Signed/Sealed')}
                        {renderCheckboxes(otherDocuments, 'Other Documents')}

                        {!allChecked && (
                            <button
                                type="submit"
                                className="bg-orange-500 text-white font-bold rounded-md p-2 hover:opacity-75 mt-4 w-full"
                            >
                                Submit
                            </button>
                        )}
                    </form>

                    <button
                        className="bg-black text-white font-bold rounded-md p-2 hover:opacity-75 mt-4 w-full"
                        onClick={() => setShowRequirements(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    );
}

export default RequirementsModalStaff;
