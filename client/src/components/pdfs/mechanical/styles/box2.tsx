import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    formNo: {
        fontSize: 6,
    },
    printText: {
        fontSize: 6,
        marginBottom: 2,
    },
    container3: {
        border: '2px solid black',
        padding: 4,
    },
    box4label: {
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    columnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    row:{
        width: '100%',
        flexDirection: 'row',
    },
    column: {
        width: '50%', // Adjust width as needed for even columns
    },
    checkboxRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 1,
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
    blankLineData: {
        width: '30%',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
    },
    checkboxLabel: {
        fontSize: 6,
    },
    footerLabel: {
        marginTop: 5,
        fontSize: 6,
    },
    blankLineFooter: {
        width: '45%',
        textAlign: 'center',
        fontSize: 8,
        borderBottomWidth: 1,
    },
});

export default styles;
