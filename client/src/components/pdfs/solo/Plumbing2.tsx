import { Page, StyleSheet, View } from "@react-pdf/renderer";
import { AppliedServices } from "../../../types/application";
import { PermitHeader } from "../plumbing/header";
import { PermitBodyBox1 } from "../plumbing/box1";
import { PermitBodyBox2 } from "../plumbing/box2";
import PermitBodyBox3 from "../plumbing/box3";
import { PermitBodyBox4 } from "../plumbing/box4";
import PermitBodyBox5 from "../plumbing/box5";
import { PermitBodyBox6 } from "../plumbing/box6";
import { PermitBodyBox7 } from "../plumbing/box7";
import { PermitBodyBox8 } from "../plumbing/box8";
import { PermitBodyBox9 } from "../plumbing/box9";
import { PermitBodyBox10 } from "../plumbing/box10";

export function PlumbingPermit({ permitInfo }: { 
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

  
        <View style={styles.body3}>
          <PermitBodyBox3 applicantName={applicantName} />
          <PermitBodyBox4 />
        </View>
  
          <PermitBodyBox5 applicantName={applicantName} />
  
          <PermitBodyBox6 />
  
          <PermitBodyBox7 />
  
          <PermitBodyBox8 />

          <PermitBodyBox9 />

          <PermitBodyBox10 />
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