import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    formNo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontSize: 6,
        marginTop: 5,
    },
    printText: {
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    infoText: {
        paddingTop: 3,
        marginBottom: 5,
        marginLeft: 0,
        fontSize: 6,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'flex-start',
    },
    
   

    container3: {
        width: '100%',
        marginTop: 3,
        padding: 2,
        border: '2px solid black',
        textAlign: 'left',
        fontSize: 7,
        marginBottom: -5,
    },

    setsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Space between the two columns
        width: '100%',
    },
    scopeColumn: {
        flexDirection: 'column',
        width: '50%', // Adjust width for each column
    },
    scopeColumn2: {
        flexDirection: 'column',
        width: '30%', // Adjust width for each column
    },
    rowOption: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2, 
        marginLeft: -2, 
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
    box4label2: {
        fontSize: 8,
    },
    boxLabelLine: {
        width: '50%',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
    },
    
});

export default styles;

