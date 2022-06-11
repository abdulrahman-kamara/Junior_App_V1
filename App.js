import React from "react";

import { StyleSheet } from "react-native";

import { AuthProvider } from "./Context/Context";
import AuthNav from "./Navigation/AuthNav";

export default function App() {
  return (
    <>
      <AuthProvider>
        <AuthNav />
      </AuthProvider>
    </>
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

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "nunito-sans-bold": require("./assets/Fonts/NunitoSans-Bold.ttf"),
//     "nunito-sans-extraBold": require("./assets/Fonts/NunitoSans-ExtraBold.ttf"),
//   });
// };

// const initialLoginState = {
//   isLoading: true,
//   email: null,
//   userToken: null,
// };

// const loginReducer = (prevState, action) => {
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
//         userName: action.id,
//         userToken: action.token,
//         isLoading: false,
//       };
//   }
// };
// const [loginState, dispatch] = React.useReducer(
//   loginReducer,
//   initialLoginState
// );

// const authContext = React.useMemo(
//   () => ({
/* signIn: fonction qui permet de se connecter */

//     signIn: async (email, password) => {
//       let userToken;

//       await axios
//         .post(`${api}/authentication_token`, {
//           email,
//           password,
//         })

//         .then((res) => {
//           let userToken = res.data;

//           try {
//             userToken = AsyncStorage.setItem("userToken", userToken);
//           } catch (e) {
//             // saving error
//             Alert.alert(`login error ${e}`);
//           }

//           // setIsLoading(false);
//         })
//         .catch((e) => {
//           console.log(`registration fail ${e}`);
//         });

//       dispatch({ type: "LOGIN", id: email, token: userToken });
//     },

//     signOut: async () => {
//       try {
//         await AsyncStorage.removeItem("userToken");
//       } catch (e) {
//         console.log(e);
//       }
//       dispatch({ type: "LOGOUT" });
//     },
//     Enterprise: async (name, email, password) => {
//       console.log(name, email, password);
//       console.log("api", api);

//       axios
//         .post(`${api}/api/entreprises`, {
//           name,
//           email,
//           password,
//         })
//         .then((res) => {
//           let userToken = res.data;
//           setuserToken(userToken);

//           AsyncStorage.setItem("userToken", JSON.stringify(userToken));
//         })
//         .catch((e) => {
//           console.log(`registration fail ${e}`);
//         });
//     },
//     Junior: async (firstname, lastname, email, password) => {
//       console.log(email, password);
//       console.log("api", api);

//       axios
//         .post(`${api}/api/users`, {
//           firstname,
//           lastname,
//           email,
//           password,
//         })
//         .then((res) => {
//           user$;
//           userToken: null;
//           let userToken = res.data;
//           setuserToken(userToken);

//           AsyncStorage.setItem("userToken", JSON.stringify(userToken));
//         })
//         .catch((e) => {
//           console.log(`registration fail ${e}`);
//         });
//     },

//     toggleTheme: () => {
//       setIsDarkTheme((isDarkTheme) => !isDarkTheme);
//     },
//   }),
//   []
// );

// useEffect(() => {
//   setTimeout(async () => {
//     let userToken;

//     try {
//       userToken = await AsyncStorage.getItem("userToken");
//     } catch (e) {
//       console.log(e);
//     }
//     // console.log('user token: ', userToken);
//     dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
//   }, 1000);
// }, []);

// if (loginState.isLoading) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <ActivityIndicator size="large" />
//     </View>
//   );
// }
