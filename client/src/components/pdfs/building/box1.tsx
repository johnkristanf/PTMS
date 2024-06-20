import { Text, StyleSheet, View, Image, Svg, Path } from '@react-pdf/renderer';
import { AppliedServices, ConstructionLocationTypes, ConstructionOwnership, PermitAddress, PermitName } from '../../../types/application';

export function PermitBodyBox1({permitInfo}:{ 
    permitInfo: AppliedServices 
}){

    const name = {
        firstName: permitInfo.firstname,
        lastName: permitInfo.lastName,
        middleInitial: permitInfo.middleInitial,
        taxAccountNo: permitInfo.taxAccountNo
    }

    const address = {
        addressNo: permitInfo.addressNo,
        street: permitInfo.street,
        barangay: permitInfo.barangay,
        city: permitInfo.municipality,
        zipCode: permitInfo.zipCode,
        telNo: permitInfo.telNo
    }

    const contructionOwnership = {
        ownedByEnterprise: permitInfo.constructOwnbyEnterprise,
        formOfOwnership: permitInfo.formOwnership
    }

    const constructionLocation = {
        location: permitInfo.locationForConstruct_Install,
        tct_no: permitInfo.tctNo
    }

    return(
        <>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.box1TextTitle}>BOX 1 (TO BE ACCOMPLISHED IN PRINT BY THE APPLICANT)</Text>
                <Text style={{fontSize: 7}}>DO NOT FILL-UP (NSO USE ONLY)</Text>
            </View>


            <View style={styles.box1_container}>

                <View style={{ flexDirection: 'row' }}>

                    <View style={{ flexDirection: 'column' }}>
                        <NamesInput name={name} />

                        <ForConstructionOwnerShip contructionOwnership={contructionOwnership} />

                        <AddressInput address={address} />

                        <ConstructionLocation constructionLocation={constructionLocation}/>

                        <ScopeOfWork scopeOfWork={permitInfo.scopeType} />

                        <OccupancyOFBuilding />

                        <OccupancyOFCharacter characterOccupancy={permitInfo.characterOfOccupancy}/>
                    </View>


                </View>

                

                <Box1Footer />
               
            </View>



            

        </>
       
    )
}

function NamesInput({name}: {
    name: PermitName
}){

    const names = [
        {label: "LASTNAME", value: name.lastName},
        {label: "FIRSTNAME", value: name.firstName},
        {label: "M.I", value: name.middleInitial},
    ]


    return(
        <View style={{flexDirection: 'row'}}>

            <View style={styles.namesBox}>
                <Text style={styles.boxes_text}>OWNER'S</Text>

                {
                    names.map((data) => (

                        <View style={styles.labelValue_container}>

                            <Text style={styles.boxes_text}>{data.label}</Text>
                            <Text style={styles.boxes_text}>{data.value}</Text>

                        </View>

                        ))
                    }

            </View>

            <View style={{borderBottom: '2px solid black', width: '40%', padding: 5 }}>
                <Text style={styles.boxes_text}>TAX ACCOUNT NO.</Text>
                <Text style={styles.boxes_text}>{name.taxAccountNo}</Text>
            </View>

        </View>
    )
}

function AddressInput({address}: {
    address: PermitAddress
}){

    const addressInputs = [
        {label: "NO.", value: address.addressNo},
        {label: "STREET", value: address.street},
        {label: "BARANGAY", value: address.barangay},
        {label: "CITY/MUNICIPALITY", value: address.city},
        {label: "ZIP CODE", value: address.zipCode},
    ]

    return(
        <View style={{flexDirection: 'row'}}>

        <View style={styles.addressBox}>
            <Text style={styles.boxes_text}>ADDRESS:</Text>

            {
                addressInputs.map((data) => (

                    <View style={styles.labelValue_container}>

                        <Text style={styles.boxes_text}>{data.label}</Text>
                        <Text style={styles.boxes_text}>{data.value}</Text>

                    </View>

                    ))
                }

        </View>

        <View style={{borderBottom: '2px solid black', width: '40%', padding: 5 }}>
            <Text style={styles.boxes_text}>TELEPHONE NO.</Text>
            <Text style={styles.boxes_text}>{address.telNo}</Text>
        </View>

    </View>
    )
}


function ForConstructionOwnerShip({contructionOwnership}: {
    contructionOwnership: ConstructionOwnership
}){

    return(
        <View style={{flexDirection: 'row'}}>

            <View style={styles.namesBox}>

                <View style={{flexDirection: 'column', gap: 5, width: '100%'}}>
                    <Text style={styles.boxes_text}>FOR CONSTRUCTION OWNED BY ENTERPRISE</Text>
                    <Text style={styles.boxes_text}>{contructionOwnership.ownedByEnterprise}</Text>

                </View>

            </View>

            <View style={{borderBottom: '2px solid black', width: '40%', padding: 5 }}>
                <View style={{flexDirection: 'column', gap: 5, width: '100%'}}>
                    <Text style={styles.boxes_text}>FORM OF OWNERSHIP</Text>
                    <Text style={styles.boxes_text}>{contructionOwnership.formOfOwnership}</Text>

                </View>
            </View>

        </View>

    )
}


function ConstructionLocation({constructionLocation}: {
    constructionLocation: ConstructionLocationTypes
}){

    return(
        <View style={{flexDirection: 'row'}}>

            <View style={styles.namesBox}>

                <View style={{flexDirection: 'column', gap: 5, width: '100%'}}>
                    <Text style={styles.boxes_text}>LOCATION OF CONSTRUCTION </Text>
                    <Text style={styles.boxes_text}>{constructionLocation.location}</Text>

                </View>

            </View>

            <View style={{borderBottom: '2px solid black', width: '40%', padding: 5 }}>
                <View style={{flexDirection: 'column', gap: 5, width: '100%'}}>
                    <Text style={styles.boxes_text}>TCT NO.</Text>
                    <Text style={styles.boxes_text}>{constructionLocation.tct_no}</Text>

                </View>
            </View>

        </View> 

    )
}


function ScopeOfWork({scopeOfWork}: {
    scopeOfWork: string
}){

    const scopeOfWorkArray = scopeOfWork.split(',');

    console.log("scopeOfWorkArray", scopeOfWorkArray)

    const firstBoxes = [
        {name: "NEW CONSTRUCTION"},
        {name: "ERECTION"},
        {name: "ADDITION"},
        {name: "ALTERATION"},
    ]

    const secondBoxes = [
        {name: "RENOVATION"},
        {name: "CONVERSION"},
        {name: "REPAIR"},
        {name: "MOVING"},
    ]


    const thirdBoxes = [
        {name: "RAISING"},
        {name: "ACCESSORY BUILDING STRUCTURE"},
        {name: "OTHERS (SPECIFY)"},
    ]

    return(
        <View style={{ borderBottom: '2px solid black',  padding: 5, flexDirection: 'row', gap: 30  }}>

            <Text style={styles.boxes_text}>SCOPE OF WORK: </Text>

            <View style={styles.checkBoxesCol}>

                {firstBoxes.map((data) => (
                    <View style={styles.smallboxes_container}>
                        <View key={data.name} style={styles.checkbox}>
                            {scopeOfWorkArray.includes(data.name) && (
                                    <Svg viewBox="0 0 24 24" >
                                        <Path
                                            d="M20.285 6.287l-11.314 11.314-5.657-5.657 1.414-1.414 4.243 4.243 9.9-9.9z"
                                            fill="none"
                                            stroke="black"
                                            strokeWidth="2"
                                        />
                                    </Svg>
                            )}
                        </View>
                        <Text style={styles.boxes_text}>{data.name}</Text>
                    </View>
                   
                ))}

            </View>

             <View style={styles.checkBoxesCol}>

                {secondBoxes.map((data) => (
                    <View style={styles.smallboxes_container}>
                        <View key={data.name} style={styles.checkbox}>
                            {scopeOfWorkArray.includes(data.name) && (
                                    <Svg viewBox="0 0 24 24" >
                                        <Path
                                            d="M20.285 6.287l-11.314 11.314-5.657-5.657 1.414-1.414 4.243 4.243 9.9-9.9z"
                                            fill="none"
                                            stroke="black"
                                            strokeWidth="2"
                                        />
                                    </Svg>
                            )}
                        </View>
                        <Text style={styles.boxes_text}>{data.name}</Text>
                    </View>
                   
                ))}
                
            </View>


            <View style={styles.checkBoxesCol}>

                {thirdBoxes.map((data) => (
                    <View style={styles.smallboxes_container}>
                        <View key={data.name} style={styles.checkbox}>
                            {scopeOfWorkArray.includes(data.name) && (
                                    <Svg viewBox="0 0 24 24" >
                                        <Path
                                            d="M20.285 6.287l-11.314 11.314-5.657-5.657 1.414-1.414 4.243 4.243 9.9-9.9z"
                                            fill="none"
                                            stroke="black"
                                            strokeWidth="2"
                                        />
                                    </Svg>
                            )}
                        </View>
                        <Text style={styles.boxes_text}>{data.name}</Text>
                    </View>
                   
                ))}

                <View style={styles.underline}></View>
                
            </View>


        </View>
    )
}


function OccupancyOFBuilding(){

    const firstBoxes = [
        {name: "RESIDENTIAL"},
        {name: "INDUSTRIAL"},
        {name: "AGRICULTURAL"},
    ]

    const secondBoxes = [
        {name: "COMMERCIAL"},
        {name: "INSTITUTIONAL"},
    ]


    const thirdBoxes = [
        {name: "OTHERS (SPECIFY)"},

    ]

    return(
        <View style={{ borderBottom: '2px solid black',  padding: 5, flexDirection: 'column', gap: 5  }}>

            <Text style={styles.boxes_text}>USE OR OCCUPANCY OF BUILDING / STRUCTURE: </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                <View style={styles.checkBoxesCol}>

                    {firstBoxes.map((data) => (
                        <View style={styles.smallboxes_container}>
                            <View key={data.name} style={styles.checkbox}></View>
                            <Text style={styles.boxes_text}>{data.name}</Text>
                        </View>
                    
                    ))}

                </View>

            <View style={styles.checkBoxesCol}>

                {secondBoxes.map((data) => (
                    <View style={styles.smallboxes_container}>
                        <View key={data.name} style={styles.checkbox}></View>
                        <Text style={styles.boxes_text}>{data.name}</Text>
                    </View>
                   
                ))}
                
            </View>


            <View style={styles.checkBoxesCol}>

                {thirdBoxes.map((data) => (
                    <View style={styles.smallboxes_container}>
                        <View key={data.name} style={styles.checkbox}></View>
                        <Text style={styles.boxes_text}>{data.name}</Text>
                    </View>
                   
                ))}

                <View style={styles.underline}></View>
                
            </View>


            </View>

           
        </View>
    )
}


function OccupancyOFCharacter({ characterOccupancy }: { characterOccupancy: string }) {

    const characterOccupancyArray = characterOccupancy.split(',');
    console.log("characterOccupancyArray", characterOccupancyArray);

    const firstBoxes = [
        { name: "GROUP A - RESIDENTIAL DWELLING" },
        { name: "GROUP B - RESIDENTIAL HOTEL APARTMENT" },
        { name: "GROUP C - EDUCATIONAL RECREATIONAL" },
        { name: "GROUP D - INSTITUTIONAL" },
        { name: "GROUP E - BUSINESS AND MERCANTILE" },
    ];

    const secondBoxes = [
        { name: "GROUP F - INDUSTRIAL" },
        { name: "GROUP G - INDUSTRIAL STORAGE AND HAZARDOUS" },
        { name: "GROUP H - RECREATIONAL ASSEMBLY OCCUPANT LOAD LESS THAN 1000" },
        { name: "GROUP I - RECREATIONAL ASSEMBLY OCCUPANT LOAD 1000 OR MORE" },
        { name: "GROUP J - AGRICULTURAL ACCESSORY" },
    ];

    const thirdBoxes = [
        { name: "OTHERS (SPECIFY)" },
    ];

    return (
        <View style={{ borderBottom: '2px solid black', padding: 5, flexDirection: 'column', gap: 5 }}>

            <Text style={styles.boxes_text}>USE OR CHARACTER OF OCCUPANCY : </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                <View style={[styles.checkBoxesCol, {marginRight: 15}]}>

                    {firstBoxes.map((data) => (
                        <View style={styles.smallboxes_container} key={data.name}>
                            <View style={[styles.checkbox]}>
                                {characterOccupancyArray.includes(data.name) && (
                                    <Svg viewBox="0 0 24 24" >
                                        <Path
                                            d="M20.285 6.287l-11.314 11.314-5.657-5.657 1.414-1.414 4.243 4.243 9.9-9.9z"
                                            fill="none"
                                            stroke="black"
                                            strokeWidth="2"
                                        />
                                    </Svg>
                                )}
                            </View>
                            <Text style={styles.boxes_text}>{data.name}</Text>
                        </View>
                    ))}

                </View>

                <View style={styles.checkBoxesCol}>

                    {secondBoxes.map((data) => (
                        <View style={styles.smallboxes_container} key={data.name}>
                            <View style={[styles.checkbox]}>
                                {characterOccupancyArray.includes(data.name) && (
                                    <Svg viewBox="0 0 24 24" >
                                        <Path
                                            d="M20.285 6.287l-11.314 11.314-5.657-5.657 1.414-1.414 4.243 4.243 9.9-9.9z"
                                            fill="none"
                                            stroke="black"
                                            strokeWidth="2"
                                        />
                                    </Svg>
                                )}
                            </View>
                            <Text style={styles.boxes_text}>{data.name}</Text>
                        </View>
                    ))}

                </View>

            </View>

            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                <View style={{ width: '50%' }}>

                    {thirdBoxes.map((data) => (
                        <View style={styles.smallboxes_container} key={data.name}>
                            <View style={[styles.checkbox]}>
                                {characterOccupancyArray.includes(data.name) && (
                                    <Svg viewBox="0 0 24 24" >
                                        <Path
                                            d="M20.285 6.287l-11.314 11.314-5.657-5.657 1.414-1.414 4.243 4.243 9.9-9.9z"
                                            fill="none"
                                            stroke="black"
                                            strokeWidth="2"
                                        />
                                    </Svg>
                                )}
                            </View>
                            <Text style={styles.boxes_text}>{data.name}</Text>
                        </View>
                    ))}

                    <View style={styles.underline}></View>

                </View>

            </View>

        </View>
    );
}

function Box1Footer(){

    const firstlines = [
        {name: "OCCUPANCY CLASSIFIED :"},
        {name: "NUMBER OF UNITS:"},
        {name: "TOTAL FLOOR AREA :"},
    ]

    const secondlines = [
        {name: "TOTAL ESTIMATED COST :"},
        {name: "PROPOSED DATE OF CONSTRUCION :"},
        {name: "PROPOSED DATE OF COMPLETION :"},
    ]

    return(

        <View style={{ padding: 5, flexDirection: 'column', gap: 5  }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', gap: 15 }}>

                    <View style={styles.checkBoxesCol}>

                        {firstlines.map((data) => (
                            <View style={styles.linesboxes_container} key={data.name}>
                                <Text style={styles.boxes_text}>{data.name}</Text>
                                <View key={data.name} style={styles.underline}></View>
                            </View>
                        
                        ))}

                    </View>

                    <View style={styles.checkBoxesCol}>

                        {secondlines.map((data) => (
                            <View style={ styles.linesboxes_container } key={data.name}>
                                <Text style={styles.boxes_text}>{data.name}</Text>
                                <View key={data.name} style={styles.underline}></View>

                            </View>
                        
                        ))}
                        
                    </View>

            </View>
        </View>
        
    )
}


const styles = StyleSheet.create({
    
    box1TextTitle:{
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 10
    },

    box1_container: {
        width:'100%',
        height: '100%',
        border: '2px solid black',
    },

    
    checkMark: {
        backgroundColor: 'black',
    },
    namesBox: {
        borderBottom: '2px solid black',
        borderRight: '2px solid black', 
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 5,
        padding: 5
    },

    addressBox: {
        borderBottom: '2px solid black',
        borderRight: '2px solid black', 
        width: '150%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },

    boxes_text: {
        fontSize: 8
    },

    labelValue_container: {
        flexDirection: 'column',
        gap: 5,
    },

    nso_boxes: {
        width: '60%',
        height: '80%',
    },

    checkBoxesCol: {
        flexDirection: 'column',
        gap: 3
    },

    smallboxes_container: {
        flexDirection: 'row', 
        alignItems: 'center',
        gap: 2
    },

    linesboxes_container: {
        flexDirection: 'row', 
        alignItems: 'center',
        gap: 50
    },
    
    checkbox: {
        width: 10,
        height: 10,
        border: '2px solid black',
    },

    underline: {
        border: '1px solid black',
        marginTop: 10,
        width: '100%'
    }
})
