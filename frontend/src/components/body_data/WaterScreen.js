import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ItemList from './itemList';

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFFFFF',
    },
    dataRow: {
        // alignItems: 'center',
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
    date: {
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 1.5,
    },
    totalCapacity: {
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 1.5,
        textAlign: 'right'
        // color: '#F87171',
    },
})

const WaterScreen = () => {
    const waterData = [
        { 'date': 'October 26, 2022', 'totalCapacity':900, 'itemList': [{ 'time': '10:00 AM', 'capacity': 900 }] },
        { 'date': 'October 25, 2022', 'totalCapacity':1900, 'itemList': [{ 'time': '09:00 AM', 'capacity': 1000 }, { 'time': '09:00 PM', 'capacity': 900 }] },
        { 'date': 'October 24, 2022', 'totalCapacity':300, 'itemList': [{ 'time': '09:00 AM', 'capacity': 300 }] },
    ];
    return (
        <ScrollView style={styles.body}>
            <View style={styles.summary} ></View>
            <View style={styles.detail} >
                {
                    waterData.map((obj, idx) => {
                        return (
                            <>
                                <View style={styles.dataRow} key={idx} >
                                    <View style={styles.title} >
                                        <Text style={styles.date} >{obj.date}</Text>
                                        <View style={{ flex: 1 }} />
                                        <Text style={styles.totalCapacity} >{obj.totalCapacity} ml</Text>
                                    </View>
                                    <ItemList itemList={obj.itemList} />
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