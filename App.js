import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, Platform, KeyboardAvoidingView } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import { useState } from 'react';

export default function App() {
  
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <ImageBackground
        source={require('./img/bg.jpg')}
        resizeMode="cover"
        style={styles.bgImage}>
        
        {/* <LoginScreen /> */}
        <RegistrationScreen />        
        
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
