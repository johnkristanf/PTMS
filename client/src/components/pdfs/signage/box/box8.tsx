import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box8';

export function PermitBodyBox8({ permitInfo }: { permitInfo: any }) {
        // Dummy static data
    const defaultData = {
        labelData: '',
        checkboxData: '',
    };

    const data = { ...defaultData, ...permitInfo };
    return (
        <View style={styles.container}>
                {/* Header */}
                <View style={styles.rowHeaderContainer}>
                        <View style={styles.rowHeader}>
                                <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                <Text style={styles.headerText}>New</Text>
                        </View>   
                        <View style={styles.rowHeader}>
                                <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                <Text style={styles.headerText}>Renewal</Text>
                        </View>
                </View>
  
                {/* Body */}
                {/* Columns */}
                <View style={styles.columnsContainer}>
                    {/* New Column */}
                    <View style={styles.columnRecommending}>                       
                        <View style={styles.row}>                              
                                <Text style={styles.label}>S.P. No.: </Text>
                                <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        </View>
                        <View style={styles.row}>                              
                                <Text style={styles.label}>Date Issued: </Text>
                                <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                        </View>
                        <View style={styles.row}>                              
                                <Text style={styles.label}>With sketch of location :  </Text>
                        </View>

                        <View style={styles.secondRow}>
                                <View style={styles.row}>                              
                                        <Text style={styles.label}>Fee  : </Text>
                                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.row}>                              
                                        <Text style={styles.label}>O.R. No  : </Text>
                                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.row}>                              
                                        <Text style={styles.label}>Date Paid : </Text>
                                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                                </View>
                        </View>
                    </View>
                    
                    
                    {/* Second Column */}
                    <View style={styles.recommendingColumn}>                       
                        <View style={styles.row}>
                            <Text style={styles.title}>Recommending</Text>
                            </View>
                            <View style={styles.approvalColumn}>                              
                                <Text style={styles.label}>Approval : </Text>
                                <Text style={styles.blankLineApproval}>{data.labelData || ' '} </Text>
                            </View>
                            <View style={styles.approvalColumn}>                              
                                <Text style={styles.label}>Approved : </Text>
                                <Text style={styles.blankLineApproved}>{data.labelData || ' '} </Text>
                                <Text style={styles.mayorName}>City Mayor </Text>
                            </View>
                        </View>
                </View>


                {/* In-Charge of Construction Columns */}
                <View style={styles.columnsContainer}>
                    {/* New Column */}
                        <View style={styles.columnConstruction}>  
                                <View style={styles.columnSpace}>
                                        <View style={styles.column}>                              
                                                <Text style={styles.constructionBlankLine}>{data.labelData || ' '} </Text>
                                                <Text style={styles.constructionName}>Architect/Civil Engineer</Text>
                                                <Text style={styles.constructionName}>(In-Charge of Construction)</Text>
                                        </View>
                                </View>                     
                        <View style={styles.secondRow}>
                                <View style={styles.row}>                              
                                        <Text style={styles.label}>PRC Reg  : </Text>
                                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.row}>                              
                                        <Text style={styles.label}>PTR No  : </Text>
                                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.row}>                              
                                        <Text style={styles.label}>Date Issued :  </Text>
                                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.row}>                              
                                        <Text style={styles.label}>Place Issued  :  </Text>
                                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.applicantColumn}>                              
                                        <Text style={styles.blankLineApplicant}>{data.labelData || ' '} </Text>
                                        <Text style={styles.mayorName}>Applicant</Text>
                                </View>
                                
                                {/*  FOOTER */}
                                <View style={styles.noteContainer}>
                                        <Text style={styles.noteTitle}>NOTE :</Text>
                                        <Text style={styles.note}>STREAMERS ACROSS THE STREET ARE NOT</Text>
                                        <Text style={styles.note}>ALLOWED, PERMIT NUMBER MUST BE POSTED</Text>
                                        <Text style={styles.note}>ON BILLBOARDS/SIGNBOARDS AND STREAMERS</Text>
                                </View> 
                                {/*  END OF FOOTER */}
                        </View>
                    </View>
                    
                    
                    {/* Second Column */}
                    <View style={styles.administratorColumn}>                       
                            <View style={styles.approvalColumn}>                              
                                <Text style={styles.label}>By : </Text>
                                <Text style={styles.blankLineAdministrator}>{data.labelData || ' '} </Text>
                                <Text style={styles.mayorName}>City Administrator</Text>
                            </View>
                            <View style={styles.approvalColumn}>                              
                                <Text style={styles.blankLineOwner}>{data.labelData || ' '} </Text>
                                <Text style={styles.mayorName}>Building/Lot Owner</Text>
                            </View>

                                {/*  FOOTER */}
                                <View style={styles.reminderContainer}>
                                        <Text style={styles.reminderTitle}>REMINDER :</Text>
                                        <Text style={styles.reminder}>RENEWAL OF SIGN PERMIT SHOULD BE FILED</Text>
                                        <Text style={styles.reminder}>IN THIS OFFICE ON OR BEFORE THE DUE DATE</Text>
                                        <Text style={styles.reminder}>TO AVOID PENALTIES AND SURCHARGE</Text>
                                        <View style={styles.blankSpace}></View>
                                        <Text style={styles.reminder}>ALL SIGNBOARS/BILLBOARDS SHOULD BE</Text>
                                        <Text style={styles.reminder}>ANNUALLY INSPECTED EVERY 1st WEEK OF</Text>
                                        <Text style={styles.reminder}>JANUARY FOR PAYMENTS OF ANNUA</Text>
                                        <Text style={styles.reminder}>INSPECTION FEES.</Text>
                                </View> 
                                {/*  END OF FOOTER */}
                        </View>
                </View>
        </View> 
    );
}
