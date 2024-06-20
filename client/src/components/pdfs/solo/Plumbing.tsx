import { useState } from "react";
import { Page, Document } from "react-pdf";
import plumbingPDF from '../../../../public/pdfs/plumbing.pdf'

export function PlumbingPermitSoloPDF(){

    const [numPages, setNumPages] = useState<number>(0);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    function onLoadError(error: Error) {
        console.error('Error loading page:', error);
    }
    
    return(
        <Document file={plumbingPDF} onLoadSuccess={onDocumentLoadSuccess}>

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
        
    )
}