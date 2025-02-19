import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    smallboxes_container: {
        flexDirection: 'row', 
        alignItems: 'center',
        gap: 2
    },

    checkbox: {
        width: 10,
        height: 10,
        border: '2px solid black',
    },

    boxes_text: {
        fontSize: 8
    },
    formNo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontSize: 6,
    },
    permitTitle: {
        justifyContent: "center",
        alignItems: "center",
    },
    permitTitleText: {
        fontSize: 8,
        marginBottom: 4,
    },
    permitTitleText1: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    permitTitleText2: {
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    permitTitleText3: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    noApplication: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 6,
        marginTop: 10,
    },
    numberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', 
    },
    numberText: {
        fontSize: 8,
        textAlign: 'center',
        width: '30%',
        right: 30,
    },
    numberText1: {
        fontSize: 8,
        textAlign: 'center',
        width: '30%',
        right: 40,
        bottom: 2,
    },
    numberText2: {
        fontSize: 8,
        textAlign: 'center',
        width: '30%',
        left: 30,
    },
    boxStyleContainer: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
    },
    boxStyleContainer4: {
        justifyContent: 'center',
        width: '100%',
        marginTop: 2,
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
    printText: {
        marginTop: 10,
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
        marginBottom: 2,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    blankLine: {
        width: '60%',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 10,
        borderBottomWidth: 1,
    },
    blankLineData: {
        width: 50,
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
        marginRight: 20,
    },
    blankLineData2: {
        width: '50%',
        textAlign: 'center',
        fontSize: 8,
        borderBottomWidth: 1,
        right: 20,
    },
    dateText: {
        width: '50%',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    dateText1: {
        width: '50%',
        alignItems: 'flex-end',
    },
    dateLabel: {
        width: '60%',
        fontSize: 8,
        textAlign: 'center',
        paddingVertical: 2,
    },
    dateLabel2: {
        width: '60%',
        fontSize: 8,
        textAlign: 'center',
        paddingVertical: 2,
    },
    container: {
        width: '100%',
        paddingLeft: 5,
        border: '2px solid black',
        borderBottom: 'none',
        flexDirection: 'column',
        fontSize: 6,
    },
    container5: {
        textAlign: 'left',
        width: '100%',
        border: '2px solid black',
        borderBottom: 'none',
        flexDirection: 'column',
        fontSize: 6,
        padding: 4,
    },
    container6: {
        width: '100%',
        padding: 4,
        border: '2px solid black',
        flexDirection: 'column',
        fontSize: 6,
    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    row: {
        
        flexDirection: 'row',
    },
    subRow1: {
        width: "60%",
        flexDirection: 'row',
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
        width: "80%",
        borderLeft: '2px solid black',
        paddingLeft: 10,
    },
    column: {
        flexDirection: 'column',
    },
    columnBox: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    rowOption: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 1,
    },
    rowOption2: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 1,
    },
 
    scopeOfWorkRow: {
        flexDirection: 'row',
        marginLeft: 10,
        width: '100%',
    },
    scopeColumn: {
        flexDirection: 'column',
        width: '100%', // Adjust width for each column
    },
    scopeColumn1: {
        flexDirection: 'column',
        width: '70%', // Adjust width for each column
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
    label3: {
        textAlign: 'right',
        width: '90%',
        fontSize: 6,
    },
    labelData2: {
        textAlign: 'right',
        width: '90%',
        fontSize: 6,
    },
    box4label: {
        width: '30%',
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    box4label1: {
        width: '100%',
        fontSize: 5,
    },
    box4label2: {
        fontSize: 5,
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
    line: {
        position: 'absolute',
        width: 2,
        backgroundColor: 'black',
        height: 24,
        left: 400,
    },
    line2: {
        position: 'absolute',
        width: 2,
        backgroundColor: 'black',
        height: 32,
        left: 150,
    },
    line3: {
        position: 'absolute',
        width: 2,
        backgroundColor: 'black',
        height: 32,
        left: 370,
    },
    line4: {
        position: 'absolute',
        width: 2,
        backgroundColor: 'black',
        height: 21,
        bottom: -10,
        left: 390,
    },
    multiCellBox: {
        flexDirection: 'row',
    },
    cell: {
        border: '2px solid black',
        width: '9.3%', // Dividing 100% by 12 cells gives ~8.3%
        minWidth: '9.3%', // Adjust width as needed
        minHeight: 20, // Adjust height as needed
        height: 20, // Adjust height as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
    cellData: {
        fontSize: 10,
        textAlign: 'center',
    },
    box6label: {
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    columnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    column6: {
        width: '50%', // Adjust width as needed for even columns
    },
    checkboxRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 1,
    },
    checkboxLabel: {
        width: '30%',
        fontSize: 6,
    },
    underlineBox6: {
        width: 500, // Adjust width to match the text
        height: 1, // Thickness of the underline
        backgroundColor: 'black',
        marginTop: 5, // Adjust this to control the space between text and underline
        alignSelf: 'center',
        right: 28,
    },
    
});

export default styles;
