import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ItemList from './ItemList';
import SymptomSummary from './SymptomSummary';
import axios from '../../api';

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
    const [symptomDetail, setSymptomDetail] = useState([]);
    const [symptomSummary, setSymptomSummary] = useState([]);
    const getSymptomData = async () => {
        //detail
        const { data: { data: symptomData, symptomMessage }, } = await axios.get('/symptom', {
            params: {
                startDate: "20221005",
                endDate: "20221026",
            },
        });
        setSymptomDetail(symptomData);
        //summary
        const summary = await axios.get('/symptom/summary', {
            params: {
                startDate: "20221005",
                endDate: "20221026",
            },
        });
        setSymptomSummary(summary.data.summary);
    };

    useEffect(() => {
        getSymptomData();
    }, []);

    // const symptomDetail = [
    //     { 'date': 'October 26, 2022', 'itemList': [{ 'time': '10:00 AM', 'symptomName': 'Cramps' }] },
    //     { 'date': 'October 25, 2022', 'itemList': [{ 'time': '09:00 AM', 'symptomName': 'Acne' }, { 'time': '09:00 PM', 'symptomName': 'Cramps' }] },
    //     { 'date': 'October 24, 2022', 'itemList': [{ 'time': '09:00 AM', 'symptomName': 'Tender breasts' }] },
    // ];

    // const symptomSummary = { 'Cramps': 2, 'Tender breasts': 5 };

    return (
        <ScrollView style={styles.body}>
            <SymptomSummary
                addMode={false}
                handleSymptomClick={null}
                symptoms={symptomSummary} />
            <View style={styles.detail} >
                {
                    symptomDetail.map((obj, idx) => {
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