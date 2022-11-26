import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import ChecklistItem from '../components/checkList/ChecklistItem.js';
import { useCheckList } from '../components/checkList/hooks/useCheckList';
import AddListItem from '../components/homePage/addListItem';
import { NavBar } from '../components/NavBar.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
    padCenter: {
        marginTop: 8,
        marginBottom: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowFlex: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8,
    },
    taskCardFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FAFB', // gray/50
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'space-between',
    },
    label: {
        flex: 1,
        fontSize: 14,
        color: '#1F2937', // gray/800
    },
})

const HomePage = ({ navigation }) => {
    const { checkListData, setCheckListData } = useCheckList()
    const [ displayWeek, setDisplayWeek ] = useState(0);
    return (
        <>
            <NavBar centerText='w1' rightIcon='bell-s' weekOnChange={
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
                    {checkListData[displayWeek].data.slice(0, 4).map((obj, idx) =>
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
                    {checkListData[displayWeek].data.length > 4 ?
                        <View style={styles.padCenter}>
                            <FontAwesome5 name ="ellipsis-v" size={18} color='#E5E7EB' /* gray/200 */ solid />
                        </View> :
                        <></>
                    }
                    <View style={styles.pad}>
                        <AddListItem onAddHandler={() => {}}/>
                    </View>
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