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

const Stack = createNativeStackNavigator();

export default StackNavigation = () => {
  return (
    <Stack.Navigator headerinside={false}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Profile" component={SplashScreen} />
      <Stack.Screen name="ProfileContent" component={ProfileContent} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="JuniorLoginScreen" component={JuniorLoginScreen} />
    </Stack.Navigator>
    // <Stack.Screen name="Dashboard" component={DashboardScreen} />
  );
};
