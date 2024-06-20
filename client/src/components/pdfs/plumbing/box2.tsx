import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";

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

        <Image source="/img/plumbing/plumbing_box2.png"/>
        
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