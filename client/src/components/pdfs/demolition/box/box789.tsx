import { View, Image } from '@react-pdf/renderer'; 
import styles from '../styles/box789';
import box1Image from '/img/demolition/box789.png';

export function PermitBodyBox789() {
    return (
        <View style={styles.imageContainer}>
              <Image source={box1Image } />
        </View>
    );
}
