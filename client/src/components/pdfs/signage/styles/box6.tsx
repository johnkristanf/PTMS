import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        fontSize: 10,
        marginTop: 10,
    },

    headerText: {
        fontSize: 10,
        textAlign: 'center',
    },

    columnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        width: '48%',
        height: '100%',
        marginLeft: 8,
        marginTop: 5,
        padding: 3,
    },
 
    checkboxItem: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 9,
        marginBottom: 5,
    },
    subTitle: {
        fontSize: 9,
        marginBottom: 5,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    label: {
        fontSize: 9,
    },
    blankLine: {
            color: '#FF0000',
            textAlign: 'center',
            flexGrow: 1,
            fontSize: 12,
            borderBottomWidth: 1,
            paddingLeft: 5,
    },
    divider: {
        borderBottomWidth: 1,
        borderColor: '#000',
        borderStyle: 'dashed',  // Make the line dashed
        marginTop: 10,
        marginBottom: 10,
    },

});

export default styles;
