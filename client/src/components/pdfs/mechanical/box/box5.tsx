import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box5'; // Import the styles

// Define the permit layout component
export function PermitBodyBox5({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.formNo}>
            {/* Title Section */}
            <Text style={styles.printText}>BOX 5</Text>

            {/* Row Box 1 */}
            <View style={styles.container}>
                <View style={styles.boxStyleContainer}>
                    <View style={styles.row}>
                        <Text style={styles.label}>BUILDING OWNER</Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 1 */}

            {/* Row Box 2 */}
            <View style={styles.container2}>
                <View style={styles.boxStyleContainer2}>
                    <View style={styles.row2}>
                        {/* Master Plumber label and line */}
                        <View style={styles.textLineContainer}>
                        <Text style={styles.line}>{data.labelData || ' '}</Text>
                            <Text style={styles.labelOnLine}>(SIGNATURE OVER PRINTED NAME)</Text>
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
                <Text style={styles.infoText}>ADDRESS:</Text>
                <Text style={styles.data}>{data.labelData || ' '}</Text>
            </View>
            {/* End of Row Box 3 */}

            {/* Row Box 4 */}
            <View style={styles.container4}>
                <View style={styles.row3}>
                    <View style={styles.prcContainer}>
                        <Text style={styles.infoText2}>CTC No. </Text>
                        <Text style={styles.dataText}>{data.labelData || ' '}</Text>
                    </View>
                    
                    {/* Vertical Line */}
                    <View style={styles.verticalLine} />
                    
                    <View style={styles.validityContainer}>
                        <Text style={styles.infoText3}>Date Issued </Text>
                        <Text style={styles.dataText}>{data.labelData || ' '}</Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.verticalLine} />
                    
                    <View style={styles.validityContainer}>
                        <Text style={styles.infoText3}>Place Issued</Text>
                        <Text style={styles.dataText}>{data.labelData || ' '}</Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 4 */}
        </View>
        
        
    );
}
