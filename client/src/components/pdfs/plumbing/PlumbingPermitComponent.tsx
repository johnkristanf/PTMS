import { Page, StyleSheet, View } from "@react-pdf/renderer";
import { ApplicationLetterInfoTypes, AppliedServices } from "../../../types/application";
import { PermitHeader } from "./header";
import { PermitBodyBox1 } from "./box1";
// import { PermitBodyBox2 } from "../plumbing/box2";
// import PermitBodyBox3 from "./box3";
import { PermitBodyBox4 } from "./box4";
import PermitBodyBox5 from "./box5";
import { PermitBodyBox6 } from "./box6";
import { PermitBodyBox7 } from "./box7";
import { PermitBodyBox8 } from "./box8";
import { PermitBodyBox9 } from "./box9";
import { PermitBodyBox10 } from "./box10";
import { ApplicationLetter } from "../application_letter/ApplicationLetter";

export function PlumbingPermitComponent({ permitInfo }: { 
    permitInfo: AppliedServices 
  }) {
  
    const applicationCode = permitInfo.applicationCode
    // const serviceType = permitInfo.serviceType
  
    // const applicantName = `${permitInfo.firstname} ${permitInfo.middleInitial} ${permitInfo.lastName} `

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
  
          <PermitHeader  applicationCode={applicationCode} />
    
          <View style={styles.body1}>
            <PermitBodyBox1 permitInfo={permitInfo} />
          </View>

    
            <PermitBodyBox4 />
    
            <PermitBodyBox5 />

            <PermitBodyBox6 />
      
            <PermitBodyBox7 />

            <PermitBodyBox8 />

            <PermitBodyBox9 />

            <PermitBodyBox10 />
        </Page>

        {/* <Page size="LETTER" style={styles.page}>
          <PermitBodyBox6 />
      
          <PermitBodyBox7 />

          <PermitBodyBox8 />

          <PermitBodyBox9 />

          <PermitBodyBox10 />

        </Page> */}
    
           
      </>
      
    );
  }
  
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: 30,

    },
    body1: {
      width: '100%',
      height: '50%',
      marginTop: 60,
      paddingHorizontal: 20
    },
    body2: {
      width: '100%',
      height: '30%',
      paddingHorizontal: 20,
    },
    body3: {
      width: '100%',
      height: '20%',
      marginTop: 20,
      paddingHorizontal: 20,
      flexDirection: 'row'
    },
    body5: {
      width: '100%',
      height: '30%',
      paddingHorizontal: 20,
      marginTop: 15
    },
    body6_7: {
      width: '100%',
      height: '30%',
      paddingHorizontal: 20,
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