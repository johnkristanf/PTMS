import { Document, PDFViewer, Page, StyleSheet, View, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { PermitBodyBox1 } from './electrical/box/box1'; 
import { PermitBodyBox2 } from './electrical/box/box2';
import { PermitBodyBox3 } from './electrical/box/box3';
import { PermitBodyBox4 } from './electrical/box/box4';
import { PermitBodyBox5 } from './electrical/box/box5';
import { PermitBodyBox6 } from './electrical/box/box6';
import { ApplicationLetterInfoTypes, AppliedServices } from '../../types/application';
import { ApplicationLetter } from './application_letter/ApplicationLetter';
import BackPageElectricalPDF from './electrical/backPage/BackPageElectrical';

function ElectricalPermit({ permitInfo, setPermitsInfo }: { 
    permitInfo: AppliedServices,
    setPermitsInfo: React.Dispatch<React.SetStateAction<AppliedServices | undefined>>
}) {

    // Render the document
    const doc = (
        <Document>
            <ElectricalComponentPermit permitInfo={permitInfo} />
        </Document>
    );

    const downloadPDF = async () => {
        const blob = await pdf(doc).toBlob();
        saveAs(blob, 'electrical_permit.pdf');
    };

    return (
        <>
            <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>
            <div className="flex justify-center w-full h-full fixed top-[8rem]">
                <div className="flex flex-col mt-3 items-center h-[80%] py-4 w-[55%] bg-white rounded-md">
                    <h1 className='font-bold text-3xl mb-3'>Electrical Permit PDF</h1>
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

export function ElectricalComponentPermit({ permitInfo }: { 
    permitInfo: AppliedServices 
  }) {

    const applicationLetterInfo: ApplicationLetterInfoTypes = {
        firstName: permitInfo.firstname,
        middleName: permitInfo.middleInitial,
        familyName: permitInfo.lastName,
        permit_type: permitInfo.permit_type
    }

    console.log("permitInfo electrical: ", permitInfo);
    

    return (
        <>

        {
            permitInfo && permitInfo.permit_type != "Building" && (
                <ApplicationLetter applicationLetterInfo={applicationLetterInfo}/>
            )
        }


        <Page size="LETTER" style={styles.page}>
            <View style={styles.pageContainer}>
                <PermitBodyBox1 permitInfo={permitInfo} />
                <PermitBodyBox2 permitInfo={permitInfo} />
                <PermitBodyBox3  />
                <PermitBodyBox4 permitInfo={permitInfo} />
                <PermitBodyBox5  />
                <PermitBodyBox6  />

            </View>
        </Page>

        
        <BackPageElectricalPDF permitInfo={permitInfo} />


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
});


export default ElectricalPermit;
