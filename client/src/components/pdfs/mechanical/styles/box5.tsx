import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    formNo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontSize: 5,
    },
    printText: {
        fontSize: 5,
        textAlign: 'left',
        alignItems: 'flex-start',
        marginBottom: 2,
    },
    infoText: {
        paddingTop: 2,
        marginBottom: 5,
        marginLeft: 0,
        fontSize: 5,
        textAlign: 'left',
        alignItems: 'flex-start',
    },
    infoText2: {
        paddingTop: 2,
        marginBottom:5,
        marginLeft: -5,
        fontSize: 5,
        textAlign: 'left',
    },
    infoText3: {
        paddingTop: 2,
        marginBottom:5,
        marginLeft: -4,
        fontSize: 5,
        textAlign: 'left',
    },
    container: {
        width: '100%',
        border: '2px solid black',
        borderBottom: 'none',
        fontSize: 5,
    },
    container2: {
        width: '100%',
        border: '2px solid black',
        borderBottom: 'none',
        flexDirection: 'column',
        fontSize: 5,
        justifyContent: 'space-between',
        paddingBottom: 2,
    },
    container3: {
        width: '100%',
        paddingLeft: 5,
        border: '2px solid black',
        borderBottom: 'none',
        textAlign: 'left',
        fontSize: 7,
    },
    container4: {
        width: '100%',
        paddingLeft: 5,
        border: '2px solid black',
        textAlign: 'left',
        fontSize: 7,
    },
    boxStyleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 2,
        marginTop: 0,
    },
    boxStyleContainer2: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 5,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    row3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Ensure items are spaced properly
    },
    label: {
        width: '100%',
        fontSize: 5,
        textAlign: 'center',
    },
    labelOnLine: {
        fontSize: 5,
        marginTop: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '100%', // Ensures the text is centered relative to the line
    },
    labelDate: {
        fontSize: 5,
        marginTop: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '80%', // Ensures the text is centered relative to the line
    },
    line: {
        width: '95%',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 10,
        borderBottomWidth: 1,
        marginTop: 20, // Space above the line to ensure text fits properly
    },
    labelOnLine2: {
        width: '5%', // Ensures the text is centered relative to the line
        marginTop: 5,
        fontSize: 6,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    lineDate: {
        width: '30%',
        textAlign: 'center',
        fontSize: 8,
        borderBottomWidth: 1,
        marginTop:3,
    },
    data:{
        position: 'absolute',
         alignSelf: 'center',
         flexGrow: 1,
         fontSize: 6,
         top: 5,
    },
    dataText:{
        position: 'absolute',
         alignSelf: 'center',
         flexGrow: 1,
         fontSize: 6,
         top: 5,
         left: 30,
    },
    verticalLine: {
        width: 1,
        backgroundColor: 'black',
        height: 13,
    },
    textLineContainer: {
        width: '100%', // Ensures consistent width for alignment
        justifyContent: 'center', // Center the text
        alignItems: 'center', // Center the text
    },
    prcContainer: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "PRC NO." away from the vertical line
    },
    validityContainer: {
        flexGrow: 1, // Allow it to take the necessary space
        paddingLeft: 5, // Adjust this to move "VALIDITY" away from the vertical line
    },
});

export default styles;

