import { View, Text, Image, StyleSheet } from 'react-native';
import { LineChart } from "react-native-chart-kit";
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
})

const data = {
    labels: ["Oct 21", "Oct 22", "Oct 23", "Oct 24", "Oct 25", "Oct 26"],
    datasets: [
        {
            data: [200, 450, 2200, 300, 2000, 900],
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
            strokeWidth: 2 // optional
        },
        {
            data: [2000, 2000, 2000, 2000, 2000, 2000],
            color: (opacity = 1) => `rgba(129, 140, 248, ${opacity})`, // optional
            strokeWidth: 2 // optional
        }
    ],
    legend: ["Capacity", "Target"] // optional
};

const chartConfig = {
    backgroundColor: "#C7D2FE",
    backgroundGradientFrom: "#C7D2FE",
    backgroundGradientTo: "#C7D2FE",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
        borderRadius: 16
    },
};

const WaterSummary = () => {
    return (
        <View style={styles.body}>
            <View style={styles.title}>
                <MaterialCommunityIcons
                    name='water-check'
                    size={30}
                    solid
                />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, }} >Water</Text>
                    <Text style={styles.text} >Average this week</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, }} >1954</Text>
                    <Text style={styles.text} > ml</Text>
                </View>
            </View>
            <View>
                <LineChart
                    data={data}
                    width={700}
                    height={220}
                    chartConfig={chartConfig}
                />
            </View>
        </View>
    );
}
export default WaterSummary;