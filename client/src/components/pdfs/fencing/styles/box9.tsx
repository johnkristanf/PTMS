import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    // Main Container
    mainContainer: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontSize: 6,
        marginTop: 1,
    },
    
    // Title Section
    titleText: {
        fontSize: 6,
        textAlign: 'left',
        alignItems: 'flex-start',
    },

    // Section Headers
    headerText: {
        paddingTop: 1,
        marginLeft: 0,
        fontSize: 6,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'flex-start',
    },
    
    // Table Rows
    rowContainer: {
        marginTop: -1,
        justifyContent: 'space-between',
        width: '100%',
        padding: 2,
        border: '2px solid black',
        borderTop: '2px solid black',
        fontSize: 7,
        textAlign: 'center',
    },
    headerRow: {
        width: '100%',
        marginTop: 3,
        marginBottom: 0,
        padding: 2,
        border: '2px solid black',
        textAlign: 'left',
        fontSize: 7,
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

    // No Vertical Line Divider
    noLine: {
        flexGrow: 1, // Keeps vertical line fixed in place
        color: '#FF0000',
        fontSize: 6,
        fontWeight: 'bold',
        textAlign: 'center',
        minHeight: 8, // Sets a minimum height to prevent collapsing
        marginLeft: -28.7,
    },

    // Column Content
    columnContainer: {
        flexGrow: 1,
        paddingLeft: 5,
        flexBasis: '20%', // Equal width percentage for each column
        minWidth: 40,     // Ensures consistent column alignment
        maxWidth: 100,    // Optional: Limit maximum width for overflow
        textOverflow: 'ellipsis', // Truncate long text
        whiteSpace: 'nowrap',      // Prevent text wrapping
    },
    emptyColumn: {
        flexGrow: 1,
        paddingLeft: 5,
        flexBasis: '20%', // Same as columnContainer for consistency
        minWidth: 40,
        maxWidth: 100,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    centerTextTitle: {
        paddingTop: 0,
        fontSize: 6,
        textAlign: 'center',
        minHeight: 8, // Sets a minimum height to prevent collapsing
    },
    centerText: {
        flexGrow: 1,
        color: '#FF0000',
        fontSize: 6,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 5,
        minHeight: 8, // Sets a minimum height to prevent collapsing
    },
    leftText: {
        paddingTop: 0,
        fontSize: 6,
        textAlign: 'left',
        minHeight: 8, // Sets a minimum height to prevent collapsing
    },
    totalText: {
        paddingTop: 0,
        fontSize: 6,
        textAlign: 'right',
        paddingRight: 15,
        minHeight: 8, // Sets a minimum height to prevent collapsing
    },
});

export default styles;
