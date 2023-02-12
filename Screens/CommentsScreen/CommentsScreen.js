import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Alert,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
} from "react-native";
import { useState } from "react";

const COMMENTS = [
    {
        id: "1",
        img: require("../../img/userA.png"),
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 июня, 2020 | 08:40",
    },
    {
        id: "2",
        img: require("../../img/userB.png"),
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 июня, 2020 | 09:14",
    },
    {
        id: "3",
        img: require("../../img/userA.png"),
        text: "Thank you! That was very helpful!",
        date: "09 июня, 2020 | 09:20",
    },
];

function CommentsScreen() {
    const [comments, setComments] = useState(COMMENTS);
    const [commentData, setCommentData] = useState("");
    const [isFocusMail, setIsFocusMail] = useState(false);

    const onAddBtnClk = () => {
        Alert.alert(`Your comment!`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require("../../img/post1.png")}
            />
            <FlatList
                data={comments}
                renderItem={({ item }) => (
                    <>
                        <View
                            style={styles.commentContainer}
                        >
                            <Image source={item.img} />
                            <View
                                style={styles.textContainer}
                            >
                                <Text style={styles.text}>
                                    {item.text}
                                </Text>
                                <Text style={styles.date}>
                                    {item.date}
                                </Text>
                            </View>
                        </View>
                    </>
                )}
                keyExtractor={(item) => item.id}
            />

            <View>
                <TextInput
                    style={[
                        styles.inputLog,
                        isFocusMail &&
                            styles.inputFocusMail,
                    ]}
                    placeholder="Comment"
                    placeholderTextColor={"#BDBDBD"}
                    value={commentData}
                    onFocus={() => {
                        setIsFocusMail(true);
                    }}
                    onBlur={() => {
                        setIsFocusMail(false);
                    }}
                    onChangeText={(value) =>
                        setCommentData(value)
                    }
                />

                <TouchableOpacity
                    style={styles.btnAdd}
                    onPress={onAddBtnClk}
                    activeOpacity={0.7}
                >
                    <Image
                        source={require("../../img/send.png")}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
    },

    inputLog: {
        position: "relative",
        height: 50,
        width: 300,
        padding: 16,
        marginBottom: 16,
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 100,
        color: "#212121",
    },

    inputFocusMail: {
        borderColor: "#FF6C00",
    },
    btnAdd: {
        zIndex: 3,
        position: "absolute",
        right: 8,
        top: 8,
    },

    commentContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: 32,
        marginHorizontal: 16,
    },

    textContainer: {
        marginLeft: 32,
        width: 250,
    },

    text: {
        marginBottom: 8,
        fontFamily: "Roboto-Regular",
        fontSize: 13,
        lineHeight: 18,
        color: "#212121",
    },

    date: {
        fontFamily: "Roboto-Regular",
        fontSize: 10,
        lineHeight: 12,
        color: "#BDBDBD",
        textAlign: "right",
    },
});

export default CommentsScreen;
