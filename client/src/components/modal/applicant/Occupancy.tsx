/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document, PDFViewer, Page, StyleSheet, View, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { PermitBodyBox1 } from '../../pdfs/occupancy/box/box1'; 
// import { PermitBodyBox2 } from '../../pdfs/occupancy/box/box2';
import { OccupancyData } from '@/types/application';

function OccupancyModal({ setshowOccupancy, occupancyData }: {
    setshowOccupancy: React.Dispatch<React.SetStateAction<boolean>>
    occupancyData: OccupancyData
}) {
   
    const doc = (
        <Document>
            <MyPDFDocument formData={occupancyData} />
        </Document>
    );

    const downloadPDF = async () => {
        const blob = await pdf(doc).toBlob();
        saveAs(blob, 'occupancy_completion.pdf');
    };

    console.log("occupancyData sulod modal: ", occupancyData);
    

    return (
        <>
            <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>
            <div className="flex justify-center w-full h-full fixed top-[9rem]">
                <div className="flex flex-col mt-3 items-center h-[73%] py-4 w-[55%] bg-white rounded-md">
                    {/* <h1 className='font-bold text-3xl mb-3'>Occupancy PDF</h1> */}
                    <div className="max-w-screen-sm w-full h-full overflow-auto custom-scrollbar-small">
                        <PDFViewer className='w-full h-full' showToolbar={false}>
                            {doc}
                        </PDFViewer>
                    </div>
                    <div className="flex flex-col items-center w-full gap-4 mt-5">
                        <button 
                            onClick={downloadPDF} 
                            className="w-[85%] bg-orange-700 hover:opacity-75 text-white font-bold py-2 px-4 rounded w-1/2"
                        >
                            Download PDF
                        </button>
                        <button 
                            onClick={() => setshowOccupancy(false)}
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

// Define the actual PDF document layout here
function MyPDFDocument({ formData }: { formData: OccupancyData }) {
    return (
        <>
        <Page size="A4" style={styles.page}>
            <View style={styles.pageContainer}>
                <PermitBodyBox1 permitInfo={formData} />
            </View>
            <View style={styles.pageContainer}>
                {/* <PermitBodyBox2 permitInfo={formData} /> */}
            </View>
        </Page>
        </>
        
    );
}


// Define styles for the PDF layout
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',  // Changed from red for better visibility
        padding: 5, // Remove padding
        margin: 0, // Remove margin
    },
    pageContainer: {
        width: '100%',
        flex: 1, // Ensure it takes the full height
    },
});


export default OccupancyModal;
