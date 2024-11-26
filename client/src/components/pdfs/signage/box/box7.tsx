import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box7';

export function PermitBodyBox7({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>CITY GOVERNMENT OF PANABO</Text>
                <Text style={styles.title}>OFFICE OF THE BUILDING OFFICIAL</Text>
                <Text style={styles.subtitle}> PANABO CITY </Text>
            </View>

            {/* Divider */}
            <View style={styles.divider}></View>
            
            <View style={styles.rowContainer}>
                <View style={styles.applicantContainer}>
                    <View style={styles.row}>
                        <Text style={styles.applicationPermit}>APPLICATION NO. : </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                </View>
            </View>
                <View style={styles.applicantContainer}>
                <View style={styles.column}>
                    <View style={styles.row}>
                        <Text style={styles.applicationPermit}>PERMIT NO. :  </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.rowDate}>
                        <Text style={styles.applicationPermit}>DATE :  </Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                </View>
                    
                </View>
            </View>
            <View style={styles.checkboxRow}>
                    <View style={styles.checkBox}>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                    </View>
                    <Text style={styles.label}>Billboard</Text>
                    <View style={styles.checkBox}>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                    </View>
                    <Text style={styles.label}>Signboard</Text>
                    <View style={styles.checkBox}>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                    </View>
                    <Text style={styles.label}>Streamer</Text>
                    <View style={styles.checkBox}>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                    </View>
                    <Text style={styles.label}>Pylon</Text>
                    <View style={styles.checkBox}>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                    </View>
                    <Text style={styles.label}>Direction Sign</Text>
                    <View style={styles.checkBox}>
                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                    </View>
                    <Text style={styles.label}>Moblie Sign</Text>
            </View>

            <Text style={styles.signTitle}> SIGN PERMIT </Text>
            <View style={styles.signPermit}>
                <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.signpermitLabel}>Permit is hereby granted to </Text>
                            <Text style={styles.signpermitLine}>{data.labelData || ' '} </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.signpermitLabel}>with postal address at </Text>
                            <Text style={styles.signpermitLine}>{data.labelData || ' '} </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.signpermitLine}>{data.labelData || ' '} </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.signpermitLabel}>to install/attach/paint </Text>
                            <Text style={styles.signpermitLine}>{data.labelData || ' '} </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.signpermitLine}>{data.labelData || ' '} </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.signpermitLabel}>with the wordings "</Text>
                            <Text style={styles.signpermitLine}>{data.labelData || ' '} </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.signpermitLabel}>at the premises of </Text>
                            <Text style={styles.signpermitLine}>{data.labelData || ' '} </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.signpermitLine}>{data.labelData || ' '} </Text>
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.signpermitLabel}>as per attached sketch plan or location plan to pertinent provisions of the National Building Code (P.D. 1096),</Text>
                            <Text style={styles.signpermitLabel}>City Ordinance  No.  092,  series  of  2000  and  its  implementing Rules and Regulations and to the following</Text>
                            <Text style={styles.signpermitLabel}>Conditions :</Text>
                        </View>

                        <View style={styles.column}>
                            <View style={styles.columnMargin}>
                                <Text style={styles.conditionLabel}>1   The sign shall be installed in conformity with Rule XX of the implementing Rules and Regulations of</Text>
                                <Text style={styles.conditionLabel2}>P.D. 1096 and the City Ordinance No. 092, Series of 2000</Text> 
                            </View>
                            <View style={styles.columnMargin}>
                                <Text style={styles.conditionLabel}>2   In case of Electric or neon signs the corresponding Electrical Permit therefore shall be secured.</Text>
                            </View>
                            <View style={styles.columnMargin}>
                                <Text style={styles.conditionLabel}>3   This  Permit  must  be  kept  in  the  premises  of the  establishment wherein the sign is installed for</Text> 
                                <Text style={styles.conditionLabel2}>inspection purposes.  It  may  be  cancelled  or  revoked pursuant to sections  305  and  306  of the</Text> 
                                <Text style={styles.conditionLabel2}>National Building Code (P.D. 1096),  The City Ordinance  No. 092, Series  of  2000 and when public</Text> 
                                <Text style={styles.conditionLabel2}>interest so demands.</Text> 
                            </View>
                               
                                
                        </View>
                        
                </View>
            </View>
        </View>
    );
}
