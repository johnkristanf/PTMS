import { Text, StyleSheet, View, Image, Svg, Path } from '@react-pdf/renderer';

export function PermitHeader({serviceType, applicationCode}: {
    serviceType: string, 
    applicationCode: string | undefined
}){
    return(

        <>
        <View style={styles.header}>

            <Text style={{ fontSize: 8 }} >
                NBC FORM 8-01
            </Text>

            <View style={styles.headerCenterText_container}>

                <Text style={{ fontSize: 10 }} >
                    Republic of the Philippines
                </Text>

                <Text style={{ fontSize: 11 }} >
                    Panabo City
                </Text>

                <Text style={{ fontSize: 11 }} >
                    Province of Davao Del Norte
                </Text>

                <Text style={{ fontSize: 12 }} >
                    OFFICE OF THE BUILDING OFFICIAL
                </Text>

                <Text style={{ fontSize: 13, marginBottom: 5 }}>
                    UNIFIED APPLICATION FOR BUILDING PERMIT
                </Text>


                <HeaderBlueBoxes serviceType={serviceType} />   

            </View>

            <Image src="/img/no_to_fixer.png" style={styles.headerImage} />
            
        </View>

        <HeaderCodes applicationCode={applicationCode} />

        </>

           
    )
}


const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-around',
    },
    headerImage: {
        width: 70,
        height: 80
    },

    headerCenterText_container:{
        flexDirection: 'column',
        alignItems: 'center',
    },

});



function HeaderBlueBoxes({ serviceType }: { serviceType: string }) {
    return (
        <View style={boxStyle.headerCheckboxContainer}>
            <View style={boxStyle.headerCheckBoxes}>

                <View style={boxStyle.checkbox}>
                    {serviceType === 'NEW' && (

                        <Svg viewBox="0 0 24 24" style={boxStyle.checkIcon}>
                            <Path
                                d="M20.285 6.287l-11.314 11.314-5.657-5.657 1.414-1.414 4.243 4.243 9.9-9.9z"
                                fill="none"
                                stroke="black"
                                strokeWidth="4"
                            />
                        </Svg>
                    )}
                </View>

                <Text style={boxStyle.checkboxText}>NEW</Text>
            </View>
        
            <View style={boxStyle.headerCheckBoxes}>

                <View style={boxStyle.checkbox}>

                    {serviceType === 'RENEWAL' && (
                        <Svg viewBox="0 0 24 24" style={boxStyle.checkIcon}>
                            <Path
                                d="M20.285 6.287l-11.314 11.314-5.657-5.657 1.414-1.414 4.243 4.243 9.9-9.9z"
                                fill="none"
                                stroke="black"
                                strokeWidth="4"
                            />
                        </Svg>

                    )}

                </View>
                <Text style={boxStyle.checkboxText}>RENEWAL</Text>

            </View>
        </View>
    );
}


const boxStyle = StyleSheet.create({

    blueCheckbox: {
        width: 12,
        height: 12,
        borderColor: 'blue',
        borderWidth: 2,
    },

    checkbox: {
        width: 12,
        height: 12,
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    checkIcon: {
        width: 18,
        height: 18,
    },

    headerCheckboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        justifyContent: 'center',
        gap: 20,
        width: '100%'
    },

    headerCheckBoxes: {
        flexDirection: 'row',
        gap: 5
    },

    checkboxText: {
        fontSize: 11,
    }
   
});

const HeaderCodes = ({ applicationCode }: { applicationCode: string | undefined }) => {
    console.log("applicationCode", applicationCode)

    const splitCode = applicationCode ? applicationCode.split('') : [];

    console.log("splitCode", splitCode)

    return (
        <View style={headerCodesStyle.code_container}>
            <View style={headerCodesStyle.checkboxCol}>
                <Text style={headerCodesStyle.codeText}>APPLICATION NO.</Text>
                <View style={headerCodesStyle.checkboxRow}>

                    {[...Array(8)].map((_, index) => (
                        <View key={index} style={headerCodesStyle.blackBox}>
                            <Text style={headerCodesStyle.boxText}>
                              &thinsp; {splitCode[index] ? splitCode[index] : ''}
                            </Text>
                        </View>
                    ))}
                </View>

                <View style={headerCodesStyle.date_underline}>
                    <Text style={headerCodesStyle.date_text}>DATE OF APPLICATION</Text>
                </View>

            </View>

            <View style={headerCodesStyle.checkboxCol}>
                <Text style={headerCodesStyle.codeText}>AREA NO.</Text>

                <View style={headerCodesStyle.checkboxRow}>
                    {[...Array(8)].map((_, index) => (
                        <View key={index} style={headerCodesStyle.blackBox}>
                            <Text style={headerCodesStyle.boxText}></Text>
                        </View>
                    ))}
                </View>

                <View style={headerCodesStyle.date_underline}>
                    <Text style={headerCodesStyle.date_text}>DATE ISSUED</Text>
                </View>
            </View>
        </View>
    );
};



const headerCodesStyle = StyleSheet.create({
    code_container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      height: 20,
      marginTop: 20
    },

    checkboxRow: {
      flexDirection: 'row',
    },

    checkboxCol: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,    
    },

    codeText: {
        fontSize: 12
    },

    boxText: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    blackBox: {
      width: 20,
      height: 20,
      border: '2px solid black',
    },

    date_underline: {
      borderBottom: '2px solid black',
      width: '100%',
      marginTop: 20,
      alignItems: 'center'
    },

    date_text: {
        fontSize: 10,
        marginTop: 5
    }
});


