import { StyleSheet, Text, View } from 'react-native';
// import { AsyncStorage } from '@react-native-community/async-storage';
import BottomTab from './src/components/BottomTabNavigator.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChecklistProvider } from './src/components/checkList/hooks/useCheckList'
import Login from './src/containers/Login.js';


const Stack = createNativeStackNavigator();

export default function App() {

  // const storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem(
  //       '@MySuperStore:key',
  //       'I like to save it.',
  //     );
  //   } catch (error) {
  //     // Error saving data
  //   }
  // };

  // const retrieveData = async () => {
  //   let id = "";
  //   try {
  //     const value = await AsyncStorage.getItem('TASKS');
  //     if (value !== null) {
  //       // We have data!!
  //       console.log(value);
  //       id = "ok"
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  //   return id;
  // };

  return (
    <Login />
    // <ChecklistProvider>
    //   <NavigationContainer>
    //     <Stack.Navigator screenOptions={{ headerShown: false }}>
    //       <Stack.Screen name="Tabs" component={BottomTab} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </ChecklistProvider>
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
