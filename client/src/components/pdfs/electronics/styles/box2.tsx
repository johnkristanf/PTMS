import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    formNo: {
        fontSize: 6,
        marginTop: 5,
    },
    printText: {
        fontSize: 6,
        marginBottom: 2,
    },
    container3: {
        padding: 10,
        border: '2px solid black',
    },
    box4label: {
        fontSize: 6,
        marginTop: -10,
        marginBottom: 15,
        fontWeight: 'bold',
    },
    columnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        width: '32%', // Adjust width as needed for even columns
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
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
    checkboxLabel: {
        width: '100%',
        fontSize: 6,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 5,
    },
    preparedBy: {
        fontSize: 6,
        width: '10%',
    },
    blankLine: {
        width: '50%',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
        paddingLeft: 5,
    },
    blankLine2: {
        width: '100%',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
        paddingLeft: 5,
    },
    blankLine3: {
        width: '45%',
        textAlign: 'center',
        fontSize: 8,
        borderBottomWidth: 1,
    },
});

export default styles;
