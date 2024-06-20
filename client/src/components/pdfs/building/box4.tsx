import { StyleSheet, View, Text } from "@react-pdf/renderer"

export function PermitBodyBox4(){
    return(

            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.box4TextTitle}>BOX 4</Text>
                
                <View style={styles.box4_container}>

                    <View style={{ borderBottom: '2px solid black', width: '100%', height: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                        <View style={{ flexDirection: 'column', alignItems: 'center', paddingVertical: 4, width: '50%' }}>
                            <Text style={styles.boxes_text}>WITH CONSENT : LOT OWNER</Text>
                            <View style={styles.underline}></View>
                            <Text style={{fontSize: 6, marginTop: 4}}>(SIGNATURE OVER PRINTED NAME)</Text>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center', width: '50%'}}>
                            <Text style={styles.boxes_text}>DATE :</Text>
                            <View style={styles.underline}></View>
                        </View>

                    </View>

                    <View style={{ borderBottom: '2px solid black', width: '100%', height: '30%', padding: 5}}>
                        <Text style={styles.boxes_text}>ADDRESS :</Text>
                    </View>

                    <View style={{ width: '100%', height: '40%', flexDirection: 'row'}}>

                        <View style={{ borderRight: '2px solid black', width: '40%' }}>
                            <Text style={styles.boxes_text}>CTO NO.:</Text>
                        </View>

                        <View style={{ borderRight: '2px solid black', width: '50%' }}>
                            <Text style={styles.boxes_text}>DATE ISSUED:</Text>
                        </View>

                        <View style={{ width: '60%' }}>
                            <Text style={styles.boxes_text}>PLACE ISSUED:</Text>
                        </View>

                    </View>
                </View>
            </View>


            
        
       
    )
}

const styles = StyleSheet.create({
    box4_container: {
        width:'100%',
        height: '60%',
        border: '2px solid black',
        flexDirection: 'column'
    },

    box4TextTitle:{
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 10
    },

    underline: {
        borderBottom: '2px solid black',
        marginTop: 10,
        width: '75%'
    },

    boxes_text: {
        fontSize: 8
    },

})