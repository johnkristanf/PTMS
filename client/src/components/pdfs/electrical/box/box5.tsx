import { View, Image } from '@react-pdf/renderer'; 
import styles from '../styles/box5';
import box1Image from '/img/electrical/box5.png';

export function PermitBodyBox5({ permitInfo }: { permitInfo: any }) {
    return (
        <View style={styles.imageContainer}>
            <Image source={{ uri: box1Image }} />
        </View>
    );
}
