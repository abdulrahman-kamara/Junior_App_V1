import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../Context/Context";

import SplashScreen from "../Screens/SplashScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import JuniorSignupScreen from "../Screens/JuniorSignupScreen";
import CompanySignupScreen from "../Screens/CompanySignupScreen";
import CreateProfileJunior from "../Screens/CreateProfileJunior";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ navigation }) => {
  const { Junior } = useContext(AuthContext);

  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Register" component={RegisterScreen} />
      <RootStack.Screen name="Welcome" component={WelcomeScreen} />

      <RootStack.Screen
        name="CreateProfileJunior"
        component={CreateProfileJunior}
      />

      <RootStack.Screen
        name="JuniorSignupScreen"
        component={JuniorSignupScreen}
      />

      <RootStack.Screen
        name="CompanySignupScreen"
        component={CompanySignupScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
