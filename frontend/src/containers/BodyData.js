// import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OverviewScreen from '../components/body_data/OverviewScreen';
import SleepScreen from '../components/body_data/SleepScreen';
import WaterScreen from '../components/body_data/WaterScreen';
import SymptomScreen from '../components/body_data/SymptomScreen';
import { NavBar } from '../components/NavBar';
import { useEffect } from 'react';

const Tab = createMaterialTopTabNavigator();

const BodyData = () => {
    return (
        <>
            <NavBar
                centerText='w0' weekOnChange={(week) => {useEffect(() => {/*do something with week */})}}
                rightIcon='cog-s' rightIconOnPress={(event) => {}}
            />
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#F87171',
                    tabBarInactiveTintColor: '#9CA3AF',
                    tabBarIndicatorStyle: { backgroundColor: '#F87171' }
                }}>
                <Tab.Screen name="Overview" component={OverviewScreen} />
                <Tab.Screen name="Sleep" component={SleepScreen} />
                <Tab.Screen name="Water" component={WaterScreen} />
                <Tab.Screen name="Symptom" component={SymptomScreen} />
            </Tab.Navigator>
        </>
    );
}

export default BodyData;