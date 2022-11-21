import { StyleSheet, View, Text } from 'react-native';
import { ActionIcon } from "./ActionIcon"
import { useState } from 'react';

const styles = StyleSheet.create({
    topSpace: {
        backgroundColor: '#F87171',
        height: 44,
    },
    body: {
        backgroundColor: '#F87171',
        height: 60,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    auxText: {
        fontSize: 16,
        color: '#FFFFFF',
        opacity: 0.6,
    },
})

const NavBar = ({
    leftIcon='empty', leftIconOnPress=()=>{}, leftText='',
    rightIcon='empty', rightIconOnPress=()=>{}, rightText='',
    centerText='w0', updateWeek=(week)=>{},
 }) => {
    let centerBox;
    if (centerText.startsWith('w') && !isNaN(centerText.slice(1))) {
        const [week, setWeek] = useState(Number(centerText.slice(1)));
        centerText = (week === 0) ? 'TTC' : 'Week ' + week;
        centerBox = <View style={styles.box}>
            <ActionIcon iconName={'cheveron-left-s'} onPress={() => {
                if (week === 0) return;
                setWeek(week - 1);
                updateWeek(week);
            }} size={24} padding={10} opacity={0.6} />
            <Text style={styles.title}>{centerText}</Text>
            <ActionIcon iconName={'cheveron-right-s'} onPress={() => {
                if (week === 40) return;
                setWeek(week + 1);
                updateWeek(week);
            }} size={24} padding={10} opacity={0.6} />
        </View>;
    } else {
        centerBox = <View style={styles.box}>
            <Text style={styles.title}>{centerText}</Text>
        </View>;
    }
    return (
        <View>
            <View style={styles.topSpace} />
            <View style={styles.body}>
                <View style={styles.box}>
                    <ActionIcon iconName={leftIcon} onPress={leftIconOnPress} size={24} padding={10} opacity={0.6} />
                    <Text style={styles.auxText}>{leftText}</Text>
                </View>
                {centerBox}
                <View style={styles.box}>
                    <Text style={styles.auxText}>{rightText}</Text>
                    <ActionIcon iconName={rightIcon} onPress={rightIconOnPress} size={24} padding={10} opacity={0.6} />
                </View>
            </View>
        </View>
    )
}

export { NavBar }