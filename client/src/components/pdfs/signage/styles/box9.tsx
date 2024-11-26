import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        fontSize: 12,
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 15,
    },
    dateRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end', // Aligns content to the right
        alignItems: 'flex-end', // Aligns content to the right
        marginBottom: 15,
    },
    date: {
        textAlign: 'right',
        fontSize: 12,
        marginRight: 5, // Space between "Date:" label and date value
    },
    lineDate: {
        fontSize: 12,
        textAlign: 'center',
        borderBottomWidth: 1,
        width: '15%', // Adjust width as necessary
    },
    recipient: {
        fontSize: 12,
        textAlign: 'left',
        marginBottom: 15,
        lineHeight: 1.1,
    },
    bodyContainer: {
        fontSize: 12,
        marginTop: 15,
        marginBottom: 15,
    },
    lineGroup: {
        width: '99%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    lineGroupFooter: {
        width: '99%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    label: {
        fontSize: 12,
        textAlign: 'right',
        width: '7%',
        paddingRight: 5,
    },
    label2: {
        fontSize: 12,
        textAlign: 'right',
        width: '19%',
    },
    line: {
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 12,
        borderBottomWidth: 1,
        paddingLeft: 5,
    },
    contactLine: {
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 12,
        borderBottomWidth: 1,
        paddingLeft: 5,
        marginTop: 5,
    },
    subGroup: {
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'flex-end',

    },
    subLabel: {
        fontSize: 12,
        width: '27%',
        marginBottom: 10,
    },
    subLabel2: {
        fontSize: 12,
        width: '100%',
        textAlign: 'center',
    },
    subLabel3: {
        fontSize: 12,
        width: '100%',
        marginBottom: 5,
        textAlign: 'center',
    },
    bodyText: {
        textAlign: 'left',
        fontSize: 12,
        marginBottom: 10,
    },
    declarationContainer: {
        marginBottom: 30,
    },
    declarationFirstLine: {
        fontSize: 12,
        textAlign: 'justify',
        marginLeft: 33, // Adjust as needed for the left margin
    },
    declaration: {
        fontSize: 12,
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
});

export default styles;
