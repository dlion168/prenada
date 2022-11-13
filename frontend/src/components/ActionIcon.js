import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    actionIcon: {
        padding: 6,
    },
});

// Ashu: I know this looks stupid but it's a limitation of React Native
// https://reactnative.dev/docs/images#static-image-resources
const icons = {
    'heart-t': require('../assets/icon/Interactive/heart-true.png'),
    'heart-f': require('../assets/icon/Interactive/heart-false.png'),
    'checkBox-t': require('../assets/icon/Interactive/checkBox-true.png'),
    'checkBox-f': require('../assets/icon/Interactive/checkBox-false.png'),
    'bookmark-t': require('../assets/icon/Interactive/bookmark-true.png'),
    'bookmark-f': require('../assets/icon/Interactive/bookmark-false.png'),
    'archive-s': require('../assets/icon/secondary/archive.png'),
    'trash-s': require('../assets/icon/secondary/trash.png'),
};

const ActionIcon = ({ iconName, size, onPress }) => {
    return (
        <TouchableOpacity style={styles.actionIcon} onPress={onPress} >
            <Image source={icons[iconName]} style={{height: size, width: size}} />
        </TouchableOpacity>
    );
};

export { ActionIcon };
