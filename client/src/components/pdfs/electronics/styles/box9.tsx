import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    // Main Container
    mainContainer: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 5,
    },
    
    // Title Section
    titleText: {
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
        marginLeft: 10,
    },

    // Section Headers
    headerText: {
        paddingTop: 1,
        marginLeft: 0,
        fontSize: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'flex-start',
    },
    data:{
        position: 'absolute',
         alignSelf: 'center',
         flexGrow: 1,
         fontSize: 6,
    },
    
    // Table Rows
    rowContainer: {
        marginTop: -1,
        justifyContent: 'space-between',
        width: '100%',
        padding: 2,
        border: '2px solid black',
        fontSize: 6,
        textAlign: 'center',
    },
    headerRow: {
        width: '100%',
        marginTop: 3,
        marginBottom: 0,
        padding: 2,
        border: '2px solid black',
        textAlign: 'left',
        fontSize: 6,
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap', // Prevents wrapping of elements
    },

    // Vertical Line Divider
    dividerLine: {
        width: 1,
        backgroundColor: 'black',
        height: '170%',
        flexGrow: 0, // Keeps vertical line fixed in place
    },

    // Column Content
    columnContainer: {
        width: '25%',        // Set each column to occupy exactly 25% of the width
        textAlign: 'center',
        paddingLeft: 0,      // Remove padding to avoid extra space
        minWidth: 40,        // Optional: enforce a minimum width for smaller screens
        maxWidth: 100,       // Optional: enforce a maximum width to prevent overflow
        textOverflow: 'ellipsis', // Truncate long text
        whiteSpace: 'nowrap',     // Prevent text wrapping
    },
    
    emptyColumn: {
        flexGrow: 1,
        paddingLeft: 5,
        flexBasis: '25%', // Same as columnContainer for consistency
        minWidth: 40,
        maxWidth: 100,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    centerText: {
        top: 3,
        fontSize: 7,
        textAlign: 'center',
        minHeight: 8, // Sets a minimum height to prevent collapsing
    },
});

export default styles;
