import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box7'; // Import the styles

export function PermitBodyBox7({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.titleContainer}>
            {/* Title Section */}
            <Text style={styles.title}>BOX 7  (TO BE ACCOMPLISHED BY THE DESIGN PROFESSIONAL)</Text>
        
            {/* Row Box 1 */}
            <View style={styles.container5}>

             {/* Appearance Section */}
             <View style={styles.row}>
                <Text style={styles.labelText}>MEASUREMENTS : </Text>
                <Text style={styles.blankLabel}>{data.labelData || ' '}</Text>
                <Text style={styles.labelText2}>LENGTH IN METERS</Text>
                <View style={styles.space} />
                <Text style={styles.blankLabel}>{data.labelData || ' '}</Text>
                <Text style={styles.labelText2}>LENGTH IN METERS</Text>
            </View>


                {/* Row for SCOPE OF WORKS */}
                <View style={styles.boxStyleContainer2}>
                    <View style={styles.columnBox}>
                        <Text style={styles.box4label}>TYPE OF FENCING
                        </Text>
                        
                        {/* Create a flex row to arrange both sets side by side */}
                        <View style={styles.scopeOfWorkRow}>
                            {/* Left column for NEW CONSTRUCTION, ERECTION, etc. */}
                            <View style={styles.scopeColumn4}>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label2}>INDIGENOUS MATERIALS</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>R.C. (Reinforced Concrete)</Text>
                                    </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>R.C. and CONC. Hollow blocks</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>R.C. and BRICKS</Text>
                                    </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>R.C. and INTERLINK/CYCLONE WIRE</Text>
                                </View>
                            </View>
                            
                            {/* Right column for RENOVATION, CONVERSION, etc. */}
                            <View style={styles.scopeColumn5}>
                                <View style={styles.rowOption2}>
                                <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>R.C. STEEL MATTING</Text>
                                    </View>
                                <View style={styles.rowOption2}>
                                <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>R.C. BARBED WIRE</Text>
                                </View>
                                <View style={styles.column}>
                                    <View style={styles.rowOption3}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                        {/* Check RENOVATION box here */}
                                        <Text style={styles.box4label3}>OTHERS (Specify)</Text>
                                        <Text style={styles.blankLabel}>{data.labelData || ' '}</Text>
                                    </View>
                                        <Text style={styles.blankLabelOther}>{data.labelData || ' '}</Text>
                                        <Text style={styles.blankLabelOther}>{data.labelData || ' '}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 1 */}
        </View>
    );
}
