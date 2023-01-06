import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import { useState } from 'react';

const MainStack = createStackNavigator();

export default function App() {
  
  return (
    <View style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        
        <ImageBackground
          source={require('./img/bg.jpg')}
          resizeMode="cover"
        style={styles.bgImage}>
        
          <NavigationContainer>
            <MainStack.Navigator initialRouteName="LoginScreen">
              <MainStack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
              <MainStack.Screen name="LoginScreen" component={LoginScreen} />
            </MainStack.Navigator>
          </NavigationContainer>  

         </ImageBackground>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    },  
});
