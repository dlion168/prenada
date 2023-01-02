// import { StyleSheet } from 'react-native';
import { useEffect } from "react";
import BottomTab from './src/components/BottomTabNavigator.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChecklistProvider } from './src/components/checkList/hooks/useCheckList'
import Login from './src/containers/Login.js';
import useUserState from './src/containers/hooks/useUserState.js';


const Stack = createNativeStackNavigator();

export default function App() {
  const { loginUser, storeData } = useUserState();
  console.log('loginUser'+loginUser)

  return (
    <ChecklistProvider>
      {
        loginUser == "" ?
          <Login
            storeData={storeData} />
          :
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Tabs" component={BottomTab} />
            </Stack.Navigator>
          </NavigationContainer>
      }
    </ChecklistProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
