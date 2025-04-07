import { Document, PDFViewer, Page, StyleSheet, View, pdf, Image } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { PermitBodyBox1 } from './excavation/box/box1'; // Adjust the path as necessary
import { PermitBodyBox2 } from './excavation/box/box2';
import { PermitBodyBox3 } from './excavation/box/box3';
import { PermitBodyBox4 } from './excavation/box/box4';
import { PermitBodyBox5 } from './excavation/box/box5';
import { PermitBodyBox6 } from './excavation/box/box6';
import { PermitBodyBox78 } from './excavation/box/box7-8';
import { PermitBodyBox9 } from './excavation/box/box9';
import { ApplicationLetterInfoTypes, AppliedServices } from '../../types/application';
import { ApplicationLetter } from './application_letter/ApplicationLetter';


function ExcavationPermit({ permitInfo, setPermitsInfo }: { 
    permitInfo: AppliedServices,
    setPermitsInfo: React.Dispatch<React.SetStateAction<AppliedServices | undefined>>
}) {

    const doc = (
        <Document>
            <ExcavationPermitComponent permitInfo={permitInfo} />
        </Document>
    );

    const downloadPDF = async () => {
        const blob = await pdf(doc).toBlob();
        saveAs(blob, 'excavation_permit.pdf');
    };

    return (
        <>
            <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>
            <div className="flex justify-center w-full h-full fixed top-[8rem]">
                <div className="flex flex-col mt-3 items-center h-[80%] py-4 w-[55%] bg-white rounded-md">
                    <h1 className='font-bold text-3xl mb-3'>Excavation Permit PDF</h1>
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

export function ExcavationPermitComponent({ permitInfo }: { 
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

        <Page size="LETTER" style={styles.page}>
            <View style={styles.pageContainer}>
                <Image src="/img/no_to_fixer.png" style={styles.headerImage} />
                <PermitBodyBox1 permitInfo={permitInfo} />
                {/* Container for Box4 and Box6 */}
                <View style={styles.box4And6Container}>
                        <View style={styles.box4}>
                            <PermitBodyBox2 permitInfo={permitInfo} />
                            <PermitBodyBox4 permitInfo={permitInfo} />
                        </View>
                        <View style={styles.box6}>
                            <PermitBodyBox3 permitInfo={permitInfo} />
                            <PermitBodyBox5 permitInfo={permitInfo} />
                        </View>
                </View>
                {/* End Container */}
                <PermitBodyBox6  />
            </View>
        </Page>

        <Page size="LETTER" style={styles.page}>
            <View style={styles.pageContainer2}>
                    <PermitBodyBox78  />
                    <PermitBodyBox9  />
                </View>
        </Page>
        </>
        
    );
}


// Define styles for the PDF layout
const styles = StyleSheet.create({
    page: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30,

    },
    pageContainer: {
        width: '90%',
        height: '100%',
    },
    pageContainer2: {
        width: '100%',
        height: '100%',
    },
    headerImage: {
        position: 'absolute',
        width: 50,
        height: 60,
        left: 475,
        top: 15,
    },
    box4And6Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 2, // Adjust as needed
    },
    box4: {
        width: '50%', // Adjust the width to fit side by side
        justifyContent: 'space-between',
        // Optionally add padding or margin
    },
    box6: {
        width: '50%', // Adjust the width to fit side by side
        justifyContent: 'space-between',
        // Optionally add padding or margin
    },
});


export default ExcavationPermit;
