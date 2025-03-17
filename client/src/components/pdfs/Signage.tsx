import { Document, PDFViewer, Page, StyleSheet, View, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { PermitBodyBox1 } from './signage/box/box1';
import { PermitBodyBox2 } from './signage/box/box2';
import { PermitBodyBox3 } from './signage/box/box3';
import { PermitBodyBox4 } from './signage/box/box4';
import { PermitBodyBox5 } from './signage/box/box5';
import { PermitBodyBox6 } from './signage/box/box6';
import { PermitBodyBox7 } from './signage/box/box7';
import { PermitBodyBox8 } from './signage/box/box8';
import { PermitBodyBox9 } from './signage/box/box9';
import { PermitBodyBox10 } from './signage/box/box10';
import { PermitBodyBox11 } from './signage/box/box11';
import { AppliedServices } from '../../types/application';


function SignagePermit({ permitInfo, setPermitsInfo }: { 
    permitInfo: AppliedServices,
    setPermitsInfo: React.Dispatch<React.SetStateAction<AppliedServices | undefined>>
}) {
    // Define sample data for testing

    // Render the document
    const doc = (
        <Document>
            <MyPDFDocument permitInfo={permitInfo} />
        </Document>
    );

    const downloadPDF = async () => {
        const blob = await pdf(doc).toBlob();
        saveAs(blob, 'signage_permit.pdf');
    };

    return (
        <>
            <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>
            <div className="flex justify-center w-full h-full fixed top-[8rem]">
                <div className="flex flex-col mt-3 items-center h-[80%] py-4 w-[55%] bg-white rounded-md">
                    <h1 className='font-bold text-3xl mb-3'>Signage Permit PDF</h1>
                    <div className="max-w-screen-sm w-full h-full overflow-auto custom-scrollbar-small">
                        <PDFViewer className='w-full h-full' showToolbar={false}>
                            {doc}
                        </PDFViewer>
                    </div>
                    <div className="flex flex-col items-center w-full gap-4 mt-5">
                        <button 
                            onClick={downloadPDF} 
                            className="w-[85%] bg-orange-700 hover:opacity-75 text-white font-bold py-2 px-4 rounded"
                        >
                            Download PDF
                        </button>
                        <button 
                            onClick={() => setPermitsInfo(undefined)}
                            className='w-[85%] bg-black hover:opacity-75 text-white font-bold py-2 px-4 rounded'
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
function MyPDFDocument({ permitInfo }: { 
    permitInfo: AppliedServices 
  }) {
    return (
        <>

            <Page size={{ width: '595.28pt', height: '1000pt' }} style={styles.page}>
                <View style={styles.pageContainer2}>
                    <PermitBodyBox9 permitInfo={permitInfo} />
                </View>
            </Page>
            
            <Page size={{ width: '595.28pt', height: '1000pt' }} style={styles.page}>
                <View style={styles.pageContainer}>
                    <PermitBodyBox1 permitInfo={permitInfo} />
                    <PermitBodyBox2 permitInfo={permitInfo} />
                    <PermitBodyBox3 permitInfo={permitInfo} />
                    <PermitBodyBox4 permitInfo={permitInfo} />
                    <PermitBodyBox5 permitInfo={permitInfo} />
                    <PermitBodyBox6 permitInfo={permitInfo} />
                </View>
            </Page>

            <Page size={{ width: '595.28pt', height: '1000pt' }} style={styles.page}>
                <View style={styles.pageContainer}>
                    <PermitBodyBox7 permitInfo={permitInfo} />
                    <PermitBodyBox8 permitInfo={permitInfo} />
                </View>
            </Page>

            

            <Page size={{ width: '595.28pt', height: '1000pt' }} style={styles.page}>
                <View style={styles.pageContainer}>
                    <PermitBodyBox10 />
                    <PermitBodyBox11 permitInfo={permitInfo} />
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
        padding: 30,

    },
    pageContainer: {
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 20,
    },
    pageContainer2: {
        width: '100%',
        marginTop: 60,
        paddingHorizontal: 20,
    },
});

export default SignagePermit;
