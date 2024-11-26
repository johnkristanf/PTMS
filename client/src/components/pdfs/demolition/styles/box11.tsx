import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    imageContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '103%',
        height: '25%',
    },
    formsContainer: {
        marginTop: 35,
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
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
    },
    blankLine2: {
        width: '100%',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 8,
        borderBottomWidth: 1,
    },
});

export default styles;
