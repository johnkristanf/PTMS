// PermitBodyBox10.js

import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box10';

export function PermitBodyBox10({ permitInfo }: { permitInfo: any }) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.title}>REQUIREMENTS IN SIGN PERMIT APPLICATION</Text>

            {/* SIGNBOARD Section */}
            <View style={styles.sectionContainer}>
               
                <View style={styles.columnsContainer}>
                    <View style={styles.columnSection}>                            
                        <Text style={styles.sectionTitle}>SIGNBOARD</Text>
                        <Text style={styles.columnTitle}>NEW</Text>
                        <View style={styles.signboardContainer}>
                            <Text style={styles.label}>{'>'} Application Letter with notarized</Text>
                            <Text style={styles.label}>{'>'} 2 copies Lease of contract/title if owned</Text>
                            <Text style={styles.checkboxNote}> certified true copy of the title and 1 Machines Copy</Text>
                            <Text style={styles.label}>{'>'} 3 copies of Signage Plan with Dimension and Elevation</Text>
                            <Text style={styles.checkboxNote}>If with post/support must be signed and sealed by a duly licensed Architect/Civil Engineer</Text>
                            <Text style={styles.label}>{'>'} 3 copies of Electrical Plan (if lighted - signed & sealed </Text>
                            <Text style={styles.checkboxNote}>by a licensed Professional Electrical Engineer)</Text>
                            <Text style={styles.label}>{'>'} 2 copies of Locational Sketch Plan</Text>
                        </View>
                        <Text style={styles.columnTitle}>Renewal</Text>
                        <View style={styles.signboardContainer}>
                            <Text style={styles.label}>{'>'} Application Letter with Notarized</Text>
                            <Text style={styles.label}>{'>'} 2 Copies (photocopy) Lease of Contract/Title(if owned)</Text>
                            <Text style={styles.label}>{'>'} Photocopy of Approved sign Permit with official receipt.</Text>
                            <Text style={styles.label}>{'>'} Pictures </Text>
                        </View>
                        <Text style={styles.columnTitle}>TARPULINS, BANNERS, STREAMER, ETC.</Text>
                        <View style={styles.signboardContainer}>
                            <Text style={styles.label}>{'>'} Applicant Letter with Notarized</Text>
                            <Text style={styles.label}>{'>'} Layout with Dimensions</Text>
                            <Text style={styles.label}>{'>'} 2 copies of Locational Sketch Plan</Text>
                            <Text style={styles.label}>{'>'} 2 Copies of list of (private establishment) where the</Text>
                            <Text style={styles.checkboxNote}> signages will be placed, with signature over printed</Text>
                            <Text style={styles.checkboxNote}> name of the person who approved.</Text>
                        </View>
                        <Text style={styles.columnTitle}>PROHIBITED AREAS:</Text>
                        <View style={styles.signboardContainer}>
                        <Text style={styles.label}>{'>'} P ARTS</Text>
                        <Text style={styles.label}>{'>'} CENTER Islands</Text>
                        <Text style={styles.label}>{'>'} Overpass and Flyover</Text>
                        <Text style={styles.label}>{'>'} Lamp Post (DLPC & PLDT)</Text>
                        <Text style={styles.label}>{'>'} Trees</Text>
                        <Text style={styles.label}>Any Government owned structures</Text>
                        </View>
                    </View>



                    {/* PYLON Section */}
                    <View style={styles.columnSection}>                            
                        <Text style={styles.sectionTitle}>PYLON</Text>
                        <View style={styles.pylonContainer}>
                            <Text style={styles.label}>{'>'} Application Letter with notarized </Text>
                            <Text style={styles.label}>{'>'} 2 copies Sketch/Lot Plan </Text>
                            <Text style={styles.label}>{'>'} title Certified true copy of From registry of</Text>
                            <Text style={styles.checkboxNote}>deeds with photocopy</Text>
                            <Text style={styles.label}>Forms</Text>
                            <Text style={styles.label}>{'>'}3 copies of Signage Plan </Text>
                            <Text style={styles.checkboxNote}>with Dimension and Elevation</Text>
                            <Text style={styles.checkboxNote}>if with post/support must be signed and sealed </Text>
                            <Text style={styles.checkboxNote}>a duly licensed Architect/Civil Engineer</Text>
                            <Text style={styles.label}>{'>'} 3 copies of Electrical Plan</Text>
                            <Text style={styles.checkboxNote}>If lighted-signed & sealed by a licensed</Text>
                            <Text style={styles.label}>Professional Engineer</Text>
                            <Text style={styles.label}>{'>'} 1 Original & Machine DPWH clearance (highway)</Text>
                            <Text style={styles.checkboxNote}>if signage with post/support</Text>
                        </View>
                        <Text style={styles.columnTitle}>DIRECTIONAL SIGN</Text>
                        <View style={styles.pylonContainer}>
                            <Text style={styles.label}>{'>'} Application Letter with Notarized</Text>
                            <Text style={styles.label}>{'>'} 3 copies of signage Plan with Dimension and Elevation</Text>
                            <Text style={styles.checkboxNote}>if with post/support must be signed and sealed a duly</Text>
                            <Text style={styles.label}>Licensed Architect/civil Engineer</Text>
                            <Text style={styles.label}>{'>'} 3 copies of electrical Plan</Text>
                            <Text style={styles.checkboxNote}>If lighted-signed & sealed by licensed</Text>
                            <Text style={styles.label}>Professional Engineer</Text>
                            <Text style={styles.label}>{'>'} Application Letter with Notarized</Text>
                        </View>
                        <Text style={styles.columnTitle}>MOBILE SIGN</Text>
                        <Text style={styles.columnTitle}>NEW & RENEWAL:</Text>
                        <View style={styles.pylonContainer}>
                            <Text style={styles.label}>{'>'} Applicant Letter with Notarized</Text>
                            <Text style={styles.label}>{'>'} 3 Copies of Signage Plan with Dimension and Elevation</Text>
                            <Text style={styles.checkboxNote}>signed and sealed by a duly licensed architect/civil engineer</Text>
                            <Text style={styles.label}>{'>'} 1 original and 1 photocopy of O.R. &</Text>
                            <Text style={styles.checkboxNote}>certification of registration of unit.</Text>
                            <Text style={styles.label}>{'>'} Copies MOA Between unit owner and advertizer</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Divider */}
            <View style={styles.divider}></View>

            
        </View>
    );
}
