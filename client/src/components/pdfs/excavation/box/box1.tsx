import { View, Text, Svg, Path } from '@react-pdf/renderer';
import styles from '../styles/box1'; // Import the styles
import { AppliedServices } from '../../../../types/application';

// Define the permit layout component
export function PermitBodyBox1({ permitInfo }: { permitInfo: AppliedServices }) {
    
    const data = permitInfo;

    const scopeOfWorkArray = data.scopeType.split(',');
    const occupancyArray = data.characterOfOccupancy.split(',');

    const firstBoxesScope = [
        {name: "Excavation-NEW CONSTRUCTION"},
        {name: "Excavation-ERECTION"},
        {name: "Excavation-ADDITION"},
    ]

    const secondBoxesScope = [
        {name: "Excavation-REPAIR"},
        {name: "Excavation-DEMOLITION"},
    ]


    const thirdBoxesScope = [
        {name: "OTHERS (specify)"},
    ]


    const firstBoxesOccupancy = [
        {name: "Excavation-GROUP A RESIDENTIAL DWELLINGS"},
        {name: "Excavation-GROUP B RESIDENTIAL HOTEL APARTMENT"},
        {name: "Excavation-GROUP C EDUCATIONAL RECREATIONAL"},
        {name: "Excavation-GROUP D INSTITUTIONAL"},
        {name: "Excavation-GROUP E BUSINESS AND MERCANTILE"},
    ]

    const secondBoxesOccupancy = [
        {name: "Excavation-GROUP F INDUSTRIAL"},
        {name: "Excavation-GROUP G INDUSTRIAL STORAGE AND HAZARDOUS"},
        {name: "Excavation-GROUP H RECREATIONAL ASSEMBLY OCCUPANT LOAD LESS THAN 1000"},
        {name: "Excavation-GROUP I RECREATIONAL ASSEMBLY OCCUPANT LOAD 1000 OR MORE"},
        {name: "Excavation-GROUP J AGRICULTURAL ACCESSORY"},
    ]


    const thirdBoxesOccupancy = [
        {name: "OTHERS (specify)"},
    ]


    return (
        <View style={styles.formNo}>
            {/* Title Section */}
            <Text style={styles.printText}>NBC FORM B-02</Text>
            <View style={styles.permitTitle}>
                <Text style={styles.permitTitleText}>Republic of the Philippines</Text>
                <Text style={styles.permitTitleText1}>CITY OF PANABO</Text>
                <Text style={styles.permitTitleText2}>Province of Davao Del Norte</Text>
                <Text style={styles.permitTitleText3}>OFFICE OF THE BUILDING OFFICIAL </Text>

                <Text style={styles.title}>EXCAVATION AND GROUND PREPARATION PERMIT</Text>

                <View style={styles.noApplication}>
                    {/* Align the text horizontally */}
                    <View style={styles.numberContainer}>
                        <Text style={styles.numberText}>APPLICATION NO.</Text>
                        {/* Data for APPLICATION NO. goes here */}

                        <Text style={styles.numberText1}>EGPP NO.</Text>
                        {/* Data for PP NO. goes here */}

                        <Text style={styles.numberText2}>BUILDING PERMIT NO.
                        </Text>
                        {/* Data for PERMIT NO goes here */}
                    </View>

                    <View style={styles.boxStyleContainer}>
                        {/* Create boxes below the text for Application No. */}
                        <View style={styles.boxContainer}>
                            {/* Insert individual digits of APPLICATION NO. here */}
                            {/* Multi-Cell Box (for data entry) */}
                        <View style={styles.multiCellBox}>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <View key={index} style={styles.cell}>
                                    {/* Replace `permitInfo.cellData[index]` with actual data you want to display */}
                                    <Text style={styles.cellData}>{data.applicationCode && data.cellData ? data.cellData[index] : ''}</Text>
                                </View>
                            ))}
                        </View>
                        </View>
                        {/* Create boxes below the text for PP No. */}
                        <View style={styles.boxContainer1}>
                            {/* Insert individual digits of PP NO. here */}
                            {/* Multi-Cell Box (for data entry) */}
                        <View style={styles.multiCellBox}>
                            {Array.from({ length: 8 }).map((_, index) => (
                                <View key={index} style={styles.cell}>
                                    {/* Replace `permitInfo.cellData[index]` with actual data you want to display */}
                                    <Text style={styles.cellData}>{data.cellData ? data.cellData[index] : ''}</Text>
                                </View>
                            ))}
                        </View>
                        </View>
                        {/* Create boxes below the text for Permit No. */}
                        <View style={styles.boxContainer2}>
                            {/* Insert individual digits of PERMIT NO. here */}
                            {/* Multi-Cell Box (for data entry) */}
                        <View style={styles.multiCellBox}>
                            {Array.from({ length: 8 }).map((_, index) => (
                                <View key={index} style={styles.cell}>
                                    {/* Replace `permitInfo.cellData[index]` with actual data you want to display */}
                                    <Text style={styles.cellData}>{data.cellData ? data.cellData[index] : ''}</Text>
                                </View>
                            ))}
                        </View>
                        </View>
                    </View>    

                </View>
            </View>

            <Text style={styles.printText}>BOX 1 (TO BE ACCOMPLISHED IN PRINT BY THE OWNER/APPLICANT)</Text>
            
            {/* Row Box 1 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.label}>OWNER/APPLICANT</Text>
                            <Text style={styles.label}>LAST NAME</Text>  
                            <Text style={styles.label}>FIRST NAME</Text>  
                            <Text style={styles.label}>M.I.</Text>  
                        </View>
                    </View>
                    <View style={styles.subRow}>
                        <Text style={styles.label}>TIN</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                        <Text style={styles.labelData}>{data.labelData || ' '} </Text>  
                        <Text style={styles.labelData}>{data.lastName || ' '} </Text>
                        <Text style={styles.labelData}>{data.firstname || ' '} </Text>
                        <Text style={styles.labelData}>{data.middleInitial || ' '} </Text>
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
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.subRow1}>
                        <Text style={styles.labelData}>{data.constructOwnbyEnterprise || ' '} </Text>  
                        </View>
                    </View>
                    <View style={styles.subRow2}>
                    <Text style={styles.labelData}>{data.formOwnership || ' '} </Text>
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
                            <Text style={styles.label}>NO.</Text>
                            <Text style={styles.label}>STREET</Text>
                            <Text style={styles.label}>BARANGAY</Text>
                            <Text style={styles.label}>CITY/MUNICIPALITY/</Text>
                            <Text style={styles.label}>ZIP CODE</Text>
                        </View>
                    </View>
                    <View style={styles.subRow3}>
                            <Text style={styles.label}>TELEPHONE NO.</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.labelData}>{data.labelData || ' '} </Text>
                            <Text style={styles.labelData}>{data.addressNo || ' '} </Text>
                            <Text style={styles.labelData}>{data.street || ' '} </Text>
                            <Text style={styles.labelData}>{data.barangay || ' '} </Text>
                            <Text style={styles.labelData}>{data.municipality || ' '} </Text>
                            <Text style={styles.labelData}>{data.zipCode || ' '} </Text>
                        </View>
                    </View> 
                    <View style={styles.subRow3}>
                        <Text style={styles.labelData}>{data.telNo || ' '} </Text>
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
            <View style={styles.container6}>
                <Text style={styles.box6label}>USE OR TYPE OF OCCUPANCY</Text>
                
                <View style={styles.columnsContainer}>
                    
                    {/* FIRST COLUMN */}
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

                    {/* SECOND COLUMN */}

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

                    {/* THIRD COLUMN */}
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
            
            
        </View>
    );
}
