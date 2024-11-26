import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box8'; // Import the styles

export function PermitBodyBox8({ permitInfo }: { permitInfo: any }) {
        const defaultData = {
            labelData: '',
            checkboxData: '',
        };
    
        const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.titleContainer}>
            {/* Title Section */}
            <Text style={styles.title}>BOX 8</Text>
        
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>PROGRESS FLOW</Text>
                </View>
                
                {/* Header Row */}
                <View style={styles.headerRow}>
                    <Text style={styles.headerNote}>NOTE</Text>
                    <Text style={styles.headerIn}>IN</Text>
                    <Text style={styles.headerOut}>OUT</Text>
                    <Text style={styles.headerProcessedBy}>PROCESSED BY</Text>
                </View>

                {/* Sub-header Row for Time and Date */}
                <View style={styles.subHeaderRow}>
                    <Text style={styles.emptyCell}></Text>
                    <View style={styles.timeDateContainer}>
                        <Text style={styles.timeDateTitle}>TIME</Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDateTitle}>DATE</Text>
                    </View>
                    <View style={styles.timeDateContainer3}>
                        <Text style={styles.timeDateTitle}>TIME</Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDateTitle}>DATE</Text>
                    </View>
                 

                </View>

                {/* Sub-header Row for Time and Date 2*/}
                <View style={styles.subHeaderRow}>
                    <Text style={styles.Cell}>ELECTRONICS</Text>
                    <View style={styles.timeDateContainer}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    <View style={styles.timeDateContainer3}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    
                    <Text style={styles.emptyCell}>
                        {data.labelData || ' '}
                    </Text>
                    
                </View>

                {/* Sub-header Row for Time and Date 3*/}
                <View style={styles.subHeaderRow}>
                    <Text style={styles.Cell}>OTHERS SPECIFIY</Text>
                    <View style={styles.timeDateContainer}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    <View style={styles.timeDateContainer3}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    
                    <Text style={styles.emptyCell}>
                        {data.labelData || ' '}
                    </Text>
                </View>

                {/* Sub-header Row for Time and Date 4*/}
                <View style={styles.subHeaderRow}>
                    <Text style={styles.Cell}></Text>
                    <View style={styles.timeDateContainer}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    <View style={styles.timeDateContainer3}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    
                    <Text style={styles.emptyCell}>
                        {data.labelData || ' '}
                    </Text>
                </View>

                {/* Sub-header Row for Time and Date 5*/}
                <View style={styles.subHeaderRow}>
                    <Text style={styles.Cell}></Text>
                    <View style={styles.timeDateContainer}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    <View style={styles.timeDateContainer3}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    <View style={styles.timeDateContainer2}>
                        <Text style={styles.timeDate}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    
                    <Text style={styles.emptyCell}>
                        {data.labelData || ' '}
                    </Text>
                    
                </View>
                
            </View>
        </View>
    );
}
