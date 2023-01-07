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

function PostsScreen({ navigation }) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Публикации</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        // paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#ffffff",
    },

    title: {
        //marginBottom: 32,
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        lineHeight: 22,
        textAlign: 'center',
        letterSpacing: -0.408,
        color: '#212121',
    },

    // inputLog: {
    //     flexDirection:'row' ,
    //     height: 50,
    //     padding: 16,
    //     marginBottom: 16,
    //     fontFamily: 'Roboto-Regular',
    //     fontSize: 16,
    //     lineHeight: 19,
    //     backgroundColor: '#F6F6F6',
    //     borderWidth: 1,        
    //     borderColor: "#E8E8E8",
    //     borderRadius: 8,
    //     color: '#212121',
    // },

    // inputFocusMail: {
    //     borderColor: "#FF6C00",
    // },

    // inputFocusPassword: {
    //     borderColor: "#FF6C00",
    // },

    // bottomText: {
    //     marginTop: 16,
    //     fontFamily: 'Roboto-Regular',
    //     fontSize: 16,
    //     lineHeight: 19,
    //     textAlign: 'center',
    //     color: '#1B4371',
    // },
});

export default PostsScreen;