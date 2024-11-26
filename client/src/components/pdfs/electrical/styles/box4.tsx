import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
    },
    printText: {
        fontSize: 8,
        textAlign: 'left',
        marginBottom: 5,
    },
    container: {
        width: '100%',
        border: '2px solid black',
        flexDirection: 'column',
        fontSize: 6,
    },
    rowFirstContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowFirst: {
        flexDirection: 'row',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderTop: '2px solid black',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottom: '2px solid black',
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    columnFirst: {
        width: '50%',
        flexDirection: 'column',
        borderRight: '2px solid black',
        height: '100%',

    },
    columnSecond: {
        width: '25%',
        flexDirection: 'column',
        height: '100%',

    },
    columnThird: {
        width: '25%',
        flexDirection: 'column',
        height: '100%',   
    },
    column: {
        flexDirection: 'column',
        flex: 1,
    },
    labelFirst: {
        width: '32%',
        fontSize: 8,
        fontWeight: 'bold',
        paddingRight: 5,
        paddingLeft: 2,
        paddingVertical: 2,
    },
    label: {
        fontSize: 8,
        fontWeight: 'bold',
        paddingRight: 5,
        paddingLeft: 2,
        paddingVertical: 2,
    },
    value: {
        flexGrow: 1,
        fontSize: 8,
        flex: 1,
    },
    page: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyCell: {
        width: '20%',
        fontSize: 8,
        fontWeight: 'bold',
        paddingRight: 5,
        paddingLeft: 2,
        paddingVertical: 2,
        color: '#FFF',
    },
});

export default styles;