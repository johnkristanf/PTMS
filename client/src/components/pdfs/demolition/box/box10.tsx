import { View, Image } from '@react-pdf/renderer'; 
import styles from '../styles/box10';
import box1Image from '/img/demolition/box10.png';

export function PermitBodyBox10({ permitInfo }: { permitInfo: any }) {
    return (
        <View style={styles.imageContainer}>
              <Image source={{ uri: box1Image }} />
        </View>
    );
}
