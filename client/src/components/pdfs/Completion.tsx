import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import completionFormPDF from '/pdfs/completion_form.pdf';

import '../../assets/scrollStyle.css'

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function CompletionPDF({ setOpenCompletion }: { setOpenCompletion: React.Dispatch<React.SetStateAction<boolean>> }) {

    const [numPages, setNumPages] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
        setLoading(false);
    }

    function onLoadError(error: Error) {
        console.error('Error loading page:', error);
    }

    function downloadPDF() {
        const link = document.createElement('a');
        link.href = completionFormPDF;
        link.download = 'certificate_of_completion.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>

            <div className="flex w-full fixed top-0 justify-center items-center bg-red-800">
                <div className="flex flex-col fixed top-3 items-center h-[95%] py-4 w-[55%] bg-white rounded-md">
                    {loading && <div>Loading...</div>}

                    <h1 className='font-bold text-3xl'>Certificate of Completion</h1>

                    <div className="max-w-screen-sm w-full h-[80%] overflow-auto custom-scrollbar">
                        <Document file={completionFormPDF} onLoadSuccess={onDocumentLoadSuccess}>
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
                            onClick={downloadPDF}
                            className="w-[85%] bg-orange-500 hover:opacity-75 text-white font-bold py-2 px-4 rounded w-1/2"
                        >
                            Download PDF
                        </button>

                        <button 
                            onClick={() => setOpenCompletion(false)}
                            className='w-[85%] bg-black hover:opacity-75 text-white font-bold py-2 px-4 rounded w-1/2'
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CompletionPDF;
