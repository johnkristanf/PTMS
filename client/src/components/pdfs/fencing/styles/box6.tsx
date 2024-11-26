import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        border: '2px solid black',
        padding: 10,
    },
    boxTitle: {
        fontSize: 5,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 1,
        marginTop: 5,  
    },
    headerText: {
        fontSize: 6,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingBottom: 3,
    },
    blankLine: {
        width: '30%',
        color: '#FF0000',
        textAlign: 'center',
        fontSize: 8,
        borderBottomWidth: 1,
    },
    blankLabel: {
        width: '100%',
        color: '#FF0000',
        textAlign: 'center',
        fontSize: 8,
        borderBottomWidth: 1,
    },
    blankLabelSub: {
        width: '90%',
        color: '#FF0000',
        textAlign: 'center',
        fontSize: 8,
        borderBottomWidth: 1,
    },
    blankFooter: {
        width: '30%',
        color: '#FF0000',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
    },
    blankLastFooter: {
        width: '10%',
        color: '#FF0000',
        textAlign: 'center',
        fontSize: 8,
        borderBottomWidth: 1,
    },
    right: {
        fontSize: 5,
        fontWeight: 'bold',
        marginLeft: 140,
    },
    right2: {
        fontSize: 5,
        fontWeight: 'bold',
 
    },
    rowHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    rowFooter: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 20,
    },
    row2: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center', // Ensures center alignment
        gap: 0, // Adjust spacing between columns (e.g., try 10)
    },
    row3: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center', // Ensures center alignment
        gap: 0,
        marginTop: 15,
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '25%',
    },
    columnSub: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '15%',
    },
    labelText: {
        marginLeft: 20,
        fontSize: 6,
    },
    labelText2: {
        fontSize: 6,
    },
    subLabelText: {
        fontSize: 5,
    },
    subLabelText2: {
        fontSize: 3,
        top: 2,
    },
    signatureText: {
        fontSize: 6,
        textAlign: 'justify',
        paddingTop: 10,
    },
    signatureText2: {
        fontSize: 6,
        textAlign: 'justify',
    },
    witnessText: {
        fontSize: 6,
        textAlign: 'justify',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    docDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    docDetailsColumn: {
        flexDirection: 'column',
        width: '6%', // Adjust width for each column
    },
    docDetailsColumn2: {
        flexDirection: 'column',
        width: '30%', // Adjust width for each column

    },
    docDetailsText: {
        fontSize: 6,
        paddingTop: 3,
    },
    notaryRow: {
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        fontSize: 6,

    },
    notaryText: {
        textAlign: 'right',
        width: '23%',
        fontSize: 6,
    },
    underline: {
        width: 170,
        marginTop: 5,
        height: 1,
        backgroundColor: 'black',
        marginHorizontal: 2,
    },
    underlineLarge: {
        width: 150,
        height: 1,
        backgroundColor: 'black',
    },
    underlineLarge2: {
        width: 145,
        height: 2,
        backgroundColor: 'black',
        right: 2,
    },
    underlineMedium: {
        width: 70,
        height: 1,
        backgroundColor: 'black',
        marginHorizontal: 2,
    },
    underlineSmall: {
        width: 40,
        height: 1,
        backgroundColor: 'black',
        marginTop: 8,

    },
});

export default styles;
