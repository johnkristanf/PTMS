import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        fontSize: 10,
    },
    columnHeader: {
        width: '48%',
        flexDirection: 'column',
    },
    rowHeaderContainer: {
        width: '48%',
        flexDirection: 'row',
    },
    rowHeader: {
        width: '24%',
        flexDirection: 'row',
        marginLeft: 28,
    },

    headerText: {
        fontSize: 10,
        fontWeight: 'bold',
    },

    columnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    columnRecommending: {
        width: '28%',
        height: '100%',
        marginLeft: 48,
        marginTop: 5,
        padding: 3,
    },
    columnConstruction: {
        width: '48%',
        height: '100%',
        marginLeft: 8,
        padding: 3,
        bottom: 35,
    },
    recommendingColumn: {
        width: '48%',
        height: '100%',
        marginLeft: 8,
        marginTop: 25,
        padding: 3,
    },
    administratorColumn: {
        width: '48%',
        height: '100%',
        marginLeft: 50,
        marginTop: 5,
        padding: 3,
    },
    approvalColumn: {
        flexDirection: 'column',
        marginBottom: 15,
    },
    applicantColumn: {
        flexDirection: 'column',
        marginBottom: 15,
        right: 20,
    },
 
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    secondRow: {
        marginTop: 10,
    },
    title: {
        fontSize: 9,
        marginBottom: 2,
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
    mayorName: {
        fontSize: 9,
        textAlign:'center',
        marginTop: 2,
    },
    constructionName: {
        fontSize: 9,
        textAlign:'center',
        marginTop: 2,
        marginLeft: 10,
    },
    blankLine: {
        color: '#FF0000',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 12,
        borderBottomWidth: 1,
        paddingLeft: 5,
    },
    blankLineApproval: {
        width: "70%",
        alignSelf: 'center',
        color: '#FF0000',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 12,
        borderBottomWidth: 1,
        paddingLeft: 5,
        marginTop: 10,
    },
    blankLineApproved: {
        width: "30%",
        alignSelf: 'center',
        color: '#FF0000',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 12,
        borderBottomWidth: 1,
        paddingLeft: 5,
        marginTop: 10,
    },
    blankLineApplicant: {
        width: "70%",
        alignSelf: 'center',
        color: '#FF0000',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 12,
        borderBottomWidth: 1,
        paddingLeft: 5,
        marginTop: 15,
    },
    blankLineOwner: {
        width: "70%",
        alignSelf: 'center',
        color: '#FF0000',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 12,
        borderBottomWidth: 1,
        paddingLeft: 5,
        marginTop: 15,
    },
    blankLineAdministrator: {
        width: "60%",
        alignSelf: 'center',
        color: '#FF0000',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 12,
        borderBottomWidth: 1,
        paddingLeft: 5,
        marginTop: 15,
    },
    constructionBlankLine: {
        color: '#FF0000',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 12,
        borderBottomWidth: 1,
        paddingLeft: 5,
    },
    columnSpace: {
        marginRight: 50,
    },
    checkBox: {
        width: 12,
        height: 12,
        minHeight: 12,
        minWidth: 12,
        border: '1px solid black',
        marginHorizontal: 5,
        marginTop: 1,
    }, 
    checkBoxText: {
        position: 'absolute',
        color: '#FF0000',
        fontSize: 8,               // Adjust the font size as needed
        paddingLeft: 2,     // Center text horizontally
    },
    noteContainer: {
        width: '100%',
    },
    reminderContainer: {
        width: '100%',
        marginLeft: 30,
    },
    noteTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        textDecoration: 'underline',
        marginBottom: 2,
    },
    note: {
        fontSize: 6,
        marginBottom: 1,
    },
    reminderTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        textDecoration: 'underline',
        marginBottom: 2,
    },
    reminder: {
        fontSize: 6,
        marginBottom: 1,
    },
    blankSpace: {
        height: 5,
    }

});

export default styles;
