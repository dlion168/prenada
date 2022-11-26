import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import ChecklistItem from '../components/checkList/ChecklistItem.js';
import { useCheckList } from '../components/checkList/hooks/useCheckList';
import { NavBar } from '../components/NavBar.js';

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F9FAFB', // gray/50
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 24,
        paddingRight: 24,
    },
    block: {
        marginTop: 8,
        marginBottom: 8,
    },
    titleRow: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8,
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
    pad: {
        marginTop: 8,
        marginBottom: 8,
    },
    rowFlex: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8,
    }
})

const HomePage = ({ navigation }) => {
    const { checkListData, setCheckListData, onDeleteHandler } = useCheckList()
    const [ displayWeek, setDisplayWeek ] = useState(0);
    return (
        <>
            <NavBar centerText='w0' rightIcon='bell-s' weekOnChange={
                (week) => { useEffect(() => { setDisplayWeek(week) }) }
            } />
            <ScrollView style={styles.body}>
                <View style={styles.block} >
                    <View style={styles.titleRow} >
                        <Text style={styles.title} >{
                            displayWeek === 0 ?
                                'Trying to conceive (TTC)' :
                                `Week ${displayWeek} of Pregnency`
                        }</Text>
                        <View style={{ flex: 1 }} />
                        <TouchableOpacity onPress={() => navigation.jumpTo('Checklist')}>
                            <Text style={styles.titleMore} >See All</Text>
                        </TouchableOpacity>
                    </View>
                    {checkListData[displayWeek].data.map((obj, idx) =>
                        <View style={styles.pad} key={idx}>
                            <ChecklistItem
                                week={displayWeek}
                                idx={idx}
                                checked={obj.checked}
                                text={obj.text}
                                liked={obj.liked}
                            />
                        </View>
                    )}
                    {/* <ChecklistItem
                        idx={idx}
                        checked={obj.checked}
                        text={obj.text}
                        liked={obj.liked}
                    /> */}
                </View>
                <View style={styles.block} >
                    <View style={styles.titleRow} >
                        <Text style={styles.title} >Body Data</Text>
                        <View style={{ flex: 1 }} />
                        <TouchableOpacity onPress={() => navigation.jumpTo('Body Data')}>
                            <Text style={styles.titleMore} >See All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.block} >
                    <View style={styles.titleRow} >
                        <Text style={styles.title} >Tips to you</Text>
                        <View style={{ flex: 1 }} />
                        <TouchableOpacity onPress={() => navigation.jumpTo('Library')}>
                            <Text style={styles.titleMore} >See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowFlex} >

                    </View>
                </View>
            </ScrollView>
        </>
    )
}
export default HomePage;