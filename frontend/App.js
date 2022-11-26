import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTab from './src/components/BottomTabNavigator.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatProvider } from './src/components/checkList/hooks/useCheckList'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <ChatProvider>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tabs" component={BottomTab} />
          </Stack.Navigator>
        </ChatProvider>
      </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
