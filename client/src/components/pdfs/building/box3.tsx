import { StyleSheet, View, Text } from "@react-pdf/renderer";

export function PermitBodyBox3({ applicantName }: { applicantName: string }) {
    return (
        <View style={{ flexDirection: 'column' }}>
            <Text style={styles.box3TextTitle}>BOX 3</Text>

            <View style={styles.box3_container}>
                <View style={styles.rowContainer}>
                    <View style={styles.columnContainer}>
                        <Text style={styles.boxes_text}>NAME OF APPLICANT :</Text>
                        <View style={styles.underlineContainer}>
                            <Text style={styles.underlineText}>{applicantName}</Text>
                        </View>
                        <Text style={{ fontSize: 6, marginTop: 4 }}>(SIGNATURE OVER PRINTED NAME)</Text>
                    </View>

                    <View style={styles.dateContainer}>
                        <Text style={styles.boxes_text}>DATE :</Text>
                        <View style={styles.underline}></View>
                    </View>
                </View>

                <View style={styles.addressContainer}>
                    <Text style={styles.boxes_text}>ADDRESS :</Text>
                </View>

                <View style={styles.ctoContainer}>
                    <View style={styles.ctoSection}>
                        <Text style={styles.boxes_text}>CTO NO.:</Text>
                    </View>

                    <View style={styles.dateIssuedSection}>
                        <Text style={styles.boxes_text}>DATE ISSUED:</Text>
                    </View>

                    <View style={styles.placeIssuedSection}>
                        <Text style={styles.boxes_text}>PLACE ISSUED:</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box3_container: {
        width: '100%',
        height: '60%',
        border: '2px solid black',
        flexDirection: 'column',
    },
    underline: {
        borderBottom: '2px solid black',
        marginTop: 10,
        width: '75%',
    },
    box3TextTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    boxes_text: {
        fontSize: 8,
    },
    rowContainer: {
        borderBottom: '2px solid black',
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    columnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 4,
        width: '50%',
    },
    underlineContainer: {
        borderBottom: '2px solid black',
        width: '75%',
        textAlign: 'center',
    },
    underlineText: {
        fontSize: 8,
        marginTop: 4,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
    },
    addressContainer: {
        borderBottom: '2px solid black',
        width: '100%',
        height: '30%',
        padding: 5,
    },
    ctoContainer: {
        width: '100%',
        height: '40%',
        flexDirection: 'row',
    },
    ctoSection: {
        borderRight: '2px solid black',
        width: '40%',
    },
    dateIssuedSection: {
        borderRight: '2px solid black',
        width: '50%',
    },
    placeIssuedSection: {
        width: '60%',
    },
});

export default PermitBodyBox3;
