import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        fontSize: 10,
        padding: 10,
        marginTop: 20,
    },
    column: {
        width: '30%',
        padding: 10,
    },
    columnInfo: {
        width: '30%',
        backgroundColor: '#fdff32',
        padding: 10,
    },
    text: {
        marginVertical: 3,
        textAlign: 'left', // Align text to the left
        wordWrap: 'break-word', // Ensure long text wraps properly
        minHeight: 12, // Ensures rows have consistent height
    },
    textSpace: {
        marginVertical: 10,
        textAlign: 'left',
        wordWrap: 'break-word',
        minHeight: 12,
    },
});

export default styles;
