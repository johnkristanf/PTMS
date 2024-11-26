import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        fontSize: 10,
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 15,
    },
    dateRow: {
        width: '100%',
        flexDirection: 'row',
        textAlign: 'right',
        marginBottom: 15,
    },
    dateLabel: {
        fontSize: 10,
        textAlign: 'right',
        width: '100%',
    },
    blankLine: {
        width: '15%',
        textAlign: 'center',
        fontSize: 8,
        borderBottomWidth: 1,
    },
    recipient: {
        fontSize: 10,
        textAlign: 'left',
        marginBottom: 15,
        lineHeight: 1.5,
    },
    bodyContainer: {
        width: '100%',
        fontSize: 10,
        marginTop: 15,
        marginBottom: 15,
    },
    lineGroup: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 15,
    },
    label: {
        fontSize: 10,
        textAlign: 'right',
        width: '10%',
    },
    label2: {
        fontSize: 10,
        textAlign: 'right',
        width: '19%',
    },
    line: {
        flex: 1,
        textAlign: 'center',
        fontSize: 10,
        borderBottomWidth: 1,
        paddingLeft: 5,
    },
    signatureLine: {
        width: '100%',
        textAlign: 'center',
        fontSize: 10,
        borderBottomWidth: 1,
        paddingLeft: 5,
    },
    subGroup: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    subLabel: {
        fontSize: 10,
        width: '30%',
        marginBottom: 10,
        left: 75,
    },
    subLabel2: {
        fontSize: 10,
        width: '110%',
        textAlign: 'center',
    },
    subLabel3: {
        fontSize: 10,
        width: '110%',
        marginBottom: 5,
        textAlign: 'center',
    },
    bodyText: {
        textAlign: 'left',
        fontSize: 10,
        marginBottom: 10,
    },
    declarationContainer: {
        marginBottom: 30,
    },
    declarationFirstLine: {
        fontSize: 10,
        textAlign: 'justify',
        marginLeft: 33, // Adjust as needed for the left margin
    },
    declaration: {
        fontSize: 10,
        textAlign: 'justify',
    },
    signatureContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    signatureBox: {
        width: '45%',
        fontSize: 8,
        textAlign: 'center',
    },
    underlineData: {
        width: '100%',
        textAlign: 'center',
        fontSize: 10,
        borderBottomWidth: 1,
        paddingLeft: 5,
    },
});

export default styles;
