import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import ChecklistItem from '../components/checkList/ChecklistItem.js';
import { useCheckList } from '../components/checkList/hooks/useCheckList';
import AddListItem from '../components/homePage/addListItem';
import { NavBar } from '../components/NavBar.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TopicCardSingle } from '../components/library/TopicCard';
import { themeData } from '../components/library/libraryData.js';
import axios from '../api';
import SymptomSummary from '../components/body_data/SymptomSummary'
import { BodyDataCard } from '../components/homePage/BodyDataCard.js';

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
})

const updateWater = async (date, callback) => {
    const {
        data: { data, message },
    } = await axios.get('/water', {
        params: {
            startDate: date,
            endDate: date,
        },
    });
    callback(data[0].totalCapacity);
};

const updateSymptom = async (date, callback) => {
    const summary = await axios.get('/symptom/summary', {
        params: {
            startDate: date,
            endDate: date,
        },
    });
    let maxCount = 0;
    let maxSym = ' ';
    let numSym = 0;
    for (const sym in summary.data.summary) {
        const count = summary.data.summary[sym];
        if (count > maxCount) {
            maxCount = count;
            maxSym = sym;
        }
        if (count > 0)
            numSym++;
    }
    callback([maxSym, numSym]);
};

const HomePage = ({ navigation }) => {
    const [ displayWeek, setDisplayWeek ] = useState(0);
    const { checkListData, setCheckListData } = useCheckList()
    const [ waterTotal, setWaterTotal] = useState(0);
    useEffect(() => updateWater('20221124', setWaterTotal), [displayWeek]); // TODO: should be refreshed when data is renewed
    const [ symSumm, setSymSumm] = useState(['', 0]);
    useEffect(() => updateSymptom('20221124', setSymSumm), [displayWeek]); // TODO: should be refreshed when data is renewed
    return (
        <>
            <NavBar centerText='w1' rightIcon='bell-s' weekOnChange={
                (week) => { useEffect(() => setDisplayWeek(week)) }
            } />
            <ScrollView style={styles.body}>
                {/* checklist */}
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
                {/* body data */}
                <View style={styles.block} >
                    <View style={styles.titleRow} >
                        <Text style={styles.title} >Body Data</Text>
                        <View style={{ flex: 1 }} />
                        <TouchableOpacity onPress={() => navigation.jumpTo('Body Data')}>
                            <Text style={styles.titleMore} >See All</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.pad} horizontal >
                        {/* <BodyDataCard
                            name='Sleep'
                            text1={'7'} unit1={'hr'}
                            text2={'16'} unit2={'min'}
                            onPress={() => navigation.jumpTo('Body Data')} // TODO: goto SleepScreen
                        /> */}
                        <BodyDataCard
                            name='Water'
                            text1={waterTotal} unit1={'ml'}
                            onPress={() => navigation.jumpTo('Body Data')} // TODO: goto WaterScreen
                        />
                        <BodyDataCard
                            name='Symptom'
                            text1={symSumm[0]} unit1={symSumm[1] > 0 ? `+${symSumm[1] - 1}` : ''}
                            onPress={() => navigation.jumpTo('Body Data')} // TODO: goto SymptomScreen
                        />
                    </ScrollView>
                </View>
                {/* library */}
                <View style={styles.block} >
                    <View style={styles.titleRow} >
                        <Text style={styles.title} >Tips to you</Text>
                        <View style={{ flex: 1 }} />
                        <TouchableOpacity onPress={() => navigation.jumpTo('Library')}>
                            <Text style={styles.titleMore} >See All</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.pad} horizontal >
                        {themeData.map((group, idx) =>
                            <TopicCardSingle
                                key={idx}
                                top={group.topic[0]}
                                onPress={() => navigation.jumpTo('Library')} // TODO: goto topicMenu
                            />
                        )}
                    </ScrollView>
                </View>
            </ScrollView>
        </>
    )
}
export default HomePage;