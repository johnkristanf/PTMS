import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box7'; // Import the styles

// Define the permit layout component
export function PermitBodyBox7({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <>
            {/* Title Section */}
            <Text style={styles.printText}>BOX 7 (TO BE ACCOMPLISHED BY THE PROCESSING AND EVALUATION DIVISION)</Text>



            {/* Row Box 4 */}
            <View style={styles.container4}>
                <View style={styles.row3}>
                    <View style={styles.prcContainer}>
                        <Text style={styles.infoText2}>RECEIVED BY: </Text>
                    </View>
                    
                    {/* Vertical Line */}
                    <View style={styles.verticalLine} />
                    
                    <View style={styles.validityContainer}>
                        <Text style={styles.infoText3}>DATE: </Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 4 */}
            
            {/* Row Box 3 */}
            <View style={styles.container3}>
                <Text style={styles.infoText}>THREE (3) SETS OF MECHANICAL DOCUMENTS
                </Text>

                {/* Create a flex row to arrange both sets side by side */}
                <View style={styles.setsRow}>
                            {/* Left column for NEW CONSTRUCTION, ERECTION, etc. */}
                            <View style={styles.scopeColumn}>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label2}>MECHANICAL PLANS AND SPECIFICATION</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check ERECTION box here */}
                                    <Text style={styles.box4label2}>COST ESTIMATES</Text>
                                </View>
                            </View>

                            <View style={styles.scopeColumn2}>
                                <View style={styles.rowOption}>
                                    <Text style={styles.box4label2}>BUILDING DOCUMENTS</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <Text style={styles.box4label2}>(FIVE (5) SETS EACH) </Text>
                                </View>
                            </View>
    

                    {/* Create a flex row to arrange both sets side by side */}
                
                            {/* Left column for NEW CONSTRUCTION, ERECTION, etc. */}
                            <View style={styles.scopeColumn3}>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label2}>BILL OF MATERIALS</Text>
                                    <Text style={styles.blankLineData}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check ERECTION box here */}
                                    <Text style={styles.box4label2}>OTHERS (SPECIFY)</Text>
                                    <Text style={styles.blankLineData}>{data.labelData || ' '} </Text>
                                </View>
                            </View>
                    </View>
            </View>
            {/* End of Row Box 3 */}
        </>
        
        
    );
}
