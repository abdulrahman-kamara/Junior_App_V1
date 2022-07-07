import React, { useContext } from "react";
import { Button, StyleSheet, View } from "react-native";
import Colors from "../Constants/Colors";
import JuniorFeed from "../Screens/ProtectedScreen/JuniorFeed";
import EntrepriseFeed from "../Screens/ProtectedScreen/EntrepriseFeed";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatOffersScreen from "../Screens/ProtectedScreen/CreatOffersScreen";
import ApplyScreen from "../Screens/ProtectedScreen/ApplyScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileEntreprise from "../Screens/ProtectedScreen/ProfileEntreprise";
import ProfileJunior from "../Screens/ProtectedScreen/ProfileJunior";
import CreateProfileEnterprise from "../Screens/CreateProfileEnterprise";
import CreateProfileJunior from "../Screens/CreateProfileJunior";
import CreateOffers from "../Screens/CreateOffers";
import OffersScreen from "../Screens/ProtectedScreen/OffersScreen";
import DrawerNavigation from "../Navigation/DrawerNavigation";
import { AuthContext } from "../Context/Context";

const ProfileStack = createNativeStackNavigator();
const FeedStack = createNativeStackNavigator();

const ProfileStackScreen = () => {
  const { userInfo } = useContext(AuthContext);

  console.log("role", userInfo.roles);
  return (
    <ProfileStack.Navigator>
      {userInfo.roles == "ROLE_USER" ? (
        <ProfileStack.Screen name="ProfileJunior" component={ProfileJunior} />
      ) : (
        <ProfileStack.Screen
          name="ProfileEntreprise"
          component={ProfileEntreprise}
        />
      )}

      {userInfo.roles == "ROLE_USER" ? (
        <ProfileStack.Screen
          name="Junior"
          component={CreateProfileJunior}
          options={{ headerShown: true }}
        />
      ) : (
        <ProfileStack.Screen
          name="Enterprise"
          component={CreateProfileEnterprise}
          options={{ headerShown: true }}
        />
      )}
    </ProfileStack.Navigator>
  );
};
const FeedStackScreen = () => {
  const { userInfo } = useContext(AuthContext);

  console.log("role", userInfo.roles);
  return (
    <FeedStack.Navigator>
      {userInfo.roles == "ROLE_USER" ? (
        <FeedStack.Screen name="Junior" component={JuniorFeed} />
      ) : (
        <FeedStack.Screen name="Entreprise" component={EntrepriseFeed} />
      )}

      <FeedStack.Screen
        name="Detail"
        component={OffersScreen}
        options={{ headerShown: true }}
      />
      <FeedStack.Screen
        name="Apply"
        component={ApplyScreen}
        options={{ headerShown: true }}
      />
    </FeedStack.Navigator>
  );
};

const HomeTab = createMaterialBottomTabNavigator();

const HomeTapScreen = () => {
  return (
    <HomeTab.Navigator
      activeColor={Colors.Primary}
      barStyle={{ backgroundColor: "white" }}
    >
      <HomeTab.Screen
        name="Dashboard"
        component={FeedStackScreen}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};
export default HomeTapScreen;
