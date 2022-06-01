import "react-native-gesture-handler";
import React from "react";

import { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Alert } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import axios from "axios";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import ProtectedScreen from "./Screens/ProtectedScreen";
import RootStackScreen from "./Navigation/RootStackScreen.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext, AuthProvider } from "./Context/Context";
import api from "./config/api";

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "nunito-sans-bold": require("./assets/Fonts/NunitoSans-Bold.ttf"),
//     "nunito-sans-extraBold": require("./assets/Fonts/NunitoSans-ExtraBold.ttf"),
//   });
// };

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const initialLoginState = {
    isLoading: true,
    email: null,

    userToken: null,
  };

  const loginReducer = (prevState, action) => {
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
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (email, password) => {
        let userToken;

        await axios
          .post(`${api}/authentication_token`, {
            email,
            password,
          })

          .then((res) => {
            let userToken = res.data;

            if (email === email && password === password) {
              try {
                userToken = AsyncStorage.setItem("userToken", userToken);
              } catch (e) {
                // saving error
                console.log(`login error ${e}`);
              }
            }

            // setIsLoading(false);
          })
          .catch((e) => {
            console.log(`registration fail ${e}`);
          });

        dispatch({ type: "LOGIN", id: email, token: userToken });
      },

      // console.log('user token: ', userToken);

      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      Enterprise: async (name, email, password) => {
        console.log(name, email, password);
        console.log("api", api);

        axios
          .post(`${api}/api/entreprises`, {
            name,
            email,
            password,
          })
          .then((res) => {
            let userToken = res.data;
            setuserToken(userToken);

            AsyncStorage.setItem("userToken", JSON.stringify(userToken));
          })
          .catch((e) => {
            console.log(`registration fail ${e}`);
          });
      },
      Junior: async (firstname, lastname, email, password) => {
        console.log(email, password);
        console.log("api", api);

        axios
          .post(`${api}/api/users`, {
            firstname,
            lastname,
            email,
            password,
          })
          .then((res) => {
            user$;
            userToken: null;
            let userToken = res.data;
            setuserToken(userToken);

            AsyncStorage.setItem("userToken", JSON.stringify(userToken));
          })
          .catch((e) => {
            console.log(`registration fail ${e}`);
          });
      },

      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
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
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken !== null ? (
            <>
              <ProtectedScreen />
            </>
          ) : (
            <>
              <RootStackScreen />
            </>
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
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
