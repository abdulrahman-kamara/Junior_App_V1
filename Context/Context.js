import React, { createContext } from "react";
import axios from "axios";
import api from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const register = (
    email,
    password,
    firstname,
    lastname,
    telephone,
    description,
    avatar,
    city
  ) => {
    axios
      .post(`${api}/users`, {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        telephone: "",
        description: "",
        avatar: "",
        city: "",
      })
      .then((res) => {
        let userInfo = res.data;
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`register error ${e}`);
      });
  };

  return (
    <AuthContext.Provider value={{ register }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
