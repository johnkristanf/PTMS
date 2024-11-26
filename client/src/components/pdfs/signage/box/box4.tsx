import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box4';

export function PermitBodyBox4({ permitInfo }: { permitInfo: any }) {
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
                <Text style={styles.signboardTitle}>DIRECTIONAL SIGN</Text>

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
                            <Text style={styles.label}>Signage Plan with Dimension and Elevation (3 copies)</Text>
                            </View>
                                <Text style={styles.checkboxNote}>[if with post/support must be signed and sealed </Text>
                                <Text style={styles.checkboxNote}>by a duly lisenced Architect / Civil Engineer]</Text>
                    </View>

                    {/* Renewal Column */}
                    <View style={styles.column}>
                        
                        <View style={styles.checkboxItem}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.label}>Sketch Plan showing Site Development, Vicinity and </Text>
                            </View>
                                <Text style={styles.checkboxNote}>Locational Map (2 copies)</Text>
                            
                            <View style={styles.checkboxItem}>
                                <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.label}>List of private establishment where the signages will be</Text>
                            </View>
                                <Text style={styles.checkboxNote}>placed, with signature over printed name of the</Text>
                                <Text style={styles.checkboxNote}>person who approved (2 copies) </Text>  
                        </View>
                    </View>
                </View>
            </View>
    );
}
