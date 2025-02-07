import { View, Image } from '@react-pdf/renderer'; 
import styles from '../styles/box2';
import box1Image from '/img/demolition/box3.png';

export function PermitBodyBox2() {
    return (
        <View style={styles.imageContainer}>
              <Image source={ box1Image } />
        </View>
    );
}
