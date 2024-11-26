import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box11';

export function PermitBodyBox11({ permitInfo }: { permitInfo: any }) {
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
                    <Text style={styles.header}>Republic of the Philippines</Text>
                    <Text style={styles.subHeader}>OFFICE OF THE CITY BUILDING OFFICIAL</Text>
                    <Text style={styles.city}>PANABO CITY</Text>
                </View>

                <View style={styles.headerContainerColumn}>
                    <Text style={styles.header}>Republic of the Philippines</Text>
                    <Text style={styles.subHeader}>OFFICE OF THE CITY BUILDING OFFICIAL</Text>
                    <Text style={styles.city}>PANABO CITY</Text>
                </View>
            </View>

            {/* Content (Two forms side by side) */}
            <View style={styles.formsContainer}>
                {/* Left Form */}
                <View style={styles.form}>
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Name of Applicant:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Address:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={styles.blankLine2}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Use or Type of Occupancy:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Project location:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={styles.blankLine2}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Applicants Contact No.:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Name of Authorized Representative:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={styles.blankLine2}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Authorized Representative Contact No.</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                </View>

                {/* Right Form */}
                <View style={styles.form}>
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Name of Applicant:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Address:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={styles.blankLine2}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Use or Type of Occupancy:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Project location:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={styles.blankLine2}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Applicants Contact No.:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Name of Authorized Representative:</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={styles.blankLine2}>{data.labelData || ' '} </Text>
                    </View>

                    <View style={styles.labelRow}>
                        <Text style={styles.label}>Authorized Representative Contact No.</Text>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
