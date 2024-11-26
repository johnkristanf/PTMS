// box10.js

import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        fontSize: 10,
    },
    title: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionContainer: {
        marginVertical: 5,
        padding: 5,
    },
    
    signboardContainer: {
        marginBottom: 15,
        marginLeft: 20,
    },
    pylonContainer: {
        marginBottom: 15,
        marginLeft: 30,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        padding: 2,
    },
    columnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    columnSection: {
        width: '48%',
    },
    columnTitle: {
        fontSize: 9,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'left',
    },
    label: {
        fontSize: 9,
    },
    checkboxNote: {
        fontSize: 9,
        marginLeft: 12,
        color: 'black',
    },
    divider: {
        alignSelf: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#000',
        marginTop: 5,
        marginBottom: 5,
    },

});

export default styles;
