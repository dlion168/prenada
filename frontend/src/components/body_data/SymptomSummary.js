import { View, Text, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        backgroundColor: '#EEF2FF',
        borderRadius: 10,
        margin: 24,
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
        justifyContent: 'space-between',
        width: 700,
        alignItems: 'center',
    },
    text: {
        color: '#6B7280',
    },
    symList: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems:'flex-start'
    },
    symItem: {
        alignItems: 'center'
    },
    img: {
        borderRadius: 30,
        height: 60,
        width: 60,
        backgroundColor: 'blue',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    times: {
        borderRadius: 10,
        height: 20,
        width: 20,
        backgroundColor: '#F87171',
        alignItems: 'center',
    },
    timesText: {
        color: '#FFFFFF',
    },
})

const SymptomSummary = () => {
    const data = [
        { 'symptomName': 'Cramps', 'times': 2 },
        { 'symptomName': 'Tender breasts', 'times': 5 },
        { 'symptomName': 'Headache', 'times': 1 },
    ];

    return (
        <View style={styles.body}>
            <View style={styles.title}>
                <MaterialCommunityIcons
                    name='stethoscope'
                    size={30}
                    solid
                />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, }} >Symptom</Text>
                    <Text style={styles.text} >Happened this week</Text>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            <View style={styles.symList}>
                {
                    data.map((obj, idx) => {
                        return (
                            <View style={styles.symItem} key={idx}>
                                <View style={styles.img}>
                                    <View style={styles.times}>
                                        <Text style={styles.timesText} >{obj.times}</Text>
                                    </View>
                                </View>
                                <Text style={styles.text} >{obj.symptomName}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
}
export default SymptomSummary;