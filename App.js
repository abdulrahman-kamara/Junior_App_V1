import "react-native-gesture-handler";
import React from "react";

import { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";
import ProtectedScreen from "./Screens/ProtectedScreen";
import RootStackScreen from "./Navigation/RootStackScreen.js";

import { AuthContext, AuthProvider } from "./Context/Context";

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "nunito-sans-bold": require("./assets/Fonts/NunitoSans-Bold.ttf"),
//     "nunito-sans-extraBold": require("./assets/Fonts/NunitoSans-ExtraBold.ttf"),
//   });
// };

export default function App() {
  const userInfo = useContext(AuthContext);

  return (
    <NavigationContainer>
      <AuthProvider>
        {userInfo ? <ProtectedScreen /> : <RootStackScreen />}
      </AuthProvider>
    </NavigationContainer>
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

// signIn: async (email, password) => {
//   // setuserToken("fgk");
//   // setIsLoading(false);
//   const URL = "https://127.0.0.1:8000/authentication_token";
//   fetch(URL, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res.Object);
//     });

//   let UserToken;
//   if (email === Object.email && password === Object.password) {
//     try {
//       await AsyncStorage.setItem("userToken", UserToken);
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   dispatch({ type: "LOGIN", id: email, token: UserToken });
// },
// signOut: async () => {
//   // setuserToken(null);
//   // setIsLoading(false);
//   try {
//     await AsyncStorage.removeItem("userToken");
//   } catch (e) {
//     console.log(e);
//   }

//   dispatch({ type: "LOGOUT" });
// },

// we are providing this instailstate for the reduerstate by creating a reducer constant
// const initailLoginState = {
//   isLoading: true,
//   email: "",
//   userToken: null,
// };

// we are creating a reducer function which call the previous state of and perform a action
// const LoginReducer = (prevState, action) => {
//   switch (action.type) {
//     case "RETRIEVE_TOKEN":
//       return {
//         ...prevState,
//         userToken: action.token,
//         isLoading: false,
//       };
//     case "LOGIN":
//       return {
//         ...prevState,
//         email: action.id,
//         userToken: action.token,
//         isLoading: false,
//       };
//     case "LOGOUT":
//       return {
//         ...prevState,
//         email: null,
//         userToken: null,
//         isLoading: false,
//       };
//     case "REGISTER":
//       return {
//         ...prevState,
//         email: action.id,
//         userToken: action.token,
//         isLoading: false,
//       };
//   }
//   ``;
// };

// // We are creating a reducer now
// const [loginState, dispatch] = React.useReducer(
//   LoginReducer,
//   initailLoginState
// );

// isLoading will check if the use is authenticate or not
// const [isLoading, setIsLoading] = useState(true);
// // userToken will validate our user
// const [userToken, setuserToken] = useState(null);

// initailLoginState = {
//   isLoading: true,
//   userToken: null,
//   email: null,
// };

// loginReducer = (prevState, action) => {
//   switch (action.type) {
//     case "RETRIEVE_TOKEN":
//       return {
//         ...prevState,
//         userToken: action.token,
//         isLoading: false,
//       };
//     case "LOGIN":
//       return {
//         ...prevState,
//         email: action.id,
//         userToken: action.token,
//         isLoading: false,
//       };
//     case "LOGOUT":
//       return {
//         ...prevState,
//         email: null,
//         userToken: null,
//         isLoading: false,
//       };
//     case "REGISTER":
//       return {
//         ...prevState,
//         email: action.id,
//         userToken: action.token,
//         isLoading: false,
//       };
//   }
// };

// const [loginState, dispatch] = React.useReducer(
//   loginReducer,
//   initailLoginState
// );

// usememo will use the uptimization technique to speed up the execution
// const authContext = React.useMemo(
//   () => ({
//     signIn: async (email, password) => {
//       // setuserToken("fghk");
//       // setIsLoading(false);
//       let userToken;
//       userToken = null;
//       userToken = "fghk";
//       // Nomally we check if the mail and password is equal to that of the database
//       if (email === "achne" && password === "Password") {
//         alert("thanks for login");

//         // normally here we have the refresh token from the backend
//       }
//       console.log("user Token:", userToken);
//       dispatch({ type: "LOGIN", id: email, token: userToken });
//     },
//     signOut: async () => {
//       // setuserToken(null);
//       // setIsLoading(false);
//       try {
//         await AsyncStorage.removeItem("userToken");
//       } catch (e) {
//         console.log(e);
//       }
//       dispatch({ type: "LOGOUT" });
//     },

//     // signUp: (firstname, lastname, email, password) => {
//     //   console.log("LoginHandleFunction", juniorRegistration);
//     //   juniorRegistration(firstname, lastname, email, password);
//     //   // setuserToken("fghk");
//     //   // setIsLoading(false);
//     // },
//   }),
//   []
// );

//the useEffect will run when our screen rerendring
// useEffect(() => {
//   setTimeout(() => {
//     let userToken;
//     userToken = "null";
//     // try {
//     //   userToken = await AsyncStorage.getItem("userToken");
//     // } catch (e) {
//     //   console.log(e);
//     // }
//     // setIsLoading(false);
//     //   let userToken;
//     //   userToken = null;
//     //   try {
//     //     userToken = await AsyncStorage.getItem("userToken");
//     //   } catch (e) {
//     //     console.log(e);
//     //   }
//     // console.log("user token: ", userToken);
//     // dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
//   }, 1000);
// }, []);

// if (isLoading) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <ActivityIndicator size="large" />
//     </View>
//   );
// }
