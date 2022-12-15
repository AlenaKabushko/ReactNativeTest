import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      {/* <ImageBackground
                source={require('./img/bg.jpg')}
                resizeMode="cover"
                style={styles.bgImage} /> */}
      
      <RegistrationScreen />
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
      bgImage: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
