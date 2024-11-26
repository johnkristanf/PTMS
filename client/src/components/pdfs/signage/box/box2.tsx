import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box2';

export function PermitBodyBox2({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.container}>
            <View style={styles.signboardContainer}>
                {/* Signboard Header */}
                <Text style={styles.signboardTitle}>PYLON</Text>

                {/* New and Renewal Columns */}
                <View style={styles.columnsContainer}>
                    {/* New Column */}
                    <View style={styles.column}>
                        <View style={styles.checkboxItem}>
                        <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.label}>Notarized Application Letter (1 copy)</Text>
                        </View>
                        <View style={styles.checkboxItem}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.label}>Sketch Plan showing Site Development, Vicinity and </Text>
                        </View>
                        <Text style={styles.checkboxNote}>Locational Map (2 copies) </Text>
                        <View style={styles.checkboxItem}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.label}>Certified Copy of Title</Text>
                        </View>
                        <Text style={styles.checkboxNote}>(1 original and 1 photocopy)</Text>
                        <View style={styles.checkboxItem}>
                                <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                                <Text style={styles.label}>Forms</Text>
                        </View>
                    </View>
                    

                    {/* Renewal Column */}
                    <View style={styles.column}>
                        
                        <View style={styles.checkboxItem}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.label}>Signage Plan with Dimension and Elevation (3 copies)</Text>
                        </View>
                        <Text style={styles.checkboxNote}>[if with post/support must be signed and sealed</Text>
                            <Text style={styles.checkboxNote}>[for Title (1 true copy and 1 machine copy)]</Text>
                        <View style={styles.checkboxItem}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.label}>Electrical Plan [if lighted](3 copies)</Text>
                        </View>
                        <Text style={styles.checkboxNote}>[signed and sealed by licensed Professional </Text>
                        <Text style={styles.checkboxNote}>Electrical Engineer]</Text>
                        <View style={styles.checkboxItem}>
                                <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                                <Text style={styles.label}>DPWH Clearance (1 original and 1 machine copy)</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
