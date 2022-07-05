import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const Junior = async (firstname, lastname, email, password, navigation) => {
    setIsLoading(true);
    axios
      .post("http://10.0.7.20:8000/api/register_user", {
        firstname,
        lastname,
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        console.log("TOUTES LES INFOS ICI ", userInfo);
        // console.log("Mon USER INFO ID ICI ", userInfo.id);
        // console.log("Mon USER INFO TOKEN ICI ", userInfo.JwtToken);
        navigation.navigate("CreateProfileJunior", {
          firstname,
          lastname,
          JwtToken: userInfo.JwtToken,
          id: userInfo.id,
          userInfo
        });
      })
      .catch((err) => {
        console.log(`REGISTER JR ERROR ${err}`);
      });

    setIsLoading(false);
  };

  const ProfileJunior = async (
    firstname,
    lastname,
    phone,
    city,
    description,
    profession,
    diplom,
    expierrence,
    image,
    Token,
    id
  ) => {
    const formdata = new FormData();

    formdata.append("telephone", phone ?? "");
    formdata.append("city", city ?? "");
    formdata.append("firstname", firstname ?? "");
    formdata.append("lastname", lastname ?? "");
    formdata.append("description", description ?? "");
    formdata.append("diploma", diplom ?? "");
    formdata.append("year_of_experience", expierrence ?? "");
    formdata.append("profession", profession ?? "");
    if (image) {
      formdata.append("photoFile", {
        type: "image/jpeg",
        uri: image,
        name: "image.jpg",
      });
    }
    setIsLoading(true);
    console.log("MON TOKEN CREATE PROFIL", userInfo);
    console.log("jwt", Token);
    fetch(`http://10.0.7.20:8000/api/users/${id}`, {
      
      method: "POST",
      body: formdata,
      headers: {        
        authorization: `Bearer ${Token}`,
      },
    })
   
      .then((res) => {
        return res.json();
        
      })
      .then((userInfo) => {
        console.log("userInfo", userInfo);
        setUserInfo(userInfo);
        setUserToken(userInfo);
        console.log("setUser", setUserInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        AsyncStorage.setItem("userToken", JwtToken);
      })
      .catch((error) => {
        console.log("error", error);
      });

    setIsLoading(false);
  };

  const Enterprise = async (name, email, password, navigation) => {
    setIsLoading(true);
    axios
      .post("http://10.0.7.20:8000/api/register_company", {
        name,
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        console.log(userInfo);

        navigation.navigate("CreateProfileEnterprise", {
          name,
          JwtToken: userInfo.JwtToken,
          id: userInfo.id,
        });
        console.log("userInfo.id", userInfo.id);

        // setUserInfo(userInfo);
        // setUserToken(userInfo.token);
        // console.log(userInfo);
        // console.log("user Token" + userInfo.token);
        // AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        // AsyncStorage.setItem("userToken", userInfo.token);
      })
      .catch((err) => {
        console.log(`login err ${err}`);
      });

    setIsLoading(false);
  };
  const ProfileEnterprise = async (
    address,
    name,
    city,
    description,
    image,
    Token,
    id
  ) => {
    console.log("TOKEN COMPANY", Token);
    const formdata = new FormData();
    formdata.append("city", city ?? "");
    formdata.append("name", name ?? "");
    formdata.append("address", address ?? "");
    formdata.append("description", description ?? "");
    formdata.append("offers", []);
    if (image) {
      formdata.append("photoFile", {
        type: "image/jpeg",
        uri: image,
        name: "image.jpg",
      });
    }
    setIsLoading(true);
    console.log("formdata", formdata);
    fetch(`http://10.0.7.20:8000/api/entreprises/${id}`, {
      method: "POST",
      body: formdata,
      headers: {
        authorization: `Bearer ${Token}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((userInfo) => {
        console.log("userInfo", id);

        setUserInfo(userInfo);
        setUserToken(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        AsyncStorage.setItem("userToken", Token);
      })
      .catch((error) => {
        console.log("error", error);
      });

    setIsLoading(false);
  };

  const login = async (email, password, navigation) => {
    setIsLoading(true);
    axios
      .post("http://10.0.7.20:8000/authentication_token", {
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        setUserToken(userInfo.token);
        console.log("userInfo", userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        AsyncStorage.setItem("userToken", userInfo.token);
      })
      .catch((err) => {
        console.log(`login erro ${err}`);
      });

    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
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
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading,
        userToken,
        Junior,
        Enterprise,
        ProfileJunior,
        ProfileEnterprise,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

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
