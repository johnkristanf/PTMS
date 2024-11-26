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
    },
    box4label: {
        top: 3,
        left: 10,
        fontSize: 6,
        fontWeight: 'bold',
    },
    columnsContainer: {
        top: 7,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 60,
    },
    column: {
        width: '50%', // Adjust width as needed for even columns
    },
    checkboxRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
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
        color: '#FF0000',
        fontSize: 8,               // Adjust the font size as needed
        paddingLeft: 1,     // Center text horizontally
    },
    checkboxLabel: {
        fontSize: 6,
    },
    checkboxLabelOther: {
        width: '40%',
        fontSize: 6,
    },
    blankLine: {
        width: "40%",
        color: '#FF0000',
        textAlign: 'center',
        fontSize: 8,
        borderBottomWidth: 1,
    },
    blankLine2: {
        width: "86%",
        color: '#FF0000',
        textAlign: 'center',
        fontSize: 8,
        borderBottomWidth: 1,
    },
});

export default styles;
