import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box1'; // Import the styles
import { AppliedServices } from '../../../../types/application';

// Define the permit layout component
export function PermitBodyBox1({ permitInfo }: { permitInfo: AppliedServices }) {

    const data = permitInfo;
    return (
        <View style={styles.formNo}>
            {/* Title Section */}
            <Text style={styles.printText}>NBC FORM NO. A-04</Text>
            <View style={styles.permitTitle}>
                <Text style={styles.permitTitleText}>Republic of the Philippines</Text>
                <Text style={styles.permitTitleText1}>DEPARTMENT OF PUBLIC WORKS AND HIGWAYS</Text>
                <Text style={styles.permitTitleText2}>OFFICE OF THE BUILDING OFFICIAL</Text>
                <Text style={styles.permitTitleText3}>PANABO CITY </Text>

                <Text style={styles.title}>MECHANICAL PERMIT</Text>

                <View style={styles.noApplication}>
                    {/* Align the text horizontally */}
                    <View style={styles.numberContainer}>
                        <Text style={styles.numberText}>APPLICATION NO.</Text>
                        {/* Data for APPLICATION NO. goes here */}

                        <Text style={styles.numberText1}>MP NO.</Text>
                        {/* Data for PP NO. goes here */}

                        <Text style={styles.numberText2}>PERMIT NO</Text>
                        {/* Data for PERMIT NO goes here */}
                    </View>

                    <View style={styles.boxStyleContainer}>
                        {/* Create boxes below the text for Application No. */}
                        <View style={styles.boxContainer}>
                            {/* Insert individual digits of APPLICATION NO. here */}
                            {/* Multi-Cell Box (for data entry) */}
                        <View style={styles.multiCellBox}>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <View key={index} style={styles.cell}>
                                    {/* Replace `permitInfo.cellData[index]` with actual data you want to display */}
                                    <Text style={styles.cellData}>{data.applicationCode ? data.applicationCode[index] : ''}</Text>
                                </View>
                            ))}
                        </View>
                        </View>
                        {/* Create boxes below the text for PP No. */}
                        <View style={styles.boxContainer1}>
                            {/* Insert individual digits of PP NO. here */}
                            {/* Multi-Cell Box (for data entry) */}
                        <View style={styles.multiCellBox}>
                            {Array.from({ length: 8 }).map((_, index) => (
                                <View key={index} style={styles.cell}>
                                    {/* Replace `permitInfo.cellData[index]` with actual data you want to display */}
                                    <Text style={styles.cellData}>{data.cellData ? data.cellData[index] : ''}</Text>
                                </View>
                            ))}
                        </View>
                        </View>
                        {/* Create boxes below the text for Permit No. */}
                        <View style={styles.boxContainer}>
                            {/* Insert individual digits of PERMIT NO. here */}
                            {/* Multi-Cell Box (for data entry) */}
                        <View style={styles.multiCellBox}>
                            {Array.from({ length: 11 }).map((_, index) => (
                                <View key={index} style={styles.cell}>
                                    {/* Replace `permitInfo.cellData[index]` with actual data you want to display */}
                                    <Text style={styles.cellData}>{data.cellData ? data.cellData[index] : ''}</Text>
                                </View>
                            ))}
                        </View>
                        </View>
                    </View>

                     {/* Date Container */}
                    <View style={styles.dateContainer}>
                        <View style={styles.dateText}>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                            <Text style={styles.dateLabel}>DATE OF APPLICATION</Text>
                            {/* Data for DATE OF APPLICATION goes here */}
                        </View>
                        <View style={styles.dateText1}>
                        <Text style={styles.blankLine}>{data.labelData || ' '} </Text>
                            <Text style={styles.dateLabel2}>DATE ISSUED</Text>
                            {/* Data for DATE ISSUED goes here */}
                        </View>
                    </View>       

                </View>
            </View>

            <Text style={styles.printText}>BOX 1 (TO BE ACCOMPLISHED IN PRINT BY THE OWNER/APPLICANT)</Text>
            
            {/* Row Box 1 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.label}>NAME OF OWNER/APPLICANT</Text>
                            <Text style={styles.label}>LAST NAME, FIRST NAME, M.I.</Text>  
                        </View>
                    </View>
                    <View style={styles.subRow}>
                        <Text style={styles.label}>TAX I.D. NO.</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                        <Text style={styles.labelData}>{data.labelData || ' '} </Text>  
                        <Text style={styles.labelData}>{`${data.lastName}, ${data.firstname}, ${data.middleInitial}` || ' '} </Text>
                        </View>
                    </View>
                    <View style={styles.subRow}>
                    <Text style={styles.labelData}>{data.labelData || ' '} </Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 1 */}

            {/* Row Box 2 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.subRow1}>
                            <Text style={styles.label}>FOR CONSTRUCTION OWNED BY AN ENTERPRISE</Text>
                        </View>
                    </View>
                    <View style={styles.subRow2}>
                        <Text style={styles.label}>FORM OF OWNERSHIP</Text>
                    </View>
                    <View style={styles.subRow2}>
                        <Text style={styles.label}>USE OR CHARACTER OF OCCUPANCY</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.subRow1}>
                        <Text style={styles.labelData}>{data.constructOwnbyEnterprise || ' '} </Text>  
                        </View>
                    </View>
                    <View style={styles.subRow2}>
                    <Text style={styles.labelData}>{data.formOwnership || ' '} </Text>
                    </View>
                    <View style={styles.subRow2}>
                    <Text style={styles.labelData}>{data.characterOfOccupancy || ' '} </Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 2 */}

            {/* Row Box 3 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.label}>ADDRESS</Text>
                            <Text style={styles.label}>NO., STREET, BARANGAY, CITY/MUNICIPALITY/ ZIP CODE </Text>
                        </View>
                    </View>
                    <View style={styles.subRow3}>
                            <Text style={styles.label}>TELEPHONE NO.</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.labelData}>{data.labelData || ' '} </Text>
                            <Text style={styles.labelData}>{`${data.addressNo}, ${data.street}, ${data.barangay}, ${data.municipality}, ${data.zipCode}` || ' '} </Text>
                        </View>
                    </View> 
                    <View style={styles.subRow3}>
                        <Text style={styles.labelData}>{data.telNo || ' '} </Text>
                    </View>
                </View>
            </View>
            {/* End of Row Box 3 */}

            {/* Row Box 4 */}
            <View style={styles.container}>
                {/* Row for NAME OF OWNER/APPLICANT */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={styles.label}>LOCATION OF CONSTRUCTION</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.row}>
                        <Text style={styles.labelData}>{data.locationForConstruct_Install || ' '} </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 4 */}
            
            {/* Row Box 5 */}
            <View style={styles.container5}>
                {/* Row for SCOPE OF WORKS */} 
                <Text style={styles.box4label}>SCOPE OF WORKS : </Text>
                <View style={styles.boxStyleContainer4}>
                    <View style={styles.columnBox}>
                        {/* Create a flex row to arrange both sets side by side */}
                        <View style={styles.scopeOfWorkRow}>
                            {/* Left column for NEW CONSTRUCTION, ERECTION, etc. */}
                            <View style={styles.scopeColumn1}>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label1}>NEW CONSTRUCTION</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label1}>ERECTION</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label1}>ADDITION</Text>
                                </View>
                                <View style={styles.rowOption}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check NEW CONSTRUCTION box here */}
                                    <Text style={styles.box4label1}>ALTERATION</Text>
                                </View>
                            </View>

                            {/* Right column for RENOVATION, CONVERSION, etc. */}
                            <View style={styles.scopeColumn}>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>RENOVATION</Text>
                                    <Text style={styles.blankLineData}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>CONVERSION</Text>
                                    <Text style={styles.blankLineData}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>REPAIR</Text>
                                    <Text style={styles.blankLineData}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>MOVING</Text>
                                    <Text style={styles.blankLineData}>{data.labelData || ' '} </Text>
                                </View>
                            </View>
                             {/* Right column for RENOVATION, CONVERSION, etc. */}
                             <View style={styles.scopeColumn}>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>RAISING</Text>
                                    <Text style={styles.blankLineData}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>DEMOLITION</Text>
                                    <Text style={styles.blankLineData}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>ACCESSORY BUILDING/STRUCTURE</Text>
                                    <Text style={styles.blankLineData}>{data.labelData || ' '} </Text>
                                </View>
                                <View style={styles.rowOption2}>
                                    <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                                    {/* Check RENOVATION box here */}
                                    <Text style={styles.box4label2}>OTHERS (specify)</Text>
                                    <Text style={styles.blankLineData}>{data.labelData || ' '} </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 5 */}

            {/* Row Box 6 */}
            {/* Container for nature of installation */}
            <View style={styles.container6}>
                <Text style={styles.box6label}>USE OR TYPE OF OCCUPANCY</Text>
                
                {/* Columns layout */}
                <View style={styles.columnsContainer}>
                    
                    {/* First Column */}
                    <View style={styles.column6}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                            <Text style={styles.checkboxLabel}>RESIDENTIAL</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                            <Text style={styles.checkboxLabel}>COMMERCIAL</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                            <Text style={styles.checkboxLabel}>INDUSTRIAL</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                            <Text style={styles.checkboxLabel}>INSTITUTIONAL</Text>
                        </View>
                    </View>

                    {/* Second Column */}
                    <View style={styles.column6}>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                            <Text style={styles.checkboxLabel}>AGRICULTURAL</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                            <Text style={styles.checkboxLabel}>LANDSCAPING</Text>
                        </View>
                        <View style={styles.checkboxRow}>
                            <View style={styles.checkBox}>
                                        <Text style={styles.checkBoxText}>{data.checkboxData || ' '}</Text>
                                    </View>
                            <Text style={styles.checkboxLabel}>OTHER (SPECIFY)</Text>
                            <Text style={styles.blankLineData2}>{data.labelData || ' '} </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* End of Row Box 6 */}
            
        </View>
    );
}
