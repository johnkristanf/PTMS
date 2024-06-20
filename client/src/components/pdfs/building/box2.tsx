import { View, Text, StyleSheet } from "@react-pdf/renderer";

export function PermitBodyBox2(){

    const worksInfo1 = [
        {name: "PRC NO. :"},
        {name: "PTR NO. :"},
        {name: "PLACE ISSUED :"},
    ]

    const worksInfo2 = [
        {name: "VALIDITY :"},
        {name: "DATE ISSUED :"},
        {name: "TIN :"},
    ]


    return(

        <>
            <Text style={styles.box2TextTitle}>BOX 2 (FULL-TIME INSPECTOR AND SUPERVISOR OF CONSTRUCTION WORKS (REPRESENTING THE OWNER))</Text>

            <View style={styles.box2_container}>

                <View style={styles.archCivilSignatureBox}>

                    <View style={{width: '100%', textAlign: 'center', paddingHorizontal: 40}}>
                        <View style={styles.underline}></View>
                        <Text style={styles.boxes_text}>ARCHITECT OR CIVIL ENGINEER </Text>
                        <Text style={{ fontSize: 6 }}>(SIGNED AND SEALED OVER PRINTED NAME)</Text>
                    </View>

                    <View style={{width: '100%', textAlign: 'center', paddingHorizontal: 60}}>
                        <View style={styles.underline}></View>
                        <Text style={styles.boxes_text}>DATE </Text>
                    </View>
                   
                </View>

                <View style={styles.archCivilWorksInfo}>

                    <View>
                        <Text style={styles.boxes_text}>ADDRESS: </Text>
                        <View style={styles.underline}></View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 7 }}>

                        <View style={{ height: '100%',  width: '50%' }}>

                            {
                                worksInfo1.map((data) => (
                                    <View style={{ borderBottom: '2px solid black', borderRight: '2px solid black', height: '100%', paddingTop: 2 }}>
                                        <Text style={styles.boxes_text}> { data.name } </Text>
                                    </View>
                                ))
                            }

                            

                        </View>

                        <View style={{ height: '100%',  width: '50%' }}>

                            {
                                worksInfo2.map((data) => (
                                    <View style={{ borderBottom: '2px solid black', height: '100%', paddingTop: 2 }}>
                                        <Text style={styles.boxes_text}> { data.name } </Text>
                                    </View>
                                ))
                            }
                        </View>
                    </View>

                   
                </View>

                
                
            </View>

           
        </>
        
    )
}

const styles = StyleSheet.create({
    box2TextTitle:{
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 10
    },
    

    box2_container: {
        width:'100%',
        height: '60%',
        border: '2px solid black',
        flexDirection: 'row'
    },

    archCivilSignatureBox: {
        borderRight: '2px solid black', 
        width: '50%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },

    archCivilWorksInfo: {
        width: '50%',
        height: '100%',
        flexDirection: 'column',
    },

    underline: {
        borderBottom: '2px solid black',
        marginTop: 10,
        width: '100%'
    },

    boxes_text: {
        fontSize: 8
    },

})