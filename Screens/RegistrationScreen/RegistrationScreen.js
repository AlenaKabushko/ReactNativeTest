import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Alert,
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import { useState } from 'react';
import { MyButton } from "../../components/Button";

const initState = {
    login: '',
    mail: '',
    password: '',
};

function RegistrationScreen({ navigation }) {
    const [formData, setFormData] = useState(initState);
    const [isFocusMail, setIsFocusMail] = useState(false);
    const [isFocusPassword, setIsFocusPassword] = useState(false);
    const [isFocusLogin, setIsFocusLogin] = useState(false);

    const onAddBtnClk = () => {
        Alert.alert(`Add photo, please`)
    }

    const onBtnClick = () => {
        navigation.navigate("Home")
        setFormData(initState)
    }

    return (
    <View style={styles.container}>
        <ImageBackground
            source={require('../../img/bg.jpg')}
            resizeMode="cover"
            style={styles.bgImage}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    
                    <View style={styles.containerReg}>
                        <Image style={styles.photo} />
                        <TouchableOpacity
                            style={styles.btnAdd}
                            onPress={onAddBtnClk}
                            activeOpacity={0.7}>
                            <Image source={require('../../img/addPhoto.png')}
                                style={styles.btnAddText} />
                        </TouchableOpacity>
                        <Text style={styles.title}>
                            Реєстрація
                        </Text>
                    <View>                        
                        <View >
                            <TextInput style={[styles.inputReg, isFocusLogin && styles.inputFocusLogin]}
                                placeholder='Логін'
                                placeholderTextColor={'#BDBDBD'}
                                value={formData.login}
                                onFocus={() => {setIsFocusLogin(true)}}
                                onBlur={() => {setIsFocusLogin(false)}}
                                onChangeText={(value) =>
                                setFormData((prevState) => ({ ...prevState, login: value }))} 
                            />
                            <TextInput style={[styles.inputReg, isFocusMail && styles.inputFocusMail]}
                                placeholder='Адреса електронної пошти'
                                placeholderTextColor={'#BDBDBD'}
                                value={formData.mail}
                                onFocus={() => {setIsFocusMail(true)}}
                                onBlur={() => {setIsFocusMail(false)}}
                                onChangeText={(value) =>
                                setFormData((prevState) => ({ ...prevState, mail: value }))} 
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
                            />
                        </View>
            
                        <MyButton
                            title='Зареєструватись'
                            onPress={onBtnClick}
                        />
                    </View>
                <Text style={styles.bottomText} onPress={() => navigation.navigate("LoginScreen")}>
                    Вже є обліковий запис? Увійти
                </Text>
            </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </ImageBackground>
    </View> 
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    bgImage: {
        flex: 1,
        justifyContent: "flex-end",
    }, 
    
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

    btnAdd: {
    zIndex:3,
    position: "absolute",
    left: 233,
    top: 25,
    width: 25,
    height: 25,
    borderColor: '#FF6C00',
    borderWidth: 1,
    borderRadius: 50,
    textAlign: 'center'
    },

    btnAddText:  {
    position: "absolute",
    left: 5,
    top: 5,
    width: 13,
    height: 13,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FF6C00'
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

    inputReg: {
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
        color: '#212121',
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
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#1B4371',
    },
});

export default RegistrationScreen;