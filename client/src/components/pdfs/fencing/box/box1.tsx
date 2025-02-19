import { View, Text, Svg, Path } from '@react-pdf/renderer';
import styles from '../styles/box1'; // Import the styles
import { AppliedServices } from '../../../../types/application';

// Define the permit layout component
export function PermitBodyBox1({ permitInfo }: { permitInfo: AppliedServices }) {
    

    const data = permitInfo;

     const scopeOfWorkArray = data.scopeType.split(',');
    
        console.log("building scopeOfWorkArray", scopeOfWorkArray)
    
        const firstBoxes = [
            {name: "Fencing-NEW CONSTRUCTION"},
            {name: "Fencing-ERECTION"},
            {name: "Fencing-ADDITION"},
        ]
    
        const secondBoxes = [
            {name: "Fencing-REPAIR"},
            {name: "Fencing-DEMOLITION"},
        ]
    
    
        const thirdBoxes = [
            {name: "OTHERS (specify"},
        ]
    
    return (
    
        <View style={styles.formNo}>
            {/* Title Section */}
            <Text style={styles.formNo}>NBC FORM B-03</Text>
            <View style={styles.permitTitle}>
                <Text style={styles.permitTitleText}>Republic of the Philippines</Text>
                <Text style={styles.permitTitleText1}>PANABO CITY</Text>
                <Text style={styles.permitTitleText2}>Province of Davao Del Norte</Text>
                <Text style={styles.permitTitleText3}>OFFICE OF THE BUILDING OFFICIAL</Text>

                <Text style={styles.title}>FENCING PERMIT</Text>

                <View style={styles.noApplication}>
                    {/* Align the text horizontally */}
                    <View style={styles.numberContainer}>
                        <Text style={styles.numberText}>APPLICATION NO.</Text>
                        {/* Data for APPLICATION NO. goes here */}

                        <Text style={styles.numberText1}>FP NO.</Text>
                        {/* Data for PP NO. goes here */}

                        <Text style={styles.numberText2}>BUILDING PERMIT NO.</Text>
                        {/* Data for PERMIT NO goes here */}
                    </View>

                    <View style={styles.row}>
                        {/* Create boxes below the text for Application No. */}
                        <View style={styles.boxContainer}>
                            {/* Insert individual digits of APPLICATION NO. here */}
                            {/* Multi-Cell Box (for data entry) */}
                        <View style={styles.multiCellBox}>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <View key={index} style={styles.cell}>
                                    {/* Replace `permitInfo.cellData[index]` with actual data you want to display */}
                                    <Text style={styles.cellData}>{data.applicationCode ? data.applicationCode[index] : ''}</Text>
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
                            {Array.from({ length: 12 }).map((_, index) => (
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

            <Text style={styles.printText}>BOX 1 (TO BE ACCOMPLISHED BY SANITARY ENGINEER/MASTER PLUMBER, IN PRINT)</Text>
            
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
                        <View style={styles.row}>
                            <Text style={styles.label}>FOR CONSTRUCTION OWNED BY AN ENTERPRISE</Text>
                        </View>
                    </View>
                    <View style={styles.subRow2}>
                        <Text style={styles.label}>FORM OF OWNERSHIP</Text>
                    </View>
                </View>
                
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
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
                            <Text style={styles.label}>STREET</Text>
                            <Text style={styles.label}>BARANGAY</Text>
                            <Text style={styles.label}>CITY/MUNICIPALITY</Text>
                            <Text style={styles.label}>ZIP CODE</Text>
                        </View>
                    </View>
                    <View style={styles.subRow3}>
                            <Text style={styles.label}>TEL.NO.</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
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
                            <Text style={styles.label}>LOCATION OF CONSTRUCTION :</Text>
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

            {/* Row Box 4 */}
            <View style={styles.container2}>
                {/* Row for SCOPE OF WORK */}
                <View style={styles.boxStyleContainer2}>
                    <View style={styles.columnBox}>
                        <Text style={styles.box4label}>SCOPE OF WORK</Text>
                        
                        {/* Create a flex row to arrange both sets side by side */}
                        <View style={styles.scopeOfWorkRow}>

                            {/* FIRST COLUMN */}
                            <View style={styles.scopeColumn}>
                                  {firstBoxes.map((data) => (
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

                            {/* SECOND COLUMN */}
                            <View style={styles.scopeColumn}>
                                  {secondBoxes.map((data) => (
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

                            {/* THIRD COLUMN */}

                            <View style={styles.scopeColumn}>
                                  {thirdBoxes.map((data) => (
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
            {/* End of Row Box 4 */}
            
        </View>
    );
}
