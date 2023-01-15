import {
    StyleSheet,
    Text,
    Image,    
    SafeAreaView,
    FlatList,
} from "react-native";
import { useState } from 'react';

    const POSTS = [
        {
            id: "1",
        },
        {
            id: "2",
        },
        {
            id: "3",
        },
    ];

function ProfileScreen() {
    const [posts, setPosts] = useState(POSTS);

    return (
        <SafeAreaView style={styles.container}>
            
            <Image source={require('../../img/UserAvatar.png')} style={styles.photo} />
            
            <Text style={styles.title}>
                Natali Romanova
            </Text>
            
            <FlatList
                data={posts}
                renderItem={({ item }) =>
                    <Image source={require('../../img/post2.png')}
                        style={styles.flatList} />}
                keyExtractor={(item) => item.id}                
            />
        </SafeAreaView>
    )
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
        width: 120,
        height: 120,
    },

    title: {
        marginVertical: 32,
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: '#212121',
    },
    
    flatList: {
        marginBottom: 10,
    }, 

});

export default ProfileScreen;