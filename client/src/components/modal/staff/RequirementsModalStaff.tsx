import { useState, useEffect } from 'react';
import '../../../assets/scrollStyle.css';
import { FirstStepRequirements } from '../../../types/application';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { UpdateFirstStepRequirements } from '../../../http/put/application';
import { FetchCheckedRequirements } from '../../../http/get/application';
import { classNames } from '../../../helpers/classNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';

type RequirementsWithoutID = Omit<FirstStepRequirements, 'application_id'>;

function RequirementsModalStaff({ applicationID, setShowRequirements }: {
    applicationID: number;
    setShowRequirements: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const queryClient = useQueryClient();
    const fullyAccomplished = ["Fully Accomplished Application Form"];
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
        "A duly licensed Architect or Civil Engineer, in case of Architectural",
        "A duly licensed Sanitary Engineer or Master Plumber, in case of Architectural",
        "A duly licensed Professional Mechanical Engineer, in case of Mechanical",
        "A duly licensed Professional Electronics Engineer, in case of Electrical",
    ];
    const otherDocuments = ["Barangay Clearance where the project is located", "Locational Clearance"];

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
        "A duly licensed Architect or Civil Engineer, in case of Architectural": "architectEngineer",
        "A duly licensed Sanitary Engineer or Master Plumber, in case of Architectural": "sanitaryEngineer",
        "A duly licensed Professional Mechanical Engineer, in case of Mechanical": "mechanicalEngineer",
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
    const [disabledRequirements, setDisabledRequirements] = useState<RequirementsWithoutID>(initialRequirementsState);
    const [selectAll, setSelectAll] = useState<boolean>(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = itemKeyMapping[event.target.name] as keyof RequirementsWithoutID;
    
        if (key in checkRequirements) {
            setCheckRequirements((prev) => ({
                ...prev,
                [key]: event.target.checked,
            }));
        }
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
        onError: (error: unknown) => {
            console.error("Signup error:", error);
        },
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const requirements: FirstStepRequirements = {
            application_id: applicationID,
            ...checkRequirements,
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
            setDisabledRequirements(fetchedRequirements); 
        }
    }, [response]);

    const onCheckRequirements = (item: string) => {
        const checkboxElement = document.getElementById(item) as HTMLInputElement;
        if (checkboxElement) {
            checkboxElement.click();
        }
    };

    const renderCheckboxes = (items: string[], title: string) => (
        <div className="mb-4">
            <h2 className="font-semibold mb-1">{title}</h2>
            {items.map((item) => (
                <div
                    key={item} 
                    className="flex items-center mb-2 hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer"
                    onClick={() => onCheckRequirements(item)}
                >
                    <input
                        type="checkbox"
                        id={item}
                        name={item}
                        checked={checkRequirements[itemKeyMapping[item]] || false}
                        disabled={disabledRequirements[itemKeyMapping[item]] || false} // Disable based on fetched data
                        onChange={handleCheckboxChange}
                        className={`${disabledRequirements[itemKeyMapping[item]] ? 'bg-green-700': '' } mr-2`}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <label className="text-black cursor-pointer" htmlFor={item} onClick={() => onCheckRequirements(item)}>
                        {item}
                    </label>
                </div>
            ))}
        </div>
    );

    const excludedKeys = [...notRegisteredLotOwner, ...dulySignedSealed].map(item => itemKeyMapping[item]);

    const allRequirementsChecked = Object.entries(checkRequirements)
        .filter(([key]) => !excludedKeys.includes(key)) 
        .every(([, value]) => value); 

    const disableIfallRequirementsChecked = Object.entries(disabledRequirements)
        .filter(([key]) => !excludedKeys.includes(key)) 
        .every(([, value]) => value);



    const toggleSelectAll = () => {
        const allChecked = !selectAll; 
        const updatedRequirements = Object.keys(checkRequirements).reduce((acc, key) => {
            acc[key as keyof RequirementsWithoutID] = allChecked;
            return acc;
        }, {} as RequirementsWithoutID);

        setCheckRequirements(updatedRequirements); 
        setSelectAll(allChecked);
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-75"></div>
            <div className="w-full fixed top-24 left-0 h-screen flex justify-center">
                <div className="flex flex-col items-center h-[80%] py-4 w-[55%] bg-white rounded-md p-5 overflow-auto custom-scrollbar">
                    <h1 className='text-black text-2xl font-bold my-3'>FIRST STEP REQUIREMENTS</h1>
                    <h1 className='font-semibold mb-8'>
                        Requirement Status: 
                        <span className={`${allRequirementsChecked ? 'text-green-600': 'text-red-800'} ml-1`}>
                            {allRequirementsChecked ? 'Completed': 'Incomplete'}
                        </span> 
                    </h1>

                    {!allRequirementsChecked && (
                        <div className="flex justify-end mb-5 w-full">
                            <button
                                type="button"
                                onClick={toggleSelectAll}
                                className="bg-orange-700 text-white p-2 rounded-md"
                            >
                                {selectAll ? (
                                    <>
                                        <FontAwesomeIcon icon={faX} /> Unselect All
                                    </>
                                ) : (
                                    <>
                                        <FontAwesomeIcon icon={faCheck} /> Select All
                                    </>
                                )}
                            </button>
                        </div>
                    )}


                    <form onSubmit={handleSubmit}>
                        {renderCheckboxes(fullyAccomplished, 'Fully Accomplished Application Form')}
                        {renderCheckboxes(supportingDocuments, 'Supporting Documents')}
                        {renderCheckboxes(notRegisteredLotOwner, 'Not Registered Lot Owner')}
                        {renderCheckboxes(fiveSetsOf, 'Five Sets Of')}
                        {renderCheckboxes(dulySignedSealed, 'Duly Signed/Sealed')}
                        {renderCheckboxes(otherDocuments, 'Other Documents')}

                        {!disableIfallRequirementsChecked && (
                            <button
                                type="submit"
                                disabled={!allRequirementsChecked} // Excludes Not Registered Lot Owner & Duly Signed/Sealed
                                className={classNames(
                                    "text-white font-bold rounded-md p-2 mt-4 w-full hover:opacity-75",
                                    !allRequirementsChecked ? "bg-gray-600 cursor-not-allowed" : "bg-orange-700"
                                )}
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
