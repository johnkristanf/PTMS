import { Document, Page, StyleSheet, View, Text, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        gap: 20,
        padding: 10,
    },

    outerBorder: {
        width: '100%',
        height: '70%',
        border: '2px solid black',
        paddingTop: 10
    },

    header_text_logo_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        width: '100%'
    },

    header_image: {
        width: 50,
        height: 50
    },

    header_border_bottom: {
        width: '100%',
        borderBottom: '2px solid black',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },

    header_text: {
        fontSize: 12
    },

    flex_col:{
        flexDirection: 'column'
    },

    flex_row: {
        flexDirection: 'row'
    },

    margin_top_left: {
        marginTop: 15, 
        marginLeft: 3
    },

    checkboxes_container_style : {
        flexDirection: 'row',
        gap: 10, 
        alignItems: 'center', 
        marginLeft: 22 
    },

    checkbox: {
        width: 10,
        height: 10,
        border: '2px solid black',
    },

    underline: {
        borderBottom: '1px solid black',
        width: '1%',
    },

    footer_border_top: {
        width: '100%',
        borderTop: '2px solid black',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10
    },
})

export function RequirementsPDF({ role }: { role: string }) {
    const registeredOwnerLot = [
        { name: "Latest Certified true copy of Land Title (ROD)" },
        { name: "Latest Tax Declaration" },
        { name: "Latest Tax Clearance" },
    ]

    const notRegisteredOwnerLot = [
        { name: "Notarized Deed of Absolute Sale" },
        { name: "Notarized Contract of Lease Sale" },
        { name: "Notarized Affidavit of Consent" },
        { name: "Notarized Extra-Judicial Partition/Affidavit of Hiership with Consent" },
        { name: "Certificate of Award/Affidavit of Undertaking/any document showing proof of authority (Government of Public Land" },
    ]

    const fiveSetsCopy = [
        { name: "Plans" },
        { name: "Specifications" },
        { name: "Bill of Materials and Cost Estimate" },
        { name: "Structural Analysis" },
    ]

    const dulySignedAndSeal = [
        { name: "A duly licensed Architect or Civil Engineer, In case of archtectural" },
        { name: "A duly licensed Sanitary Engineer or Master Plumber, in case of" },
        { name: "A duly licensed Professional Mechanical Engineer, in case of" },
        { name: "A duly licensed Professional Mechanical Engineer, in case of" },
        { name: "A duly licensed Professional Electronics Engineer, in case of Electrical" },
    ]

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.outerBorder}>
                    <View style={styles.header_text_logo_container}>
                        <Image source={"/img/lungsod_ng_panabo_logo.jpg"} style={styles.header_image} />
                        <View style={[styles.flex_col, { alignItems: 'center' }]}>
                            <Text style={styles.header_text}>
                                OFFICE OF THE CITY ENGINEER
                            </Text>

                            <Text style={styles.header_text}>
                                Tel. No. (084) 822-2234
                            </Text>

                            <Text style={styles.header_text}>
                                New City Hall Bldg., Brgy. J.P, Laurel, Panabo City
                            </Text>
                        </View>
                    </View>

                    <View style={styles.header_border_bottom}>
                        <Text style={[styles.header_text, { marginBottom: 3 }]}>APPLICATION AND ISSUANCE OF PERMITS FOR BUILDING, ELECTRICAL</Text>
                    </View>

                    <View style={[styles.flex_col, styles.margin_top_left]}>
                        <Text style={styles.header_text}>Standard Requirements</Text>
                        <Text style={[styles.header_text, { marginLeft: 10 }]}>A. Fully Accomplished Application Form</Text>
                    </View>

                    <View style={[styles.flex_col, styles.margin_top_left]}>
                        <Text style={styles.header_text}>Supporting Documents (2 copies)</Text>
                        <Text style={[styles.header_text, { marginLeft: 10 }]}>B. If applicant IS the registered owner of the lot</Text>

                        {registeredOwnerLot.map((data, index) => (
                            <View key={index} style={styles.checkboxes_container_style}>
                                <View style={role === "staff" ? styles.checkbox : styles.underline}></View>
                                <Text style={styles.header_text}>{data.name}</Text>
                            </View>
                        ))}

                        <Text style={[styles.header_text, { marginLeft: 10 }]}>C. If applicant is not the registered owner of the lot</Text>

                        {notRegisteredOwnerLot.map((data, index) => (
                            <View key={index} style={styles.checkboxes_container_style}>
                                <View style={role === "staff" ? styles.checkbox : styles.underline}></View>
                                <Text style={styles.header_text}>{data.name}</Text>
                            </View>
                        ))}

                        <Text style={[styles.header_text, { marginLeft: 10 }]}>D. Five(5) sets of</Text>

                        {fiveSetsCopy.map((data, index) => (
                            <View key={index} style={styles.checkboxes_container_style}>
                                <View style={role === "staff" ? styles.checkbox : styles.underline}></View>
                                <Text style={styles.header_text}>{data.name}</Text>
                            </View>
                        ))}

                        <Text style={[styles.header_text, { marginLeft: 20 }]}>Duly signed and sealed by:</Text>

                        {dulySignedAndSeal.map((data, index) => (
                            <View key={index} style={styles.checkboxes_container_style}>
                                <View style={role === "staff" ? styles.checkbox : styles.underline}></View>
                                <Text style={styles.header_text}>{data.name}</Text>
                            </View>
                        ))}

                        <Text style={[styles.header_text, { marginLeft: 10 }]}>E. Barangay Clearance where the project is located</Text>

                        <Text style={[styles.header_text, { marginLeft: 10 }]}>F. Locatonal Clearance</Text>

                        <Text style={[styles.header_text, { marginLeft: 10 }]}>G. Other Clearance (from DENR, LLDA, BA, etc.) as needed</Text>

                        {role === "staff" && (

                            <View style={styles.footer_border_top}>
                                <Text style={styles.header_text}>NOTE: INCOMPLETE REQUIREMENTS WILL NOT BE ACCEPTED</Text>

                                <View style={[styles.flex_row, { width: '100%', justifyContent: 'space-between', alignItems: 'center', height: '30%' }]}>
                                    <View style={[styles.flex_row, { alignItems: 'center', width: '40%' }]}>
                                        <Text style={styles.header_text}>Evaluated by:</Text>
                                        <View style={[styles.flex_col, { marginTop: 17, width: '100%', alignItems: 'center', justifyContent: 'center' }]}>
                                            <Text style={[styles.underline, { width: '70%' }]}></Text>
                                            <Text style={{ fontSize: 8, textAlign: 'center' }}>CEO Staff</Text>
                                        </View>
                                    </View>

                                    <View style={styles.flex_row}>
                                        <Text style={styles.header_text}>Date:</Text>
                                        <Text style={[styles.underline, { width: '40%' }]}></Text>
                                    </View>
                                </View>

                                <View style={[styles.flex_row, styles.header_text]}>
                                    <Text>Remarks: </Text>
                                    <Text>Remarks value</Text>
                                </View>
                            </View>
                        )}

                    </View>
                </View>
            </Page>
        </Document>
    )
}
