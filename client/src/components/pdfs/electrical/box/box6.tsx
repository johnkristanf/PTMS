import { View, Image } from '@react-pdf/renderer'; 
import styles from '../styles/box6';
import box1Image from '/img/electrical/box6.png';

export function PermitBodyBox6({ permitInfo }: { permitInfo: any }) {
    return (
        <View style={styles.imageContainer}>
            <Image source={{ uri: box1Image }}/>
        </View>
    );
}
