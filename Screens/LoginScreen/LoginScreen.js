import { StyleSheet, Text, View, Image, TextInput, Button, Alert, } from "react-native";
import { useState } from 'react';
import MyButton from "../components/Button";


function LoginScreen() {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const mailHandler = (text) => setMail(text);
    const passwordHandler = (text) => setPassword(text);

    const onLogin = () => {
        Alert.alert("Привіт", `${mail} + ${password}`);
    };

    return (
        
        <View style={styles.containerLog}>
            
            <Text style={styles.title}>
                Увійти
            </Text>

            <View style={styles.inputRegBox}>
                
                <TextInput style={styles.inputLog}
                    placeholder='Адреса електронної пошти'
                    value={mail}
                    onChangeText={mailHandler} />
                
                <TextInput style={styles.inputLog}
                    placeholder='Пароль'
                    value={password}
                    secureTextEntry={true}
                    onChangeText={passwordHandler} />
                
                <MyButton
                    title='Увійти'
                    onPress={onLogin}
                />
            </View>
            
            <Text style={styles.bottomText}>
                Немає облікового запису? Зареєструватись
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    containerLog: {
        alignSelf: "stretch",
        // width: 100%,
        // height: 549,
        // flex: 1,
        // marginHorizontal: 16,
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 144,
        backgroundColor: "#ffffff",
    },

    title: {
        marginBottom: 32,
        // font-family: 'Roboto';
        // font-weight: 500;
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: '#212121',
    },

    inputLog: {
        flexDirection:'row' ,
        height: 50,
        padding: 16,
        marginBottom: 16,
        // font-family: 'Roboto';
        fontSize: 16,
        lineHeight: 19,
        backgroundColor: '#F6F6F6',
        borderWidth: 1,        
        borderColor: "#E8E8E8",
        borderRadius: 8,
        color: '#BDBDBD',
    },

    bottomText: {
        marginTop: 16,
        // font-family: 'Roboto';
        // font-style: normal;
        // font-weight: 400;
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#1B4371',
    },
});

export default LoginScreen;