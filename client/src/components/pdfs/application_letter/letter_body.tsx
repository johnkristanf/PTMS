import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { ApplicationLetterInfoTypes } from "../../../types/application";



export function LetterBody({applicationLetterInfo}: {
    applicationLetterInfo: ApplicationLetterInfoTypes
}) {
    
    return (
        <>
            <View style={styles.letter_body_container}>
                <Text style={{ fontSize: 10 }}>
                    Sir/Ma'am,
                </Text>

                <View style={styles.first_input_container}>
                    <Text style={styles.body_font_size}>I</Text>

                    <View style={styles.fullUnderlineContainer}>

                        <View style={styles.gapTextContainer}>
                            <Text style={styles.gapText}> {applicationLetterInfo.firstName} </Text>
                            <Text style={styles.gapText}> {applicationLetterInfo.middleName} </Text>
                            <Text style={styles.gapText}> {applicationLetterInfo.familyName} </Text>
                        </View>

                        <View style={styles.fullUnderlineWrapper}>
                            <View style={styles.fullUnderline}></View>
                        </View>
                        <View style={styles.gapTextContainer}>
                            <Text style={styles.gapText}>(First Name)</Text>
                            <Text style={styles.gapText}>(Middle Name)</Text>
                            <Text style={styles.gapText}>(Family Name)</Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'row', width: '100%', marginTop: 5 }}>

                    <View style={{flexDirection: 'row', width: '90%', alignItems: 'flex-end', gap: 6 }}>
                        <Text style={styles.body_font_size}>would like to apply for</Text>
                        <View style={{flexDirection: 'column', width: '60%'}}>
                            <Text style={[styles.body_font_size, {marginLeft: '30px'}]}>{ applicationLetterInfo.permit_type } Permit</Text>
                            <View style={{ width: '100%', height: 1, backgroundColor: 'black'}}></View>
                        </View>
                        
                    </View>
                    

                    <View style={{flexDirection: 'row', width: '80%', alignItems: 'flex-end', gap: 6 }}>
                        <Text style={styles.body_font_size}>for my</Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: 'black'}}></View>
                    </View>

                </View>

                <View style={{flexDirection: 'row', width: '100%', marginTop: 5 }}>

                    <View style={{flexDirection: 'row', width: '100%', alignItems: 'flex-end', gap: 6 }}>
                        <Text style={styles.body_font_size}>located at</Text>
                        <View style={{ width: '90%', height: 1, backgroundColor: 'black'}}></View>
                    </View>

                </View>

                <View style={{flexDirection: 'row', width: '98%', marginTop: 5, marginLeft: 20, marginBottom: 5, gap: 12 }}>
                    <Text style={styles.body_font_size}>I also authorize</Text>
                    <View style={{width: '100%', flexDirection: 'column', alignItems: 'center'}}>
                        <View style={{ width: '98%', height: 1, backgroundColor: 'black', marginTop: 12}}></View>
                        <Text style={{fontSize: 8}}>(Authorized Representative of the Company)</Text>
                    </View>
                </View>

                <Text style={styles.body_font_size}>To transact the application with your Office in my behalf</Text>

                <Text style={styles.republic_act}>
                    &nbsp; &nbsp; &nbsp; I/We hereby certify that the documents submitted herein are all true and correct, <br />
                    therefore falsification on the supporting document in any way will cause disapproval of the <br />
                    permit application without prejudice further action that may be undertaken pursuant to Article <br />
                    171 & 172 of R.A 3815, otherwise known as the Revised Penal Code of the Philippines.
                </Text>


            </View>
        </>
    );
}

const styles = StyleSheet.create({
    letter_body_container: {
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 10,
        gap: 5
    },

    fullUnderlineContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 25
    },

    fullUnderlineWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4, // Space between underline and labels
    },

    fullUnderline: {
        width: '96%',
        height: 1,
        backgroundColor: 'black',
    },

    gapTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    gapText: {
        fontSize: 8,
        flexBasis: '33%', 
        textAlign: 'center',
    },

    first_input_container: { 
        flexDirection: 'row', 
        width: '100%', 
        marginTop: 10, 
        marginLeft: 20, 
        alignItems: 'center'
    },

    body_font_size: {
        fontSize: 12
    },

    republic_act: {
        fontSize: 12, 
        marginTop: 20,
    }
});
