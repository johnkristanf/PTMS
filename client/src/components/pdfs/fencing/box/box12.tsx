import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box12';

export function PermitBodyBox12({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainerRow}>
                <View style={styles.headerContainerColumn}>
                    <Text style={styles.header}>CHECKLIST OF GENERAL REQUIREMENTS FOR</Text>
                    <Text style={styles.subHeader}>FENCE PERMIT APPLICATION</Text>
                </View>
                <View style={styles.headerContainerColumn}>
                    <Text style={styles.header}>CHECKLIST OF GENERAL REQUIREMENTS FOR</Text>
                    <Text style={styles.subHeader}>FENCE PERMIT APPLICATION</Text>
                </View>
            </View>

            <View style={styles.columnsContainer}>
                {/* Left Column */}
                <View style={styles.column}>
                    <Text style={styles.sectionHeader}>A.1 Clearances/Certificates (from other Offices) - original with photo copy</Text>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>1</Text>
                        <Text style={styles.itemText}>DPWH clearance (if along National Highway) [Sec.302.12.b.i]</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>2</Text>
                        <Text style={styles.itemText}>Drainage Clearance (from DPWH/CEO) if required in the ECC</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>3</Text>
                        <Text style={styles.itemText}>CEO Clearance (if along City/Brgy/Subdivision Road)</Text>
                    </View>

                    <Text style={styles.subsectionHeader}>B.2 Legal Documents (by Owner) (original with photo copy)</Text>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>1</Text>
                        <Text style={styles.itemText}>Certified True Copy of Land Title (from the Register of Deeds)</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>2</Text>
                        <Text style={styles.itemText}>Certified True Copy of Tax Declaration of the property (from the City Assessor's Office) [Sec.302.a.2.ii]</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>3</Text>
                        <Text style={styles.itemText}>Certified True Copy of Current Real Property Tax Receipt (from the City Treasurer's Office) [Sec.302.a.2.iii]</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>4</Text>
                        <Text style={styles.itemText}>Picture on Site with Landmarks</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>5</Text>
                        <Text style={styles.itemTextBrgy}>Barangay clearance of NO SITE CONFLICT</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>6</Text>
                        <Text style={styles.itemText}>Others</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>

                    {/* Conditional Section */}
                    <View style={styles.item}>
                        <Text style={styles.italicNoteUnderline}>If applicant is not the owner of lot </Text>
                        <Text style={styles.italicNote}>(whichever is applicable) [Sec.302.b]</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>Notarized Deed of Absolute Sale</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>Notarized Contract of Lease</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>Notarized Contract of Sale</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>Notarized Authority to Construct from the Lot Owner</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>And, Notarized Special Power of Attorney (SPA)</Text>
                    </View>

                    {/* Coorporation Section */}
                    <View style={styles.item}>
                        <Text style={styles.italicCorporationUnderline}>Corporation:</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>Notarized Secretary Certificate appointing the authorized person who will sign for and in behalf of the company</Text>
                    </View>

                    {/* Conditional Section */}
                    <View style={styles.item}>
                        <Text style={styles.italicNote}>If applicant is not the owner of lot (whichever is applicable) [Sec.302.b]</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>Association Board resolution</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>Applicants Certificate of membership in that community Applicants Certificate of membership in that community
                        association</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>City Housing/NHA clearance (whichever is applicable)</Text>
                    </View>

                    {/* Technical Documents Section */}
                    <Text style={styles.subsectionHeader}>C ] Technical Documents (by owner and hired Professionals)</Text>
                        <Text style={styles.applicationHeader}>Application letter with duly filled-up forms of the following:</Text>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>1</Text>
                        <Text style={styles.itemText}>
                            Fence permit form with 3 sets of Civil/Architectural 
                            plans of the fence duly signed and sealed by a licensed 
                            Civil Engineer/Architect.
                        </Text>
                    </View>
                    <Text style={styles.noteHeader}>
                        Note: may use as A3 size paper for structural design 
                        plan Note: may use as A3 size paper for structural design plan
                        signed and sealed by a licensed Civil Engineer
                    </Text>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>2</Text>
                        <Text style={styles.itemText}>
                            Electrical permit form with 3 sets of Electrical Plans duly 
                            signed and sealed by a licensed (Professional/Registered) 
                            Electrical Engineer (if applicable)
                        </Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>3</Text>
                        <Text style={styles.itemText}>
                            Sketch/lot plan with vicinity map drawn to scale signed and 
                            sealed by a licensed geodetic engineer (Sec.302.3.a,Sec.32.11)
                        </Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>4</Text>
                        <Text style={styles.itemText}>
                            Bill of materials and cost estimates (signed and sealed)[Sec.302]
                        </Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>5</Text>
                        <Text style={styles.itemText}>
                            Photo copy of Owners/Applicants valid I.D with three (3) 
                            specimen signatures.
                        </Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>6</Text>
                        <Text style={styles.itemText}>
                            Photocopy of PRC IDs and current PTR and TIN of all the Signing 
                            professionals [NBC MC No.01, 2005;
                        </Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <Text style={styles.noteFooter}>
                             Note: INCOMPLETE DOCUMENTS WILL NOT BE ACCEPTED
                        </Text>
                        <Text style={styles.noteFooterSub}>
                            (dili dawaton kung kulang ang mga dokumento) 
                        </Text>
                    </View>
                    <Text style={styles.itemText}>
                    all forms must be filled-up properly, use black ink 
                    </Text>
                    <Text style={styles.itemText}>
                    only and write legibly
                    </Text>
                    <View style={styles.itemFooter}>
                        <Text style={styles.itemText}>
                            Received/pre-evaluated as to checklist by:
                        </Text>
                    </View>
                    <View style={styles.itemFooter}>
                        <Text style={styles.itemTextFooter}>Name/Position:</Text>
                        <Text style={styles.blankLineFooter}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.itemFooter}>
                        <Text style={styles.itemTextFooter}>Date/Time:</Text>
                        <Text style={styles.blankLineFooter}>{data.labelData || ' '} </Text>
                    </View>
                </View>
                






                {/*Right Column*/}
                <View style={styles.column}>
                    <Text style={styles.sectionHeader}>A.1 Clearances/Certificates (from other Offices) - original with photo copy</Text>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>1</Text>
                        <Text style={styles.itemText}>DPWH clearance (if along National Highway) [Sec.302.12.b.i]</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>2</Text>
                        <Text style={styles.itemText}>Drainage Clearance (from DPWH/CEO) if required in the ECC</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>3</Text>
                        <Text style={styles.itemText}>CEO Clearance (if along City/Brgy/Subdivision Road)</Text>
                    </View>

                    <Text style={styles.subsectionHeader}>B.2 Legal Documents (by Owner) (original with photo copy)</Text>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>1</Text>
                        <Text style={styles.itemText}>Certified True Copy of Land Title (from the Register of Deeds)</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>2</Text>
                        <Text style={styles.itemText}>Certified True Copy of Tax Declaration of the property (from the City Assessor's Office) [Sec.302.a.2.ii]</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>3</Text>
                        <Text style={styles.itemText}>Certified True Copy of Current Real Property Tax Receipt (from the City Treasurer's Office) [Sec.302.a.2.iii]</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>4</Text>
                        <Text style={styles.itemText}>Picture on Site with Landmarks</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>5</Text>
                        <Text style={styles.itemTextBrgy}>Barangay clearance of NO SITE CONFLICT</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>6</Text>
                        <Text style={styles.itemText}>Others</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>

                    {/* Conditional Section */}
                    <View style={styles.item}>
                        <Text style={styles.italicNoteUnderline}>If applicant is not the owner of lot </Text>
                        <Text style={styles.italicNote}>(whichever is applicable) [Sec.302.b]</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>Notarized Deed of Absolute Sale</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>Notarized Contract of Lease</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>Notarized Contract of Sale</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>Notarized Authority to Construct from the Lot Owner</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>And, Notarized Special Power of Attorney (SPA)</Text>
                    </View>

                    {/* Coorporation Section */}
                    <View style={styles.item}>
                        <Text style={styles.italicCorporationUnderline}>Corporation:</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>Notarized Secretary Certificate appointing the authorized person who will sign for and in behalf of the company</Text>
                    </View>

                    {/* Conditional Section */}
                    <View style={styles.item}>
                        <Text style={styles.italicNote}>If applicant is not the owner of lot (whichever is applicable) [Sec.302.b]</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>Association Board resolution</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>Applicants Certificate of membership in that community Applicants Certificate of membership in that community
                        association</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemText}>City Housing/NHA clearance (whichever is applicable)</Text>
                    </View>

                    {/* Technical Documents Section */}
                    <Text style={styles.subsectionHeader}>C ] Technical Documents (by owner and hired Professionals)</Text>
                        <Text style={styles.applicationHeader}>Application letter with duly filled-up forms of the following:</Text>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>1</Text>
                        <Text style={styles.itemText}>
                            Fence permit form with 3 sets of Civil/Architectural 
                            plans of the fence duly signed and sealed by a licensed 
                            Civil Engineer/Architect.
                        </Text>
                    </View>
                    <Text style={styles.noteHeader}>
                        Note: may use as A3 size paper for structural design 
                        plan Note: may use as A3 size paper for structural design plan
                        signed and sealed by a licensed Civil Engineer
                    </Text>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>2</Text>
                        <Text style={styles.itemText}>
                            Electrical permit form with 3 sets of Electrical Plans duly 
                            signed and sealed by a licensed (Professional/Registered) 
                            Electrical Engineer (if applicable)
                        </Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>3</Text>
                        <Text style={styles.itemText}>
                            Sketch/lot plan with vicinity map drawn to scale signed and 
                            sealed by a licensed geodetic engineer (Sec.302.3.a,Sec.32.11)
                        </Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>4</Text>
                        <Text style={styles.itemText}>
                            Bill of materials and cost estimates (signed and sealed)[Sec.302]
                        </Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>5</Text>
                        <Text style={styles.itemText}>
                            Photo copy of Owners/Applicants valid I.D with three (3) 
                            specimen signatures.
                        </Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                        <Text style={styles.itemNumber}>6</Text>
                        <Text style={styles.itemText}>
                            Photocopy of PRC IDs and current PTR and TIN of all the Signing 
                            professionals [NBC MC No.01, 2005;
                        </Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <Text style={styles.noteFooter}>
                             Note: INCOMPLETE DOCUMENTS WILL NOT BE ACCEPTED
                        </Text>
                        <Text style={styles.noteFooterSub}>
                            (dili dawaton kung kulang ang mga dokumento) 
                        </Text>
                    </View>
                    <Text style={styles.itemText}>
                    all forms must be filled-up properly, use black ink 
                    </Text>
                    <Text style={styles.itemText}>
                    only and write legibly
                    </Text>
                    <View style={styles.itemFooter}>
                        <Text style={styles.itemText}>
                            Received/pre-evaluated as to checklist by:
                        </Text>
                    </View>
                    <View style={styles.itemFooter}>
                        <Text style={styles.itemTextFooter}>Name/Position:</Text>
                        <Text style={styles.blankLineFooter}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.itemFooter}>
                        <Text style={styles.itemTextFooter}>Date/Time:</Text>
                        <Text style={styles.blankLineFooter}>{data.labelData || ' '} </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
