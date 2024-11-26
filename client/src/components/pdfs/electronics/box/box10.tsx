import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box10'; // Import the styles

export function PermitBodyBox10() {
    return (
        <>
            <Text style={styles.title}>BOX 10 (TO BE ACCOMPLISHED BY THE BUILDING OFFICIAL)
            </Text>
            {/* Main Box Content */}
            <View style={styles.container}>
                {/* Title Section */}
                <Text style={styles.actionTitle}>ACTION TAKEN</Text>

                {/* Permit Details */}
                <Text style={styles.conditions}>PERMIT IS HEREBY ISSUED SUBJECT TO THE FOLLOWING ;</Text>

                {/* Condition List */}
                <View style={styles.conditionContainer}>
                    <Text style={styles.conditionNumber}>1</Text>
                    <Text style={styles.conditionText}>
                        That the proposed Plumbing works shall be in accordance with the plumbing plans filed
                        with this office and in conformity with the revised Plumbing Code of the Philippines, the
                        National Building Code and its IRR.
                    </Text>
                </View>

                <View style={styles.conditionContainer}>
                    <Text style={styles.conditionNumber}>2</Text>
                    <Text style={styles.conditionText}>
                        That prior to any commencement of plumbing works, a duly accomplished prescribed{' '}
                        <Text style={styles.boldText}>"Notice of Construction"</Text> shall be submitted to the Office of the Building Official.
                    </Text>
                </View>

                <View style={styles.conditionContainer}>
                    <Text style={styles.conditionNumber}>3</Text>
                    <Text style={styles.conditionText}>
                        That upon completion of the plumbing works the licensed supervisor/in-charge shall
                        submit the entry to the logbook duly signed and sealed to the Building Official including
                        as-built plans and other documents and shall also accomplish the Certificate of Completion
                        stating that the plumbing works of the building conform to the provision of the revised
                        Plumbing Code, the National Building Code and its IRR.
                    </Text>
                </View>

                <View style={styles.conditionContainer}>
                    <Text style={styles.conditionNumber}>4</Text>
                    <Text style={styles.conditionText}>
                        That this permit is null and void unless accompanied by the building permit.
                    </Text>
                </View>

                {/* Permit Issuer */}
                <Text style={styles.permitIssuer}>PERMIT ISSUED BY :</Text>
                <Text style={styles.issuerName}>ENGR. BERNARDO C. RABANOZ, JR.</Text>
                <Text style={styles.issuerTitle}>GR. CIRINIA GRACE L</Text>
            </View>

            {/* Footer (Placed Outside the Main Box) */}
            <View style={styles.footerContainer}>
                <Text style={styles.footer}>
                loymi_lapuz_2000
                </Text>
            </View>
        </>
    );
}
