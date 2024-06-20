import { StyleSheet, View, Text, Image } from "@react-pdf/renderer"

export function PermitBodyBox4(){
    return(

        <Image source="/img/plumbing/plumbing_box4.png" style={{width: '100%'}}/>
       
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