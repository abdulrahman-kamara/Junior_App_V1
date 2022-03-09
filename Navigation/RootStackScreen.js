import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../Screens/SplashScreen";
import LoginScreen from "../Screens/LoginScreen";
import InscriptionScreen from "../Screens/InscriptionScreen";
import RegisterScreen from "../Screens/RegisterScreen";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="Inscription" component={InscriptionScreen} />
    <RootStack.Screen name="Register" component={RegisterScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
