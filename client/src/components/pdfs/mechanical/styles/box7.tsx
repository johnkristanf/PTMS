import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({

    printText: {
        fontSize: 5,
        textAlign: 'left',
        alignItems: 'flex-start',
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
    infoText2: {
        paddingTop: 0,
        fontSize: 5,
        textAlign: 'left',
    },
    infoText3: {
        paddingTop: 0,
        fontSize: 5,
        textAlign: 'left',
    },

    container3: {
        width: '100%',
        marginTop: 3,
        padding: 2,
        border: '2px solid black',
        borderTop: 'none',
        textAlign: 'left',
        fontSize: 7,
        marginBottom: -5,
    },
    container4: {
        justifyContent: 'space-between',
        width: '100%',
        padding: 2,
        border: '2px solid black',
        fontSize: 7,
        marginBottom: -5,
    },
    row3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Ensure items are spaced properly
    },

    verticalLine: {
        width: 1,
        marginTop: 0,
        backgroundColor: 'black',
        height: '190%',
    },
    prcContainer: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "PRC NO." away from the vertical line
    },
    validityContainer: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "VALIDITY" away from the vertical line
    },
    setsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Space between the two columns
        width: '100%',
    },
    scopeColumn: {
        flexDirection: 'column',
        width: '30%', // Adjust width for each column
    },
    scopeColumn2: {
        flexDirection: 'column',
        width: '30%', // Adjust width for each column
    },
    scopeColumn3: {
        flexDirection: 'column',
        width: '30%', // Adjust width for each column
    },
    rowOption: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2, 
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
        fontSize: 6,
    },
    blankLineData: {
        width: 90,
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
    },
    
});

export default styles;

