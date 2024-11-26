import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        fontSize: 12,
    },
    headerContainer: {
        textAlign: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 12,
        marginBottom: 2,
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        textAlign: 'center',
    },
    checklistTitle: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 10,
    },
    signboardContainer: {
        border: '1px solid black',
    },
    signboardTitle: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
        borderBottom: '1px solid black',
        backgroundColor: '#f0f0f0',
    },
    columnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        width: '48%',
        height: '100%',
        borderRight: '1px solid black',
        marginLeft: 8,
        marginBottom: 3,
    },
    columnTitle: {
        fontSize: 9,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 2,
        textAlign: 'center',
    },
    checkboxItem: {
        flexDirection: 'row',
    },
    checkboxNote: {
        fontSize: 9,
        marginLeft: 40,
        color: 'black',
    },
    label: {
        fontSize: 9,
    },
    checkBox: {
        width: 10,
        height: 10,
        minHeight: 10,
        minWidth: 10,
        border: '1px solid black',
        marginHorizontal: 3,
    }, 
    checkBoxText: {
        position: 'absolute',
        fontSize: 8,               // Adjust the font size as needed
        paddingLeft: 1,     // Center text horizontally
    },
});

export default styles;
