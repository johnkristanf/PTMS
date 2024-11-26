import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        border: '2px solid black',
        padding: 5,
    },
    title: {
        fontSize: 6,
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 2,
    },
    actionTitle: {
        fontSize: 8,
        fontWeight: 'bold',
        marginTop: 5,
    },
    conditions: {
        marginTop: 10,
        fontSize: 8,
        textAlign: 'justify',
    },
    conditionContainer: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 8,
    },
    conditionNumber: {
        fontSize: 8,
        fontWeight: 'bold',
        width: '5%', // Space allocated for the number on the left
        textAlign: 'left',
    },
    conditionText: {
        fontSize: 8,
        textAlign: 'justify', // Justify paragraph text
        width: '95%', // Space allocated for paragraph text
        marginLeft: -15,
    },
    boldText: {
        fontWeight: 'bold',
    },
    permitIssuer: {
        fontSize: 8,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 5,
    },
    issuerName: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 20,
    },
    issuerTitle: {
        fontSize: 10,
        textAlign: 'center',
        marginBottom: 10,
    },
    dateContainer: {
        marginTop: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    date: {
        fontSize: 7,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    blankLineDate: {
        width: 90,
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 10,
        borderBottomWidth: 1,
    },
    footerContainer: {
        marginTop: 1,
        marginLeft: 10, 
    },
    footer: {
        fontSize: 6,
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 2,
    },
    note: {
        fontSize: 6,
        textAlign: 'left',
    },
});

export default styles;
