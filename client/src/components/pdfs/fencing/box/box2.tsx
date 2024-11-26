import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box2'; // Import the styles

export function PermitBodyBox2({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.formNo}>
            <Text style={styles.printText}>BOX 2 (TO BE ACCOMPLISHED BY THE RECEIVED AND RECORDING SECTION)</Text>
            
            {/* Container for nature of installation */}
            <View style={styles.container3}>
                <Text style={styles.box4label}>ACCOMPANYING DOCUMENTS</Text>
                
                {/* Columns layout */}
                <View style={styles.columnsContainer}>
                    
                    {/* First Column */}
                    <View style={styles.column}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>PHOTOCOPY OF T.C.T</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>PHOTOCOPYCOPY OF LOT/SITE PLAN</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>PHOTOCOPY OF LATEST LAND TAX RECIEPT</Text>
                        </View>
                    </View>

                    {/* Second Column */}
                    <View style={styles.column}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>PHOTOCOPY OF CONTRACT OF LEASE (IF NOT OWNED BY APPLICANT)</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                        <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.checkboxLabelOther}>OTHER CLEARANCE (SPECIFY)</Text>
                            <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        </View>
                        <Text style={styles.blankLine2}>{data.labelData || ' '} </Text>
                    </View>
                </View>
            </View>
            
            
        </View>
    );
}
