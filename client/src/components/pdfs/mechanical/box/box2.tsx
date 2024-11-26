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
                <Text style={styles.box4label}>INSTALLATION AND OPERATION OF</Text>
                
                {/* Columns layout */}
                <View style={styles.columnsContainer}>
                    
                    {/* First Column */}
                    <View style={styles.column}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>BOILER </Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>PRESSURE VESSELS </Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>INTERNAL COMBUSTION ENGINE </Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>REFRIGERATION & ICE-MAKING</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>WINDOW TYPE AIR-CONDITIONING</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>PACKAGE AIR-CONDITION UINT</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>OTHER(SPECIFY)</Text>
                            <Text style={styles.blankLineData}>{data.labelData || ' '} </Text>
                        </View>
                    </View>

                    {/* Second Column */}
                    <View style={styles.column}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>CENTRAL AIR-CONDITIONING</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>MECHANICAL VENTILLATION</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>ESCALATOR</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>MOVING SIDEWALK</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>FREIGHT ELEVATOR</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>PASSENGER ELEVATOR </Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>CABLE CAR </Text>
                        </View>
                    </View>
                    
                    {/* Third Column */}
                    <View style={styles.column}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>DUMB WAITER</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>PUMPS</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>COMPRESSED AIR, VACUUM, INSTITUTIONAL AND/OR INDUSTRIAL GAS</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>PHEUMATIC TUBES, CONVEYORS AND /OR MONORAILS</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                            </View>
                            <Text style={styles.checkboxLabel}>FUNICULAR</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.footerLabel}>PREPARED BY : </Text>
                    <Text style={styles.blankLineFooter}>{data.labelData || ' '} </Text>
                </View>

            </View>  
        </View>
    );
}
