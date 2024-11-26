import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box10'; // Import the styles

export function PermitBodyBox10({ permitInfo }: { permitInfo: any }) {
    return (
        <>
            <Text style={styles.title}>BOX 10 (TO BE ACCOMPLISHED BY THE BUILDING OFFICIAL)
            </Text>
            {/* Main Box Content */}
            <View style={styles.container}>
                {/* Title Section */}
                <Text style={styles.actionTitle}>ACTION TAKEN</Text>

                {/* Permit Details */}
                <Text style={styles.conditions}>PERMIT IS HEREBY ISSUED /GRANTED SUBJECT BY THE BUILDING OFFICIAL</Text>

                {/* Condition List */}
                <View style={styles.conditionContainer}>
                    <Text style={styles.conditionNumber}>1</Text>
                    <Text style={styles.conditionText}>
                        That uner Article 1723 of the Civil Code of the Philippines, the engineer or architect who drew up the plans and specifications
                        is liable for damages if within (15) years from completion of the structure, it should collapse due to deffect in the plans or
                        specifications or defect in the ground. The engineer or architect who supervises the construction shall be solidarity liable
                        with the contractor should the edifice collapse due to defect in the construction or the use of interior materials.

                   </Text>
                </View>
                <View style={styles.conditionContainer}>
                    <Text style={styles.conditionNumber}>2</Text>
                    <Text style={styles.conditionText}>
                        That the proposed construction/errection/addition, etc. shall be in comformity with the provisions of the "National Building
                        Code' (P.D. 1096) and its implementing Rules and Regulations.
                    </Text>
                </View>

                <View style={styles.conditionContainer2}>
                    <Text style={styles.conditionABCD2}>a</Text>
                    <Text style={styles.conditionText}>
                        That prior to commencement of the proposed projects and constructions an actual relocation survey shall be conducted
                        by responsible licensed Geodetic Engineer.
                    </Text>
                </View>

                <View style={styles.conditionContainer2}>
                    <Text style={styles.conditionABCD2}>b</Text>
                    <Text style={styles.conditionText}>
                        That before commencing the excavation the person making or causing the excavation to be made shall verify in writing
                        the owner of adjoining building not less than ten (10) days before such excavation is to be made and show how the
                        adjoining building should be protected.
                    </Text>
                </View>

                <View style={styles.conditionContainer2}>
                    <Text style={styles.conditionABCD2}>c</Text>
                    <Text style={styles.conditionText}>
                        That the owner of the fence shall engage the services of responsible licensed Architect or Civil Engineer to undetake the
                        full time inspection and supervision of the construction work
                    </Text>
                </View>

                <View style={styles.conditionContainer2}>
                    <Text style={styles.conditionABCD2}>d</Text>
                    <Text style={styles.conditionText}>
                        That threre shall be kept at the jobsite at all times a logbook wherein the actual progress of construction including test
                        conducted weather condition and other pertinent data are to be recorded, same shall be made available for scrutiny
                        and comments by the OCBO representative during the conduct of his/her inspection pursuant to Section 207 of the
                        National Building Code.
                    </Text>
                </View>

                {/* Permit Issuer */}
                <Text style={styles.permitIssuer}>PERMIT ISSUED BY :</Text>
                <Text style={styles.issuerName}>ENGR. BERNARDO C. RABANOZ, JR.</Text>
                <Text style={styles.issuerTitle}>BUILDING OFFICIAL</Text>
            
            {/* Date*/}
            <View style={styles.dateContainer}>
                <Text style={styles.date}>
                Date: 
                </Text>
                <View style={styles.underline} />
            </View>
            
            {/* Footer*/}
            <View style={styles.footerContainer}>
                <Text style={styles.footer}>
                NOTE: THIS PERMIT MAY BE CANCELLED OR REVOKED PURSUANT TO SECTIONS 305 AND 306 OF THE NATIONAL BUILDING CODE.
                </Text>
            </View>

            </View>

            
        </>
    );
}
