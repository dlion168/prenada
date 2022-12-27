import { View, Text, Image, StyleSheet } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        backgroundColor: '#faf5ff',
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
    numText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    text: {
        color: '#6B7280',
    },
    chart: {
        paddingBottom: 20
    }
})

const SleepSummary = ({ sleepSummary }) => {
    const data = {
        labels: sleepSummary.date,
        datasets: [
            {
                data: sleepSummary.hours,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
                strokeWidth: 2 // optional
            },
        ],
        legend: ["Hours"] // optional
    };

    const chartConfig = {
        backgroundColor: "#e9d5ff",
        backgroundGradientFrom: "#e9d5ff",
        backgroundGradientTo: "#e9d5ff",
        decimalPlaces: 1, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16
        },
    };

    const sum = sleepSummary.hours.reduce((a, b) => a + b, 0);
    const avg = (sum / 7) || 0;

    return (
        <View style={styles.body}>
            <View style={styles.title}>
                <MaterialCommunityIcons
                    name='power-sleep'
                    size={30}
                    solid
                />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, }} >Sleep</Text>
                    <Text style={styles.text} >Average this week</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.numText} >{avg} </Text>
                    <Text style={styles.text} > hr </Text>
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
export default SleepSummary;