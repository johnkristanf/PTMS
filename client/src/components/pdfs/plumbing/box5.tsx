import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";

export function PermitBodyBox5({ applicantName }: { applicantName: string }) {

    const number = [
        { name: "Doc. No." },
        { name: "Page No." },
        { name: "Book No." },
        { name: "Series No." },
    ]

    return (
        <Image source="/img/plumbing/plumbing_box5.png" style={{width: '90%', height: "15%", marginTop: 15}}/>
    )
}


const styles = StyleSheet.create({
    box5_container: {
        width: '100%',
        height: '100%',
        border: '2px solid black',
        flexDirection: 'column'
    },

    box5TextTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 10
    },

    underline: {
        borderBottom: '2px solid black',
        marginTop: 10,
        width: '75%'
    },

    underlineContainer: {
        borderBottom: '2px solid black',
        width: '75%',
        textAlign: 'center',
    },

    underlineText: {
        fontSize: 8,
        marginTop: 4,
    },

    boxes_text: {
        fontSize: 8
    },

    row: {
        flexDirection: 'row'
    },

    col: {
        flexDirection: 'column'
    },

    text_center: {
        textAlign: 'center'
    },

    margin_top_left: {
        marginLeft: 5,
        marginTop: 10,
    },

    margin_top_left_large: {
        marginLeft: 40,
        marginTop: 10,
    },

    box_text_container: {
        width: '100%',
        justifyContent: 'center',
        marginTop: 10
    },

    box5_footer_margins: {
        marginTop: 20,
        marginLeft: 15,
    }

});

export default PermitBodyBox5;
