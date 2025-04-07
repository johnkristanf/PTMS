import { Page, StyleSheet, View } from "@react-pdf/renderer";
import { LetterHeader } from "./header";
import { LetterBody } from "./letter_body";
import { LetterSignatures } from "./signatures";
import { ApplicationLetterInfoTypes } from "../../../types/application";


export function ApplicationLetter({applicationLetterInfo}: {
    applicationLetterInfo: ApplicationLetterInfoTypes
}) {

    return (
      <Page size="LETTER" style={styles.page}>
        <LetterHeader />

        <View style={styles.letter_body}>
          <LetterBody applicationLetterInfo={applicationLetterInfo}/>
        </View>

        <View style={styles.letter_body}>
          <LetterSignatures />
        </View>


      </Page>
    );
}
  

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      alignItems: 'center',
    },

    letter_body: {
        width: '100%',
        height: '37%',
        paddingHorizontal: 20
    },
    
});