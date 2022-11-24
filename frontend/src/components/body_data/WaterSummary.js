import { View, Text, Image, StyleSheet } from 'react-native';
import { LineChart } from "react-native-chart-kit";

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
    chart: {
        paddingBottom: 20
    }
})



const WaterSummary = ({ waterSummary }) => {
    const data = {
        labels: waterSummary.date,
        datasets: [
            {
                data: waterSummary.capacity,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
                strokeWidth: 2 // optional
            },
            {
                data: [2000, 2000, 2000],
                color: (opacity = 1) => `rgba(129, 140, 248, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Capacity", "Target"] // optional
    };

    const chartConfig = {
        backgroundColor: "#c7d2fe",
        backgroundGradientFrom: "#c7d2fe",
        backgroundGradientTo: "#c7d2fe",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16
        },
    };

    return (
        <View style={styles.body}>
            <View style={styles.title}>
                <Image
                    source={require('../../assets/image/BodyData/Potable water.png')}
                    style={{ height: 30, width: 30, }}
                />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, }} >Water</Text>
                    <Text style={styles.text} >Average this week</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, }} >{waterSummary.capacity.reduce((a, b) => a + b)} </Text>
                    <Text style={styles.text} > ml</Text>
                </View>
            </View>
            <View style={styles.chart}>
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