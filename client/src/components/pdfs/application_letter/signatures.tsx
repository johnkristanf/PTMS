import { StyleSheet, View, Text } from "@react-pdf/renderer";

export function LetterSignatures(){
    return(
        <>
            <View style={styles.signatures_container}>

                <View style={{width: '80%', flexDirection: 'column', alignItems: 'center', gap: 30}}>
                    <View style={{width: '100%', flexDirection: 'column', alignItems: 'center', gap: 3}}>
                        <Text style={styles.underline}></Text>
                        <Text style={styles.underline_text_size}>
                            (Signature over Printed Name of Owner)
                        </Text>
                    </View>

                    <View style={{width: '100%', flexDirection: 'column', alignItems: 'center', gap: 3}}>
                        <Text style={styles.underline}></Text>
                        <Text style={styles.underline_text_size}>
                            Address
                        </Text>
                    </View>

                    <View style={{width: '70%', flexDirection: 'column', alignItems: 'center', gap: 3}}>
                        <Text style={styles.underline}></Text>
                        <Text style={styles.underline_text_size}>
                            Contact Number
                        </Text>
                    </View>
                </View>

                

                <View style={{width: '100%', flexDirection: 'column', alignItems: 'center', gap: 30}}>
                    <View style={{width: '100%', flexDirection: 'column', alignItems: 'center', gap: 3}}>
                        <Text style={styles.underline}></Text>
                        <Text style={styles.underline_text_size}>
                            (Signature over Printed Name of Authorized Representative)
                        </Text>
                    </View>

                    <View style={{width: '100%', flexDirection: 'column', alignItems: 'center', gap: 3}}>
                        <Text style={styles.underline}></Text>
                        <Text style={styles.underline_text_size}>
                            Address
                        </Text>
                    </View>

                    <View style={{width: '70%', flexDirection: 'column', alignItems: 'center', gap: 3}}>
                        <Text style={styles.underline}></Text>
                        <Text style={styles.underline_text_size}>
                            Contact Number
                        </Text>
                    </View>
                </View>


            </View>
        </>
        
    )
}

const styles = StyleSheet.create({
    signatures_container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
        paddingHorizontal: 45
    },

    underline: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
    },

    underline_text_size: {
        fontSize: 8
    },
})