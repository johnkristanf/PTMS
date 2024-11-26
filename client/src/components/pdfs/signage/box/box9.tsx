import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box9';
import { AppliedServices } from '../../../../types/application';

export function PermitBodyBox9({ permitInfo }: { permitInfo: AppliedServices }) {
   
    const data  = permitInfo;

    const date = new Date();

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'short', // Short month format like "Oct"
        day: '2-digit', // Two-digit day
        year: 'numeric', // Full year
    }).format(date);

    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.title}>APPLICATION LETTER</Text>
            <View style={styles.dateRow}>
                <Text style={styles.date}>Date: </Text>
                <Text style={styles.lineDate}>{formattedDate || ' '}</Text>
            </View>

            {/* Recipient */}
            <Text style={styles.recipient}>
                ENGR. CIRINIA GRACE L. CATUBIG
                {'\n'}Officer-In-Charge
                {'\n'}Davao City
            </Text>

            {/* Content */}
            <Text>Sir/Maam:</Text>
            <View style={styles.bodyContainer}>
                <View style={styles.lineGroup}>
                    <Text style={styles.label}>I</Text>
                    <Text style={styles.line}>{data.firstname || ' '}</Text>
                    <Text style={styles.line}>{data.middleInitial || ' '}</Text>
                    <Text style={styles.line}>{data.lastName || ' '}</Text>
                </View>
                <View style={styles.subGroup}>
                    <Text style={styles.subLabel}>(First Name)</Text>
                    <Text style={styles.subLabel}>(Middle Name)</Text>
                    <Text style={styles.subLabel}>(Family Name)</Text>
                </View>

                <View style={styles.lineGroup}>
                    <Text>would like to apply for </Text>
                    <Text style={styles.line}>{`${data.permit_type} Permit` || ' '}</Text>
                    <Text>for my </Text>
                    <Text style={styles.line}>{data.labelData || ' '}</Text>
                </View>

                <View style={styles.lineGroup}>
                    <Text>located at </Text>
                    <Text style={styles.line}>{`${data.addressNo}, ${data.street}, ${data.barangay}, ${data.municipality}, ${data.zipCode}` || ' '}</Text>
                </View>
                <Text style={styles.subLabel2}>(Complete Address)</Text>

                <View style={styles.lineGroup}>
                    <Text style={styles.label2}>I also authorize</Text>
                    <Text style={styles.line}>{data.labelData || ' '}</Text>
                    <Text>to</Text>
                </View>
                <Text style={styles.subLabel3}>(Authorized Representative of the Company)</Text>

                <Text style={styles.bodyText}>
                    to transact the application with your Office on my behalf.
                </Text>
            </View>

            {/* Declaration */}
            <View style={styles.declarationContainer}>
                <Text style={styles.declarationFirstLine}>
                    I/We hereby certify that the documents submitted herein are all true and correct, therefore  
                </Text>
                <Text style={styles.declaration}>
                falsification on the supporting document in any way will cause disapproval of the permit application without prejudice to further action that may be undertaken pursuant to Articles 171 & 172 of R.A. 3815, otherwise known as the Revised Penal Code of the Philippines.
                </Text>
            </View>


            {/* Signatures */}
            <View style={styles.signatureContainer}>
                <View style={styles.signatureBox}>
                    <Text style={styles.line}>{data.labelData || ''}</Text>
                    <Text>(Signature over Printed Name of Owner)</Text>
                    <View style={styles.lineGroupFooter}>
                        <Text>Address: </Text>
                        <Text style={styles.line}>{data.labelData || ' '}</Text>
                    </View>
                    <View style={styles.lineGroupFooter}>
                        <Text>Contact Number: </Text>
                        <Text style={styles.contactLine}>{data.labelData || ''}</Text>
                    </View>
                </View>
                <View style={styles.signatureBox}>
                    <Text style={styles.line}>{data.labelData || ''}</Text>
                    <Text>(Signature over Printed Name of Authorized Representative)</Text>
                    <View style={styles.lineGroupFooter}>
                        <Text>Address: </Text>
                        <Text style={styles.line}>{data.labelData || ' '}</Text>
                    </View>
                    <View style={styles.lineGroupFooter}>
                        <Text>Contact Number: </Text>
                        <Text style={styles.contactLine}>{data.labelData || ''}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
