import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { FAB } from 'react-native-elements';
import SleepSummary from './SleepSummary';
import WaterSummary from './WaterSummary';
import SymptomSummary from './SymptomSummary';
import AddScreen from './AddScreen';

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFFFFF', // gray/50
    },
    addButton: {
        fontSize: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
        position: 'absolute',
        bottom: 10,
        right: 10,
    }
})

const OverviewScreen = () => {
    return (
        <>
            {/* <ScrollView style={styles.body}>
                <SleepSummary />
                <WaterSummary />
                <SymptomSummary />
            </ScrollView>
            <FAB
                style={styles.addButton}
                title="+"
                placement="right"
                color="#F87171" /> */}
            <AddScreen />
        </>
    );
}

export default OverviewScreen;