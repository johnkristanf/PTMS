import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box7'; // Import the styles

// Define the permit layout component
export function PermitBodyBox7({ permitInfo }: { permitInfo: any }) {
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.formNo}>
            {/* Title Section */}
            <Text style={styles.printText}>BOX 7 ( TO BE ACCOMPLISHED BY THE DESIGN PROFFESIONAL)</Text>
            
            {/* Row Box 3 */}
            <View style={styles.container3}>
                <Text style={styles.infoText}>THREE (3) SETS OF ELETRONICS DOCUMENTS
                </Text>

                {/* Create a flex row to arrange both sets side by side */}
                <View style={styles.setsRow}>
                            {/* Left column for NEW CONSTRUCTION, ERECTION, etc. */}
                            <View style={styles.scopeColumn}>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label2}>ELECTRONICS PLANS AND SPECIFICATIONS</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check ERECTION box here */}
                                    <Text style={styles.box4label2}>BILL OF MATERIALS  </Text>
                                </View>
                            </View>
    

                    {/* Create a flex row to arrange both sets side by side */}
                
                            {/* Left column for NEW CONSTRUCTION, ERECTION, etc. */}
                            <View style={styles.scopeColumn2}>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label2}>Cost Estimates</Text>
                                    <Text style={styles.boxLabelLine}>{data.labelData || ' '}</Text> 
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                            <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check ERECTION box here */}
                                    <Text style={styles.box4label2}>Others (Specify)</Text>
                                    <Text style={styles.boxLabelLine}>{data.labelData || ' '}</Text> 
                                </View>
                            </View>
                    </View>
            </View>
            {/* End of Row Box 3 */}
        </View>
        
        
    );
}
