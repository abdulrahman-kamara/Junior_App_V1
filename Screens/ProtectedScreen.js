import React from "react";
import { Button, StyleSheet, View } from "react-native";
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
import CreateProfileJunior from "../Screens/CreateProfileJunior";
import CreateProfileEnterprise from "../Screens/CreateProfileEnterprise";
import CreateOffers from "../Screens/CreateOffers";

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="Offers"
      component={OffersScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>

    <Stack.Screen
      name="Junior"
      component={CreateProfileJunior}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Enterprise"
      component={CreateProfileEnterprise}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>;
};

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
        component={OffersScreen}
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
        component={CreateProfileJunior}
        options={{
          tabBarLabel: "Create",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <HomeTab.Screen
        name="CreatOffers"
        component={CreateProfileEnterprise}
        options={{
          tabBarLabel: "CreateE",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <HomeTab.Screen
        name="CreateOffer"
        component={CreateOffers}
        options={{
          tabBarLabel: "Offer",
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

const ProtectedScreen = ({ navigation }) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTapScreen} />

      <HomeStack.Screen
        name="ProfileContent"
        component={ProfileContent}
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                color={Colors.Secondry}
                size={25}
                onPress={() => navigation.navigate("CreateProfileJunior")}
              />
            </View>
          ),
        })}
      />

      <Drawer.Screen
        name="CreateProfileEnterprise"
        component={CreateProfileEnterprise}
      />
    </Drawer.Navigator>
  );
};

export default ProtectedScreen;
