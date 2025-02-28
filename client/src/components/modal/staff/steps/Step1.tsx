import { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UploadDocument } from "@/http/post/document";
import Swal from "sweetalert2";
import { UpdateApplicantFormDocuments } from "@/http/put/document";
import { ApplicantFormDocument } from "@/types/document";

export function DocumentStep1({ applicationID, applicantCode, applicant_form_documents }: {
    applicationID: number
    applicantCode: string | undefined,
    applicant_form_documents: string[]
}) {

    console.log("applicant_form_documents (from DB): ", applicant_form_documents);
    

    const [documents, setDocuments] = useState<string[]>(applicant_form_documents || []);
    const [newDocument, setNewDocument] = useState("");
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const queryClient = useQueryClient();


    const updateApplicantFormDocumentsMutation = useMutation({
        mutationFn: UpdateApplicantFormDocuments,
        onSuccess: (response) => {
            Swal.close();
            queryClient.invalidateQueries({ queryKey: ["approved_applications"] });
            console.log("Update Response: ", response);
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
            Swal.close();
            console.error("Document Upload Error:", error);
        },
        onSettled: () => {
            Swal.close();
        },
    });


    const addDocument = () => {
        if (newDocument.trim() !== "") {
            const updatedDocuments = [...documents, newDocument];
            setDocuments(updatedDocuments);

            const data: ApplicantFormDocument = {
                application_id: applicationID,
                applicant_form_documents: updatedDocuments
            }
            
            updateApplicantFormDocumentsMutation.mutate(data)
            setNewDocument("");
        }

    };


    useEffect(() => {
        setDocuments(applicant_form_documents || []);
    }, [applicant_form_documents]);

    console.log("document new: ", documents);


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



  return (
    <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Only Applicant Form for every Services</h1>

        {/* Display List */}
        <div className="flex flex-col gap-2">
            {applicant_form_documents.map((doc, index) => (

            <div key={index} className="flex justify-between items-center border p-2 rounded">

                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onClick={(e) => e.stopPropagation()}
                    onChange={handleFileChange}
                />

                <span>{doc}</span>

                <button 
                    onClick={() => fileInputRef.current?.click() }
                    className="bg-orange-700 text-white px-4 py-1 rounded hover:opacity-75"
                >
                    Scan
                </button>

            </div>
            ))}
        </div>


        {/* Input and Add Button */}
        <div className="flex gap-2 mb-4 mt-5">
            <input
                type="text"
                value={newDocument}
                onChange={(e) => setNewDocument(e.target.value)}
                className="border p-2 rounded w-[85%] focus:outline-orange-700"
                placeholder="Enter document name"
            />

            <button
                onClick={addDocument}
                className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-800"
            >
            +
            </button>

        </div>

        

    </div>
  );
}
