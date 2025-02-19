/* eslint-disable @typescript-eslint/no-explicit-any */
import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/box2';

export function PermitBodyBox2({ permitInfo }: { permitInfo: any }) {

        // Dummy static data
        const defaultData = {
            labelData: 'John A. Doe',
            date: '01/01/2000',
            cellData: '2024.09.0392',
            address: 'purok 1, brgy. 2, city of san jose del monte, bulacan',
            payment: '800',
        };
    
        const data = { ...defaultData, ...permitInfo };

    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <Text style={styles.text}>ENGINEER NAME</Text>
                <Text style={styles.text}>TYPE OF ENGINEER</Text>
                <Text style={styles.text}>PAYMENT</Text>
                <Text style={styles.text}>OR NUMBER</Text>
                <Text style={styles.text}>DATE PAID</Text>
                <Text style={styles.text}>APLICANT NAME</Text>
                
                <Text style={styles.textSpace}>TYPE OF BUILDING</Text>
                
                <Text style={styles.textSpace}>TYPE OF OCCUPANCY</Text>
                
                <Text style={styles.text}>GROUP</Text>
                
                <Text style={styles.textSpace}>ADDRESS</Text>
                
                <Text style={styles.text}>BUILDING PERMIT NUMBER</Text>
                <Text style={styles.text}>DATE PERMIT ISSUED </Text>
                <Text style={styles.text}>OR NUMBER</Text>
                <Text style={styles.text}>DATE PAID</Text>
            </View>


            <View style={styles.columnInfo}>
                <Text style={styles.text}>{data.labelData}</Text>
                <Text style={styles.text}>{data.labelData}</Text>
                <Text style={styles.text}>{data.payment}</Text>
                <Text style={styles.text}>{data.payment}</Text>
                <Text style={styles.text}>{data.date}</Text>
                <Text style={styles.text}>{data.labelData}</Text>
                
                <Text style={styles.textSpace}>{data.labelData}</Text>
                
                <Text style={styles.textSpace}>{data.labelData}</Text>
                
                <Text style={styles.text}>{data.payment}</Text>

                <Text style={styles.text}>{data.address}</Text>

                <Text style={styles.text}>{data.cellData}</Text>
                <Text style={styles.text}>{data.date}</Text>
                <Text style={styles.text}>{data.cellData}</Text>
                <Text style={styles.text}>{data.date}</Text>
            </View>


            <View style={styles.columnInfo}>
                <Text style={styles.text}>{data.labelData}</Text>
                <Text style={styles.text}>{data.labelData}</Text>
                <Text style={styles.text}>{data.payment}</Text>
                <Text style={styles.text}>{data.payment}</Text>
                <Text style={styles.text}>{data.date}</Text>
                <Text style={styles.text}>{data.labelData}</Text>
                
                <Text style={styles.textSpace}>{data.labelData}</Text>
                
                <Text style={styles.textSpace}>{data.labelData}</Text>
                
                <Text style={styles.text}>{data.payment}</Text>

                <Text style={styles.text}>{data.address}</Text>

                <Text style={styles.text}>{data.cellData}</Text>
                <Text style={styles.text}>{data.date}</Text>
                <Text style={styles.text}>{data.cellData}</Text>
                <Text style={styles.text}>{data.date}</Text>
            </View>
        </View>
    );
}
