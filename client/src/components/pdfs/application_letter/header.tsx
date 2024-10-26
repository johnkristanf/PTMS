import { Text, StyleSheet, View } from '@react-pdf/renderer';

export function LetterHeader() {

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        }).format(date);
    };
    
    const currentDate = new Date();
    const date = formatDate(currentDate);

    return (
        <>
            <View style={styles.header_container}>
                <Text style={{ fontSize: 20 }}>
                    APPLICATION LETTER
                </Text>

                <View style={styles.flex_around}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 13 }}>
                            ENGR. BERNANDO C. RABANOZ, JR.
                        </Text>

                        <Text style={{ fontSize: 10 }}>
                            Building Official
                        </Text>

                        <Text style={{ fontSize: 10 }}>
                            Davao City
                        </Text>
                    </View>

                    <View style={styles.flex_col_center}>
                        <Text style={styles.underline}>
                            {date}
                        </Text>
                        <Text style={styles.underline_text_size}>
                            Date
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header_container: {
        flexDirection: 'column',
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        gap: 10
    },

    flex_around: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 25
    },

    underline: {
        fontSize: 12,
        textDecoration: 'underline',
        marginBottom: 2,
    },

    underline_text_size: {
        fontSize: 8
    },

    flex_col_center: {
        flexDirection: 'column',
        alignItems: 'center'
    },


});
