import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../Constants/Colors";
import CreateOffersScreen from "../Screens/ProtectedScreen/CreateOffersScreen";
import SearchScreen from "../Screens/ProtectedScreen/SearchScreen";
import DashboardScreen from "../Screens/ProtectedScreen/DashboardScreen";
import ProfileContentScreen from "../Screens/ProtectedScreen/ProfileContentScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../Screens/ProtectedScreen/WelcomeScreen";
import SplashScreen from "./SplashScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";

import ProfileContent from "../Screens/ProtectedScreen/ProfileContentScreen";

const HomeTab = createMaterialBottomTabNavigator();

const HomeTapScreen = () => {
  return (
    <HomeTab.Navigator
      initialRouteName="DrawerNavigation"
      screenOptions={{ headerShown: false }}
      activeColor={Colors.Primary}
      barStyle={{ backgroundColor: "white" }}
    >
      <HomeTab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Offers"
        component={CreateOffersScreen}
        options={{
          tabBarLabel: "Offers",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />

      <HomeTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = (navigation) => (
  <HomeStack.Navigator headerinside={false}>
    <HomeStack.Screen name="Dashboad" component={DashboardScreen} />
    <HomeStack.Screen name="ProfileContent" component={ProfileContent} />
  </HomeStack.Navigator>
);

const Drawer = createDrawerNavigator();

const ProtectedScreen = () => {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Dashboard" component={HomeStackScreen} /> */}
      <Drawer.Screen name="Home" component={HomeTapScreen} />
      <HomeStack.Screen name="ProfileContent" component={ProfileContent} />
    </Drawer.Navigator>
  );
};

export default ProtectedScreen;
