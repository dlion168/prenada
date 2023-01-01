import { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Button } from 'react-native';
import axios from '../api';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F87171',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    logo: {
        padding: 20,
    },
    inputView: {
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        paddingBottom: 10,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    input: {
        height: 40,
        width: 150,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
    },
});

const Login = () => {
    const [accountId, setAccountId] = useState("");
    const [pwd, setPwd] = useState("");
    const login = async () => {
        const { data: { message }, } = await axios.post('/login', {
            accountId,
            pwd
        });

        console.log(message)
        //set localstorage
    };

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ height: 143, width: 123 }}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    value={accountId}
                    placeholder="Account ID"
                    keyboardType="string"
                    onChangeText={(value) => setAccountId(value)}
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={pwd}
                    placeholder="Password"
                    keyboardType="string"
                    onChangeText={(value) => setPwd(value)}
                />
                <Button
                    onPress={login}
                    title="LOGIN"
                    color="#F87171"
                    accessibilityLabel="LOGIN"
                />
            </View>
        </View>
    );
}

export default Login;