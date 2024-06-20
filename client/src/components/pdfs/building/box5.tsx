import { View, Text, StyleSheet } from "@react-pdf/renderer";

export function PermitBodyBox5({ applicantName }: { applicantName: string }) {

    const number = [
        { name: "Doc. No." },
        { name: "Page No." },
        { name: "Book No." },
        { name: "Series No." },
    ]

    return (
        <>
            <Text style={styles.box5TextTitle}>BOX 5</Text>
            <View style={styles.box5_container}>

                <View style={[styles.col, styles.margin_top_left]}>
                    <Text style={styles.boxes_text}>REPUBLIC OF THE PHILIPPINES</Text>

                    <View style={styles.row}>
                        <Text style={styles.boxes_text}>CITY/MUNICIPALITY OF</Text>
                        <View style={[styles.underline, { width: '20%' }]}></View>
                    </View>

                </View>

                <View style={[styles.row, styles.box_text_container]}>

                    <Text style={styles.boxes_text}>BEFORE ME, at the City/Municipality of</Text>
                    <View style={[styles.underline, { width: '20%' }]}></View>

                    <Text style={styles.boxes_text}>on</Text>
                    <View style={[styles.underline, { width: '20%' }]}></View>

                    <Text style={styles.boxes_text}>personally appeared</Text>

                </View>

                <View style={[styles.row, styles.box_text_container]}>

                    <View style={[styles.col, { width: '30%', alignItems: 'center' }]}>
                        <View style={styles.underlineContainer}>
                            <Text style={styles.underlineText}>{applicantName}</Text>
                        </View>
                        <Text style={styles.boxes_text}>APPLICANT NAME </Text>
                    </View>

                    <View style={[styles.col, { width: '15%', alignItems: 'center' }]}>
                        <View style={styles.underline}></View>
                        <Text style={styles.boxes_text}>C.T.C NO. </Text>
                    </View>

                    <View style={[styles.col, { width: '15%', alignItems: 'center' }]}>
                        <View style={styles.underline}></View>
                        <Text style={styles.boxes_text}>DATE ISSUED  </Text>
                    </View>

                    <View style={[styles.col, { width: '30%', alignItems: 'center' }]}>
                        <View style={styles.underline}></View>
                        <Text style={styles.boxes_text}>PLACE ISSUED </Text>
                    </View>

                </View>

                <View style={[styles.row, styles.box_text_container]}>

                    <View style={[styles.col, { width: '30%', alignItems: 'center' }]}>
                        <View style={styles.underline}></View>

                        <View style={[styles.col, { alignItems: 'center' }]}>
                            <Text style={{ fontSize: 6 }}>LICENSED ARCHITECT / CIVIL ENGINEER  </Text>
                            <Text style={{ fontSize: 4 }}>(FULL TIME INSPECTOR AND SUPERVISOR OF CONSTUCTION)</Text>
                        </View>

                    </View>

                    <View style={[styles.col, { width: '15%', alignItems: 'center' }]}>
                        <View style={styles.underline}></View>
                        <Text style={styles.boxes_text}>C.T.C NO. </Text>
                    </View>

                    <View style={[styles.col, { width: '15%', alignItems: 'center' }]}>
                        <View style={styles.underline}></View>
                        <Text style={styles.boxes_text}>DATE ISSUED  </Text>
                    </View>

                    <View style={[styles.col, { width: '30%', alignItems: 'center' }]}>
                        <View style={styles.underline}></View>
                        <Text style={styles.boxes_text}>PLACE ISSUED </Text>
                    </View>

                </View>

                <Text style={[styles.boxes_text, styles.margin_top_left]}>whose signature appear herein above known to me to be the same persons who executed this standard prescribed form and acknowledged to me that the same is their free and voluntary act and deed</Text>

                <Text style={[styles.boxes_text, styles.margin_top_left_large]}>WITNESS MY HAND AND SEAL on the date and place above written</Text>

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <View style={[styles.col, styles.box5_footer_margins]}>
                        {
                            number.map((data) => (
                                <View style={styles.row} key={data.name}>
                                    <Text style={styles.boxes_text}>{data.name}</Text>
                                    <View style={[styles.underline, { width: '30%' }]}></View>
                                </View>
                            ))
                        }
                    </View>

                    <View style={[styles.col, { marginTop: 20, marginRight: 15 }]}>
                        <View style={[styles.underline, { width: '100%' }]}></View>
                        <Text style={styles.boxes_text}>NOTARY PUBLIC (until December ______ )</Text>
                    </View>

                </View>

            </View>

        </>

    )
}


const styles = StyleSheet.create({
    box5_container: {
        width: '100%',
        height: '100%',
        border: '2px solid black',
        flexDirection: 'column'
    },

    box5TextTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 10
    },

    underline: {
        borderBottom: '2px solid black',
        marginTop: 10,
        width: '75%'
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

    boxes_text: {
        fontSize: 8
    },

    row: {
        flexDirection: 'row'
    },

    col: {
        flexDirection: 'column'
    },

    text_center: {
        textAlign: 'center'
    },

    margin_top_left: {
        marginLeft: 5,
        marginTop: 10,
    },

    margin_top_left_large: {
        marginLeft: 40,
        marginTop: 10,
    },

    box_text_container: {
        width: '100%',
        justifyContent: 'center',
        marginTop: 10
    },

    box5_footer_margins: {
        marginTop: 20,
        marginLeft: 15,
    }

});

export default PermitBodyBox5;
