import {
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    FlatList,
    View,
    Alert,
    TouchableOpacity,
} from "react-native";
import { useState } from "react";

const POSTS = [
    {
        id: "1",
        locat: "Україна",
        text: "Ліс",
        comments: "8",
        likes: "153",
    },
    {
        id: "2",
        locat: "Україна",
        text: "Захід сонця на Чорному морі",
        comments: "3",
        likes: "280",
    },
    {
        id: "3",
        locat: "Італія",
        text: "Старий будиночок у Венеції",
        comments: "50",
        likes: "250",
    },
];

function ProfileScreen({ navigation }) {
    const [posts, setPosts] = useState(POSTS);

    const likes = () => Alert.alert('Like!')

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require("../../img/UserAvatar.png")}
                style={styles.photo}
            />

            <Text style={styles.title}>
                Natali Romanova
            </Text>

            <FlatList
                data={posts}
                renderItem={({ item }) => (
                    <>
                        <Image
                            source={require("../../img/post2.png")}
                            style={styles.flatList}
                        />
                        <Text style={styles.text}>
                            {item.text}
                        </Text>

                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate(
                                    "CommentsScreen"
                                )
                            }
                        >
                            <Image
                                source={require("../../img/message-circle.png")}
                                style={styles.buttonsIcon}
                            />
                            <Text style={styles.text}>
                                {item.comments}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={likes}
                        >
                            <Image
                                source={require("../../img/thumbs-up.png")}
                                style={styles.buttonsIcon}
                            />
                            <Text style={styles.text}>
                                {item.likes}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate(
                                    "MapScreen"
                                )
                            }
                        >
                            <Image
                                source={require("../../img/map-pin.png")}
                                style={styles.buttonsIcon}
                            />
                            <Text
                                style={styles.location}
                                onPress={() =>
                                    "RegistrationScreen"
                                }
                            >
                                {item.locat}
                            </Text>
                        </TouchableOpacity>
                    </>
                )}
                keyExtractor={(item) => item.id}
            />

            <View></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        justifyContent: "flex-end",
    },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
    },

    photo: {
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
        width: 60,
        height: 60,
    },

    title: {
        marginVertical: 16,
        fontFamily: "Roboto-Medium",
        fontSize: 24,
        lineHeight: 25,
        textAlign: "center",
        letterSpacing: 0.01,
        color: "#212121",
    },

    flatList: {
        marginBottom: 10,
    },

    text: {
        marginBottom: 8,
        fontFamily: "Roboto-Medium",
        fontSize: 16,
        lineHeight: 19,
        color: "#212121",
    },

    location: {
        marginBottom: 32,
        textAlign: "left",
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        color: "#212121",
    },
});

export default ProfileScreen;
