import { View, Image } from '@react-pdf/renderer'; 
import styles from '../styles/box3';
import box1Image from '/img/electrical/box3.png';

export function PermitBodyBox3() {
    return (
        <View style={styles.imageContainer}>
              <Image source={ box1Image } />
        </View>
    );
}
