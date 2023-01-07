
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

import PostsScreen from "../PostsScreen/PostsScreen";

function Home({ navigation }) {
    
    return (
        <PostsScreen/>
    )
}

export default Home;