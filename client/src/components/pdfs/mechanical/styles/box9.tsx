import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        marginTop: 2,
    },
    container: {
        width: '100%',
        border: '2px solid black',
    },
    // Title
    title: {
        fontSize: 6,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 2,
    },

    headerText: {
        textAlign: 'center',
        fontSize: 6,
        paddingVertical: 2,
        borderBottomWidth: 1,
    },
    row:{
        width: '100%',
        flexDirection: 'row',
    },
    column:{
        width: '100%',
        flexDirection: 'column',
        borderRightWidth: 1,
    },
    columnDate:{
        width: '50%',
        flexDirection: 'column',
        borderRightWidth: 1,
    },
    columnSub:{
        width: '100%',
        flexDirection: 'column',
    },
    note:{
        fontSize: 6,
        textAlign: 'left',
        paddingBottom: 2,
    },
    noteLabel:{
        fontSize: 6,
        textAlign: 'left',
        marginBottom: 2,
        marginLeft: 10,
    },
    noteLabel2:{
        fontSize: 6,
        textAlign: 'left',
        paddingBottom: 2,
        marginLeft: 29,
    },
    dateTitle:{
        width: '100%',
        fontSize: 6,
        textAlign: 'center',
        paddingVertical: 2,
        borderBottomWidth: 1,
    },
    dateSubTitle:{
        width: '100%',
        fontSize: 6,
        textAlign: 'center',
        paddingVertical: 2,
        borderBottomWidth: 1,
    },
    timeDateData: {
        width: '100%',
        flexGrow: 1,
        fontSize: 6,
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottomWidth: 1,
        paddingVertical: 2,
    },
    timeDateDataSub: {
        width: '100%',
        flexGrow: 1,
        fontSize: 6,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 2,
    },
   
});

export default styles;
