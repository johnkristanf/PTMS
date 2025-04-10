import React from 'react';
import { Document, PDFViewer, Page, StyleSheet, View, pdf } from '@react-pdf/renderer';
import { ApplicationLetterInfoTypes, AppliedServices } from '../../types/application';
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

import '../../assets/scrollStyle.css'
import { PlumbingPermitComponent } from './plumbing/PlumbingPermitComponent';
import { ApplicationLetter } from './application_letter/ApplicationLetter';
import { ElectronicsPermitComponent } from './Electronics';
import { ElectricalComponentPermit } from './Electrical';
import { MechanicalPermitComponent } from './Mechanical';
import { FencingPermitComponent } from './Fencing';
import { ExcavationPermitComponent } from './Excavation';

function BuildingPDF({ permitInfo, setPermitsInfo }: { 
  permitInfo: AppliedServices,
  setPermitsInfo: React.Dispatch<React.SetStateAction<AppliedServices | undefined>>

}) {

  console.log("permitInfo in building pdf: ", permitInfo);

  console.log("scopeType in building pdf: ", permitInfo.scopeType.split(','));

  console.log("characterOfOccupancy in building pdf: ", permitInfo.characterOfOccupancy.split(','));

  const scopeTypeArray = permitInfo.scopeType.split(',');
  const characterOfOccupancyArray = permitInfo.characterOfOccupancy.split(',');


  const scopeSet = new Set(scopeTypeArray);
  const occupancySet = new Set(characterOfOccupancyArray);


  console.log("scopeSet: ", scopeSet);
  console.log("occupancySet: ", occupancySet);
  


  // NOTE: WALAY CHARACTER OF OCCUPANCY ANG ELECTRONICS OG FENCING
  const containsBuilding = [...scopeSet].some(item => item.startsWith("Building-")) ||
                         [...occupancySet].some(item => item.startsWith("Building-"));

  const containsElectrical = [...scopeSet].some(item => item.startsWith("Electrical-")) ||
                            [...occupancySet].some(item => item.startsWith("Electrical-"));

  const containsPlumbing = [...scopeSet].some(item => item.startsWith("Plumbing-")) ||
                          [...occupancySet].some(item => item.startsWith("Plumbing-"));

  const containsMechanical = [...scopeSet].some(item => item.startsWith("Mechanical-")) ||
                            [...occupancySet].some(item => item.startsWith("Mechanical-"));

  const containsElectronics = [...scopeSet].some(item => item.startsWith("Electronics-"));

  const containsFencing = [...scopeSet].some(item => item.startsWith("Fencing-"));

  const containsExcavation = [...scopeSet].some(item => item.startsWith("Excavation-")) ||
                            [...occupancySet].some(item => item.startsWith("Excavation-"));


  const downloadPDF = async () => {
    const doc = (

      <>
        <Document>
          <ApplicationLetter applicationLetterInfo={applicationLetterInfo}/>

          {containsBuilding && <BuildingPermit permitInfo={permitInfo} />}
          {containsElectrical && <ElectricalComponentPermit permitInfo={permitInfo} />}
          {containsPlumbing && <PlumbingPermitComponent permitInfo={permitInfo} />}
          {containsMechanical && <MechanicalPermitComponent permitInfo={permitInfo} />}
          {containsElectronics && <ElectronicsPermitComponent permitInfo={permitInfo} />}
          {containsFencing && <FencingPermitComponent permitInfo={permitInfo} />}
          {containsExcavation && <ExcavationPermitComponent permitInfo={permitInfo} />}
                
        </Document>

      </>
      

    );

    const blob = await pdf(doc).toBlob();
    saveAs(blob, 'Applicationform_BuildingPermit.pdf');
  };

  const applicationLetterInfo: ApplicationLetterInfoTypes = {
    firstName: permitInfo.firstname,
    middleName: permitInfo.middleInitial,
    familyName: permitInfo.lastName,
    permit_type: permitInfo.permit_type
  }

  return (
    <>
      <div className="fixed top-0 w-full h-full bg-gray-800 opacity-75"></div>

      <div className="flex justify-center w-full h-full fixed top-[6rem]">

        <div className="flex flex-col mt-[4rem] items-center h-[70%] py-4 w-[55%] bg-white rounded-md">

          <h1 className='font-bold text-3xl mb-3'>Building Permit Application</h1>

          <div className="max-w-screen-sm w-full h-full overflow-auto custom-scrollbar-small">

            <PDFViewer className='w-full h-full' showToolbar={false}>
              <Document>
                <ApplicationLetter applicationLetterInfo={applicationLetterInfo}/>

                {containsBuilding && <BuildingPermit permitInfo={permitInfo} />}
                {containsElectrical && <ElectricalComponentPermit permitInfo={permitInfo} />}
                {containsPlumbing && <PlumbingPermitComponent permitInfo={permitInfo} />}
                {containsMechanical && <MechanicalPermitComponent permitInfo={permitInfo} />}
                {containsElectronics && <ElectronicsPermitComponent permitInfo={permitInfo} />}
                {containsFencing && <FencingPermitComponent permitInfo={permitInfo} />}
                {containsExcavation && <ExcavationPermitComponent permitInfo={permitInfo} />}

                
              </Document>
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

function BuildingPermit({ permitInfo }: { 
  permitInfo: AppliedServices 
}) {

  const applicationCode = permitInfo.applicationCode
  const serviceType = permitInfo.serviceType

  const applicantName = `${permitInfo.firstname} ${permitInfo.middleInitial} ${permitInfo.lastName} `
  return (

    <>
      <Page size={{ width: 595.28, height: 1400 }} style={styles.page}>

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

      </Page>

      <Page size={{ width: 595.28, height: 1400 }} style={styles.page}>

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

    </>
    
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  body1: {
    width: '100%',
    height: '50%',
    marginTop: 60,
    paddingHorizontal: 20,
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
    height: '30%',
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
