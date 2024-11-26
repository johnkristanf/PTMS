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
        marginTop: 2,
        width: '100%',
        padding: 5,
        border: '2px solid black',
        borderLeft: '1px solid black',
        borderBottom: 'none',
        fontSize: 6,
    },
    container2: {
        width: '100%',
        padding: 10,
        border: '2px solid black',
        borderLeft: '1px solid black',
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
        borderLeft: '1px solid black',
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
        borderLeft: '1px solid black',
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
        borderLeft: '1px solid black',
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
        borderLeft: '1px solid black',
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
        textAlign: 'left',
    },
    labelOnLine: {
        position: 'absolute',
        bottom: -8, // Adjust based on the space you need between the text and the line
        fontSize: 6,
        left: 10,
        textAlign: 'right',
        fontWeight: 'bold',
        width: '100%', // Ensures the text is centered relative to the line
    },
    labelOnLine2: {
        position: 'absolute',
        bottom: -8, // Adjust based on the space you need between the text and the line
        fontSize: 6,
        textAlign: 'right',
        fontWeight: 'bold',
        width: '80%', // Ensures the text is centered relative to the line
    },
    labelOnLine3: {
        position: 'absolute',
        bottom: -8, // Adjust based on the space you need between the text and the line
        fontSize: 6,
        textAlign: 'left',
        paddingLeft: 40,
        width: '100%', // Ensures the text is centered relative to the line
    },
    line: {
        width: '140%',
       color: '#FF0000',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 12,
        borderBottomWidth: 1,
    },
    lineDate: {
        left: 55,
        width: '60%',
        color: '#FF0000',
         textAlign: 'center',
         flexGrow: 1,
         fontSize: 12,
         borderBottomWidth: 1,
         paddingLeft: 5,
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
        position: 'relative', // Ensures lines are positioned relative to text
        width: '100%', // Ensures consistent width for alignment
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

