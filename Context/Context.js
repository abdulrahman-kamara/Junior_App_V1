import React, { createContext, useState } from "react";
import axios from "axios";
import { api } from "../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // isLoading will check if the use is authenticate or not
  const [isLoading, setIsLoading] = useState(false);
  // // userToken will validate our user
  const [userInfo, setUserInfo] = useState({});

  const Junior = (firstname, lastname, email, password) => {
    console.log(firstname, lastname, email, password);
    console.log("api", api);
    // setIsLoading(true);
    axios
      .post(`${api}/users`, {
        firstname,
        lastname,
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        // setUserInfo(userInfo);
        // console.log(userInfo);
        // AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        // setIsLoading(true);
        console.log("userInfo", userInfo);
        alert(JSON.stringify(res.data));
      })
      .catch((e) => {
        console.log(`registration fail ${e}`);
        // setIsLoading(false);
      });
  };

  // const JuniorRegistration = (email, password, firstname, lastname) => {
  //   axios
  //     .post(`${api}/users`, {
  //       email: "",
  //       password: "",
  //       firstname: "",
  //       lastname: "",
  //     })
  //     .then((res) => {
  //       let userInfo = res.data;
  //       console.log(userInfo);
  //     })
  //     .catch((e) => {
  //       console.log(`register error ${e}`);
  //     });
  // };

  // const CompanyRegistration = (email, password, name) => {
  //   axios
  //     .post(`${api}/entreprises`, {
  //       email: "",
  //       password: "",
  //       name: "",
  //     })
  //     .then((res) => {
  //       let userInfo = res.data;
  //       console.log(userInfo);
  //     })
  //     .catch((e) => {
  //       console.log(`register error ${e}`);
  //     });
  // };

  // const signIn = (email, password) => {
  //   axios
  //     .post(`${api}/users`, {
  //       email: "",
  //       password: "",
  //     })
  //     .then((res) => {
  //       let userInfo = res.data;
  //       console.log(userInfo);
  //     })
  //     .catch((e) => {
  //       console.log(`register error ${e}`);
  //     });
  // };

  return <AuthContext.Provider value={Junior}>{children}</AuthContext.Provider>;
};

// juniorRegistration, CompanyRegistration, signIn
