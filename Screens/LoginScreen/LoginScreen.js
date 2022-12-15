import { StyleSheet, Text, View, Image, TextInput, Button, Alert, } from "react-native";
import { useState } from 'react'


function LoginScreen() {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const mailHandler = (text) => setMail(text);
    const passwordHandler = (text) => setPassword(text);

    const onLogin = () => {
        Alert.alert("Привіт", `${mail} + ${password}`);
    };

    return (
        
        <View>
            <Image style={styles.image}/>
            
            <Text>
                Увійти
            </Text>

            <View>
                
                <TextInput style={styles.input}
                    placeholder='Адреса електронної пошти'
                    value={mail}
                    onChangeText={mailHandler} />
                
                <TextInput style={styles.input}
                    placeholder='Пароль'
                    value={password}
                    onChangeText={passwordHandler} />
                
                <Button
                    title='Увійти'
                    onPress={onLogin}
                />
            </View>
            
            
            
            <Text>Немає облікового запису? Зареєструватись</Text>
        </View>
    )
};

const styles = StyleSheet.create({

    image: {
        borderWidth: 1,        
        borderColor: "#61dafb",
        width: 50,
        height: 50
    },
    input: {
        borderWidth: 1,
        
        borderColor: "#61dafb",
    }

});

export default LoginScreen;