import { StyleSheet, Text, View, Image, TextInput, Alert, Platform, KeyboardAvoidingView } from "react-native";
import { useState } from 'react'
import MyButton from "../components/Button";

const initState = {
    login: '',
    mail: '',
    password: '',
}

function RegistrationScreen() {
    const [isShowKB, setIsShowKB] = useState(false);
    const [formData, setFormData] = useState(initState)

    const kBHide = () => {
        setIsShowKB = false;
        setFormData(initState);
    }

    const onLogin = () => {
        Alert.alert("Успіх", `${formData.login}, ${formData.mail}, ${formData.password}`);
    };

    return (
        
        <View style={styles.containerReg}>
            
            <Image style={styles.photo}/>
            
            <Text style={styles.title}>
                Реєстрація
            </Text>

            

            <View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    
                    <View>
                        <TextInput style={styles.inputReg}
                            placeholder='Логін'
                            value={formData.login}
                            onChangeText={(value) =>
                                setFormData((prevState) => ({ ...prevState, login: value }))} 
                            onFocus={()=>setIsShowKB(true)}/>
            
                        <TextInput style={styles.inputReg}
                            placeholder='Адреса електронної пошти'
                            value={formData.mail}
                            onChangeText={(value) =>
                                setFormData((prevState) => ({ ...prevState, mail: value }))} 
                            onFocus={()=>setIsShowKB(true)}/>
                        
                        <TextInput style={styles.inputReg}
                            placeholder='Пароль'
                            value={formData.password}
                            secureTextEntry={true}
                            onChangeText={(value) =>
                                setFormData((prevState) => ({ ...prevState, password: value }))} 
                            onFocus={()=>setIsShowKB(true)}/>
                    </View>
                    
                </KeyboardAvoidingView>
                
                <MyButton
                    title='Зареєструватись'
                    onPress={onLogin}
                />
                </View>
                
            
            <Text style={styles.bottomText}>
                Вже є обліковий запис? Увійти
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    containerReg: {
        alignSelf: "stretch",
        // width: 100%,
        // height: 549,
        // flex: 1,
        // marginHorizontal: 16,
        paddingHorizontal: 16,
        paddingTop: 92,
        paddingBottom: 78,
        backgroundColor: "#ffffff",
    },

    photo: {
        position: 'absolute',
        top: -60,
        left: 126,       
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
        width: 120,
        height: 120,
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

    // inputRegBox: {
    //     // flex: 1,
    //     gap: 16,
    // },

    inputReg: {
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

export default RegistrationScreen;