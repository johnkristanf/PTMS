import { View, Image } from '@react-pdf/renderer'; 
import styles from '../styles/box7-8';
import box1Image from '/img/excavation/box7&8.png';

export function PermitBodyBox78() {
    return (
        <View style={styles.imageContainer}>
            <Image source={ box1Image } style={{ width: '100%' }}/>
        </View>
    );
}
