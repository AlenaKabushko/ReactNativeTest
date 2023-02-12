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
        img: require("../../img/post1.png"),
        locat: "Україна",
        text: "Ліс",
        comments: "8",
        likes: "153",
    },
    {
        id: "2",
        img: require("../../img/post2.png"),
        locat: "Україна",
        text: "Захід сонця на Чорному морі",
        comments: "3",
        likes: "280",
    },
    {
        id: "3",
        img: require("../../img/post3.png"),
        locat: "Італія",
        text: "Старий будиночок у Венеції",
        comments: "50",
        likes: "250",
    },
];

function ProfileScreen({ navigation }) {
    const [posts, setPosts] = useState(POSTS);

    const onLogOutBtnClk = () => {
        Alert.alert(`Bye!`);
    };

    const likes = () => Alert.alert("Like!");

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require("../../img/UserAvatar.png")}
                style={styles.photo}
            />

            <Text style={styles.title}>
                Natali Romanova
            </Text>

            <TouchableOpacity
                style={styles.btnLogOut}
                onPress={onLogOutBtnClk}
                activeOpacity={0.7}
            >
                <Image
                    source={require("../../img/log-out.png")}
                    style={styles.btnLogOutIcon}
                />
            </TouchableOpacity>

            <FlatList
                data={posts}
                renderItem={({ item }) => (
                    <>
                        <Image
                            source={item.img}
                            style={styles.flatList}
                        />
                        <Text style={styles.text}>
                            {item.text}
                        </Text>

                        <View style={styles.icons}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate(
                                        "CommentsScreen"
                                    )
                                }
                            >
                                <View style={styles.btnBox}>
                                    <Image
                                        source={require("../../img/message-circle.png")}
                                        style={
                                            styles.buttonsIcon
                                        }
                                    />
                                    <Text
                                        style={styles.text}
                                    >
                                        {item.comments}
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={likes}
                            >
                                <View style={styles.btnBox}>
                                    <Image
                                        source={require("../../img/thumbs-up.png")}
                                        style={
                                            styles.buttonsIcon
                                        }
                                    />
                                    <Text
                                        style={styles.text}
                                    >
                                        {item.likes}
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate(
                                        "MapScreen"
                                    )
                                }
                            >
                                <View style={styles.btnBox}>
                                    <Image
                                        source={require("../../img/map-pin.png")}
                                        style={
                                            styles.buttonsIcon
                                        }
                                    />
                                    <Text
                                        style={
                                            styles.location
                                        }
                                        onPress={() =>
                                            "RegistrationScreen"
                                        }
                                    >
                                        {item.locat}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
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

    icons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
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

    btnBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },

    btnLogOut: {
        position: "absolute",
        right: 16,
        top: 22,
    },
});

export default ProfileScreen;
