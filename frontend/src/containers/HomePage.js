import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import ChecklistItem from '../components/checkList/ChecklistItem.js';
import { useCheckList } from '../components/checkList/hooks/useCheckList';
import { NavBar } from '../components/NavBar.js';

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
    const { checkListData, setCheckListData, onDeleteHandler } = useCheckList()
    const [displayWeek, setDisplayWeek] = useState(0);
    return (
        <ScrollView style={styles.body}>
            <NavBar centerText='w0' rightIcon='bell-s' weekOnChange={
                (week) => {useEffect(() => {setDisplayWeek(week)})}
            }/>
            <View style={styles.block} >
                <View style={styles.titleRow} >
                    <Text style={styles.title} >{
                        displayWeek === 0 ?
                        'Trying to conceive (TTC)' :
                        `Week ${displayWeek} of Pregnency`}</Text>
                    <View style={{flex: 1}}/>
                    <Text style={styles.titleMore} >See All</Text>
                </View>
                {checkListData.map((obj, idx) => { return (
                <View style={styles.pad} key={idx}>
                    <ChecklistItem id={idx} checked={obj.checked} text={obj.text} liked={obj.liked}></ChecklistItem>
                </View>
                )})}
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