import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../Constants/Colors";
import OffersScreen from "./ProtectedScreen/OffersScreen";
import DashboardScreen from "../Screens/ProtectedScreen/DashboardScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatOffersScreen from "../Screens/ProtectedScreen/CreatOffersScreen";
import ApplyScreen from "../Screens/ProtectedScreen/ApplyScreen";
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
        name="Apply"
        component={ApplyScreen}
        options={{
          tabBarLabel: "Apply",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />

      <HomeTab.Screen
        name="CreatOffersScreen"
        component={CreatOffersScreen}
        options={{
          tabBarLabel: "Create",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const ProtectedScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTapScreen} />
      <HomeStack.Screen name="ProfileContent" component={ProfileContent} />
    </Drawer.Navigator>
  );
};

export default ProtectedScreen;
