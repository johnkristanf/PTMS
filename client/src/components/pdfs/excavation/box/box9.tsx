import { View, Image } from '@react-pdf/renderer'; 
import styles from '../styles/box9';
import box1Image from '/img/excavation/box9.png';

export function PermitBodyBox9({ permitInfo }: { permitInfo: any }) {
    return (
        <View style={styles.imageContainer}>
            <Image source={{ uri: box1Image }}/>
        </View>
    );
}
