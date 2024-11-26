import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        width: '48%',
    },
    itemFooter: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 8,
    },
    itemText: {
        width: '100%',
        fontSize: 8,
        textAlign: 'justify',
    },
    itemTextFooter: {
        fontSize: 8,
        textAlign: 'justify',
    },
    blankLineFooter: {
        width: '80%',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
    },
});

export default styles;
