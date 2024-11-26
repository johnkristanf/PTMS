import { View, Image } from '@react-pdf/renderer'; 
import styles from '../styles/box12';
import box1Image from '/img/demolition/box2.png';

export function PermitBodyBox12({ permitInfo }: { permitInfo: any }) {
    return (
        <View style={styles.imageContainer}>
              <Image source={{ uri: box1Image }} />
        </View>
    );
}
