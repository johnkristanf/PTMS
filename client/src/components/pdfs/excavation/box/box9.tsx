import { View, Image } from '@react-pdf/renderer'; 
import styles from '../styles/box9';
import box1Image from '/img/excavation/box9.png';

export function PermitBodyBox9() {
    return (
        <View style={styles.imageContainer}>
            <Image source={ box1Image }/>
        </View>
    );
}
