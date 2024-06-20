import { StyleSheet, View, Text, Image } from "@react-pdf/renderer";

export function PermitBodyBox3({ applicantName }: { applicantName: string }) {
    return (
        <Image source="/img/plumbing/plumbing_box3.png" style={{width: '100%'}}/>
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
