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
        console.log("REGISTER P1 USERINFO", userInfo);

        navigation.navigate("CreateProfileJunior", {
          roles: userInfo.roles,
          firstname,
          lastname,
          JwtToken: userInfo.JwtToken,
          id: userInfo.id,
        });
      })
      .catch((err) => {
        console.log(`login errors ${err}`);
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

    console.log("ProfilJunior JwtToken", JwtToken);
    console.log("ProfilJunior id", id);
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
    //console.log("IMAGE", image);

    setIsLoading(true);
    // console.log("token.id", id);
    // console.log("role", roles);
    //console.error(JwtToken);
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
        //console.log("USER INFO POST", userInfo);
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
        // console.log("my userinfo", userInfo);

        navigation.navigate("CreateProfileEnterprise", {
          roles: userInfo.roles,
          name,
          JwtToken: userInfo.JwtToken,
          id: userInfo.id,
        });

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
    name,
    address,
    city,
    description,
    image,
    JwtToken,
    id
  ) => {
    const formdata = new FormData();
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
        //console.log("userInfo", id);
        //console.log("Role", roles);
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

  const CreateOffer = async (
    id,
    city,
    diploma,
    jobs,
    description,
    image,
    type_of_contract,
    type_of_work
  ) => {
    const formdata = new FormData();

    console.log("ProfilJunior JwtToken", JwtToken);
    console.log("ProfilJunior id", id);

    formdata.append("city", city ?? "");
    formdata.append("Title", jobs ?? "");

    formdata.append("description", description ?? "");
    formdata.append("diploma", diploma ?? "");
    formdata.append("contract", type_of_contract ?? "");
    formdata.append("workType", type_of_work ?? "");
    if (image) {
      formdata.append("photoFile", {
        type: "image/jpeg",
        uri: image,
        name: "image.jpg",
      });
    }
    //console.log("IMAGE", image);

    setIsLoading(true);
    // console.log("token.id", id);
    // console.log("role", roles);
    //console.error(JwtToken);
    fetch(`${BASE_URL}/api/create_offer`, {
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
        console.log("USER INFO", userInfo);

        let decoded = jwt_decode(userInfo.token);
        //console.log("decoded", decoded);
        userInfo.roles = decoded.roles;

        // console.log(userInfo);
        setUserInfo(userInfo);
        setUserToken(userInfo.token);
        //console.log("USER TOKEN", userToken);

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
        CreateOffer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
