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
    TouchableOpacity
} from "react-native";
import { useEffect, useState } from 'react';
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

function CreatePostsScreen({ navigation }) {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() =>
    { 
        async function prepare() {
            try {
                await Font.loadAsync({
                "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
                "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
            })
            } catch (e) {
                console.warn(e)
            } finally {
                setAppIsReady(true)
            }
        }
        prepare()
    }, [])

    if (!appIsReady) {
        return undefined
    } else {
        SplashScreen.hideAsync()
    }

    return 
}