import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import buildingPermit from '../../../public/pdfs/Building-Permit.pdf';
import { Application } from '../../types/application';
import { Apply } from '../../http/post/application';
import Swal from 'sweetalert2';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function TestBuildingPermitPDF({applicantInfo, setApplicantInfo}: {
    applicantInfo: Application | undefined,
    setApplicantInfo: React.Dispatch<React.SetStateAction<Application | undefined>>,
}) {
    const [numPages, setNumPages] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
        setLoading(false);
    }

    function onLoadError(error: Error) {
        console.error('Error loading page:', error);
    }

    function saveApplication(){
        if(applicantInfo){
            Apply(applicantInfo).catch(err => console.error(err))

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Permit Applied Succesfully",
                text: "See the Applied Services for Application Instruction",
                showConfirmButton: true,
            });

            setApplicantInfo(undefined)
        }
       
    }

    function closePermitModal(){
        setApplicantInfo(undefined)
    }

    // function downloadPdf() {
    //     const link = document.createElement('a');
    //     link.href = buildingPermit;
    //     link.download = 'plumbing.pdf';
    //     link.click();
    // }

    return (

        <>
            <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>

            <div className="flex flex-col fixed top-3 items-center h-[95%] py-4 w-[55%] bg-orange-500 rounded-md">

                {loading && <div>Loading...</div>}

                <h1 className='text-white font-bold text-3xl'>Building Permit Application</h1>
                <h1 className='text-white font-bold text-sm mb-3'>Download the showed documents, fill it out, and then upload it to continue the application. </h1>

                <div className="max-w-screen-sm w-full h-[100%] overflow-auto">
                    <Document file={buildingPermit} onLoadSuccess={onDocumentLoadSuccess}>

                        {Array.from(new Array(numPages), (_, index) => (
                            <div key={`page_${index + 1}`} className="mb-4">
                                <Page
                                    pageNumber={index + 1}
                                    onLoadError={onLoadError}
                                    renderAnnotationLayer={false}
                                    renderTextLayer={false}
                                />
                            </div>
                        ))}
                        
                    </Document>
                </div>

                <div className="flex flex-col items-center w-full gap-4 mt-5">
                    <button 
                        onClick={() => saveApplication()}
                        className="w-[85%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2">
                        Save
                    </button>

                    <button onClick={() => closePermitModal()} className='w-[85%] bg-black hover:opacity-75 text-white font-bold py-2 px-4 rounded w-1/2'>
                        Back
                    </button>
                </div>


            </div>     
        </>
        
    );
}

export default TestBuildingPermitPDF;
