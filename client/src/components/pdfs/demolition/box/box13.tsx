import { View, Text } from '@react-pdf/renderer'; 
import styles from '../styles/box13';

export function PermitBodyBox13({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <>
        <View style={styles.rowContainer}>
            <View style={styles.column}>
                <View style={styles.itemFooter}>
                        <Text style={styles.itemText}>
                            Received/Pre-Evaluated as to checklist by:
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
                    <View style={styles.itemFooter}>
                        <Text style={styles.itemTextFooter}>Signature:</Text>
                        <Text style={styles.blankLineFooter}>{data.labelData || ' '} </Text>
                    </View>
            </View>
            <View style={styles.column}>
                <View style={styles.itemFooter}>
                        <Text style={styles.itemText}>
                            Received/Pre-Evaluated as to checklist by:
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
                    <View style={styles.itemFooter}>
                        <Text style={styles.itemTextFooter}>Signature:</Text>
                        <Text style={styles.blankLineFooter}>{data.labelData || ' '} </Text>
                    </View>
            </View>
        </View>
        </>
    );
}
