import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box6';

export function PermitBodyBox6({ permitInfo }: { permitInfo: any }) {
        // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
        return (
        <View style={styles.container}>
            {/* Header */}
                <Text style={styles.headerText}>(to be filled up the personal of the Office of the City Building Official)</Text>
  
                {/* Body */}
                {/* Columns */}
                <View style={styles.columnsContainer}>
                    {/* New Column */}
                    <View style={styles.column}>                       
                        <View style={styles.checkboxItem}>                      
                            <Text style={styles.title}>Received / Pre-evaluated as to checklist by:</Text>
                        </View>
                        <View style={styles.checkboxItem}>                              
                                <Text style={styles.label}>Name/Position : </Text>
                                <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        </View>
                        <View style={styles.checkboxItem}>                              
                                <Text style={styles.label}>Date/Time : </Text>
                                <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        </View>
                        <View style={styles.checkboxItem}>                              
                                <Text style={styles.label}>Signature :  </Text>
                                <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        </View>
                    </View>
                    
                    {/* Second Column */}
                    <View style={styles.column}>                       
                        <View style={styles.checkboxItem}>
                            <Text style={styles.title}>Re-entry of Application :</Text>
                            </View>
                            <View style={styles.checkboxItem}>                              
                                <Text style={styles.label}>Name/Position : </Text>
                                <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                            </View>
                            <View style={styles.checkboxItem}>                              
                                    <Text style={styles.label}>Date/Time : </Text>
                                    <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                            </View>
                            <View style={styles.checkboxItem}>                              
                                    <Text style={styles.label}>Signature :  </Text>
                                    <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                            </View> 
                        </View>
                </View>
                
                {/* Divider */}
            <View style={styles.divider}></View>

                {/* Body */}
                {/* Columns */}
                <View style={styles.columnsContainer}>
                    {/* New Column */}
                    <View style={styles.column}>                                            
                            <Text style={styles.subTitle}>FIELD INSPECTORS</Text>
                        <View style={styles.checkboxItem}>                              
                                <Text style={styles.label}>Name/Position : </Text>
                                <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        </View>
                        <View style={styles.checkboxItem}>                              
                                <Text style={styles.label}>Date/Time : </Text>
                                <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        </View>
                        <View style={styles.checkboxItem}>                              
                                <Text style={styles.label}>Signature :  </Text>
                                <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        </View>
                    </View>
                    
                    {/* Second Column */}
                    <View style={styles.column}>                       
                            <Text style={styles.subTitle}>COMMENTS</Text>
                            <View style={styles.checkboxItem}>                              
                                <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                            </View>
                            <View style={styles.checkboxItem}>                              
                                    <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                            </View>
                            <View style={styles.checkboxItem}>                              
                                    <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                            </View> 
                        </View>
                </View>
        </View>
    );
}
