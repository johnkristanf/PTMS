import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box12';

export function PermitBodyBox12( { permitInfo }: { permitInfo: any } ) {
    // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.title}>Republic of the Philippines</Text>
            <Text style={styles.subtitle}>DEPARTMENT OF PUBLIC WORKS & HIGHWAYS</Text>
            <Text style={styles.subtitle}>OFFICE OF THE CITY BUILDING OFFICIAL</Text>
            <Text style={styles.subtitle}>PANABO CITY</Text>
            <Text style={styles.mainTitle}>CERTIFICATE OF COMPLETION</Text>
            <Text style={styles.subTitle}>Mechanical Works</Text>

            {/* Certificate Body */}
            <View style={styles.bodyTextContainer}>
                <Text style={styles.bodyText}>
                    This is to Certify that mechanical installation/works of the building covered by Building Permit No.
                </Text>
                <View style={styles.column}>
                    <View style={styles.row}>
                        <Text style={styles.data}>{data.labelData || ' '}</Text>
                        <Text style={styles.bodyText1}> issued on </Text>
                        <Text style={styles.data}>{data.labelData || ' '}</Text>
                        <Text style={styles.bodyText1}> has been completed in accordance with the approved plans </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.bodyText1}> and speclficatlon on file with the Office of Building Officials and the Natlonal Bulldlng Code (P.D. 1096) that the said </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.bodyText1}> installation is ready for partial/final completion. </Text>
                    </View>
                </View>
            </View>

            {/* Owner Information */}
            <View style={styles.ownerInfoContainer}>
                <View style={styles.nameContainer}>
                    <Text>NAME OF OWNER</Text>
                    <View style={styles.lineGroup}>
                        <Text style={styles.line}>{data.labelData || ' '}</Text>
                        <Text style={styles.line}>{data.labelData || ' '}</Text>
                        <Text style={styles.line}>{data.labelData || ' '}</Text>
                    </View>
                </View>
                <View style={styles.subGroup}>
                    <Text>(Last Name)</Text>
                    <Text>(Given Name)</Text>
                    <Text>(Middle Name)</Text>
                </View>
                <View style={styles.column}>
                    <View style={styles.row}>
                        <Text style={styles.infoLabel}>Address: </Text>
                        <Text style={styles.data}>{data.labelData || ' '}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.infoLabel}>Location of Construction: </Text>
                        <Text style={styles.data}>{data.labelData || ' '}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.infoLabel}>Use or Type of Occupancy: </Text>
                        <Text style={styles.data}>{data.labelData || ' '}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.infoLabel}>Date of Start of Construction: </Text>
                        <Text style={styles.data}>{data.labelData || ' '}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.infoLabel}>Date of Completion: </Text>
                        <Text style={styles.data}>{data.labelData || ' '}</Text>
                    </View>
                    </View>
            </View>

            {/* Equipment Information */}
            <Text style={styles.sectionTitle}>Description and Type of Equipment Installed</Text>
            <View style={styles.equipmentContainer}>
                <View style={styles.equipmentRowSpace}>
                    <Text style={styles.equipmentTitle}>Description</Text>
                    <Text style={styles.equipmentTitle}>HP/Tons</Text>
                    <Text style={styles.equipmentTitle}>Capacity</Text>
                </View>
                <View style={styles.equipmentRow}>
                    <View style={styles.equipmentColumn}>
                        <Text style={styles.equipLine}>{data.labelData || ' '}</Text>
                        <Text style={styles.equipLine}>{data.labelData || ' '}</Text>
                        <Text style={styles.equipLine}>{data.labelData || ' '}</Text>
                        <Text style={styles.equipLine}>{data.labelData || ' '}</Text>
                        <Text style={styles.equipLine}>{data.labelData || ' '}</Text>
                        <Text style={styles.equipLine}>{data.labelData || ' '}</Text>
                        <Text style={styles.equipLine}>{data.labelData || ' '}</Text>
                        <Text style={styles.equipmentLabel}>WindowType, No. of Units </Text>
                        <Text style={styles.equipmentLabel}>Mechanical Ventilation </Text>
                        <Text style={styles.equipmentLabel}>No. of units </Text>
                    </View>
                    <View style={styles.equipmentColumn2}>
                        <Text style={styles.equipLine2}>{data.labelData || ' '}</Text>
                        <Text style={styles.equipLine2}>{data.labelData || ' '}</Text>
                        <Text style={styles.equipLine2}>{data.labelData || ' '}</Text>
                        <Text style={styles.equipLine2}>{data.labelData || ' '}</Text>
                        <Text style={styles.equipLine2}>{data.labelData || ' '}</Text>
                        <Text style={styles.equipLine2}>{data.labelData || ' '}</Text>
                        <Text style={styles.equipLine2}>{data.labelData || ' '}</Text>
                        <Text style={styles.equipmentLabel}> </Text>
                        <Text style={styles.equipmentLabel}> </Text>
                        <Text style={styles.equipmentLabel}> </Text>
                    </View>
                    <View style={styles.equipmentColumn3}>
                        <Text style={styles.equipmentLabel}>Elevator </Text>
                        <View style={styles.row}>
                            <Text style={styles.equipmentLabel}>No. of Floors Served: </Text>
                            <Text style={styles.dataEquip}>{data.labelData || ' '}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.equipmentLabel}>Escalator, Mts. </Text>
                            <Text style={styles.dataEquip}>{data.labelData || ' '}</Text>
                        </View>
                        <Text style={styles.equipmentLabel2}>(Type) (HP) </Text>
                        <View style={styles.row}>
                            <Text style={styles.equipmentLabel}>Generating Set </Text>
                            <Text style={styles.dataEquip}>{data.labelData || ' '}</Text>
                        </View>
                        <Text style={styles.equipmentLabel}>Other ICE not registered with </Text>
                        <View style={styles.row}>
                            <Text style={styles.equipmentLabel}>LTO. </Text>
                            <Text style={styles.dataEquip}>{data.labelData || ' '}</Text>
                        </View>
                        <Text style={styles.dataEquip}>{data.labelData || ' '} </Text>
                        <Text style={styles.equipmentLabel}>Sprinklers/AFE, No. of Heads </Text>
                        <View style={styles.row}>
                            <Text style={styles.equipmentLabel}>Pressure Vessels, Mt. </Text>
                            <Text style={styles.dataEquip}>{data.labelData || ' '}</Text>
                        </View>
                        <Text style={styles.equipmentLabel}>Pneumatic Tubes, Conveyors </Text>
                        <Text style={styles.equipmentLabel}>Monorails for Materials </Text>
                        <Text style={styles.equipmentLabel}>Handling L Mts. </Text>
                        <Text style={styles.dataEquip}>{data.labelData || ' '}  </Text>
                    </View>
                </View>

            </View>

            {/* Footer */}
            <View style={styles.columnFooter}>
                <View style={styles.rowFooter}>
                    <Text style={styles.footerLabelFirst}>Done on this  </Text>
                    <Text style={styles.footerLineText}>{data.labelData || ' '}</Text>
                    <Text style={styles.footerLabel}> day of </Text>
                    <Text style={styles.footerLineText}>{data.labelData || ' '}</Text>
                    <Text style={styles.footerLabel}> Installation is under </Text>
                </View>
                <Text style={styles.footerLabelContact}>Contact.</Text>
            </View>
                <View style={styles.nameContainer}>
                    <View style={styles.footerLineGroup}>
                        <Text style={styles.footerLine}>{data.labelData || ' '}</Text>
                        <Text style={styles.footerLine}>{data.labelData || ' '}</Text>
                        <Text style={styles.footerLine}>{data.labelData || ' '}</Text>
                    </View>
                </View>
                <View style={styles.footerSubGroup}>
                    <Text style={styles.footerLabel1}>Contractor</Text>
                    <Text style={styles.footerLabel2}>Prof. Mechanical Engineer</Text>
                    <Text style={styles.footerLabel3}>Prof. Mechanical Engineer Checked plans, signed and sealed</Text>
                </View>

            <View style={styles.conformContainer}>
                <Text  style={styles.conformLabel}>CONFORM :</Text>
                <Text style={styles.footerLine}>{data.labelData || ' '}</Text>
                <Text style={styles.conformLabel2}>Owner/Applicant</Text>
            </View>

            {/* Final Inspection */}
            <Text style={styles.inspectionTitle}>CERTIFICATION OF FINAL INSPECTION</Text>
            <View style={styles.inspectionContainer}>
            <Text style={styles.inspectionLabel}>This certifies that the mechanical works and the following apparatus Installed at the promises No. </Text>
            <Text style={styles.blankLineCertificate}>{data.labelData || ' '} </Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.inspectionLabel}>Street </Text>
            <Text style={styles.blankLineCertificate2}>{data.labelData || ' '} </Text>
            <Text style={styles.inspectionLabel}> Davao City</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.inspectionLabel}>Owner/Occupied by : </Text>
            <Text style={styles.blankLineCertificate}>{data.labelData || ' '} </Text>
            <Text style={styles.inspectionLabel}>were inspected and found to be</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.inspectionLabel}>in accordance with the present management and regulations prescribed by the National Building Code of the</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.inspectionLabel}>Philippines (P.D. 1096).</Text>
            </View>

            <View style={styles.rowCert}>
                <View style={styles.columnCert}>
                    <View style={styles.row}>
                        <Text style={styles.inspectionLabel}>Miscellaneous : </Text>
                        <Text style={styles.blankLineCertificate}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.inspectionLabel}>Contractor : </Text>
                        <Text style={styles.blankLineCertificate}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.row}>
                            <Text style={styles.inspectionLabel}>O.R. No : </Text>
                            <Text style={styles.blankLineCertificate}>{data.labelData || ' '} </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.inspectionLabel}>Amount Paid : </Text>
                            <Text style={styles.blankLineCertificate}>{data.labelData || ' '} </Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.inspectionLabel}>Date of Inspection : </Text>
                        <Text style={styles.blankLineCertificate}>{data.labelData || ' '} </Text>
                    </View>
                </View>
                <View style={styles.columnCert}>
                    <View style={styles.row}>
                        <Text style={styles.inspectionLabel}>Kind of Installation : </Text>
                        <Text style={styles.blankLineCertificate}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.inspectionLabel}>Permit No. : </Text>
                        <Text style={styles.blankLineCertificate}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.inspectionLabel}>Date : </Text>
                        <Text style={styles.blankLineCertificate}>{data.labelData || ' '} </Text>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.column}>
                <Text style={styles.blankLineFooter}>{data.labelData || ' '}</Text>
                <Text style={styles.inspectionLast2}>Inspector</Text>
                </View>

                <View style={styles.column}>
                <Text style={styles.inspectionOfficial}>ENGR. BERNARDO C. RABANOZ JR.</Text>
                <Text style={styles.inspectionOfficial}>BUILDING OFFICIAL</Text>
                </View>
            
            </View>

        </View>
    );
}
