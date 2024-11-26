import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box9'; // Import the styles

// Define the permit layout component
export function PermitBodyBox9({ permitInfo }: { permitInfo: any }) {
    // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.mainContainer}>
            {/* Title Section */}
            <Text style={styles.titleText}>BOX 9 (TO BE ACCOMPLISHED BY THE DIVISION/SECTION CONCERNED)</Text>

            {/* Row Box 1 */}
            <View style={styles.headerRow}>
                <Text style={styles.headerText}>ASSESSED FEES</Text>
            </View>
            {/* End of Row Box 1 */}

            {/* Row Box 2 */}
            <View style={styles.rowContainer}>
                <View style={styles.contentRow}>
                    <View style={styles.emptyColumn}></View>
                    
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerTextTitle}>AMOUNT DUE</Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerTextTitle}>ASSESSED BY</Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerTextTitle}>O.R. NUMBER</Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerTextTitle}>DATE PAID</Text>
                    </View>
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerTextTitle}>PROCESSED BY.</Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 2 */}

            {/* Row Box 3 */}
            <View style={styles.rowContainer}>
                <View style={styles.contentRow}>
                    <View style={styles.emptyColumn}>
                    <Text style={styles.leftText}>LINE AND GRADE (Geodetic)</Text>
                    </View>
                    
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 3 */}

            {/* Row Box 4 */}
            <View style={styles.rowContainer}>
                <View style={styles.contentRow}>
                    <View style={styles.emptyColumn}>
                        <Text style={styles.leftText}>FENCING</Text>
                    </View>
                    
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 4 */}

            {/* Row Box 5 */}
            <View style={styles.rowContainer}>
                <View style={styles.contentRow}>
                <View style={styles.emptyColumn}>
                        <Text style={styles.leftText}>ELECTRICAL (if any)</Text>
                    </View>
                    
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 5 */}
            
            {/* Row Box 6 */}
            <View style={styles.rowContainer}>
                <View style={styles.contentRow}>
                    <View style={styles.emptyColumn}>
                        <Text style={styles.leftText}>OTHER S SPECIFY</Text>
                    </View>
                    
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 6 */}

            {/* Row Box 6 */}
            <View style={styles.rowContainer}>
                <View style={styles.contentRow}>
                    <View style={styles.emptyColumn}>
                        
                    </View>

                    {/* Vertical Line */}
                    <Text style={styles.noLine}>
                    {data.labelData || ' '}</Text> 

                    <View style={styles.columnContainer}>
                        <Text style={styles.totalText}>TOTAL</Text>
                    </View>
                    
                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.dividerLine} />
                    
                    <View style={styles.columnContainer}>
                        <Text style={styles.centerText}>
                            {data.labelData || ' '}
                        </Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 6 */}
            
           
        </View>
        
        
    );
}
