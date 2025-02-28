import { Document, PDFViewer, Page, StyleSheet, View, pdf, Image } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { PermitBodyBox1 } from './demolition/box/box1';
import { PermitBodyBox2 } from './demolition/box/box2';
import { PermitBodyBox4 } from './demolition/box/box4';
import { PermitBodyBox11 } from './demolition/box/box11';
import { PermitBodyBox12 } from './demolition/box/box12';
import { PermitBodyBox14 } from './demolition/box/box14';
import { PermitBodyBox13 } from './demolition/box/box13';
import { PermitBodyBox5 } from './demolition/box/box5';
import { PermitBodyBox6 } from './demolition/box/box6';
import { PermitBodyBox789 } from './demolition/box/box789';
import { PermitBodyBox10 } from './demolition/box/box10';
import { AppliedServices } from '../../types/application';



function DemolitionPermit({ permitInfo, setPermitsInfo }: { 
    permitInfo: AppliedServices,
    setPermitsInfo: React.Dispatch<React.SetStateAction<AppliedServices | undefined>>
}) {
   

    const doc = (
        <Document>
            <MyPDFDocument permitInfo={permitInfo} />
        </Document>
    );

    const downloadPDF = async () => {
        const blob = await pdf(doc).toBlob();
        saveAs(blob, 'demolition_permit.pdf');
    };

    return (
        <>
            <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>
            <div className="flex justify-center w-full h-full fixed top-[8rem]">
                <div className="flex flex-col mt-3 items-center h-[80%] py-4 w-[55%] bg-white rounded-md">
                    <h1 className='font-bold text-3xl mb-3'>Demolition Permit PDF</h1>
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

// Define the actual PDF document layout here
function MyPDFDocument({ permitInfo }: { 
    permitInfo: AppliedServices,
}) {
    return (
    <>

        <Page size="A4" style={styles.page}>
            <View style={styles.pageContainer2}>
                <PermitBodyBox14 permitInfo={permitInfo} />
            </View>
        </Page>
    
        <Page size="A4" style={styles.page}>
            <View style={styles.pageContainer}>
            <Image src="/img/no_to_fixer.png" style={styles.headerImage} />
                <PermitBodyBox1 permitInfo={permitInfo} />
                <PermitBodyBox2 />
                <PermitBodyBox4 permitInfo={permitInfo} />
            </View>
        </Page>

        <Page size="A4" style={styles.page}>
            <View style={styles.pageContainer}>
                <PermitBodyBox5  />
                <PermitBodyBox6  />
            </View>
        </Page>

        <Page size="A4" style={styles.page}>
            <View style={styles.pageContainer}>
                <PermitBodyBox789  />
                <PermitBodyBox10  />
            </View>
        </Page>


        <Page size="A4" style={styles.page}>
            <View style={styles.pageContainer}>
                <PermitBodyBox11 permitInfo={permitInfo} />
                <PermitBodyBox12 />
                <PermitBodyBox13 permitInfo={permitInfo} />
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
    headerImage: {
        position: 'absolute',
        width: 50,
        height: 60,
        left: 475,
        top: 15,
    },
});


export default DemolitionPermit;
