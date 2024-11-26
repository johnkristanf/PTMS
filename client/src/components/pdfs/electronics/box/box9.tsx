import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box9'; // Import the styles

// Define the permit layout component
export function PermitBodyBox9({ permitInfo }: { permitInfo: any }) {
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.mainContainer}>
            {/* Title Section */}
            <Text style={styles.titleText}>BOX 9</Text>

            {/* Row Box 3 */}
            <View style={styles.headerRow}>
                <Text style={styles.headerText}>ASSESSMENT</Text>
            </View>
            {/* End of Row Box 3 */}

            {/* Row Box 4 */}
            <View style={styles.rowContainer}>
                <View style={styles.contentRow}>              
                    <View style={{ width: '25%' }}>
                        <Text style={styles.centerText}>AMOUNT DUE</Text>
                    </View>
                    <View style={styles.dividerLine} />
                    <View style={{ width: '25%' }}>
                        <Text style={styles.centerText}>ASSESSED BY</Text>
                    </View>
                    <View style={styles.dividerLine} />
                    <View style={{ width: '25%' }}>
                        <Text style={styles.centerText}>O.R. NUMBER</Text>
                    </View>
                    <View style={styles.dividerLine} />
                    <View style={{ width: '25%' }}>
                        <Text style={styles.centerText}>DATE PAID</Text>
                    </View>
                 </View>
            </View>
            {/* End of Row Box 4 */}

            {/* Row Box 5 */}
            <View style={styles.rowContainer}>
                <View style={styles.contentRow}>
                    {/* Empty Row Columns aligned with Header Columns */}
                    <View style={{ width: '25%' }}>
                        <Text style={styles.centerText}>
                            <Text style={styles.data}>{data.labelData || ' '}</Text>
                        </Text>
                    </View>
                    <View style={styles.dividerLine} />
                    <View style={{ width: '25%' }}>
                        <Text style={styles.centerText}>
                            <Text style={styles.data}>{data.labelData || ' '}</Text>
                        </Text>
                    </View>
                    <View style={styles.dividerLine} />
                    <View style={{ width: '25%' }}>
                        <Text style={styles.centerText}>
                            <Text style={styles.data}>{data.labelData || ' '}</Text>
                        </Text>
                    </View>
                    <View style={styles.dividerLine} />
                    <View style={{ width: '25%' }}>
                        <Text style={styles.centerText}>
                            <Text style={styles.data}>{data.labelData || ' '}</Text>
                        </Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 5 */}

            {/* Row Box 6 */}
               <View style={styles.rowContainer}>
                    <View style={styles.contentRow}>
                        {/* Empty Row Columns aligned with Header Columns */}
                        <View style={{ width: '25%' }}>
                            <Text style={styles.centerText}>
                                <Text style={styles.data}>{data.labelData || ' '}</Text>
                            </Text>
                        </View>
                        <View style={styles.dividerLine} />
                        <View style={{ width: '25%' }}>
                            <Text style={styles.centerText}>
                                <Text style={styles.data}>{data.labelData || ' '}</Text>
                            </Text>
                        </View>
                        <View style={styles.dividerLine} />
                        <View style={{ width: '25%' }}>
                            <Text style={styles.centerText}>
                                <Text style={styles.data}>{data.labelData || ' '}</Text>
                            </Text>
                        </View>
                        <View style={styles.dividerLine} />
                        <View style={{ width: '25%' }}>
                            <Text style={styles.centerText}>
                                <Text style={styles.data}>{data.labelData || ' '}</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            {/* End of Row Box 6 */}
           
        </View>
        
        
    );
}
