import { View, Text, Svg, Path } from '@react-pdf/renderer';
import styles from '../styles/box1'; // Import the styles
import { AppliedServices } from '../../../../types/application';

// Define the permit layout component
export function PermitBodyBox1({ permitInfo }: { 
    permitInfo: AppliedServices 
  }) {

    const scopeOfWorkArray = permitInfo.scopeType.split(',');
    const occupancyArray = permitInfo.characterOfOccupancy.split(',');

    console.log("electrical scopeOfWorkArray: ", scopeOfWorkArray);
    console.log("electrical occupancyArray: ", occupancyArray);
    

    const firstBoxesScope = [
        {name: "Electrical-NEW INSTALLATION"},
        {name: "Electrical-ANNUAL INSPECTION"},
    ]

    const secondBoxesScope = [
        {name: "Electrical-ADDITION OF"},
        {name: "Electrical-REPAIR OF"},
        {name: "Electrical-REMOVAL"},
    ]


    const thirdBoxesScope = [
        {name: "OTHERS (SPECIFY)"},
    ]


    const firstBoxesOccupancy = [
        {name: "Electrical-A. RESIDENTIAL DWELLING"},
        {name: "Electrical-B. RESIDENTIAL HOTEL APARTMENT"},
        {name: "Electrical-C. EDUCATION AND RECREATION"},
        {name: "Electrical-D. INSTITUTIONAL"},
    ]

    const secondBoxesOccupancy = [
        {name: "Electrical-E. BUSINESS & MERCANTILE"},
        {name: "Electrical-F. INDUSTRIAL"},
        {name: "Electrical-G. STORAGE & HAZARDOUS"},
        {name: "Electrical-H. ASSEMBLY OTHER THAN GROUP"},
    ]

    const thirdBoxesOccupancy = [
        {name: "Electrical-I. ASSEMBLY OCCUPANT LOAD 100 OR MORE"},
        {name: "Electrical-J. ACCESSORY"},
        {name: "OTHERS (SPECIFY)"},
    ]



    
    const data = permitInfo;
    return (
        <View style={styles.formNo}>
            {/* Title Section */}
            <Text style={styles.printText}>DPWH FORM NO. 96-001-E</Text>
            <View style={styles.permitTitle}>
                <Text style={styles.permitTitleText}>Republic of the Philippines</Text>
                <Text style={styles.permitTitleText1}>DEPARTMENT OF PUBLIC WORKS AND HIGHWAYS</Text>
                <Text style={styles.permitTitleText2}>OFFICE OF THE BUILDING OFFICIAL</Text>
                <Text style={styles.permitTitleText3}>PANABO CITY </Text>
                <View style={styles.rowDate}>
                    <Text style={styles.permitTitleText4}>AREA CODE. </Text>
                    <Text style={styles.blankLineDataDate}>{data.labelData || ' '} </Text>
                </View>
                </View>

                <View style={styles.rowApplication}>
                <View style={styles.columnApplication}>
                    <Text style={styles.appLabel}>APPLICATION NO.</Text>
                    <Text style={styles.appLabelData}>{data.applicationCode || ' '} </Text>
                </View>
                <View style={styles.columnApplication2}>
                    <Text style={styles.appLabel2}>DATE FILED</Text>
                    <Text style={styles.appLabelData2}>{data.labelData || ' '} </Text>
                </View>
                </View>

                     {/* Date Container */}
                    <View style={styles.dateContainer}>
                        <View style={styles.dateText}>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                            <Text style={styles.dateLabel}>Date of Proposed start of Installation</Text>
                            {/* Data for DATE OF APPLICATION goes here */}
                        </View>
                        <View style={styles.dateText1}>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                            <Text style={styles.dateLabel2}>Expected Date of Completion</Text>
                            {/* Data for DATE ISSUED goes here */}
                        </View>
                    </View>       
                
                <Text style={styles.title}>APPLICATION FOR ELECTRICAL PERMIT</Text>
                <Text style={styles.subTitle}>(Accomplished in print and in Duplicate)</Text>
            
            

            <Text style={styles.printText}>BOX 1 (TO BE ACCOMPLISHED IN PRINT BY THE OWNER/APPLICANT)</Text>
            
            {/* Row Box 1 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.label}>NAME OF OWNER/APPLICANT</Text>
                            <Text style={styles.label}>LAST NAME, FIRST NAME, M.I.</Text>  
                        </View>
                    </View>
                    <View style={styles.subRow}>
                        <Text style={styles.label}>TAX I.D. NO.</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                        <Text style={styles.labelData}>{data.labelData || ' '} </Text>  
                        <Text style={styles.labelData}>{`${data.lastName}, ${data.firstname}, ${data.middleInitial}` || ' '} </Text>
                        </View>
                    </View>
                    <View style={styles.subRow}>
                    <Text style={styles.labelData}>{data.labelData || ' '} </Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 1 */}

            {/* Row Box 2 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.subRow1}>
                            <Text style={styles.label}>FOR CONSTRUCTION OWNED BY AN ENTERPRISE</Text>
                        </View>
                    </View>
                    <View style={styles.subRow2}>
                        <Text style={styles.label}>FORM OF OWNERSHIP</Text>
                    </View>
                    <View style={styles.subRow2}>
                        <Text style={styles.label}>USE OR CHARACTER OF OCCUPANCY</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.subRow1}>
                        <Text style={styles.labelData}>{data.constructOwnbyEnterprise || ' '} </Text>  
                        </View>
                    </View>
                    <View style={styles.subRow2}>
                    <Text style={styles.labelData}>{data.constructOwnbyEnterprise || ' '} </Text>
                    </View>
                    <View style={styles.subRow2}>
                    <Text style={styles.labelData}>{data.characterOfOccupancy || ' '} </Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 2 */}

            {/* Row Box 3 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.label}>ADDRESS</Text>
                            <Text style={styles.label}>NO., STREET, BARANGAY, CITY/MUNICIPALITY/ ZIP CODE </Text>
                        </View>
                    </View>
                    <View style={styles.subRow3}>
                            <Text style={styles.label}>TELEPHONE NO.</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.labelData4}>{data.labelData || ' '} </Text>
                            <Text style={styles.labelData5}>{`${data.addressNo}, ${data.street}, ${data.barangay}, ${data.municipality}, ${data.zipCode}` || ' '} </Text>
                        </View>
                    </View> 
                    <View style={styles.subRow4}>
                        <Text style={styles.labelData3}>{data.telNo || ' '} </Text>
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
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                        <Text style={styles.labelData}>{data.locationForConstruct_Install || ' '} </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 4 */}
            
            {/* Row Box 5 */}
            <View style={styles.container5}>
                {/* Row for SCOPE OF WORKS */} 
                <Text style={styles.box4label}>SCOPE OF WORKS : </Text>
                
                <View style={styles.boxStyleContainer4}>
                    <View style={styles.columnBox}>
                        <View style={styles.scopeOfWorkRow}>
                            
                            <View style={styles.scopeColumn1}>
                                {firstBoxesScope.map((data) => (
                                    <View style={styles.smallboxes_container}>
                                        <View key={data.name} style={styles.checkbox}>
                                            {scopeOfWorkArray.includes(data.name) && (
                                                <Svg viewBox="0 0 24 24" >
                                                    <Path
                                                        d="M20.285 6.287l-11.314 11.314-5.657-5.657 1.414-1.414 4.243 4.243 9.9-9.9z"
                                                        fill="none"
                                                        stroke="black"
                                                        strokeWidth="2"
                                                    />
                                                </Svg>
                                            )}
                                        </View>

                                        <Text style={styles.boxes_text}>{data.name.replace(/^[^-]+-/, '')}</Text>
                                    </View>
                                                   
                                ))}
                            </View>

                            <View style={styles.scopeColumn1}>
                                {secondBoxesScope.map((data) => (
                                    <View style={styles.smallboxes_container}>
                                        <View key={data.name} style={styles.checkbox}>
                                            {scopeOfWorkArray.includes(data.name) && (
                                                <Svg viewBox="0 0 24 24" >
                                                    <Path
                                                        d="M20.285 6.287l-11.314 11.314-5.657-5.657 1.414-1.414 4.243 4.243 9.9-9.9z"
                                                        fill="none"
                                                        stroke="black"
                                                        strokeWidth="2"
                                                    />
                                                </Svg>
                                            )}
                                        </View>
                                        
                                        <Text style={styles.boxes_text}>{data.name.replace(/^[^-]+-/, '')}</Text>
                                    </View>
                                                   
                                ))}
                            </View>


                            <View style={styles.scopeColumn1}>
                                {thirdBoxesScope.map((data) => (
                                    <View style={styles.smallboxes_container}>
                                        <View key={data.name} style={styles.checkbox}>
                                            {scopeOfWorkArray.includes(data.name) && (
                                                <Svg viewBox="0 0 24 24" >
                                                    <Path
                                                        d="M20.285 6.287l-11.314 11.314-5.657-5.657 1.414-1.414 4.243 4.243 9.9-9.9z"
                                                        fill="none"
                                                        stroke="black"
                                                        strokeWidth="2"
                                                    />
                                                </Svg>
                                            )}
                                        </View>
                                        
                                        <Text style={styles.boxes_text}>{data.name.replace(/^[^-]+-/, '')}</Text>
                                    </View>
                                                   
                                ))}
                            </View>

                            
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 5 */}

            {/* Row Box 6 */}
            {/* Container for nature of installation */}
            <View style={styles.container6}>
                <Text style={styles.box6label}>USE OR TYPE OF OCCUPANCY</Text>
                
                {/* Columns layout */}
                <View style={styles.columnsContainer}>
                    
                    {/* First Column */}
                    <View style={styles.column6}>

                        {firstBoxesOccupancy.map((data) => (
                                    <View style={styles.smallboxes_container}>
                                        <View key={data.name} style={styles.checkbox}>
                                            {occupancyArray.includes(data.name) && (
                                                <Svg viewBox="0 0 24 24" >
                                                    <Path
                                                        d="M20.285 6.287l-11.314 11.314-5.657-5.657 1.414-1.414 4.243 4.243 9.9-9.9z"
                                                        fill="none"
                                                        stroke="black"
                                                        strokeWidth="2"
                                                    />
                                                </Svg>
                                            )}
                                        </View>

                                        <Text style={styles.boxes_text}>{data.name.replace(/^[^-]+-/, '')}</Text>
                                    </View>
                                                   
                                ))}
                        
                    </View>


                    {/* Second Column */}
                    <View style={styles.column6}>

                        {secondBoxesOccupancy.map((data) => (
                                    <View style={styles.smallboxes_container}>
                                        <View key={data.name} style={styles.checkbox}>
                                            {occupancyArray.includes(data.name) && (
                                                <Svg viewBox="0 0 24 24" >
                                                    <Path
                                                        d="M20.285 6.287l-11.314 11.314-5.657-5.657 1.414-1.414 4.243 4.243 9.9-9.9z"
                                                        fill="none"
                                                        stroke="black"
                                                        strokeWidth="2"
                                                    />
                                                </Svg>
                                            )}
                                        </View>

                                        <Text style={styles.boxes_text}>{data.name.replace(/^[^-]+-/, '')}</Text>
                                    </View>
                                                   
                                ))}
                        
                    </View>


                    {/* Third Column */}
                    <View style={styles.column6}>

                        {thirdBoxesOccupancy.map((data) => (
                                    <View style={styles.smallboxes_container}>
                                        <View key={data.name} style={styles.checkbox}>
                                            {occupancyArray.includes(data.name) && (
                                                <Svg viewBox="0 0 24 24" >
                                                    <Path
                                                        d="M20.285 6.287l-11.314 11.314-5.657-5.657 1.414-1.414 4.243 4.243 9.9-9.9z"
                                                        fill="none"
                                                        stroke="black"
                                                        strokeWidth="2"
                                                    />
                                                </Svg>
                                            )}
                                        </View>

                                        <Text style={styles.boxes_text}>{data.name.replace(/^[^-]+-/, '')}</Text>
                                    </View>
                                                   
                                ))}
                        
                    </View>
                    
                </View>
            </View>
            {/* End of Row Box 6 */}

            <View style={styles.containerOutletsRow}>

                {/* First Column */}
                
                <View style={styles.containerOutletsColumn}>
                    <Text style={styles.box6label}>NUMBER OF OUTLETS</Text>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <View style={styles.checkboxRow}>
                                <Text style={styles.blankLineDataOut}>{data.checkboxData || ' '}</Text>
                                <Text style={styles.checkboxLabel}>LIGHT</Text>
                            </View>
                            <View style={styles.checkboxRow}>
                                <Text style={styles.blankLineDataOut}>{data.checkboxData || ' '}</Text>
                                <Text style={styles.checkboxLabel}>CONVENIENCE/RECEPTACLE</Text>
                            </View>
                            <View style={styles.checkboxRow}>
                                <Text style={styles.blankLineDataOut}>{data.checkboxData || ' '}</Text>
                                <Text style={styles.checkboxLabel}>SPO. AIRCON</Text>
                            </View>
                        </View>
                        <View style={styles.column}>
                            <View style={styles.checkboxRow}>
                                <Text style={styles.blankLineDataOut}>{data.checkboxData || ' '}</Text>
                                <Text style={styles.checkboxLabel}>SPO COOKING UNIT</Text>
                            </View>
                            <View style={styles.checkboxRow}>
                                <Text style={styles.blankLineDataOut}>{data.checkboxData || ' '}</Text>
                                <Text style={styles.checkboxLabel}>SPO. COOKING HEATER</Text>
                            </View>
                            <View style={styles.checkboxRow}>
                                <Text style={styles.blankLineDataOut}>{data.checkboxData || ' '}</Text>
                                <Text style={styles.checkboxLabel}>SPO WATER PUMP</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.containerOutletsColumn}>
                    <Text style={styles.box6label}>NUMBER OF EQUIPMENT/WIRING DEVICES</Text>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <View style={styles.checkboxRow}>
                                <Text style={styles.blankLineDataOut}>{data.checkboxData || ' '}</Text>
                                <Text style={styles.checkboxLabel}>TOGGLE SWITCH</Text>
                            </View>
                            <View style={styles.checkboxRow}>
                                <Text style={styles.blankLineDataOut}>{data.checkboxData || ' '}</Text>
                                <Text style={styles.checkboxLabel}>BELLS/BUZZER</Text>
                            </View>
                            <View style={styles.checkboxRow}>
                                <Text style={styles.blankLineDataOut}>{data.checkboxData || ' '}</Text>
                                <Text style={styles.checkboxLabel}>PUSH BUTTON</Text>
                            </View>
                        </View>
                        <View style={styles.column}>
                            <View style={styles.checkboxRow}>
                                <Text style={styles.blankLineDataOut}>{data.checkboxData || ' '}</Text>
                                <Text style={styles.checkboxLabel}>FIRE ALARM/SMOKE DETECTORS</Text>
                            </View>
                            <View style={styles.checkboxRow}>
                                <Text style={styles.blankLineDataOut}>{data.checkboxData || ' '}</Text>
                                <Text style={styles.checkboxLabel}>OTHERS (SEE ATTACHED LIST)</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
            
        </View>
    );
}
