import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import ItemList from './ItemList';
import SymptomSummary from './SymptomSummary';

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFFFFF',
    },
    dataRow: {
        paddingTop: 8,
        paddingBottom: 8,
        margin: 24,
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
    },
    notReachGoal: {
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 1.5,
    },
    reachGoal: {
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 1.5,
        color: '#F87171',
    },
})

const SymptomScreen = () => {
    const data = [
        { 'date': 'October 26, 2022', 'itemList': [{ 'time': '10:00 AM', 'symptomName': 'Cramps' }] },
        { 'date': 'October 25, 2022', 'itemList': [{ 'time': '09:00 AM', 'symptomName': 'Acne' }, { 'time': '09:00 PM', 'symptomName': 'Cramps' }] },
        { 'date': 'October 24, 2022', 'itemList': [{ 'time': '09:00 AM', 'symptomName': 'Tender breasts' }] },
    ];

    const symptoms = [
        { 'symptomName': 'Cramps', 'times': 2 },
        { 'symptomName': 'Tender breasts', 'times': 5 },
        { 'symptomName': 'Headache', 'times': 1 },
    ];

    return (
        <ScrollView style={styles.body}>
            <SymptomSummary
                addMode={false}
                handleSymptomClick={null}
                symptoms={symptoms} />
            <View style={styles.detail} >
                {
                    data.map((obj, idx) => {
                        let showList = [];
                        obj.itemList.forEach(element => {
                            let obj = { 'leftText': element.symptomName, 'rightText': element.time };
                            showList.push(obj);
                        });

                        return (
                            <View style={styles.dataRow} key={idx} >
                                <View style={styles.title} >
                                    <Text style={styles.notReachGoal} >
                                        {obj.date}</Text>
                                    <View style={{ flex: 1 }} />
                                    <Text style={styles.notReachGoal} >{obj.itemList.length} types</Text>
                                </View>
                                <ItemList showList={showList} />
                            </View>
                        );
                    })
                }
            </View>
        </ScrollView >
    );
}

export default SymptomScreen;