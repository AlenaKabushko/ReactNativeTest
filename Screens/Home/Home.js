import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import {
    Image,    
} from "react-native";

import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
// import CommentsScreen from "../CommentsScreen/CommentsScreen";

const Tabs = createBottomTabNavigator();
const MainStack = createStackNavigator();

function Home() {
  return (

        <Tabs.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let icon;
              if (route.name === "Posts") {
                icon = require(`../../img/grid.png`);
              } else if (route.name === "Create") {
                icon = require(`../../img/new.png`);
              } else if (route.name === "Profile") {
                icon = require(`../../img/user.png`);
              }
              return <Image source={icon} />;
            },
            "tabBarActiveTintColor": "tomato",
            "tabBarInactiveTintColor": "gray",
            "tabBarStyle": [{ "display": "flex" }, null]
        })}>
            <Tabs.Screen name="Posts" component={PostsScreen} />
            <Tabs.Screen name="Create" component={CreatePostsScreen} />
            <Tabs.Screen name="Profile" component={ProfileScreen} />
      </Tabs.Navigator>

    )
}

export default Home;