import { View, Image } from '@react-pdf/renderer'; 
import styles from '../styles/box6';
import box1Image from '/img/excavation/box6.png';

export function PermitBodyBox6() {
    return (
        <View style={styles.imageContainer}>
            <Image source={ box1Image } style={{ width: '100%' }}/>
        </View>
    );
}
