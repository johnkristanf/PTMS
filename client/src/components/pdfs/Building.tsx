import React from 'react';
import { Document, PDFViewer, Page, StyleSheet, View, pdf } from '@react-pdf/renderer';
import { AppliedServices } from '../../types/application';
import { PermitBodyBox1 } from './building/box1';
import { PermitHeader } from './building/header';
import { PermitBodyBox2 } from './building/box2';
import { PermitBodyBox3 } from './building/box3';
import { PermitBodyBox4 } from './building/box4';
import { PermitBodyBox5 } from './building/box5';
import { PermitBodyBox6 } from './building/box6';
import { PermitBodyBox7 } from './building/box7';
import { PermitBodyBox8 } from './building/box8';
import { saveAs } from 'file-saver';
import { ElectricalPermitSoloPDF } from './solo/Electrical';

import '../../assets/scrollStyle.css'
import { PlumbingPermitSoloPDF } from './solo/Plumbing';
import { PlumbingPermit } from './solo/Plumbing2';

function BuildingPDF({ permitInfo, setPermitsInfo }: { 
  permitInfo: AppliedServices,
  setPermitsInfo: React.Dispatch<React.SetStateAction<AppliedServices | undefined>>

}) {

  const downloadPDF = async () => {
    const doc = (

      <>
      <Document>
        <BuildingPermit permitInfo={permitInfo} />
      </Document>

      <ElectricalPermitSoloPDF />

      </>
      

    );

    const blob = await pdf(doc).toBlob();
    saveAs(blob, 'Applicationform_BuildingPermit.pdf');
  };

  return (
    <>
      <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>

      <div className="flex justify-center w-full h-full fixed top-0">

        <div className="flex flex-col mt-3 items-center h-[95%] py-4 w-[55%] bg-white rounded-md">

          <h1 className='font-bold text-3xl mb-3'>Building Permit Application</h1>

          <div className="max-w-screen-sm w-full h-full overflow-auto custom-scrollbar-small">

            <PDFViewer className='w-full h-full' showToolbar={false}>
              <Document>
                <BuildingPermit permitInfo={permitInfo} />
                <PlumbingPermit permitInfo={permitInfo} />
              </Document>
            </PDFViewer>

            <ElectricalPermitSoloPDF />

          </div>

          <div className="flex flex-col items-center w-full gap-4 mt-5">
            <button 
              onClick={downloadPDF} 
              className="w-[85%] bg-orange-500 hover:opacity-75 text-white font-bold py-2 px-4 rounded w-1/2"
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

function BuildingPermit({ permitInfo }: { 
  permitInfo: AppliedServices 
}) {

  const applicationCode = permitInfo.applicationCode
  const serviceType = permitInfo.serviceType

  const applicantName = `${permitInfo.firstname} ${permitInfo.middleInitial} ${permitInfo.lastName} `
  return (
    <Page size="A4" style={styles.page}>

      <PermitHeader serviceType={serviceType} applicationCode={applicationCode} />

      <View style={styles.body1}>
        <PermitBodyBox1 permitInfo={permitInfo} />
      </View>

      <View style={styles.body2}>
        <PermitBodyBox2 />
      </View>

      <View style={styles.body3}>
        <PermitBodyBox3 applicantName={applicantName} />
        <PermitBodyBox4 />
      </View>

      <View style={styles.body5}>
        <PermitBodyBox5 applicantName={applicantName} />
      </View>

      <View style={styles.body6_7}>
        <PermitBodyBox6 />
      </View>

      <View style={styles.body6_7}>
        <PermitBodyBox7 />
      </View>

      <View style={styles.body8}>
        <PermitBodyBox8 />
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  body1: {
    width: '100%',
    height: '50%',
    marginTop: 60,
    paddingHorizontal: 20
  },
  body2: {
    width: '100%',
    height: '20%',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  body3: {
    width: '100%',
    height: '20%',
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: 'row'
  },
  body5: {
    width: '100%',
    height: '30%',
    paddingHorizontal: 20,
  },
  body6_7: {
    width: '100%',
    height: '20%',
    paddingHorizontal: 20,
    marginTop: 15
  },
  body8: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  headerImage: {
    width: 70,
    height: 80
  },
  headerCenterText_container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  areaCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flex: 1,
    marginLeft: 5,
    marginTop: 5,
    height: 2,
  },
});

export default BuildingPDF;
