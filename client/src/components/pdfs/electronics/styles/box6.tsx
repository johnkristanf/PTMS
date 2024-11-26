import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    formNo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontSize: 6,
        marginTop: 2,
    },
    printText: {
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    
    data:{
         alignSelf: 'center',
         flexGrow: 1,
         fontSize: 6,
         bottom: 1,
    },
    data2:{
        position: 'absolute',
         alignSelf: 'flex-start',
         flexGrow: 1,
         fontSize: 6,
         top: 5,
         left: 48,
    },
   
    container: {
        width: '100%',
        border: '2px solid black',
        borderBottom:'none',
        fontSize: 6,
    },
    containerLast: {
        width: '100%',
        border: '2px solid black',
        fontSize: 6,
    },
    columnInfo: {
        width: '100%',
        paddingVertical: 5,
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 5,
        borderRight: '2px solid black',
    },

    row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    column: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 5,
    },
    label: {
        width: '100%',
        fontSize: 6,
        textAlign: 'left',
        marginBottom: 10,
        marginLeft: 5,
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
    labelColumn: {
        width: '100%',
        fontSize: 6,
        textAlign: 'left',
    },
    line: {
        width: '100%',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 10,
        borderBottomWidth: 1,
    },
    lineDate: {
        width: '70%',
         textAlign: 'center',
         fontSize: 10,
         borderBottomWidth: 1,
         marginBottom: 10,
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
    
});

export default styles;

