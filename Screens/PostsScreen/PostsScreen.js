import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TouchableOpacity,
} from "react-native";

function PostsScreen() {
    const onLogOutBtnClk = () => {
        Alert.alert(`Bye!`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Публикації</Text>

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
            </View>

            <View style={styles.userBox}>
                <Image
                    source={require("../../img/UserAvatar.png")}
                    style={styles.userIcon}
                />

                <View style={styles.userTextBox}>
                    <Text style={styles.userName}>
                        Natali Romanova
                    </Text>
                    <Text style={styles.userMail}>
                        email@example.com
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 10,
        backgroundColor: "#ffffff",
    },

    titleContainer: {
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
    },

    btnLogOut: {
        position: "absolute",
        right: 10,
        top: 0,
    },

    title: {
        fontFamily: "Roboto-Medium",
        fontSize: 17,
        lineHeight: 22,
        textAlign: "center",
        letterSpacing: -0.408,
        color: "#212121",
    },

    btnLogOutIcon: {
        width: 24,
        height: 24,
    },

    userBox: {
        flexDirection: "row",
        marginTop: 32,
    },

    userTextBox: {
        flexDirection: "column",
        marginLeft: 8,
        justifyContent: "center",
    },

    userName: {
        fontFamily: "Roboto-Medium",
        fontSize: 13,
        lineHeight: 15,
        color: "#212121",
    },

    userMail: {
        fontFamily: "Roboto-Regular",
        fontSize: 11,
        lineHeight: 13,
        color: "rgba(33, 33, 33, 0.8)",
    },
});

export default PostsScreen;
