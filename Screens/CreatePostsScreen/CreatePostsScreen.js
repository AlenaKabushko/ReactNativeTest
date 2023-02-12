import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Alert,
    TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { MyButton } from "../../components/Button";

const initState = {
    name: "",
    terrain: "",
};

function CreatePostsScreen() {
    const [formData, setFormData] = useState(initState);
    const [isFocusName, setIsFocusName] = useState(false);
    const [isFocusTerrain, setIsFocusTerrain] =
        useState(false);

    const onBtnClick = () => {
        Alert.alert(`Do something!`);
        setFormData(initState);
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Створити публикацію
                </Text>
            </View>

            <View style={styles.contentBox}>
                <Image
                    source={require("../../img/ContentBlock.png")}
                />
            </View>

            <View>
                <TextInput
                    style={[
                        styles.input,
                        isFocusName &&
                            styles.inputFocusName,
                    ]}
                    placeholder="Назва"
                    placeholderTextColor={"#BDBDBD"}
                    value={formData.name}
                    onFocus={() => {
                        setIsFocusName(true);
                    }}
                    onBlur={() => {
                        setIsFocusName(false);
                    }}
                    onChangeText={(value) =>
                        setFormData((prevState) => ({
                            ...prevState,
                            name: value,
                        }))
                    }
                />

                <TextInput
                    style={[
                        styles.input,
                        isFocusTerrain &&
                            styles.inputFocusTerrain,
                    ]}
                    placeholder="Місцевість"
                    placeholderTextColor={"#BDBDBD"}
                    value={formData.terrain}
                    onFocus={() => {
                        setIsFocusTerrain(true);
                    }}
                    onBlur={() => {
                        setIsFocusTerrain(false);
                    }}
                    onChangeText={(value) =>
                        setFormData((prevState) => ({
                            ...prevState,
                            terrain: value,
                        }))
                    }
                />

                <MyButton
                    title="Опублікувати"
                    onPress={onBtnClick}
                />
            </View>

            <View style={styles.trash}>
                <TouchableOpacity
                    onPress={onBtnClick}
                    activeOpacity={0.7}
                >
                    <Image
                        source={require("../../img/trash.png")}
                        style={styles.btnLogOutIcon}
                    />
                </TouchableOpacity>
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

    trash: {
        marginTop: 10,
        alignItems: "center",
    },

    title: {
        fontFamily: "Roboto-Medium",
        fontSize: 17,
        lineHeight: 22,
        textAlign: "center",
        letterSpacing: -0.408,
        color: "#212121",
    },

    contentBox: {
        marginTop: 32,
        marginBottom: 32,
    },

    input: {
        flexDirection: "row",
        height: 50,
        padding: 16,
        marginBottom: 16,
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 8,
        color: "#212121",
    },

    inputFocusName: {
        borderColor: "#FF6C00",
    },

    inputFocusTerrain: {
        borderColor: "#FF6C00",
    },
});

export default CreatePostsScreen;
