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
    },
    permitTitleText1: {
        fontSize: 8,
        fontWeight: 'bold',
    },
    permitTitleText2: {
        fontSize: 8,
        fontWeight: 'bold',
    },
    permitTitleText3: {
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    noApplication: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 6,
        marginBottom: 2,
    },
    numberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', 
    },
    numberText: {
        fontSize: 6,
        textAlign: 'center',
        width: '30%',
        marginRight: 53,
    },
    numberText1: {
        fontSize: 6,
        textAlign: 'left',
        width: '30%',
        marginRight: 7,
        left: 5,
    },
    numberText2: {
        fontSize: 6,
        textAlign: 'center',
        width: '30%',
    },
    boxStyleContainer2: {
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
        marginHorizontal: 30,
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
        textAlign: 'left',
        width: '100%',
        paddingLeft: 6,
        paddingTop: 6,
        paddingBottom: 1,
        border: '2px solid black',
        flexDirection: 'column',
        fontSize: 6,
    },
    title: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    column: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
    },
    subRow: {
        width: "80%",
        borderLeft: '2px solid black',
        paddingLeft: 10,
    },
    subRow2: {
        width: "100%",
        borderLeft: '2px solid black',
        paddingLeft: 10,
    },
    subRow3: {
        width: "100%",
        borderLeft: '2px solid black',
        paddingLeft: 10,
    },
    columnBox: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    rowOption: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10, 
    },
    rowOption2: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowOption3: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    scopeOfWorkRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Space between the two columns
        width: '100%',
    },
    scopeOfWorkRow2: {
        flexDirection: 'row',
    },
    scopeColumn: {
        flexDirection: 'column',
        width: '30%', // Adjust width for each column
    },
    scopeColumn2: {
        flexDirection: 'column',
        width: '40%', // Adjust width for each column
    },
    scopeColumn3: {
        flexDirection: 'column',
        width: '50%', // Adjust width for each column
        right: 20,
    },
    scopeColumn4: {
        flexDirection: 'column',
        width: '50%', // Adjust width for each column
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
    box2label: {
        width: '50%',
        fontSize: 6,
    },
    box2label2: {
        width: '50%',
        fontSize: 6,
        paddingHorizontal: 45,
    },
    box3label: {
        width: '30%',
        fontSize: 6,
    },
    box3label2: {
        width: '50%',
        fontSize: 6,
        paddingHorizontal: 13,
    },
    box4label: {
        width: '100%',
        fontSize: 6,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    box4label2: {
        width: '100%',
        fontSize: 6,
    },
    box: {
        width: 15,
        height: 20,
        border: '2px solid black',
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
    blankLine: {
        right: 30,
        width: "100%",
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
    },
    blankLine2: {
        width: "700%",
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
    },
    blankLine3: {
        width: "400%",
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
    },
    blankLine4: {
        width: "90%",
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
    },
    blankLine5: {
        width: "300%",
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
    },
    blankLine6: {
        width: "100%",
        textAlign: 'center',
        fontSize: 8,
        borderBottomWidth: 1,
    },
   
    multiCellBox: {
        flexDirection: 'row',
    },
    cell: {
        border: '2px solid black',
        width: '8.3%', // Dividing 100% by 12 cells gives ~8.3%
        minWidth: '8.3%', // Adjust width as needed
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
