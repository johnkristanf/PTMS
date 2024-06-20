import { PDFViewer, BlobProvider } from "@react-pdf/renderer";
import { RequirementsPDF } from "../../pdfs/Requirements";

function RequirementsModal({ setShowRequirements, role }: {
    setShowRequirements: React.Dispatch<React.SetStateAction<boolean>>
    role: string
}) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-75"></div>

      <div className="w-full fixed top-3 left-0 h-screen flex justify-center">

          <div className="flex flex-col items-center h-[95%] py-4 w-[55%] bg-white rounded-md">

              <h1 className='text-black text-2xl font-bold'>FIRST STEP REQUIREMENTS</h1>
              <div className="w-full h-[90%] p-5">

                <PDFViewer style={{ width: '100%', height: '100%' }} showToolbar={false}>
                  <RequirementsPDF role={role} />
                </PDFViewer>

              </div>

                    <div className="flex flex-col items-center w-full gap-4 mt-5">
                        <BlobProvider document={ <RequirementsPDF role={role} /> } >

                          {({ url }) => (

                            url ? (
                                <a href={url} download="requirements.pdf" className="w-[85%] text-center bg-orange-500 hover:opacity-75 text-white font-bold py-2 px-4 rounded w-1/2">
                                Download PDF
                                </a>

                            ) : (
                                <button className="w-[85%] bg-gray-500 text-white font-bold py-2 px-4 rounded w-1/2" disabled>
                                Generating PDF...
                                </button>
                            )
                          )}

                        </BlobProvider>

                        <button onClick={() => setShowRequirements(false)} className='w-[85%] bg-black hover:opacity-75 text-white font-bold py-2 px-4 rounded w-1/2'>
                            Close
                        </button>
                    </div>
          </div>
      </div>

      
    </>
  );
}

export default RequirementsModal;
