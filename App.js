import "react-native-gesture-handler";
import React from "react";

import { useState, useEffect, useMemo } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigation from "./Navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import ProtectedScreen from "./Screens/ProtectedScreen";
import RootStackScreen from "./Navigation/RootStackScreen.js";
import DrawerNavigation from "./Navigation/DrawerNavigation";
import WelcomeScreen from "./Screens/ProtectedScreen/WelcomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import InscriptionScreen from "./Screens/InscriptionScreen";
import DashboardScreen from "./Screens/ProtectedScreen/DashboardScreen";
import SplashScreen from "./Screens/SplashScreen";
import ProfileContent from "./Screens/ProtectedScreen/ProfileContentScreen";
import TextEditor from "./Components/TextEditor";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "./Context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-sans-bold": require("./assets/Fonts/NunitoSans-Bold.ttf"),
    "nunito-sans-extraBold": require("./assets/Fonts/NunitoSans-ExtraBold.ttf"),
  });
};

export default function App() {
  // isLoading will check if the use is authenticate or not
  const [isLoading, setIsLoading] = useState(true);
  // userToken will validate our user
  const [userToken, setuserToken] = useState(null);

  // we are providing this instailstate for the reduerstate by creating a reducer constant
  const initailLoginState = {
    isLoading: true,
    email: null,
    userToken: null,
  };

  // we are creating a reducer function which call the previous state of and perform a action
  const LoginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  // We are creating a reducer now
  const [loginState, dispatch] = React.useReducer(
    LoginReducer,
    initailLoginState
  );

  // usememo will use the uptimization technique to speed up the execution
  const authContext = useMemo(
    () => ({
      signIn: async (email, password) => {
        // setuserToken("fgk");
        // setIsLoading(false);
        let userToken;
        userToken = null;
        if (email == "rahman" && password == "kunta") {
          try {
            userToken = "sugbsgp";
            await AsyncStorage.setItem("userToken", userToken);
          } catch (e) {
            console.log(e);
          }
        }
        dispatch({ type: "LOGIN", id: email, token: userToken });
      },
      signOut: async () => {
        // setuserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log();
        }

        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        // setuserToken("fgk");
        // setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);

  // the useEffect will run when our screen rerendring
  // useEffect(() => {
  //   setTimeout(async () => {
  //     // setIsLoading(false);
  //     let userToken;
  //     userToken = null;
  //     try {
  //       userToken = await AsyncStorage.getItem("userToken");
  //     } catch (e) {
  //       console.log(e);
  //     }

  //     dispatch({ type: "RETRIVE_TOKEN", token: "userToken" });
  //   }, 1000);
  // }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <ProtectedScreen />
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  navcontainer: {
    backgroundColor: "black",
  },
  WelcomeScreenPage: {
    width: "100%",
  },
  WelcomeContainer: {
    paddingVertical: 30,
    padding: 50,
  },
  WelcomeContainerText: {
    padding: 50,
  },
});
