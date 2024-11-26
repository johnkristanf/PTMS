import { View, Image } from '@react-pdf/renderer'; 
import styles from '../styles/box7-8';
import box1Image from '/img/excavation/box7&8.png';

export function PermitBodyBox78({ permitInfo }: { permitInfo: any }) {
    return (
        <View style={styles.imageContainer}>
            <Image source={{ uri: box1Image }}/>
        </View>
    );
}
