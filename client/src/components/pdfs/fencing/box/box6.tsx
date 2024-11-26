import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box6'; // Import the updated styles

export function PermitBodyBox6({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
    <>
    <Text style={styles.boxTitle}>BOX 6</Text>
        <View style={styles.container}>
            

            {/* Header text */}
            <View style={styles.rowHeader}>
                <Text style={styles.headerText}>REPUBLIC OF THE PHILIPPINES</Text>
                <Text style={styles.right}>)</Text>
            </View>
            <View style={styles.rowHeader}>
            <Text style={styles.headerText}>CITY/MUNICIPALITY OF    </Text>
            <Text style={styles.blankLine}>{data.labelData || ' '}</Text>
            <Text style={styles.right2}>)</Text>
            </View>

            {/* Appearance Section */}
            <View style={styles.row}>
                <Text style={styles.labelText}>BEFORE ME, at the City/Municipality of</Text>
                <Text style={styles.blankLine}>{data.labelData || ' '}</Text>
                <Text style={styles.labelText2}>on</Text>
                <Text style={styles.blankLine}>{data.labelData || ' '}</Text>
                <Text style={styles.labelText2}>personally appeared</Text>
            </View>

            {/* Applicant Section */}
        <View style={styles.row2}>
            <View style={styles.column}>
                <Text style={styles.blankLabel}>{data.labelData || ' '}</Text>
                <Text style={styles.subLabelText}>APPLICANT NAME</Text>
            </View>
            <View style={styles.columnSub}>
            <Text style={styles.blankLabelSub}>{data.labelData || ' '}</Text>
            <Text style={styles.subLabelText}>C.T.C. No.</Text>
            </View>
            <View style={styles.columnSub}>
            <Text style={styles.blankLabelSub}>{data.labelData || ' '}</Text>
            <Text style={styles.subLabelText}>DATE ISSUED</Text>
            </View>
            <View style={styles.column}>
            <Text style={styles.blankLabel}>{data.labelData || ' '}</Text>
            <Text style={styles.subLabelText}>PLACE ISSUED</Text>
            </View>
        </View>

            {/* Engineer Section */}
        <View style={styles.row3}>
            <View style={styles.column}>
                <Text style={styles.blankLabel}>{data.labelData || ' '}</Text>
                <Text style={styles.subLabelText}>LICENSED ARCHITECT/CIVIL ENGINEER</Text>
                <Text style={styles.subLabelText2}>(FULL TIME INSPECTOR AND SUPERVISOR OF CONSTRUCTION)</Text>
            </View>
            <View style={styles.columnSub}>
                <Text style={styles.blankLabelSub}>{data.labelData || ' '}</Text>
                <Text style={styles.subLabelText}>C.T.C. No.</Text>
            </View>
            <View style={styles.columnSub}>
                <Text style={styles.blankLabelSub}>{data.labelData || ' '}</Text>
                <Text style={styles.subLabelText}>DATE ISSUED</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.blankLabel}>{data.labelData || ' '}</Text>
                <Text style={styles.subLabelText}>PLACE ISSUED</Text>
            </View>
        </View>

            {/* Signature Section */}
            <Text style={styles.signatureText}>
            whose signature appear herein above known to me to be the same persons who executed this standard prescribed form and acknowledged to me
            </Text>
            <Text style={styles.signatureText2}>
            that the same is their free and voluntary act and deed
            </Text>

            <Text style={styles.witnessText}>
            WITNESS MY HAND AND SEAL on the date and place above written
            </Text>

            {/* Document Details Section */}
            <View style={styles.docDetailsRow}>
                <View style={styles.docDetailsColumn}>
                    <Text style={styles.docDetailsText}>Doc no.</Text>
                    <Text style={styles.docDetailsText}>Page no.</Text>
                    <Text style={styles.docDetailsText}>Book no.</Text>
                    <Text style={styles.docDetailsText}>Series No.</Text>
                </View>
                <View style={styles.docDetailsColumn2}>
                    <Text style={styles.blankFooter}>{data.labelData || ' '}</Text>
                    <Text style={styles.blankFooter}>{data.labelData || ' '}</Text>
                    <Text style={styles.blankFooter}>{data.labelData || ' '}</Text>
                    <Text style={styles.blankFooter}>{data.labelData || ' '}</Text>
                </View>
            </View>
            {/* Notary Public Section */}
        <View style={styles.notaryRow}>
        <Text style={styles.blankFooter}>{data.labelData || ' '}</Text>
            <View style={styles.rowFooter}>
                <Text style={styles.notaryText}>NOTARY PUBLIC (until December </Text>
                <Text style={styles.blankLastFooter}>{data.labelData || ' '}</Text>
                <Text>)</Text>
            </View>
        </View>
            
    </View>
</>
    
    );
}
