import { AppliedServices } from "@/types/application";
import {
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  headerCenter: {
    textAlign: "center",
    marginBottom: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  section: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBox: {
    border: "1px solid black",
    padding: 4,
    minHeight: 18,
    flex: 1,
    width: 200
  },

  inputBoxBottom: {
    borderBottom: "1px solid black",
    minHeight: 1,
    marginTop: 20,
    width: 200
  },

  label: {
    marginBottom: 2,
    fontWeight: "bold",
  },
  titleBox: {
    padding: 5,
    marginBottom: 10,
  },
  note: {
    marginTop: 10,
    fontSize: 9,
  },
  signatureBlock: {
    marginTop: 15,
  },
  underline: {
    borderBottom: "1px solid black",
    minWidth: 100,
    marginBottom: 5,
  },
  boxContainer: {
    border: "1px solid black",
    marginBottom: 10,
  },
  boxRow: {
    flexDirection: "row",
    borderBottom: "1px solid black",
  },

  boxRowNoBottomBorder: {
    flexDirection: "row",
    borderBottom: "1px solid black",
  },

  boxCell: {
    flex: 1,
    borderLeft: "1px solid black",
    padding: 8,
    fontSize: 6
  },

  chiefReviewCell: {
    borderLeft: "1px solid black",
    padding: 8,
    fontSize: 6
  },

  reviewedLabel: {
    borderBottom: "1px solid black",
    marginBottom: 30,
    paddingBottom: 2,
  },

  borderLeftBoxCell: {
    flex: 1,
    borderLeft: "1px solid black",
    padding: 8,
    fontSize: 6
  },

  noBoxRightCell: {
    flex: 1,
    padding: 5,
    fontSize: 6
  },

  lastCell: {
    borderRight: 0,
  },
});

const BackPageElectricalPDF = ({ permitInfo }: {
  permitInfo: AppliedServices 
}) => (
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={styles.section}>
        <Text style={{ fontWeight: "bold" }}>DPWH FORM NO. 96-002-E</Text>
        <Text style={styles.headerCenter}>Republic of the Philippines</Text>
        <Text style={styles.headerCenter}>Department of Public Works and Highways</Text>
        <Text style={styles.headerCenter}>Office of the Local Building Officials</Text>
        <Text style={styles.headerCenter}>Panabo City</Text>
        <Text style={styles.headerCenter}>District/City Municipality</Text>
      </View>

      {/* Permit Info */}
      <View style={[styles.section, styles.row]}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.label, {paddingBottom: 10}]}>Permit No.</Text>
          <View style={styles.inputBox} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={[styles.label, {paddingBottom: 10}]}>Application No.</Text>
          <View style={styles.inputBox} />
        </View>
      </View>

      <View style={[styles.section, styles.row]}>
      <View style={{ flex: 1 }}>
        {["Date Issued", "Under O.R. No.", "Amount", "Date"].map((label, index) => (
          <View key={index} style={{ flexDirection: "row", alignItems: "center", marginBottom: 4, width: 200 }}>
            <Text style={{ width: 60 }}>{label}</Text>
            <View style={{ borderBottom: "1px solid black", flex: 1, marginLeft: 5 }} />
          </View>
        ))}
      </View>

        <View style={{ flex: 1 }}>
          <View  style={{ flexDirection: "row", alignItems: "center", marginBottom: 4, width: 200 }}>
            <Text style={{ width: 50 }}>Date Filed</Text>
            <View style={{ borderBottom: "1px solid black", flex: 1,  width: 100, marginTop: 10 }} />
          </View>
        </View>
      </View>

      {/* Electrical Permit Title */}
      <View style={styles.titleBox}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 12 }}>ELECTRICAL PERMIT</Text>
        <Text style={{ textAlign: "center" }}>(To be accomplished by the Office Concerned)</Text>
      </View>

      {/* Box 1 */}
      <Text style={{marginBottom: 3}}>BOX 1</Text>
      <View style={styles.boxContainer}>
        <View style={styles.boxRow}>
          <View style={styles.noBoxRightCell}>
            <Text>NAME OF OWNER/APPLICANT:</Text>
            <Text></Text>
          </View>
          <View style={styles.noBoxRightCell}>
            <Text>LAST NAME,</Text>
            <Text>${permitInfo.lastName}</Text>
          </View>
          <View style={styles.noBoxRightCell}>
            <Text>FIRST NAME,</Text>
            <Text>${permitInfo.firstname}</Text>
          </View>
          <View style={styles.noBoxRightCell}>
            <Text>MIDDLE NAME</Text>
            <Text>${permitInfo.middleInitial}</Text>
          </View>
          <View style={[styles.borderLeftBoxCell, styles.lastCell]}>
            <Text>TIN</Text>
            <Text></Text>
          </View>
        </View>

        <View style={styles.boxRow}>
          <View style={styles.noBoxRightCell}>
            <Text>ADDRESS:</Text>
            <Text></Text>
          </View>
          <View style={styles.noBoxRightCell}>
            <Text>NO.,</Text>
            <Text>${permitInfo.addressNo}</Text>
          </View>
          <View style={styles.noBoxRightCell}>
            <Text>STREET,</Text>
            <Text>${permitInfo.street}</Text>
          </View>
          <View style={styles.noBoxRightCell}>
            <Text>BARANGAY,</Text>
            <Text>${permitInfo.barangay}</Text>
          </View>
          <View style={styles.noBoxRightCell}>
            <Text>CITY/MUNICIPALITY</Text>
            <Text>${permitInfo.municipality}</Text>
          </View>
          <View style={[styles.borderLeftBoxCell, styles.lastCell]}>
            <Text>TEL/FAX NO.</Text>
            <Text>${permitInfo.telNo}</Text>
          </View>
        </View>

        <View style={styles.boxRow}>
          <View style={styles.noBoxRightCell}>
            <Text>LOCATION OF INSTALLATION:</Text>
            <Text>${permitInfo.locationForConstruct_Install}</Text>
          </View>
          <View style={styles.noBoxRightCell}>
            <Text>NO.,</Text>
            <Text>${permitInfo.addressNo}</Text>
          </View>
          <View style={styles.noBoxRightCell}>
            <Text>STREET,</Text>
            <Text>${permitInfo.street}</Text>
          </View>
          <View style={styles.noBoxRightCell}>
            <Text>BARANGAY,</Text>
            <Text>${permitInfo.barangay}</Text>
          </View>
          <View style={[styles.noBoxRightCell, styles.lastCell]}>
            <Text>CITY/MUNICIPALITY</Text>
            <Text>${permitInfo.municipality}</Text>
          </View>
        </View>



      </View>

      {/* Box 2 - Assessed Fees */}
      <Text style={{marginVertical: 4}} >BOX 2</Text>
      <View style={styles.boxContainer}>
        <Text style={[styles.label, { textAlign: "center", padding: 4, borderBottom: "1px solid black",  }]}>ASSESSED FEES</Text>

        <View style={styles.boxRow}>
          <Text style={styles.boxCell}>AMOUNT DUE</Text>
          <Text style={styles.boxCell}>ASSESSED BY</Text>
          <Text style={styles.boxCell}>O.R. NUMBER</Text>
          <Text style={[styles.boxCell, styles.lastCell]}>DATE PAID</Text>
        </View>

        <View style={styles.boxRow}>
          <Text style={styles.boxCell}></Text>
          <Text style={styles.boxCell}></Text>
          <Text style={styles.boxCell}></Text>
          <Text style={[styles.boxCell, styles.lastCell]}></Text>
        </View>

        <View style={styles.boxRowNoBottomBorder}>
          <Text style={styles.boxCell}></Text>
          <Text style={styles.boxCell}></Text>
          <Text style={styles.boxCell}></Text>
          <Text style={[styles.boxCell, styles.lastCell]}></Text>

        </View>


        <View style={styles.boxRow}>
          <Text style={styles.boxCell}></Text>
          <Text style={styles.boxCell}></Text>
          <Text style={styles.boxCell}></Text>
          <View style={[styles.boxCell, styles.lastCell, { justifyContent: 'flex-start' }]}>
            <Text style={{ marginBottom: 20 }}>REVIEWED</Text>
            <View style={{ borderBottom: '1px solid black', width: '100%', marginBottom: 4 }} />
            <Text style={{ fontSize: 6, textAlign: 'center' }}>CHIEF, PROCESSING DIV. / SEC</Text>
          </View>
        </View>
        
        
      </View>

      {/* BOX 3 */}
      <View style={[styles.section, {marginTop: 10}]}>
        <Text style={styles.label}>BOX 3</Text>
        <View style={{ border: '1px solid black', padding: 10, fontSize: 6 }}>
          <Text style={{ marginBottom: 6, textAlign: 'justify' }}>
            PERMIT IS HEREBY GRANTED TO INSTALL THE ELECTRICAL WIRING, DEVICES AND EQUIPMENT ENUMERATED IN THE APPLICATION SUBJECT TO THE FOLLOWING CONDITIONS:
          </Text>
          <Text style={{ marginBottom: 4, textAlign: 'justify' }}>
            1. THAT THE PROPOSED INSTALLATION BE IN ACCORDANCE WITH THE APPROVED PLANS FILED WITH THIS OFFICE AND IN CONFORMITY WITH THE PROVISIONS OF THE LATEST EDITION OF THE PHILIPPINE ELECTRICAL CODE.
          </Text>
          <Text style={{ marginBottom: 4, textAlign: 'justify' }}>
            2. THAT A DULY LICENSED ELECTRICAL PRACTITIONER BE INCHARGE OF THE INSTALLATION/CONSTRUCTION.
          </Text>
          <Text style={{ marginBottom: 4, textAlign: 'justify' }}>
            3. THAT A CERTIFICATE OF COMPLETION DULY SIGNED BY THE ELECTRICAL PRACTITIONER INCHARGE OF THE INSTALLATION BE SUBMITTED NOT LATER THAN SEVEN (7) DAYS AFTER COMPLETION OF THE INSTALLATION.
          </Text>
          <Text style={{ marginBottom: 4, textAlign: 'justify' }}>
            4. THAT A CERTIFICATE OF FINAL ELECTRICAL INSPECTION BE SECURED PRIOR TO THE ACTUAL OCCUPANCY OF THE BUILDING.
          </Text>
          <Text style={{ marginBottom: 10, textAlign: 'justify' }}>
            5. THIS PERMIT SHALL BE POSTED AT THE DOOR OR SITE OF WORK.
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
            {/* Approved Section */}
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', marginBottom: 8, marginRight: 170 }}>APPROVED:</Text>

              <Text style={{ textDecoration: 'underline', fontWeight: 'bold', marginBottom: 10 }}>ENGR. JAN RIEL L. ENRIQUEZ</Text>
              <Text style={{ fontSize: 7 }}>ELECTRICAL ENGINEER OF THE BUILDING OFFICE</Text>
              <Text style={{ fontSize: 5, marginTop: 3 }}>(Signature Over Printed Name) </Text>



              <View style={{ borderBottom: '1px solid black', width: 150, marginTop: 20, marginBottom: 4 }} />
              <Text style={{ marginTop: 3, fontSize: 8 }}>PRC REG. NO. & VALIDITY</Text>


              
              <Text style={{ fontWeight: 'bold', marginBottom: 8, marginRight: 170, marginTop: 20 }}>NOTED:</Text>
              <Text style={{ textDecoration: 'underline', fontWeight: 'bold' , marginBottom: 10 }}>ENGR. BERNARDO C. RABANOZ</Text>
              <Text style={{ fontSize: 7 }}>BUILDING OFFICIAL</Text>
              <Text style={{ fontSize: 5, marginTop: 3 }}>(Signature Over Printed Name) </Text>

            </View>

            {/* Spacer */}
            <View style={{ width: 40 }} />

            {/* Noted Section */}
            <View style={{ flex: 1, alignItems: 'center' }}>
              

              <View style={{ borderBottom: '1px solid black', width: 100, marginTop: 20 }} />
              <Text style={{ fontSize: 8 }}>DATE</Text>

              <View style={{ borderBottom: '1px solid black', width: 100, marginTop: 100}} />
              <Text style={{ fontSize: 8 }}>DATE</Text>
            </View>
          </View>



        </View>

        {/* Notes */}
        <View style={styles.note}>
          <Text>
            <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>NOTE 1: </Text>
            This permit may be cancelled or revoked pursuant to sections 305 and 306 of the National Building Code
          </Text>
          <Text>
            <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>NOTE 2: </Text>
            Alterations on this form are not allowed.
          </Text>
        </View>
      </View>

    </Page>
);

export default BackPageElectricalPDF;