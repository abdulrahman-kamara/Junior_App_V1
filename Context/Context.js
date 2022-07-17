import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, getUser, setAccessToken } from "../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const Junior = async (firstname, lastname, email, password, navigation) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/api/register_user`, {
        firstname,
        lastname,
        email,
        password,
        roles: ["ROLE_USER"],
      })
      .then((res) => {
        let userInfo = res.data;
        console.log("REGISTER JR1 OK, USERINFO", userInfo);
        navigation.pop(2);
      })
      .catch((err) => {
        console.log(`REGISTER JR1 ERROR ${err}`);
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
    JwtToken,
    id
  ) => {
    const formdata = new FormData();

    console.log('ProfilJunior JwtToken',JwtToken);
    console.log('ProfilJunior id',id);
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
    fetch(`${BASE_URL}/api/users/${id}`, {
      method: "POST",
      body: formdata,
      headers: {
        authorization: `Bearer ${JwtToken}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((userInfo) => {
        console.log("USER INFO POST", userInfo);
        userInfo.token = JwtToken;

        setUserInfo(userInfo);
        setUserToken(userInfo);

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
      .post(`${BASE_URL}/api/register_company`, {
        name,
        email,
        password,
        roles: ["ROLE_ENTREPRISE"],
      })
      .then((res) => {
        let userInfo = res.data;
        console.log("///REGISTER ENT OK =", userInfo);
        navigation.pop(2);
      })
      .catch((err) => {
        console.log(`///REGISTER ENT ERROR${err}`);
      });
    setIsLoading(false);
  };

  const ProfileEnterprise = async (
    name,
    address,
    city,
    description,
    image,
    JwtToken,
    id
  ) => {
    const formdata = new FormData();
    // console.log('MON JWT_TOKEN PROFIL_ENTREPRISE',JwtToken);
    console.log('PROFIL_ENTREPRISE USERINFO.token//',JwtToken);
    formdata.append("name", name ?? "");
    formdata.append("address", address ?? "");
    formdata.append("city", city ?? "");
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
    fetch(`${BASE_URL}/api/entreprises/${id}`, {
      method: "POST",
      body: formdata,
      headers: {
        authorization: `Bearer ${JwtToken}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((userInfo) => {
        console.log("///register entreprise OK, userInfo =", userInfo);
        userInfo.token = JwtToken;

        setUserInfo(userInfo);
        setUserToken(userInfo);

        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        AsyncStorage.setItem("userToken", JwtToken);
      })
      .catch((error) => {
        console.log("////register entreprise error = ", error);
      });
    setIsLoading(false);
  };

  const login = async (email, password, navigation) => {
    setIsLoading(true);
    console.log(email, password);
    
    axios
      .post(`${BASE_URL}/authentication_token`, {
        email,
        password,
      })
      .then(async (res) => {
        let userInfo = res.data;
        console.log("LOGIN OK, USER INFO =", userInfo);
        
        // let decoded = jwt_decode(userInfo.token);
        // userInfo.roles = decoded.roles;
        
        setUserInfo(userInfo);
        setUserToken(userInfo.token);

        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        AsyncStorage.setItem("userToken", userInfo.token);
      })
      .catch((err) => {
        console.log(`LOGIN ERROR = ${err}`);
      });

    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");
    // setUserInfo(null);
    // setUserToken(null);
    setIsLoading(false);
    console.log('LOGOUT OK');
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      let userToken = await AsyncStorage.getItem("userToken");
      console.log(userInfo);
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
        setUserToken(userToken);
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
        userInfo,
        setUserInfo,
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
