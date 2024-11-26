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
    },
    permitTitleText: {
        fontSize: 8,
        marginBottom: 1,
    },
    permitTitleText1: {
        fontSize: 10,
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
        marginTop: 10,
    },
    numberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', 
    },
    numberText: {
        fontSize: 8,
        textAlign: 'left',
        width: '30%',
    },
    numberText1: {
        fontSize: 8,
        textAlign: 'left',
        width: '30%',
        marginHorizontal: 4,
        bottom: 2,
        left: 30,
    },
    numberText2: {
        fontSize: 8,
        textAlign: 'right',
        width: '30%',
    },
    boxStyleContainer: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
        justifyContent: 'space-between',
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
        width: '30%',
        marginHorizontal: 27,
    },
    boxContainer2: {
        flexDirection: 'row',
        justifyContent: 'flex-end',  
        alignItems: 'flex-end',
        width: '30%',
    },
    printText: {
        marginTop: 10,
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
        marginBottom: 2,
    },
    

    blankLineData: {
        width: '50%',
        textAlign: 'center',
        fontSize: 8,
        borderBottomWidth: 1,
    },
    
    blankLineDataExtra: {
        width: '78%',
        textAlign: 'center',
        fontSize: 8,
        borderBottomWidth: 1,
        marginRight: 20,
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
        border: '2px solid black',
        flexDirection: 'column',
        fontSize: 6,
        padding: 4,
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
        fontSize: 8,
    },
    box4label2: {
        width: '22%',
        fontSize: 8,
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
  


    
    
    
});

export default styles;