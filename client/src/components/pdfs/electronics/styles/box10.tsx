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
        marginTop: 5,
        marginBottom: 5,
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
    conditionNumber: {
        fontSize: 13,
        fontWeight: 'bold',
        width: '5%', // Space allocated for the number on the left
        textAlign: 'left',
    },
    conditionText: {
        fontSize: 13,
        textAlign: 'justify', // Justify paragraph text
        width: '95%', // Space allocated for paragraph text
        marginLeft: -10,
    },
    boldText: {
        fontWeight: 'bold',
    },
    permitIssuer: {
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 5,
    },
    issuerName: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
    },
    issuerTitle: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 10,
    },
    footerContainer: {
        marginTop: 1,
        marginLeft: 20, 
    },
    footer: {
        fontSize: 6,
        textAlign: 'left',
        fontStyle: 'italic',
    },
});

export default styles;
