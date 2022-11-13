import { ScrollView, StyleSheet, View, Text } from 'react-native';
import ChecklistItem from '../components/check_list/ChecklistItem.js'

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F9FAFB', // gray/50
    },
    block: {
        margin: 24,
    },
    pad: {
        paddingTop: 8,
        paddingBottom: 8,
    },
    titleRow: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    titleMore: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#F87171',
    },
    checklist: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px',

        position: 'absolute',
        width: '327px',
        height: '424px',
        left: '24px',
        top: '128px',
    },
})

const HomePage = () => {
    const checklist = [
        { 'checked': false, 'text': 'Start taking prenatal Vitamin', 'liked': true },
        { 'checked': false, 'text': 'Write down the date of your last period or two', 'liked': true },
        { 'checked': false, 'text': 'With your partner, create a family health history, including any genetic or chromosomal disorders', 'liked': false },
        { 'checked': false, 'text': 'Quit smoking, and focus on having a healthy diet and lifestyle', 'liked': false },
    ];
    return (
        <ScrollView style={styles.body}>
            <View style={{height: 104, backgroundColor: '#F87171'}}></View>
            <View style={styles.block} >
                <View style={styles.titleRow} >
                    <Text style={styles.title} >Week 1 of Pregnency</Text>
                    <View style={{flex: 1}}/>
                    <Text style={styles.titleMore} >See All</Text>
                </View>
                {checklist.map((obj, idx) => { return (
                <View style={styles.pad} >
                    <ChecklistItem key={idx} checked={obj.checked} text={obj.text} liked={obj.liked}></ChecklistItem>
                </View> )})}
            </View>
            <View style={styles.block} >
                <View style={styles.titleRow} >
                    <Text style={styles.title} >Body Data</Text>
                    <View style={{flex: 1}}/>
                    <Text style={styles.titleMore} >See All</Text>
                </View>
            </View>
            <View style={styles.block} >
                <View style={styles.titleRow} >
                    <Text style={styles.title} >Tips to you</Text>
                    <View style={{flex: 1}}/>
                    <Text style={styles.titleMore} >See All</Text>
                </View>
            </View>
        </ScrollView>
    )
}
export default HomePage;