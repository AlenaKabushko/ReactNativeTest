import React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    View,
    ImageBackground,
} from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import Home from "./Screens/Home/Home";
import CommentsScreen from "./Screens/CommentsScreen/CommentsScreen";
import MapScreen from "./Screens/MapScreen/MapScreen";

const MainStack = createStackNavigator();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({
                    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
                    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    if (!appIsReady) {
        return undefined;
    } else {
        SplashScreen.hideAsync();
    }

    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="LoginScreen">
                <MainStack.Screen
                    name="RegistrationScreen"
                    component={RegistrationScreen}
                />
                <MainStack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                />
                <MainStack.Screen
                    name="Home"
                    component={Home}
                />
                <MainStack.Screen
                    name="CommentsScreen"
                    component={CommentsScreen}
                />
                <MainStack.Screen
                    name="MapScreen"
                    component={MapScreen}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
