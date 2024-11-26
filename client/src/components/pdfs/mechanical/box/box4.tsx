import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box4'; // Import the styles

// Define the permit layout component
export function PermitBodyBox4({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <>
            {/* Title Section */}
            <Text style={styles.printText}>BOX 4</Text>

            {/* Row Box 1 */}
            <View style={styles.container}>
                <View style={styles.boxStyleContainer}>
                    <View style={styles.row}>
                        <Text style={styles.label}>SUPERVISOR / IN-CHARGE OF MECHANICAL WORKS</Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 1 */}

            {/* Row Box 2 */}
            <View style={styles.container2}>
                <View style={styles.scopeColumn4}>
                        <View style={styles.rowOption}>
                            <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                            {/* Check NEW CONSTRUCTION box here */}
                            <Text style={styles.box4label2}>PROFESSIONAL MECHANICAL ENGINEER</Text>
                        </View>
                </View>

                <View style={styles.scopeColumn5}>
                        <View style={styles.rowOption}>
                            <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                            {/* Check NEW CONSTRUCTION box here */}
                            <Text style={styles.box4label2}>MECHANICAL ENGINEER</Text>
                        </View>
                </View>
                <View style={styles.boxStyleContainer2}>
                    <View style={styles.row2}>
                        {/* Master Plumber label and line */}
                        <View style={styles.textLineContainer}>
                            <Text style={styles.line}>{data.labelData || ' '}</Text>
                            <Text style={styles.labelOnLine}>PROFESSIONAL MECHANICAL ENGINEER</Text>
                            <Text style={styles.labelOnLine3}>(signed and sealed over printed name)</Text>
                            <View style={styles.row}>
                                <Text style={styles.labelOnLine2}>Date</Text>
                                <Text style={styles.lineDate}>{data.labelData || ' '}</Text>
                            </View>
                            </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 2 */}

            {/* Row Box 3 */}
            <View style={styles.container3}>
                <Text style={styles.infoText}>ADDRESS </Text>
                <Text style={styles.data}>{data.labelData || ' '}</Text>
            </View>
            {/* End of Row Box 3 */}

            {/* Row Box 4 */}
            <View style={styles.container4}>
                <View style={styles.row3}>
                    <View style={styles.prcContainer}>
                        <Text style={styles.infoText2}>PRC NO.</Text>
                        <Text style={styles.dataText}>{data.labelData || ' '}</Text>
                    </View>
                    
                    {/* Vertical Line */}
                    <View style={styles.verticalLine} />
                    
                    <View style={styles.validityContainer}>
                        <Text style={styles.infoText3}>VALIDITY</Text>
                        <Text style={styles.dataText}>{data.labelData || ' '}</Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 4 */}

            {/* Row Box 5 */}
            <View style={styles.container5}>
                <View style={styles.row3}>
                    <View style={styles.prcContainer2}>
                        <Text style={styles.infoText2}>PTR NO.</Text>
                        <Text style={styles.dataText}>{data.labelData || ' '}</Text>
                    </View>
                    
                    {/* Vertical Line */}
                    <View style={styles.verticalLine} />
                    
                    <View style={styles.validityContainer2}>
                        <Text style={styles.infoText3}>DATE ISSUED</Text>
                        <Text style={styles.dataText}>{data.labelData || ' '}</Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 5 */}

            {/* Row Box 6 */}
            <View style={styles.container6}>
                <View style={styles.row3}>
                    <View style={styles.prcContainer3}>
                        <Text style={styles.infoText2}>ISSUED AT</Text>
                        <Text style={styles.dataText2}>{data.labelData || ' '}</Text>
                    </View>
                    
                    {/* Vertical Line */}
                    <View style={styles.verticalLine2} />
                    
                    <View style={styles.validityContainer3}>
                        <Text style={styles.infoText4}>TIN </Text>
                        <Text style={styles.dataText}>{data.labelData || ' '}</Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 6 */}
        </>
        
        
    );
}
