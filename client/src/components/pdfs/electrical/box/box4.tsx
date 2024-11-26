import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box4';

export function PermitBodyBox4({ permitInfo }: { permitInfo: any }) {
    const defaultData = {
        labelData: '',
    };

    const data = { ...defaultData, ...permitInfo };

    return (
        <View style={styles.page}>
            <View style={styles.formContainer}>
                <Text style={styles.printText}>
                    BOX 4 (PERSON IN-CHARGE OF INSTALLATION)
                </Text>
                <View style={styles.container}>

                <View style={styles.rowFirstContainer}>
                    <View style={styles.rowFirst}>
                        <Text style={styles.labelFirst}>(   ) PROFESIONAL ENGINEER</Text>
                    </View>
                    <View style={styles.rowFirst}>
                        <Text style={styles.labelFirst}>(   ) REGISTERED ELECTRICAL ENGINEER</Text>
                    </View>
                    <View style={styles.rowFirst}>
                        <Text style={styles.labelFirst}>(   ) REGISTERED MASTER ELECTRICIAN (not exceeding 600 volts and 500 KVA)</Text>
                    </View>
                </View>

                    <View style={styles.rowContainer}>
                        <View style={styles.columnFirst}>
                            <View style={styles.row}>
                                <Text style={styles.label}>NAME:</Text>
                                <Text style={styles.value}>{data.labelData}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>ADDRESS:</Text>
                                <Text style={styles.value}>{data.labelData}</Text>
                            </View>
                            <View style={styles.row2}>
                                <View style={styles.columnFirst}>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>PTR NO.:</Text>
                                        <Text style={styles.value}>{data.labelData}</Text>
                                    </View>
                                    <View style={styles.row2}>
                                        <Text style={styles.label}>SIGNATURE:</Text>
                                        {/* <Text style={styles.value}>{data.labelData}</Text> */}
                                    </View>
                                </View>
                                <View style={styles.column}>
                                    <View style={styles.row}>
                                        <Text style={styles.label}>DATE ISSUED:</Text>
                                        <Text style={styles.value}>{data.labelData}</Text>
                                    </View>
                                    <View style={styles.row2}>
                                        <Text style={styles.label}>DATE ISSUED:</Text>
                                        {/* <Text style={styles.value}>{data.labelData}</Text> */}
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.columnSecond}>
                            <View style={styles.row}>
                                <Text style={styles.label}>PRC REG. NO.</Text>
                                {/* <Text style={styles.value}>{data.labelData}</Text> */}
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>TEL/FAX NO.</Text>
                                {/* <Text style={styles.value}>{data.labelData}</Text> */}
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>PLACE ISSUED</Text>
                                {/* <Text style={styles.value}>{data.labelData}</Text> */}
                            </View>
                            <View style={styles.row2}>
                                <Text style={styles.label}>TIN</Text>
                                <Text style={styles.value}>{data.labelData}</Text>
                            </View>
                            
                        </View>
                        <View style={styles.columnThird}>
                            <View style={styles.row}>
                                <Text style={styles.label}>VALIDITY</Text>
                                {/* <Text style={styles.value}>{data.labelData}</Text> */}
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.emptyCell}>f</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.emptyCell}>f</Text>
                            </View>
                            <View style={styles.row2}>
                                <Text style={styles.emptyCell}>f</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}