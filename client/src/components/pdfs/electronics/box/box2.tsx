import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box2'; // Import the styles

export function PermitBodyBox2({ permitInfo }: { permitInfo: any }) {
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.formNo}>
            <Text style={styles.printText}>BOX 2 (TO BE ACCOMPLISHED BY THE DESIGN PROFESSIONAL)</Text>
            
            {/* Container for nature of installation */}
            <View style={styles.container3}>
                <Text style={styles.box4label}>NATURE OF INSTALLATION WORKS/EQUIPMENT SYSTEM:</Text>
                
                {/* Columns layout */}
                <View style={styles.columnsContainer}>
                    
                    {/* First Column */}
                    <View style={styles.column}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.checkboxLabel}>TELECOMMUNICATION SYSTEM</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.checkboxLabel}>BROADCASTING SYSTEM</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.checkboxLabel}>TELEVISION SYSTEM</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.checkboxLabel}>INFORMATION TECHNOLOGY SYSTEM</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.checkboxLabel}>SECURITY AND ALARM SYSTEM</Text>
                        </View>
                    </View>

                    {/* Second Column */}
                    <View style={styles.column}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.checkboxLabel}>ELECTRONICS FIRE ALARM SYSTEM</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.checkboxLabel}>SOUND COMMUNICATION SYSTEM</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.checkboxLabel}>CENTRALIZED CLOCK SYSTEM</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.checkboxLabel}>SOUND SYSTEM</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.checkboxLabel}>ELECTRONICS CONTROL AND CONVEYOR SYSTEM</Text>
                        </View>
                    </View>

                    {/* Third Column */}
                    <View style={styles.column}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.checkboxLabel}>ELECTRONICS COMPUTERIZED PROCESS CONTROLS AUTOMATION SYSTEM</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                        </View>
                            <Text style={styles.checkboxLabel}>BUILDING AUTOMATION MANAGEMENT & CONTROL SYSTEM</Text>
                        </View>
                    </View>
                    
                </View>

                {/* Additional Row */}
                <View style={styles.checkboxRow}>
                    <View style={styles.checkBox}>
                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                    </View>
                    <Text style={styles.checkboxLabel}>
                        ANY OTHER ELECTRONICS AND I.T. SYSTEMS, EQUIPMENT, APPARATUS, DEVICE AND/OR COMPONENT (SPECIFY) </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    <Text style={styles.blankLine2}>{data.labelData || ' '} </Text>
                {/* Prepared By Line */}
                <View style={styles.row}>
                    <Text style={styles.preparedBy}>PREPARED BY: </Text>
                    <Text style={styles.blankLine3}>{data.labelData || ' '} </Text>
                </View>
            </View>
            
            
        </View>
    );
}
