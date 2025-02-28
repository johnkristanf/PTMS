import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UploadDocument } from "@/http/post/document";
import Swal from "sweetalert2";
import { FirstStepRequirements } from "@/types/application";
import { FetchFirstStepRequirements } from "@/http/get/application";
import { useRef } from "react";
import { formatDocumentFirstStepKey } from "@/lib/utils";
import { classNames } from "@/helpers/classNames";


// type RequirementsWithoutID = Omit<FirstStepRequirements, 'application_id'>;

export function DocumentStep2({ applicationID, applicantCode }: {
    applicationID: number,
    applicantCode: string | undefined,
}) {

    console.log("applicationID in Step 2: ", applicationID);
    console.log("applicantCode in Step 2: ", applicantCode);
    

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const queryClient = useQueryClient();


    const { data: response } = useQuery({
        queryKey: ["first_step_requirements", applicationID], 
        queryFn: async () => {
            return await FetchFirstStepRequirements(applicationID)
        },
    });

    const first_step_requirements: FirstStepRequirements = response?.data || {};
           
    console.log("first_step_requirements: ", first_step_requirements);
    

    // const updateApplicantFormDocumentsMutation = useMutation({
    //     mutationFn: UpdateCompletionFormDocuments,
    //     onSuccess: (response) => {
    //         Swal.close();
    //         queryClient.invalidateQueries({ queryKey: ["approved_applications"] });
    //         console.log("Update Response: ", response);
    //     },

    //     onMutate: () => {
    //         Swal.fire({
    //             title: 'Please wait...',
    //             text: 'Your request is being processed',
    //             allowOutsideClick: false,
    //             showConfirmButton: false,
    //             willOpen: () => {
    //                 Swal.showLoading();
    //             },
    //         });
    //     },

    //     onError: (error: unknown) => {
    //         Swal.close();
    //         console.error("Document Upload Error:", error);
    //     },
    //     onSettled: () => {
    //         Swal.close();
    //     },
    // });


    // const addDocument = () => {
    //     if (newDocument.trim() !== "") {
    //         const updatedDocuments = [...documents, newDocument];
    //         setDocuments(updatedDocuments);

    //         const data: CompletionFormDocument = {
    //             application_id: applicationID,
    //             completion_form_documents: updatedDocuments
    //         }
            
    //         updateApplicantFormDocumentsMutation.mutate(data)
    //         setNewDocument("");
    //     }

    // };


   


    const uploadDocumentMutation = useMutation({
        mutationFn: UploadDocument,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["approved_applications"] });

            Swal.fire({
                icon: "success",
                title: "File Uploaded Successfully",
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
            console.error("Document Upload Error:", error);
        },
    });


    const handleDocumentUpload = async (file : File, applicationCode: string) => {
    
        try {
            const formData = new FormData();
            formData.append("document", file);
            formData.append("application_code", applicationCode);
    
            uploadDocumentMutation.mutate(formData)
                
        } catch (error) {
            console.error("File upload failed", error);
            alert("File upload failed");
        }
    }
    
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
    
        console.log("filename: ", file?.name);
            
        if (file && applicantCode) {
            handleDocumentUpload(file, applicantCode); 
        }
    };


    const reversedMapping: { [key: string]: string } = Object.entries(itemKeyMapping).reduce((acc, [longText, fieldName]) => {
        acc[fieldName] = longText;
        return acc;
    }, {} as { [key: string]: string });
    



  return (
    <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Only First Step Requirements</h1>

        {/* Display List */}
        <div className="flex flex-col gap-2">

            {Object.entries(first_step_requirements).map(([key, value], index) => {
                if (key === "application_id" || key === "requirements_id") return null;


                const requirementsTitle = reversedMapping[key] || formatDocumentFirstStepKey(key);

                return (
                    <div key={index} className="flex justify-between items-center border p-2 rounded">
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onClick={(e) => e.stopPropagation()}
                            onChange={handleFileChange}
                        />

                        <span
                            className={classNames(
                                String(value) === "false" ? "text-gray-500" : "",
                                "mr-1"
                            )}
                        >
                            { requirementsTitle }
                        </span>

                        {
                            String(value) != "false" && (
                                <button 
                                    onClick={() => fileInputRef.current?.click() }
                                    className="bg-orange-700 text-white px-4 py-1 rounded hover:opacity-75"
                                >
                                    Scan
                                </button>
                            )
                        }

                    
                    </div>
                );
                

            })}

        </div>


        {/* Input and Add Button */}
        {/* <div className="flex gap-2 mb-4 mt-5">
            <input
                type="text"
                // onChange={(e) => setNewDocument(e.target.value)}
                className="border p-2 rounded w-[85%] focus:outline-orange-700"
                placeholder="Enter document name"
            />

            <button
                // onClick={addDocument}
                className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-800"
            >
            +
            </button>

        </div> */}

        

    </div>
  );
}


const itemKeyMapping = {
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
