import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
    },
    // Title
    title: {
        fontSize: 7,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    container5: {
        paddingLeft: 5,
        paddingTop: 5,
        textAlign: 'left',
        width: '100%',
        border: '2px solid black',
        flexDirection: 'column',
        fontSize: 8,
    },
    boxStyleContainer2: {
        justifyContent: 'center',
        width: '100%',
    },
    columnBox: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    box4label: {
        width: '30%',
        fontSize: 8,
        fontWeight: 'bold',
        bottom: 5,
    },
    scopeOfWorkRow: {
        bottom: 5,
        flexDirection: 'row',
        marginLeft: 90,
        justifyContent: 'space-between', // Space between the two columns
        width: '80%',
    },
    scopeColumn4: {
        flexDirection: 'column',
        width: '100%', // Adjust width for each column
    },
    scopeColumn5: {
        flexDirection: 'column',
        width: '100%', // Adjust width for each column
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 10,
    },
    rowOption: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
    },
    rowOption2: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 3,
    },
    rowOption3: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 3,
    },
    column: {
        width: '100%',
        flexDirection: 'column',
    },
    labelText: {
        width: '60%',
        fontSize: 7,
    },
    labelText2: {
        width: '100%',
        fontSize: 7,
    },
    checkBox: {
        width: 10,
        height: 10,
        minHeight: 10,
        minWidth: 10,
        border: '2px solid black',
        marginHorizontal: 3,
    }, 
    checkBoxText: {
        position: 'absolute',
        color: '#FF0000',
        fontSize: 8,               // Adjust the font size as needed
        paddingLeft: 1,     // Center text horizontally
    },
    box4label2: {
        paddingTop: 2,
        width: '100%',
        fontSize: 8,
    },
    box4label3: {
        paddingTop: 2,
        width: '50%',
        fontSize: 8,
    },
    blankLabel: {
        width: '100%',
        color: '#FF0000',
        textAlign: 'center',
        fontSize: 8,
        borderBottomWidth: 1,
    },
    blankLabelOther: {
        width: '100%',
        color: '#FF0000',
        textAlign: 'center',
        fontSize: 8,
        marginTop: 2,
        borderBottomWidth: 1,
    },
    space: {
        paddingLeft: 50,
    }
});

export default styles;
