import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTab from './src/components/BottomTabNavigator.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChecklistProvider } from './src/components/checkList/hooks/useCheckList'
import Login from './src/containers/Login.js';


const Stack = createNativeStackNavigator();

export default function App() {
  const [loginUser, setLoginUser] = useState("");

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('loginUser', value)
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('loginUser')
      if(value !== null || value !=="") {
        setLoginUser(value)
      }
    } catch(e) {
      // error reading value
    }
  }

  useEffect(()=>{
    getData();
  },[]);

  return (<>
    {
      loginUser == "" ?
        <Login
          setLoginUser={setLoginUser}
          storeData={storeData} />
        :
        <ChecklistProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Tabs" component={BottomTab} />
            </Stack.Navigator>
          </NavigationContainer>
        </ChecklistProvider>
    }
  </>
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
