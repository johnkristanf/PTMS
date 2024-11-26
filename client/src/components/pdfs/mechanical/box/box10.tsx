import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box10'; // Import the styles

export function PermitBodyBox10({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <>
            <Text style={styles.title}>BOX 10</Text>
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
                    That the proposed mechanical works shall be in accordance with the mechanical plans filed with this Office in conformity
                    with the latest Philippine Mechanical Code, the National Building Code and its IRR.
                    </Text>
                </View>

                <View style={styles.conditionContainer}>
                    <Text style={styles.conditionNumber}>2</Text>
                    <Text style={styles.conditionText}>
                    That prior to any mechanical installation, a duly accomplished prescribed{' '}
                        <Text style={styles.boldText}>"Notice of Construction"</Text> shall be submitted to the Office of the Building Official.
                    </Text>
                </View>

                <View style={styles.conditionContainer}>
                    <Text style={styles.conditionNumber}>3</Text>
                    <Text style={styles.conditionText}>
                    That upon completion of the mechanical works, the licensed supervisor/in-charge shall submit the entry to the logbook duly
                    singned and sealed to the building official including as-built plans and other documents and shall also accomplish the
                    certifiate of completion stating that the mechanical works conform to the provision of Philippine Mechanical Code, the
                    National Building Code and its IRR
                    </Text>
                </View>

                <View style={styles.conditionContainer}>
                    <Text style={styles.conditionNumber}>4</Text>
                    <Text style={styles.conditionText}>
                        That this permit is null and void unless accompanied by the building permit.
                    </Text>
                </View>

                <View style={styles.conditionContainer}>
                    <Text style={styles.conditionNumber}>5</Text>
                    <Text style={styles.conditionText}>
                    That a Certificate of Operation shall be issued for the continuous use of mechanical installations.
                    </Text>
                </View>

               {/* Permit Issuer */}
               <Text style={styles.permitIssuer}>PERMIT ISSUED BY :</Text>
                <Text style={styles.issuerName}>ENGR. BERNARDO C. RABANOZ, JR.</Text>
                <Text style={styles.issuerTitle}>BUILDING OFFICIAL</Text>
            
                {/* Date*/}
                <View style={styles.dateContainer}>
                <Text style={styles.blankLineDate}>{data.labelData || ' '} </Text>
                    <Text style={styles.date}>
                    DATE 
                    </Text>
                    
                </View>
            
             {/* Footer (Placed Outside the Main Box) */}
            <View style={styles.footerContainer}>
                <Text  style={styles.note}>NOTE:</Text>
                <Text style={styles.footer}>
                    THIS PERMIT MAY BE CANCELLED OR REVOKED PURSUANT TO SECTION. 305 & 306 OF THE "NATIONAL BUILDING CODE".
                </Text>
            </View>
            </View>

           
        </>
    );
}
