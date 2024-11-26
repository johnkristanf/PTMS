import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box1';

export function PermitBodyBox1({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: 'John A. Doe',
        checkboxData: 'Y',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Republic of the Philippines</Text>
                <Text style={styles.title}>OFFICE OF THE BUILDING OFFICIAL</Text>
                <Text style={styles.subtitle}>CITY OF PANABO</Text>
            </View>

            <Text style={styles.checklistTitle}>CHECKLIST FOR PERMIT APPLICATION</Text>

            <View style={styles.signboardContainer}>
                {/* Signboard Header */}
                <Text style={styles.signboardTitle}>SIGNBOARD</Text>

                {/* New and Renewal Columns */}
                <View style={styles.columnsContainer}>
                    {/* New Column */}
                    <View style={styles.column}>
                        <Text style={styles.columnTitle}>NEW</Text>
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
                            <Text style={styles.label}>Lease of Contract / Certified True Copy of Title</Text>
                           </View> 
                            <Text style={styles.checkboxNote}>[for Lease of Contract 2 copies]</Text>
                            <Text style={styles.checkboxNote}>[for Title (1 true copy and 1 machine copy)]</Text>
                        <View style={styles.checkboxItem}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.label}>Signage Plan with Dimension and Elevation (3 copies)</Text>
                            </View>
                                <Text style={styles.checkboxNote}>[if with post/support must be signed and sealed </Text>
                                <Text style={styles.checkboxNote}>by a duly lisenced Architect / Civil Engineer]</Text>
                            <View style={styles.checkboxItem}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.label}>Electrical Plan [if lighted] (3 copies)</Text>
                            </View>
                                <Text style={styles.checkboxNote}>[signed and sealed by licensed Professional </Text>
                                <Text style={styles.checkboxNote}> Electrical Engineer]</Text>
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
                            <Text style={styles.label}>DPWH Clearance [if along highway] </Text>
                        </View>
                        <Text style={styles.checkboxNote}>(1 original and 1 machine copy)</Text>
                    </View>

                    {/* Renewal Column */}
                    <View style={styles.column}>
                        <Text style={styles.columnTitle}>RENEWAL</Text>
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
                            <Text style={styles.label}>Lease of Contract / Certified True Copy of Title</Text>
                        </View>
                        <Text style={styles.checkboxNote}>[for Lease of Contract (2 copies)] </Text>
                            <Text style={styles.checkboxNote}>[for Title (1 true copy and 1 machine copy)]</Text>
                        <View style={styles.checkboxItem}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.label}>Approved Sign Permit with official receipt (1 photocopy)</Text>
                        </View>
                        <View style={styles.checkboxItem}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.label}>Actual Pictures</Text>
                        </View>
                        <View style={styles.checkboxItem}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.label}>Sketch Plan showing Site Development, Vicinity and </Text>
                        </View>
                        <Text style={styles.checkboxNote}>Locational Map (2 copies)
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
