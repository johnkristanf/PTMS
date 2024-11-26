import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    formNo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontSize: 6,
    },
    permitTitle: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
    },
    permitTitleText: {
        fontSize: 8,
        marginBottom: 2,
    },
    permitTitleText1: {
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    permitTitleText3: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    noApplication: {
        fontSize: 8,
        marginBottom: 2,
    },
    numberContainer: {
        flexDirection: 'row',
        width: '100%', 
    },
    numberText: {
        fontSize: 8,
        textAlign: 'center',
        width: '30%',
    },
    numberText1: {
        fontSize: 8,
        textAlign: 'center',
        width: '30%',
        left: 25,
    },
    numberText2: {
        fontSize: 8,
        textAlign: 'right',
        width: '30%',
        left: 25,
    },
    boxStyleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '30%',
    },
    boxContainer1: {
        flexDirection: 'row',
        justifyContent: 'center',  
        alignItems: 'center',
        marginHorizontal: 27,
        width: '30%',
    },
    boxContainer2: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '30%',
    },
    printText: {
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
        marginBottom: 2,
    },
    container: {
        width: '100%',
        paddingLeft: 5,
        border: '2px solid black',
        borderBottom: 'none',
        flexDirection: 'column',
        fontSize: 6,
    },
    container2: {
        width: '100%',
        paddingLeft: 5,
        border: '2px solid black',
        flexDirection: 'column',
        fontSize: 6,
        paddingBottom: 5,
    },
    column: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
    },
    label: {
        fontSize: 6,
        flexGrow: 1,
        width: '100%',
    },
    labelData: {
        flexGrow: 1,
        width: '100%',
        fontSize: 8,
    },
    subRow: {
        width: "80%",
        borderLeft: '2px solid black',
        paddingLeft: 10,
    },
    subRow2: {
        width: "66.6%",
        borderLeft: '2px solid black',
        paddingLeft: 10,
    },
    subRow3: {
        width: "100%",
        borderLeft: '2px solid black',
        paddingLeft: 10,
    },
    
    title: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    scopeTitle: {
        fontSize: 6,
    },
    rowOption: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 70,
    },
    rowOption2: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowOption3: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkBox: {
        width: 10,
        height: 10,
        minHeight: 10,
        minWidth: 10,
        border: '2px solid black',
        marginHorizontal: 3,
        marginTop: 1,
    }, 
    checkBoxText: {
        position: 'absolute',
        fontSize: 8,               // Adjust the font size as needed
        paddingLeft: 1,     // Center text horizontally
    },
    boxLabel: {
        fontSize: 6,               // Adjust the font size as needed
        textAlign: 'center',       // Center text horizontally
    },
    blankLine: {
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
        paddingLeft: 5,
    },
    multiCellBox: {
        flexDirection: 'row',
    },
    cell: {
        border: '2px solid black',
        width: '10.3%', // Dividing 100% by 12 cells gives ~8.3%
        minWidth: '10.3%', // Adjust width as needed
        minHeight: 20, // Adjust height as needed
        height: 20, // Adjust height as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
    cellData: {
        fontSize: 10,
        textAlign: 'center',
    },

    
});

export default styles;
