import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { ActionIcon } from '../ActionIcon';
import { useState } from 'react';

const styles = StyleSheet.create({
    taskCard: {
    },
    taskCardFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FAFB', // gray/50
        borderRadius: 10,
        overflow: 'hidden',
    },
    checkBoxContainer: {
        padding: 12,
    },
    checkBox: {
        width: 20,
        height: 20,
        margin: 6,
    },
    label: {
        // flex: 1,
        width: '68%',
        fontSize: 14,
        color: '#1F2937', // gray/800
    },
    iconContainer: {
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    rowAction: {
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#F87171', // red/400
    },
});

const ChecklistItem = ({ checked, text, liked }) => {
    // not sure where to store the states, pending for backend development
    const [isChecked, setChecked] = useState(checked);
    const [isLiked, setLiked] = useState(liked);
    return (
        // <ScrollView style={styles.taskCard} horizontal={true}>
            <View style={styles.taskCardFlex}>
                <View style={styles.iconContainer} >
                    <ActionIcon iconName={isChecked ? 'checkBox-t' : 'checkBox-f'}
                        onPress={() => setChecked(!isChecked)} size={20} />
                </View>
                <Text style={styles.label} numberOfLines={1}>{text}</Text>
                <View style={styles.iconContainer} >
                    <ActionIcon iconName={isLiked ? 'heart-t' : 'heart-f'}
                        onPress={() => setLiked(!isLiked)} size={20} />
                </View>
                <View style={styles.rowAction} >
                    <ActionIcon iconName={'archive-s'} size={20} />
                </View>
            </View>
        // </ScrollView>
    );
};

export default ChecklistItem;