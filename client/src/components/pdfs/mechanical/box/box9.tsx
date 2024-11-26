import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box9'; // Import the styles

export function PermitBodyBox9({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.titleContainer}>
            {/* Title Section */}
            <Text style={styles.title}>BOX 9</Text>

            <View style={styles.container}>
                <Text style={styles.headerText}>PROGRESS FLOW</Text>
                
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.note}>NOTE:</Text>
                        <View style={styles.row}>
                            <Text style={styles.note}>CHIEF.</Text>
                            <Text style={styles.noteLabel}>PROCESSING DIVISION/SECTION</Text>
                        </View>
                        <Text style={styles.noteLabel2}>RECEIVING AND RECORDING</Text>
                        <Text style={styles.noteLabel2}>MECHANICAL</Text>
                    </View>

                    <View style={styles.columnDate}>
                        <Text style={styles.dateTitle}>IN</Text>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.dateSubTitle}>Time</Text>
                                <Text style={styles.timeDateData}>{data.labelData || ' '}</Text>
                                <Text style={styles.timeDateDataSub}>{data.labelData || ' '}</Text>
                            </View>
                            <View style={styles.columnSub}>
                                <Text style={styles.dateSubTitle}>Date</Text>
                                <Text style={styles.timeDateData}>{data.labelData || ' '}</Text>
                                <Text style={styles.timeDateDataSub}>{data.labelData || ' '}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.columnDate}>
                        <Text style={styles.dateTitle}>OUT</Text>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.dateSubTitle}>Time</Text>
                                <Text style={styles.timeDateData}>{data.labelData || ' '}</Text>
                                <Text style={styles.timeDateDataSub}>{data.labelData || ' '}</Text>
                            </View>
                            <View style={styles.columnSub}>
                                <Text style={styles.dateSubTitle}>Date</Text>
                                <Text style={styles.timeDateData}>{data.labelData || ' '}</Text>
                                <Text style={styles.timeDateDataSub}>{data.labelData || ' '}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.column}>
                    <Text style={styles.dateTitle}> </Text>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.dateSubTitle}>ACTION/REMARKS</Text>
                                <Text style={styles.timeDateData}>{data.labelData || ' '}</Text>
                                <Text style={styles.timeDateDataSub}>{data.labelData || ' '}</Text>
                            </View>
                            <View style={styles.columnSub}>
                                <Text style={styles.dateSubTitle}>PROCESSED BY</Text>
                                <Text style={styles.timeDateData}>{data.labelData || ' '}</Text>
                                <Text style={styles.timeDateDataSub}>{data.labelData || ' '}</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    );
}
