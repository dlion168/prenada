import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F9FAFB', // gray/50
    },
    block: {
        margin: 24,
    },
    pad: {
        paddingTop: 8,
        paddingBottom: 8,
    },
    titleRow: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    titleMore: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#F87171',
    },
    checklist: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px',

        position: 'absolute',
        width: '327px',
        height: '424px',
        left: '24px',
        top: '128px',
    },
})

const SymptomScreen = () => {
    return (
        <View style={styles.block} >
            <View style={styles.titleRow} >
                <Text style={styles.title} >Body Data</Text>
                <View style={{ flex: 1 }} />
                <Text style={styles.titleMore} >See All</Text>
            </View>
        </View>
    );
}

export default SymptomScreen;