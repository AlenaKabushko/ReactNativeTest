import { StyleSheet, Text, View, Image, TextInput, Button, Alert, } from "react-native";
import { useState } from 'react'


function RegistrationScreen() {
    const [login, setLogin] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const loginHandler = (text) => setLogin(text);
    const mailHandler = (text) => setMail(text);
    const passwordHandler = (text) => setPassword(text);

const onLogin = () => {
    Alert.alert("Успіх", `${mail} + ${password}`);
  };

    return (
        
        <View>
            
            
            <Image style={styles.image}/>
            
            <Text>
                Реєстрація
            </Text>

            <View>
                <TextInput style={styles.input}
                placeholder='Логін'
                value={login}
                onChangeText={loginHandler} />
            
                <TextInput style={styles.input}
                    placeholder='Адреса електронної пошти'
                    value={mail}
                    onChangeText={mailHandler} />
                
                <TextInput style={styles.input}
                    placeholder='Пароль'
                    value={password}
                    onChangeText={passwordHandler} />
                
                <Button
                    title='Зареєструватись'
                    onPress={onLogin}
                />
            </View>
            
            
            
            <Text>Вже є обліковий запис? Увійти</Text>
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
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: "#eaeaea"
//   },
//   title: {
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     borderColor: "#20232a",
//     borderRadius: 6,
//     backgroundColor: "#61dafb",
//     color: "#20232a",
//     textAlign: "center",
//     fontSize: 30,
//     fontWeight: "bold"
//   }
});

export default RegistrationScreen;