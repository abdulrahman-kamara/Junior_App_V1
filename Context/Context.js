import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { api } from "../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   // userToken will validate our user
//   const [userInfo, setUserInfo] = useState({});
//   // isLoading will check if the use is authenticate or not
//   const [isLoading, setIsLoading] = useState(false);

//   const Junior = (firstname, lastname, email, password) => {
//     console.log(email, password);
//     console.log("api", api);
//     setIsLoading(true);
//     axios
//       .post(`${api}/api/users`, {
//         firstname,
//         lastname,
//         email,
//         password,
//       })
//       .then((res) => {
//         let userInfo = res.data;
//         setUserInfo(userInfo);
//         console.log(userInfo);
//         AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
//         setIsLoading(false);
//         console.log("userInfo", userInfo);
//       })
//       .catch((e) => {
//         console.log(`registration fail ${e}`);
//         setIsLoading(false);
//       });
//   };

//   const Enterprise = (name, email, password) => {
//     console.log(name, email, password);
//     console.log("api", api);
//     setIsLoading(true);
//     axios
//       .post(`${api}/api/entreprises`, {
//         name,
//         email,
//         password,
//       })
//       .then((res) => {
//         let userInfo = res.data;
//         setUserInfo(userInfo);
//         console.log(userInfo);
//         AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
//         setIsLoading(false);
//         console.log("userInfo", userInfo);
//       })
//       .catch((e) => {
//         console.log(`registration fail ${e}`);
//         setIsLoading(false);
//       });
//   };

//   const login = async (email, password, navigation) => {
//     console.log(email, password);
//     console.log("api", api);
//     console.log("nav", navigation);

//     setIsLoading(true);
//     axios
//       .post(`${api}/authentication_token`, {
//         email,
//         password,
//       })
//       .then((res) => {
//         let userInfo = res.data;
//         // console.log("res", res.data);
//         setUserInfo(userInfo);
//         // console.log("this is info", userInfo);

//         AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
//         setIsLoading(false);

//         return userInfo;
//       })

//       .catch((e) => {
//         console.log(`registration fail ${e}`);
//         setIsLoading(false);
//       });
//   };

//   const logout = (navigation) => {
//     setIsLoading(true);

//     AsyncStorage.removeItem("userInfo");
//     setUserInfo({});
//     setIsLoading(false);
//     navigation.navigate("Login");
//   };

//   return (
//     <AuthContext.Provider
//       value={{ userInfo, isLoading, Junior, Enterprise, login, logout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// juniorRegistration, CompanyRegistration, signIn
