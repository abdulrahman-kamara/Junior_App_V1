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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "./Context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import users from "./Model/users";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "nunito-sans-bold": require("./assets/Fonts/NunitoSans-Bold.ttf"),
//     "nunito-sans-extraBold": require("./assets/Fonts/NunitoSans-ExtraBold.ttf"),
//   });
// };

export default function App() {
  // isLoading will check if the use is authenticate or not
  const [isLoading, setIsLoading] = useState(false);
  // userToken will validate our user
  const [userToken, setuserToken] = useState(null);

  // we are providing this instailstate for the reduerstate by creating a reducer constant
  const initailLoginState = {
    isLoading: true,
    email: "",
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
    }``
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
        const URL =
          "https://127.0.0.1:8000/authentication_token";
        fetch(URL, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res.Object);
          });

        let UserToken;
        if (email === Object.email && password === Object.password) {
          try {
            await AsyncStorage.setItem("userToken", UserToken);
          } catch (e) {
            console.log(e);
          }
        }
        dispatch({ type: "LOGIN", id: email, token: UserToken });
      },
      signOut: async () => {
        // setuserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }

        dispatch({ type: "LOGOUT" });
      },
    }),
    []
  );

  // the useEffect will run when our screen rerendring
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
