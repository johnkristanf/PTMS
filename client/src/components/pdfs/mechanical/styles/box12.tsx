import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        fontSize: 12,
    },
    title: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        textAlign: 'center',
    },
    mainTitle: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10,
    },
    subTitle: {
        fontSize: 12,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    bodyTextContainer: {
        marginVertical: 10,
    },
    bodyText: {
        fontSize: 10,
        marginLeft: 50,
    },
    bodyText1: {
        textAlign: 'justify',
        fontSize: 10,
    },
    infoLabel: {
        fontSize: 10,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    ownerInfoContainer: {
        marginVertical: 2,
    },
    lineGroup: {
        flexDirection: 'row',
        marginLeft: 5,
    },
    line: {
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 10,
        borderBottomWidth: 1,
        width: '28%',
    },
    
    footerLineGroup: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
    },
    footerLineText: {
        width: 0,
        flexGrow: 1,
        textAlign: 'center',
        fontSize: 10,
        marginHorizontal: 5,
        borderBottomWidth: 1,
    },
    footerLine: {
        width: '30%',
        flexGrow: 1,
        textAlign: 'center',
        fontSize: 10,
        marginHorizontal: 5,
        borderBottomWidth: 1,
    },
    footerSubGroup: {
        fontSize: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 2,
        marginLeft: 50,
    },
    subGroup: {
        fontSize: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 2,
        marginLeft: 100,
    },
    
    sectionTitle: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    equipmentContainer: {
        marginBottom: 2,
    },
    equipmentRowSpace: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    equipmentRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
    },
    equipmentTitle: {
        width: '100%',
        textAlign: 'center',
        textDecoration: 'underline',
        fontSize: 10,
    },
    equipmentColumn: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 1,
    },
    equipmentColumn2: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,

    },
    equipmentColumn3: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 1,
        marginTop: 2,
    },
    equipLine: {
        width: '100%', // Adjusted width for better spacing
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 10,
        borderBottomWidth: 1,
        marginTop: 3,
    },
    equipLine2: {
        width: '70%', // Adjusted width for better spacing
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 10,
        borderBottomWidth: 1,
        marginTop: 3,
    },
    dataEquip: {
        width: "100%", // Adjusted width for better spacing
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 10,
        borderBottomWidth: 1,
    },
    equipmentLabel: {
        fontSize: 8,
        textAlign: 'left',
        marginBottom: 3,
    },
    equipmentLabel2: {
        width: '100%',
        fontSize: 8,
        textAlign: 'right',
        marginBottom: 5,
        left: 90,
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        fontSize: 10,
        marginTop: 15,
    },
    footerLabelContact: {
        width: '100%',
        textAlign: 'left',
        fontSize: 10,
    },
    footerLabel: {
        textAlign: 'right',
        fontSize: 10,
    },
    footerLabelFirst: {
        textAlign: 'right',
        fontSize: 10,
        marginLeft: 30,
    },
    footerLabel1: {
        textAlign: 'left',
        width: '18%',
        fontSize: 8,
    },
    footerLabel2: {
        textAlign: 'center',
        width: '35%',
        fontSize: 8,
    },
    footerLabel3: {
        textAlign: 'center',
        width: '29%',
        fontSize: 8,
    },
    conformContainer: {
        flexDirection: 'column',
    },
    conformLabel: {
        textAlign: 'left',
        fontSize: 8,
    },
    conformLabel2: {
        width: '28%',
        textAlign: 'center',
        fontSize: 8,
    },
    inspectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
        textDecoration: 'underline',
    },
    inspectionContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    row: {
        width: '100%',
        flexDirection: 'row',
    },
    column: {
        width: '100%',
        flexDirection: 'column',
    },
    rowCert: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    columnCert: {
        width: '49%',
        flexDirection: 'column',
    },
    columnFooter: {
        width: '100%',
        
        flexDirection: 'column',
    },
    rowFooter: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    data: {
        width: 0,
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 10,
        borderBottomWidth: 1,
    },
    blankLine: {
        width: '20%',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 10,
        borderBottomWidth: 1,
    },
    blankLineCertificate: {
        width: 0,
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 10,
        borderBottomWidth: 1,
    },
    blankLineCertificate2: {
        width: '100%',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 10,
        borderBottomWidth: 1,
    },
    blankLineFooter: {
        width: '50%',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 10,
        borderBottomWidth: 1,
    },
    inspectionLabel: {
        fontSize: 10,
        marginTop: 1,
    },
    inspectionLabel2: {
        marginLeft: 10,
        fontSize: 10,
        marginTop: 1,
    },
    inspectionLast: {
        fontSize: 10,
        marginTop: 1,
    },
    inspectionLast2: {
        fontSize: 10,
        width: '50%',
        textAlign: 'center',
    },
    inspectionOfficial: {
        width: '100%',
        textAlign: 'center',
        fontSize: 10,
    },
});

export default styles;
