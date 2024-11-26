import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        textAlign: 'center',
        fontSize: 10,
        marginBottom: 2,
    },
    subHeader: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    city: {
        textAlign: 'center',
        fontSize: 10,
        marginBottom: 10,
    },
    headerContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5,
    },
    headerContainerColumn: {
        width: '48%',
    },
    formsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    form: {
        width: '48%',
    },
    label: {
        fontSize: 8,
    },
    labelRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    blankLine: {
        width: '48%',
        color: '#FF0000',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
    },
    blankLine2: {
        width: '100%',
        color: '#FF0000',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
    },
});

export default styles;
