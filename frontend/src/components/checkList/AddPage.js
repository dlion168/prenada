import { StyleSheet, TouchableOpacity, View, Text, Touchable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ChecklistItem from './ChecklistItem';

const styles = StyleSheet.create({
    taskCardFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FAFB', // gray/50
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'space-between',
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: 8,
        paddingBottom: 8,
    },
    checkBoxContainer: {
        padding: 12,
    },
    label: {
        // flex: 1,
        fontSize: 14,
        color: '#1F2937', // gray/800
    },
    iconContainer: {
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});

const AddPage = ({editable, onAddHandler}) => {
    return (
        <>
        <Text>Week 1 of Pregnency</Text>
        <ChecklistItem/>
        <View style={styles.taskCardFlex}>
            <Text >Description</Text>
            <Text>Take a pregnency test if you've missed your period.</Text>
        </View>
        <View style={styles.taskCardFlex} onPress={onAddHandler}>
            <View style={styles.iconContainer} >
                <FontAwesome5 name='calendar' color='#f87171' size={18}/>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Add due date"
            />
        </View>
        <View style={styles.taskCardFlex} onPress={onAddHandler}>
            <View style={styles.iconContainer} >
                <FontAwesome5 name='map-marker-alt' color='#f87171' size={18}/>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={locationText}
                placeholder="Add Location"
            />
        </View>
        <View style={styles.taskCardFlex} onPress={onAddHandler}>
            <View style={styles.iconContainer} >
                <FontAwesome5 name='sync-alt' color='#f87171' size={18}/>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Repeat"
            />
        </View>
        <View style={styles.taskCardFlex} onPress={onAddHandler}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={noteText}
                placeholder="Add note"
            />
        </View>
        <View style={styles.block} >
            <View style={styles.titleRow} >
                <Text style={styles.title} >Related Articles</Text>
            </View>
            <ScrollView style={styles.pad} horizontal >
                {theme.map((group, idx) =>
                    <TopicCardSingle
                        key={idx}
                        top={group.topic[0]}
                        onPress={() => navigation.jumpTo('Library')} // TODO: goto topicMenu
                    />
                )}
            </ScrollView>
        </View>
        </>
    );
};

export default AddPage;