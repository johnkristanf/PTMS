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
        marginTop: 1,
        marginBottom: 1,
    },
    actionTitle: {
        marginLeft: 5,
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 5,
    },
    conditions: {
        marginTop: 10,
        fontSize: 10,
        textAlign: 'justify',
        marginLeft: 5,
    },
    conditionContainer: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 8,
    },
    conditionContainer2: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 10,
        marginTop: 2,
    },
    conditionNumber: {
        fontSize: 7,
        fontWeight: 'bold',
        width: '5%', // Space allocated for the number on the left
        textAlign: 'left',
    },
    conditionABCD2: {
        fontSize: 12,
        fontWeight: 'bold',
        width: '5%', // Space allocated for the number on the left
        textAlign: 'left',
    },
    conditionText: {
        fontSize: 10,
        textAlign: 'justify', // Justify paragraph text
        width: '93%', // Space allocated for paragraph text
        marginLeft: -10,
    },
    boldText: {
        fontWeight: 'bold',
    },
    permitIssuer: {
        fontSize: 8,
        fontWeight: 'bold',
        marginTop: 20,
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
    footerContainer: {
        marginTop: 2,
    },
    footer: {
        fontSize: 5,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    dateContainer: {
        marginTop: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    date: {
        fontSize: 7,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    underline: {
        width: 100,
        marginTop: 5,
        height: 1,
        backgroundColor: 'black',
        marginHorizontal: 2,
    }
});

export default styles;
