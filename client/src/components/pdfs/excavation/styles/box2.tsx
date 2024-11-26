import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    formNo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontSize: 6,
    },
    printText: {
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    infoText: {
        paddingTop: 4,
        marginBottom:-2,
        marginLeft: 5,
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
    },
    data:{
        position: 'absolute',
        color: '#FF0000',
         alignSelf: 'center',
         flexGrow: 1,
         fontSize: 6,
         top: 5,
    },
    data2:{
        position: 'absolute',
        color: '#FF0000',
         alignSelf: 'flex-start',
         flexGrow: 1,
         fontSize: 6,
         top: 5,
         left: 48,
    },
    infoText2: {
        paddingTop: 4,
        fontSize: 6,
        textAlign: 'left',
    },
    infoText3: {
        paddingTop: 4,
        fontSize: 6,
        textAlign: 'left',
    },
    container: {
        width: '100%',
        border: '2px solid black',
        borderRight: '1px solid black',
        fontSize: 6,
        marginBottom: -5,
    },
    container2: {
        width: '100%',
        padding: 10,
        border: '2px solid black',
        borderRight: '1px solid black',
        flexDirection: 'column',
        marginBottom: -5,
        fontSize: 6,
        justifyContent: 'space-between',
    },
    container3: {
        width: '100%',
        marginTop: 3,
        padding: 2,
        border: '2px solid black',
        borderRight: '1px solid black',
        borderTop: 'none',
        textAlign: 'left',
        fontSize: 7,
        marginBottom: -5,
    },
    container4: {
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 3,
        padding: 2,
        border: '2px solid black',
        borderRight: '1px solid black',
        borderTop: 'none',
        fontSize: 7,
        marginBottom: -5,
    },
    container5: {
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 3,
        padding: 2,
        border: '2px solid black',
        borderRight: '1px solid black',
        borderTop: 'none',
        fontSize: 7,
        marginBottom: -5,
    },
    container6: {
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 3,
        padding: 2,
        border: '2px solid black',
        borderRight: '1px solid black',
        borderTop: 'none',
        fontSize: 7,
        marginBottom: -5,
    },
    boxStyleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: -3,
        marginTop: -3,
    },
    boxStyleContainer2: {
        marginTop: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 2,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    row2: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    row3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Ensure items are spaced properly
    },
    label: {
        width: '100%',
        fontSize: 6,
        textAlign: 'center',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    labelOnLine: {
        fontSize: 6,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    labelOnLine2: {
        fontSize: 6,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 2,
    },
    labelOnLine3: {
        fontSize: 6,
        textAlign: 'center',
        width: '100%', // Ensures the text is centered relative to the line
    },
    line: {
        width: '100%',
        color: '#FF0000',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 10,
        borderBottomWidth: 1,
    },
    lineDate: {
        width: '70%',
        color: '#FF0000',
         textAlign: 'center',
         fontSize: 10,
         borderBottomWidth: 1,
         marginBottom: 10,
     },

    verticalLine: {
        width: 1,
        marginTop: 2,
        backgroundColor: 'black',
        height: '130%',
    },
    verticalLine2: {
        width: 1,
        marginTop: 2,
        backgroundColor: 'black',
        height: '130%',
        marginLeft: -21,
    },
    textLineContainer: {
        flexDirection: 'column',
        width: '100%', // Ensures consistent width for alignment
        marginTop: 2,
        marginBottom: 5,
    },
    textLineContainer2: {
        flexDirection: 'row',
        width: '50%', // Ensures consistent width for alignment
        marginBottom: 5,
    },
    prcContainer: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "PRC NO." away from the vertical line
    },
    validityContainer: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "VALIDITY" away from the vertical line
    },
    prcContainer2: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingRight: 13.5, // Adjust this to move "PRC NO." away from the vertical line
        paddingLeft: 5, // Adjust this to move "PRC NO." away from the vertical line
    },
    validityContainer2: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "VALIDITY" away from the vertical line
    },
    prcContainer3: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "PRC NO." away from the vertical line
    },
    validityContainer3: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "VALIDITY" away from the vertical line
    },
});

export default styles;

