import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    formNo: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 6,
    },
    permitTitle: {
        justifyContent: "center",
        alignItems: "center",
    },
    permitTitleText: {
        fontSize: 8,
    },
    
    numberText2: {
        fontSize: 8,
        textAlign: 'center',
        width: '30%',
        left: 30,
    },

    printText: {
        width: '92%',
        marginTop: 12,
        fontSize: 8,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginBottom: 2,
    },
    blankLineData2: {
        width: '55%',
        position: 'absolute',
        textAlign: 'center',
        right: 0,
        fontSize: 8,
        borderBottomWidth: 1,
    },
    container: {
        width: '100%',
        paddingLeft: 5,
        border: '2px solid black',
        borderBottom: 'none',
        flexDirection: 'column',
        fontSize: 6,
    },

    container6: {
        width: '100%',
        border: '2px solid black',
        flexDirection: 'column',
        fontSize: 6,
        padding: 4,
    },

    title: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5
    },
    rowDate: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
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

    box6label: {
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    columnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        width: '100%',
        fontSize: 6,
        marginLeft: 2,
    },

    
});

export default styles;
