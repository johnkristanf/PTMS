import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box1'; // Import the styles
import { AppliedServices } from '../../../../../types/application';

// Define the permit layout component
export function PermitBodyBox1({ permitInfo }: { permitInfo: AppliedServices }) {
   
    return (
        <View style={styles.formNo}>
            {/* Title Section */}
            <Text style={styles.printText}>DPWH FORM NO. 96-006-E</Text>
            <View style={styles.permitTitle}>
                <Text style={styles.permitTitleText}>REPUBLIC OF THE PHILIPPINES</Text>
                <Text style={styles.permitTitleText}>PROVINCE OF DAVAO DEL NORTE</Text>
                <Text style={styles.permitTitleText}>CITY OF PANABO</Text>
                <Text style={styles.permitTitleText}>OFFICE OF THE BUILDING OFFICIAL</Text>
                <View style={styles.rowDate}>
                    <Text style={styles.permitTitleText}>-o0o-</Text>
                </View>
                </View>  
            
            {/* <Text style={styles.printText}>THIS IS TO CERTIFY THAT FINAL INSPECTION OF THE ELECTRICAL INSTALLATION HAD BEEN CONDUCTED ON THE BUILDING
AND / OR PREMISES COVERED BY BUILDING PERMIT NO. __________________ ISSUED ON _____________________ AND THE SAME WERE
FOUND COMPLETED IN ACCORDANCE WITH THE APPROVED PLANS AND SPECIFICATIONS ON FILE WITH THE OFFICE OF THE BUILDING
OFFICIAL AND IN ACCORDANCE WITH PHILIPPINE ELECTRICAL CODE PROVISION.</Text> */}
            
            {/* Row Box 1 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.label}>NAME OF OWNER APPLICANT</Text>
                            <Text style={styles.label}>LAST NAME</Text>  
                            <Text style={styles.label}>FIRST NAME</Text>  
                            <Text style={styles.label}>MIDDLE NAME</Text>  
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                        <Text style={styles.labelData}></Text>  
                        <Text style={styles.labelData}>{permitInfo.lastName || ' '} </Text>
                        <Text style={styles.labelData}>{permitInfo.firstname || ' '} </Text>
                        <Text style={styles.labelData}>{permitInfo.middleInitial || ' '} </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 1 */}

            {/* Row Box 3 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.label}>ADDRESS</Text>
                            <Text style={styles.label}>NO.</Text>
                            <Text style={styles.label}>STREET</Text>
                            <Text style={styles.label}>BARANGAY</Text>
                            <Text style={styles.label}>CITY/MUNICIPALITY</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.labelData}></Text>
                            <Text style={styles.labelData}>{permitInfo.addressNo || ' '} </Text>
                            <Text style={styles.labelData}>{permitInfo.street || ' '} </Text>
                            <Text style={styles.labelData}>{permitInfo.barangay || ' '} </Text>
                            <Text style={styles.labelData}>{permitInfo.municipality || ' '} </Text>
                        </View>
                    </View> 
                </View>
            </View>
            {/* End of Row Box 3 */}

            {/* Row Box 4 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.label}>LOCATION OF CONSTRUCTION</Text>
                            <Text style={styles.label}>NO.</Text>
                            <Text style={styles.label}>STREET</Text>
                            <Text style={styles.label}>BARANGAY</Text>
                            <Text style={styles.label}>CITY/MUNICIPALITY</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                        <Text style={styles.labelData}></Text>
                        <Text style={styles.labelData}>{permitInfo.addressNo || ' '} </Text>
                        <Text style={styles.labelData}>{permitInfo.street || ' '} </Text>
                        <Text style={styles.labelData}>{permitInfo.barangay || ' '} </Text>
                        <Text style={styles.labelData}>{permitInfo.municipality || ' '} </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 4 */}
            
            {/* Row Box 6 */}
            {/* Container for nature of installation */}
            <View style={styles.container6}>
                <Text style={styles.box6label}>TYPE OF OCCUPANCY OR USE</Text>
                
                {/* Columns layout */}
                <View style={styles.columnsContainer}>
                    
                    {/* First Column */}
                    <View style={styles.column6}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}></Text>
                            </View>
                            <Text style={styles.checkboxLabel}>A. RESIDENTIAL DWELLING</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}></Text>
                            </View>
                            <Text style={styles.checkboxLabel}>B. RESIDENTIAL HOTEL APARTMENT</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}></Text>
                            </View>
                            <Text style={styles.checkboxLabel}>C. EDUCATION AND RECREATION</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}></Text>
                            </View>
                            <Text style={styles.checkboxLabel}>D. INSTITUTIONAL</Text>
                        </View>
                    </View>
                    {/* Second Column */}
                    <View style={styles.column6}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}></Text>
                            </View>
                            <Text style={styles.checkboxLabel}>E. BUSINESS & MERCANTILE</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}></Text>
                            </View>
                            <Text style={styles.checkboxLabel}>F. INDUSTRIAL</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}></Text>
                            </View>
                            <Text style={styles.checkboxLabel}>G. STORAGE & HAZARDOUS</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}></Text>
                            </View>
                            <Text style={styles.checkboxLabel}>H. ASSEMBLY OTHER THAN GROUP I</Text>
                        </View>
                    </View>

                    {/* Third Column */}
                    <View style={styles.column6}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}></Text>
                            </View>
                            <Text style={styles.checkboxLabel}>I. ASSEMBLY OCCUPANT LOAD 100 OR MORE</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}></Text>
                            </View>
                            <Text style={styles.checkboxLabel}>J. ACCESSORY</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}></Text>
                            </View>
                            <Text style={styles.checkboxLabel}>K. OTHERS (SPECIFY)</Text>
                            <Text style={styles.blankLineData2}> </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.columnsContainer}>
                    <View style={styles.column6}>
                        <View style={styles.checkboxRow}>
                            <Text style={styles.checkboxLabel}>START OF INSTALLATION</Text>
                        </View>
                    </View>
                    <View style={styles.column6}>
                        <View style={styles.checkboxRow}>
                            <Text style={styles.checkboxLabel}>DATE OF COMPLETION</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 6 */}
        </View>
    );
}
