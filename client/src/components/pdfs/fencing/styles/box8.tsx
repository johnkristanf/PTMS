import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        marginTop: 5,
    },
    container: {
        width: '100%',
    },
    
    // Title
    title: {
        fontSize: 5,
        fontWeight: 'bold',
        textAlign: 'left',
    },

    header: {
        marginTop: 2,
        textAlign: 'center',
        border: '2px solid black',
        borderBottom: '2px solid black',
    },
    headerText: {
        margin: 3,
        fontSize: 5,
        textAlign: 'center',
    },

    // Header Row
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        border: '2px solid black',
        borderBottom: 'none',
        marginTop: -1,
    },
    headerNote: {
        flexBasis: '20%',
        fontSize: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 1,
        top: 5,
    },
    headerIn: {
        flexBasis: '20%',
        fontSize: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        borderLeft: '2px solid black',
        borderRight: '2px solid black',
        padding: 1,
    },
    headerOut: {
        flexBasis: '20%',
        fontSize: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRight: '2px solid black',
        padding: 1,
    },
    headerRemarks: {
        flexBasis: '20%',
        fontSize: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 5,
        padding: 1,
    },
    headerProcessedBy: {
        flexBasis: '20%',
        fontSize: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 1,
        top: 5,
    },

    // Sub-header for Time and Date
    subHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        border: '2px solid black',
        borderTop: 'none',
        marginTop: -1,
    },

    // Updated Time Date Containers
    timeDateContainer: {
        flexBasis: '10%',
        flexDirection: 'row',
        alignItems: 'center', // Keeps content centered when empty
        justifyContent: 'space-around',
        borderLeft: '2px solid black',
        borderTop: '2px solid black',
        padding: 1,
    },
    timeDateContainer2: {
        flexBasis: '10%',
        flexDirection: 'row',
        alignItems: 'center', // Keeps content centered when empty
        justifyContent: 'space-around',
        borderLeft: '2px solid black',
        borderRight: '2px solid black',
        borderTop: '2px solid black',
        padding: 1,
    },
    timeDateContainer3: {
        flexBasis: '10%',
        flexDirection: 'row',
        alignItems: 'center', // Keeps content centered when empty
        justifyContent: 'space-around',
        borderTop: '2px solid black',
        padding: 1,
    },

    timeDateTitle: {
        flexGrow: 1,
        fontSize: 6,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 5,
        minHeight: 8, // Sets a minimum height to prevent collapsing
    },
    timeDate: {
        flexGrow: 1,
        color: '#FF0000',
        fontSize: 6,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 5,
        minHeight: 8, // Sets a minimum height to prevent collapsing
    },
    
    emptyCell: {
        flexBasis: '20%',
        borderRight: '2px solid black',
        borderTop: 'none',
        fontSize: 6,
        fontWeight: 'bold',
        textAlign: 'center',
        flexGrow: 1,
        color: '#FF0000',
    },

    Cell: {
        flexBasis: '20%',
        borderTop: 'none',
        fontSize: 5,
        fontWeight: 'bold',
        textAlign: 'left',
        left: 3,
    },

    // Divider line styles
    dividerLine: {
        position: 'absolute',
        bottom: 0,
        right: 110.5,
        width: 1,
        backgroundColor: 'black',
        height: '185%',
        flexGrow: 0,
    },
});

export default styles;
