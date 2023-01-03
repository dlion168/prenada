import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
    const [loginUser, setLoginUser] = useState("");

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('loginUser', value)
            console.log('test' + value)
            setLoginUser(value)
        } catch (e) {
            // saving error
        }
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('loginUser')
            if (value !== null || value !== "") {
                setLoginUser(value)
            }
        } catch (e) {
            // error reading value
        }
    }

    // const removeValue = async () => {
    //     try {
    //         await AsyncStorage.removeItem('loginUser')
    //         setLoginUser("")
    //     } catch (e) {
    //         // remove error
    //     }
    // }

    // useEffect(() => {
    //     getData();
    // }, [loginUser]);

    return { loginUser, setLoginUser, storeData, getData };
}
