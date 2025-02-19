/* eslint-disable @typescript-eslint/no-explicit-any */
import { View, Text, Image } from '@react-pdf/renderer';
import styles from '../styles/box1'; 
import box1Image from '/img/occupancy_cert/box1.png';
import { OccupancyData } from '@/types/application';

export function PermitBodyBox1({ permitInfo }: { permitInfo: OccupancyData }) {
    // Dummy static data
    // const defaultData = {
    //     labelData: 'John A. Doe',
    //     date: '123',
    //     cellData: 'sdfsdfsdf',
    //     address: 'purok 1, brgy. 2, city of san jose del monte, bulacan',
    //     checkboxData: 'Y',
    // };

    const splittedOccupancy = permitInfo.character_occupancy.split(',')[0];
    const removedGroupNameOccupancy = splittedOccupancy.split('-')[1];

    console.log("splittedOccupancy: ", splittedOccupancy);
    console.log("removedGroupNameOccupancy: ", removedGroupNameOccupancy);
    

    return (
        <View>
            
            <View style={styles.imageContainer}>

                <Image style={styles.image} source={box1Image} />

                {
                    /* THE COMMENTED COMPONENTS DIRI IPAMUTANG ANG MGA REAL DATA IF
                    EVER IPAMUTANG TONG DYNAMIC JUD */
                }

                {/* First Page Left Side */}
                {/* <Text style={styles.text}>{data.labelData}</Text> 
                <Text style={styles.text2}>{data.labelData}</Text>

                <Text style={styles.text3}>{data.labelData}</Text>
                <Text style={styles.text4}>{data.labelData}</Text>
                <Text style={styles.text5}>{data.labelData}</Text>

                <Text style={styles.text6}>{data.cellData}</Text>
                <Text style={styles.text7}>{data.date}</Text>

                <Text style={styles.text8}>{data.labelData}</Text> */}
                
                {/* First Page Right Side */}
                <Text style={styles.secondtext}>{permitInfo.fee_paid}</Text> 
                <Text style={styles.secondtext2}>{permitInfo.receipt_number}</Text>
                <Text style={styles.secondtext3}>{permitInfo.date_paid}</Text>

                <Text style={styles.secondtext4}>{permitInfo.first_name} {permitInfo.middle_initial}. {permitInfo.last_name}</Text>
                <Text style={styles.secondtext5}>{permitInfo.project_proposed}</Text>
                <Text style={styles.secondtext6}>{splittedOccupancy}</Text>
                
                {/* <Text style={styles.secondtext7}>{permitInfo.location}</Text> */}
                
                <Text style={styles.secondtext8}>{permitInfo.location}</Text>


                {/* BUILDING PERMIT NUMBER */}
                {/* <Text style={styles.secondtext9}>{"555"}</Text> */}

                {/* DATE ISSUED */}
                {/* <Text style={styles.secondtext10}>{"111111"}</Text> */}

                <Text style={styles.secondtext11}>{permitInfo.receipt_number}</Text>
                <Text style={styles.secondtext12}>{permitInfo.date_paid}</Text>
                

                {/* PINUNONG PANGGUSALI SA PINAKA BABA */}
                {/* <Text style={styles.secondtext13}>{"weaaakkkk"}</Text> */}

            </View>
        
        </View>
    );
}
