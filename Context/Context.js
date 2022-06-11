import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  // userToken will validate our user
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

  const login = async (email, password, navigation) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/authentication_token`, {
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        setUserToken(userInfo.token);
        console.log(userInfo);
        console.log("user Token" + userInfo.token);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        AsyncStorage.setItem("userToken", userInfo.token);
      })
      .catch((err) => {
        console.log(`login erro ${err}`);
      });
    // setUserToken("diovgvhfviofv");

    setIsLoading(false);
    //   console.log(email, password);
    //   console.log("api", api);
    //   console.log("nav", navigation);

    //   setIsLoading(true);
    //   axios
    //     .post(`${api}/authentication_token`, {
    //       email,
    //       password,
    //     })
    //     .then((res) => {
    //       let userInfo = res.data;
    //       // console.log("res", res.data);
    //       setUserInfo(userInfo);
    //       // console.log("this is info", userInfo);

    //       AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
    //       setIsLoading(false);

    //       return userInfo;
    //     })

    //     .catch((e) => {
    //       console.log(`registration fail ${e}`);
    //       setIsLoading(false);
    //     });
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);

    //   AsyncStorage.removeItem("userInfo");
    //   setUserInfo({});
    //   setIsLoading(false);
    //   navigation.navigate("Login");
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      let userToken = await AsyncStorage.getItem("userToken");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
      }

      setUserToken(userToken);
      setIsLoading(false);
    } catch (e) {
      console.log(`get the error from ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
