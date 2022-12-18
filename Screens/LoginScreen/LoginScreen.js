import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";
import { useState } from 'react';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MyButton from "../components/Button";

const initState = {
    mail: '',
    password: '',
}

// const loadApplication = async () => {
//   await Font.loadAsync({
//       "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
//       "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
//   });
// };

function LoginScreen() {

    const [formData, setFormData] = useState(initState);
    const [iasReady, setIasReady] = useState(false);

    // if (!iasReady) {
    // return (
    //   <AppLoading
    //     startAsync={loadApplication}
    //     onFinish={() => setIasReady(true)}
    //     onError={console.warn}
    //   />
    // );
    // }
    
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.containerLog}>
            
            <Text style={styles.title}>
                Увійти
            </Text>

            <View style={styles.inputRegBox}>
                
                <TextInput style={styles.inputLog}
                    placeholder='Адреса електронної пошти'
                    onChangeText={(value) =>
                                setFormData((prevState) => ({ ...prevState, mail: value }))} />
                
                <TextInput style={styles.inputLog}
                    placeholder='Пароль'
                    secureTextEntry={true}
                    onChangeText={(value) =>
                                setFormData((prevState) => ({ ...prevState, password: value }))} />
                
                <MyButton
                    title='Увійти'
                    onPress={() => Keyboard.dismiss()}
                />
            </View>
            
            <Text style={styles.bottomText}>
                Немає облікового запису? Зареєструватись
            </Text>
                </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    containerLog: {
        alignSelf: "stretch",
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 144,
        backgroundColor: "#ffffff",
    },

    title: {
        marginBottom: 32,
        fontFamily: 'Roboto-Medium',
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
        fontFamily: 'Roboto-Regular',
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
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#1B4371',
    },
});

export default LoginScreen;