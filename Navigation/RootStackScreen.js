import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Screens/SplashScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import JuniorLoginScreen from "../Screens/JuniorSignupScreen";
import CompanySignupScreen from "../Screens/CompanySignupScreen";
import DashboardScreen from "../Screens/ProtectedScreen/DashboardScreen";

const RootStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="Register" component={RegisterScreen} />
    <RootStack.Screen name="Welcome" component={WelcomeScreen} />
    <RootStack.Screen name="JuniorLoginScreen" component={JuniorLoginScreen} />
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <RootStack.Screen
      name="CompanySignupScreen"
      component={CompanySignupScreen}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
