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
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 2,
    },
    subtitle: {
        fontSize: 12,
        textAlign: 'center',
    },
    divider: {
        alignSelf: 'center',
        width: '90%',
        borderBottomWidth: 1,
        borderColor: '#000',
        marginTop: 5,
        marginBottom: 5,
    },
    applicantContainer: {
        width: '48%',
        height: '100%',
        marginLeft: 8,
        marginTop: 5,
        padding: 3,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row: {
        width: '100%',
        flexDirection: 'row',
    },
    rowDate: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 2,
    },
    column: {
        flexDirection: 'column',
    },
    applicationPermit: {
        fontSize: 10,
        marginLeft: 5,
    },
    blankLine: {
        color: '#FF0000',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 12,
        borderBottomWidth: 1,
        paddingLeft: 5,
    },
    checkboxRow: {
        flexDirection: 'row',
        marginTop: 1,
        justifyContent: 'center',
    },
    checkBox: {
        width: 12,
        height: 12,
        minHeight: 12,
        minWidth: 12,
        border: '1px solid black',
        marginHorizontal: 3,
        marginTop: 1,
    }, 
    checkBoxText: {
        position: 'absolute',
        color: '#FF0000',
        fontSize: 8,               // Adjust the font size as needed
        paddingLeft: 2,     // Center text horizontally
    },
    label: {
        fontSize: 10,
        marginTop: 1,
        marginRight: 15,
    },
    signTitle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 10,
    },
    signPermit: {
        width: '100%',
        textAlign: 'justify',
        padding: 3,
        marginLeft: 5,
    },
    signpermitLabel: {
        fontSize: 10,
        marginLeft: 5,
    },
    signpermitLine: {
        color: '#FF0000',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 12,
        borderBottomWidth: 1,
        paddingLeft: 5,
    },
    conditionLabel: {
        fontSize: 10,
        marginLeft: 30,
    },
    conditionLabel2: {
        fontSize: 10,
        marginLeft: 45,
    },
    columnMargin: {
        flexDirection: 'column',
        marginVertical: 5,
    },
});

export default styles;
