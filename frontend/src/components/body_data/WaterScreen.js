import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import ItemList from './itemList';
import WaterSummary from './WaterSummary';

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

const WaterScreen = () => {
    const waterData = [
        { 'date': 'October 26, 2022', 'totalCapacity': 900, 'itemList': [{ 'time': '10:00 AM', 'capacity': 900 }] },
        { 'date': 'October 25, 2022', 'totalCapacity': 2000, 'itemList': [{ 'time': '09:00 AM', 'capacity': 1100 }, { 'time': '09:00 PM', 'capacity': 900 }] },
        { 'date': 'October 24, 2022', 'totalCapacity': 300, 'itemList': [{ 'time': '09:00 AM', 'capacity': 300 }] },
    ];
    return (
        <ScrollView style={styles.body}>
            <WaterSummary />
            <View style={styles.detail} >
                {
                    waterData.map((obj, idx) => {
                        let showList = [];
                        obj.itemList.forEach(element => {
                            let obj = { 'leftText': 'Water', 'rightText': `${element.time} · ${element.capacity} ml` };
                            showList.push(obj);
                        });

                        return (
                            <>
                                <View style={styles.dataRow} key={idx} >
                                    <View style={styles.title} >
                                        <Text style={obj.totalCapacity >= 2000 ? styles.reachGoal : styles.notReachGoal} >
                                            {obj.date}</Text>
                                        <View style={{ flex: 1 }} />
                                        <Text style={obj.totalCapacity >= 2000 ? styles.reachGoal : styles.notReachGoal} >
                                            {obj.totalCapacity >= 2000 ?
                                                <Image
                                                    source={require('../../assets/icon/primary/badge-check.png')}
                                                    style={{ height: 16, width: 16 }} />
                                                : ''}

                                            {obj.totalCapacity} ml
                                        </Text>
                                    </View>
                                    <ItemList showList={showList} />
                                </View>
                            </>
                        );
                    })
                }
            </View>
        </ScrollView >
    );
}

export default WaterScreen;