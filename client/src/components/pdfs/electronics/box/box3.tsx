import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box3'; // Import the styles

// Define the permit layout component
export function PermitBodyBox3({ permitInfo }: { permitInfo: any }) {
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };

    return (
        <View style={styles.formNo}>
            {/* Title Section */}
            <Text style={styles.printText}>BOX 3</Text>
            
            {/* Row Box 1 */}
            <View style={styles.container}>
                <Text style={styles.label}>DESIGN PROFESSIONAL, PLANS AND SPECIFICATIONS</Text>
                    <View style={styles.row}>
                        {/* Master Plumber label and line */}
                        <View style={styles.textLineContainer}>
                            <Text style={styles.line}>{data.labelData || ' '}</Text>
                            <Text style={styles.labelOnLine}>PROFESSIONAL ELECTRONICS ENGINEER</Text>
                            <Text style={styles.labelOnLine3}>(signed and sealed over printed name)</Text>
                        </View>

                        {/* Date label and line */}
                        <View style={styles.textLineContainer2}>
                            <Text style={styles.labelOnLine2}>DATE</Text>
                            <Text style={styles.lineDate}>{data.labelData || ' '}</Text>
                        </View>
                    </View>
            </View>
            {/* End of Row Box 1 */}

            {/* Row Box 2 */}
            <View style={styles.container}>
                    <View style={styles.column}>
                        <Text style={styles.labelColumn}>ADDRESS:</Text>
                        <Text style={styles.data}>{data.labelData || ' '}</Text>
                    </View>
            </View>
            {/* End of Row Box 2 */}
            {/* Row Box 3 */}
            <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.columnInfo}>
                            <Text style={styles.labelColumn}>PRC NO.</Text>
                            <Text style={styles.data}>{data.labelData || ' '}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.labelColumn}>VALIDITY</Text>
                            <Text style={styles.data}>{data.labelData || ' '}</Text>
                        </View>
                    </View>
            </View>
            {/* End of Row Box 3 */}
            {/* Row Box 4 */}
            <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.columnInfo}>
                            <Text style={styles.labelColumn}>PTR NO. </Text>
                            <Text style={styles.data}>{data.labelData || ' '}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.labelColumn}>DATE ISSUED </Text>
                            <Text style={styles.data}>{data.labelData || ' '}</Text>
                        </View>
                    </View>
            </View>
            {/* End of Row Box 4 */}

            {/* Row Box 5 */}
            <View style={styles.containerLast}>
                    <View style={styles.row}>
                        <View style={styles.columnInfo}>
                            <Text style={styles.labelColumn}>PLACE ISSUED </Text>
                            <Text style={styles.data}>{data.labelData || ' '}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.labelColumn}>TIN</Text>
                            <Text style={styles.data}>{data.labelData || ' '}</Text>
                        </View>
                    </View>
            </View>
            {/* End of Row Box 5 */}
        </View> 
    );
}
