import { Document, PDFViewer, Page, StyleSheet, View, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { PermitBodyBox1 } from './electronics/box/box1';
import { PermitBodyBox2 } from './electronics/box/box2';
import { PermitBodyBox3 } from './electronics/box/box3';
import { PermitBodyBox4 } from './electronics/box/box4';
import { PermitBodyBox5 } from './electronics/box/box5';
import { PermitBodyBox6 } from './electronics/box/box6';
import { PermitBodyBox7 } from './electronics/box/box7';
import { PermitBodyBox8 } from './electronics/box/box8';
import { PermitBodyBox9 } from './electronics/box/box9';
import { PermitBodyBox10 } from './electronics/box/box10';
import { ApplicationLetterInfoTypes, AppliedServices } from '../../types/application';
import { ApplicationLetter } from './application_letter/ApplicationLetter';


function ElectronicsPermit({ permitInfo, setPermitsInfo }: { 
    permitInfo: AppliedServices,
    setPermitsInfo: React.Dispatch<React.SetStateAction<AppliedServices | undefined>>
}) {
 
    // Render the document
    const doc = (
        <Document>
            <ElectronicsPermitComponent permitInfo={permitInfo} />
        </Document>
    );

    const downloadPDF = async () => {
        const blob = await pdf(doc).toBlob();
        saveAs(blob, 'electronics_permit.pdf');
    };

    

    return (
        <>
            <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>
            <div className="flex justify-center w-full h-full fixed top-20">
                <div className="flex flex-col mt-3 items-center h-[80%] py-4 w-[55%] bg-white rounded-md">
                    <h1 className='font-bold text-3xl mb-3'>Electronics Permit PDF</h1>
                    <div className="max-w-screen-sm w-full h-full overflow-auto custom-scrollbar-small">
                        <PDFViewer className='w-full h-full' showToolbar={false}>
                            {doc}
                        </PDFViewer>
                    </div>
                    <div className="flex flex-col items-center w-full gap-4 mt-5">
                        <button 
                            onClick={downloadPDF} 
                            className="w-[85%] bg-blue-700 hover:opacity-75 text-white font-bold py-2 px-4 rounded w-1/2"
                        >
                            Download PDF
                        </button>
                        <button 
                            onClick={() => setPermitsInfo(undefined)}
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

export function ElectronicsPermitComponent({ permitInfo }: { 
    permitInfo: AppliedServices 
  }) {

    const applicationLetterInfo: ApplicationLetterInfoTypes = {
        firstName: permitInfo.firstname,
        middleName: permitInfo.middleInitial,
        familyName: permitInfo.lastName,
        permit_type: permitInfo.permit_type
    }

    return (
        <>

        {
            permitInfo && permitInfo.permit_type != "Building" && (
                <ApplicationLetter applicationLetterInfo={applicationLetterInfo}/>
            )
        }


        <Page size="A4" style={styles.page}>
            <View style={styles.pageContainer}>
                <PermitBodyBox1 permitInfo={permitInfo} />
                <PermitBodyBox2 permitInfo={permitInfo} />
                 {/* Container for Box4 and Box6 */}
                 <View style={styles.box4And6Container}>
                        <View style={styles.box4}>
                            <PermitBodyBox3 permitInfo={permitInfo} />
                            <PermitBodyBox5 permitInfo={permitInfo} />
                        </View>
                        <View style={styles.box6}>
                            <PermitBodyBox4 permitInfo={permitInfo} />
                            <PermitBodyBox6 permitInfo={permitInfo} />
                        </View>
                    </View>
                    {/* End Container */}
            </View>
        </Page>

        <Page size="A4" style={styles.page}>
            <View style={styles.pageContainer}>
                    <PermitBodyBox7 permitInfo={permitInfo} />
                    <PermitBodyBox8 permitInfo={permitInfo} />
                    <PermitBodyBox9 permitInfo={permitInfo} />
                    <PermitBodyBox10 />
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
    box4And6Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 2, // Adjust as needed
    },
    box4: {
        width: '48%', // Adjust the width to fit side by side
        justifyContent: 'space-between',
        // Optionally add padding or margin
    },
    box6: {
        width: '48%', // Adjust the width to fit side by side
        justifyContent: 'space-between',
        // Optionally add padding or margin
    },
});


export default ElectronicsPermit;
