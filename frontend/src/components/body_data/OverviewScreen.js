import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SleepSummary from './SleepSummary';
import WaterSummary from './WaterSummary';
import SymptomSummary from './SymptomSummary';

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFFFFF', // gray/50
    }
})

const OverviewScreen = () => {
    return (
        <ScrollView style={styles.body}>
            <SleepSummary />
            <WaterSummary />
            <SymptomSummary />
        </ScrollView>
    );
}

export default OverviewScreen;