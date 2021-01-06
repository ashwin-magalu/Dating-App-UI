import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import TopPicksScreen from "../screens/TopPicksScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="swipe" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="TopPicks"
        component={TopPicksScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="message" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="verified-user" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
