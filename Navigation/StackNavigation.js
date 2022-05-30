import React from "react";
import ProtectedScreen from "../Screens/ProtectedScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../Screens/WelcomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import DashboardScreen from "../Screens/ProtectedScreen/DashboardScreen";
import SplashScreen from "../Screens/SplashScreen";
import ProfileContent from "../Screens/ProtectedScreen/ProfileContentScreen";
import DrawerNavigation from "./DrawerNavigation";
import RegisterScreen from "../Screens/RegisterScreen";
import ApplyForm from "../Screens/ProtectedScreen/ApplyScreen";
import JuniorLoginScreen from "../Screens/JuniorSignupScreen";
import CreatOffersScreen from "../Screens/ProtectedScreen/CreatOffersScreen";
import OffersScreen from "../Screens/ProtectedScreen/OffersScreen";
import CreateProfileModal from "../Screens/CreateProfileModal";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = (navigation) => (
  <HomeStack.Navigator headerinside={false}>
    <HomeStack.Screen name="Welcome" component={WelcomeScreen} />
    <HomeStack.Screen name="Protected" component={ProtectedScreen} />
    <HomeStack.Screen name="Dashboard" component={DashboardScreen} />
    <HomeStack.Screen name="Profile" component={SplashScreen} />
    <HomeStack.Screen name="ProfileContent" component={ProfileContent} />
    <HomeStack.Screen name="Apply" component={ApplyScreen} />
    <HomeStack.Screen name="CreatOffersScreen" component={CreatOffersScreen} />
    <HomeStack.Screen name="Offers" component={OffersScreen} />
    <Stack.Screen name="CreateProfileModal" component={CreateProfileModal} />
  </HomeStack.Navigator>
);

const Stack = createNativeStackNavigator();

export default StackNavigation = () => {
  return (
    <Stack.Navigator headerinside={false}>
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Protected" component={ProtectedScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Inscription" component={InscriptionScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Profile" component={SplashScreen} />
      <Stack.Screen name="ProfileContent" component={ProfileContent} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ApplyForm" component={ApplyForm} />
      <Stack.Screen name="JuniorLoginScreen" component={JuniorLoginScreen} />
      <Stack.Screen name="Offers" component={OffersScreen} />
      <Stack.Screen name="CreatOffersScreen" component={CreatOffersScreen} />
      <Stack.Screen name="CreateProfileModal" component={CreateProfileModal} />
    </Stack.Navigator>
  );
};
