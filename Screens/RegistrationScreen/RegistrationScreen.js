import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput, 
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";
import { useState } from 'react'
import { MyButton, AddPhotoButton } from "../components/Button";


const initState = {
    login: '',
    mail: '',
    password: '',
}

function RegistrationScreen() {
    //const [isShowKB, setIsShowKB] = useState(false);
    const [formData, setFormData] = useState(initState)
    const [isFocusMail, setIsFocusMail] = useState(false)
    const [isFocusPassword, setIsFocusPassword] = useState(false)
    const [isFocusLogin, setIsFocusLogin] = useState(false)

    const kBHide = () => {
        
        Keyboard.dismiss();
        console.log(formData);
    }

    return (
        <TouchableWithoutFeedback onPress={kBHide}>
        <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.containerReg}>
            
                    <Image style={styles.photo} />
                    <AddPhotoButton onPress={Keyboard.dismiss()}/>
            
            <Text style={styles.title}>
                Реєстрація
            </Text>
            
            <View>
                    {/* style={{ marginBottom: isShowKB ? 32 : 0 }}
                    style={{...styles.containerReg, marginBottom: isShowKB ? 0 : 100}} */}
                    <View >
                        <TextInput style={[styles.inputReg, isFocusLogin && styles.inputFocusLogin]}
                                placeholder='Логін'
                                placeholderTextColor={'#BDBDBD'}
                                value={formData.login}
                                onFocus={() => {setIsFocusLogin(true)}}
                            onBlur={() => {setIsFocusLogin(false)}}
                            onChangeText={(value) =>
                                setFormData((prevState) => ({ ...prevState, login: value }))} 
                            // onFocus={()=>setIsShowKB(true)}
                            />
            
                        <TextInput style={[styles.inputReg, isFocusMail && styles.inputFocusMail]}
                            placeholder='Адреса електронної пошти'
                            placeholderTextColor={'#BDBDBD'}
                                value={formData.mail}
                                onFocus={() => {setIsFocusMail(true)}}
                            onBlur={() => {setIsFocusMail(false)}}
                            onChangeText={(value) =>
                                setFormData((prevState) => ({ ...prevState, mail: value }))} 
                            // onFocus={()=>setIsShowKB(true)}
                            />
                        
                        <TextInput style={[styles.inputReg, isFocusPassword && styles.inputFocusPassword]}
                                placeholder='Пароль'
                                placeholderTextColor={'#BDBDBD'}
                                value={formData.password}
                                onFocus={() => {setIsFocusPassword(true)}}
                            onBlur={() => {setIsFocusPassword(false)}}
                            secureTextEntry={true}
                            onChangeText={(value) =>
                                setFormData((prevState) => ({ ...prevState, password: value }))} 
                            // onFocus={()=>setIsShowKB(true)}
                            />
                    </View>
                    
                
                
                <MyButton
                    title='Зареєструватись'
                    onPress={kBHide}
                />
                </View>
                
            
            <Text style={styles.bottomText}>
                Вже є обліковий запис? Увійти
            </Text>
        </View>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    containerReg: {
        alignSelf: "stretch",
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

    inputFocusLogin: {
        borderColor: "#FF6C00",
    },

    inputFocusMail: {
        borderColor: "#FF6C00",
    },

    inputFocusPassword: {
        borderColor: "#FF6C00",
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