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
      .post("http://10.0.1.194:8000/api/register_user", {
        firstname,
        lastname,
        email,
        password,
      })

      // setUserInfo(userInfo);
      // setUserToken(userInfo.token);
      // console.log(userInfo);
      // console.log("user Token" + userInfo.token);
      // AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      // AsyncStorage.setItem("userToken", userInfo.token);

      .then((res) => {
        let userInfo = res.data;

        console.log("userInfo.id", userInfo.id);

        navigation.navigate("CreateProfileJunior", {
          firstname,
          lastname,
          JwtToken: userInfo.JwtToken,
          id: userInfo.id,
        });
      })
      .catch((err) => {
        console.log(`login err ${err}`);
      });

    setIsLoading(false);
  };

  const Enterprise = async (name, email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/api/entreprises`, {
        name,
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

    setIsLoading(false);
  };

  const login = async (email, password, navigation) => {
    setIsLoading(true);
    axios
      .post("http://10.0.1.194:8000/authentication_token", {
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
    console.log("token.id", id);
    fetch(`http://10.0.1.194:8000/api/users/${id}`, {
      method: "POST",
      body: formdata,
      headers: {
        authorization: `Bearer ${JwtToken}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((userInfo) => {
        console.log("userInfo", userInfo);
        setUserInfo(userInfo);
        setUserToken(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        AsyncStorage.setItem("userToken", JwtToken);
      })
      .catch((error) => {
        console.log("error", error);
      });

    // axios
    //   .post("http://10.0.6.226:8000/api/users/63", {
    //     data: formdata,
    //     headers: {
    //       authorization:
    //         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTUyOTU1NDksImV4cCI6MTY1NTI5OTE0OSwicm9sZXMiOlsiUlVMRV9VU0VSIiwiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWxleEBnbWFpbC5jb20ifQ.CpLZ4Ztrl1GqnBUIkeB3lI_-Fw2OopDfxmurUs3btCbik0m2RggcoevWoVFbUsQ5dFPWOVciTcSAm4RvmS1_2B8J506ugPJ6uMlXRosVuKp719gNta2I4cBd4F1W-wwMUpRDuP2y02qbp8gXEefj-eG1uf5pS_uuWdz8woFNzC1B0pfK3XbnSDwg1BNJN7Bn-2gfdDdqg3nJ0ZPj1_GlTVaedDhysLSois3xxs3T9mAdUrR2BjQf0S0npIPMDWbE87Jlhx775qxsLvw-4JW-bf2tkAdPmmz73SmAnrkZ5WKjYdPqRqCvfuDJUoXhmftPU18aVCkeHlaJLNO7varLgHrMUHISthFlUtacsSptpfYYB9zmnYn9OuHkLl2b2fssIrKIeWsCAagmOejH2sYPyxUe4fVPZeq_MpN-wp24qXW5pgjypexOrbhaASyYr4f3O6Vx_wIlFel5l14VHn3KdmBPk0tenEdjZKlg9nAi0lcT4GdAjt1swMT2RJQiGm_7KtkWxLIYYrej_ECdkdFOlgRN6dQ4sZO6iBRb25qH9SOp9DCU-wvy492_YXKHoVCbrAymjymvJdZCSV5MbxSdo73L_J7p8FSXqnGTtD1bcqnYlmSoqY3mwn9-Fd4-DM-B4nROSFjrPShWiBfaltpvraTECPJRJLvpn4wbB1VQruw",
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     let userInfo = res;
    //     console.log(userInfo);
    //     // setUserInfo(userInfo);
    //     // setUserToken(userInfo);

    //     // AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
    //     // AsyncStorage.setItem("userToken", userInfo.token);
    //     // if (res.status == 201) {
    //     //   navigation.navigate("CreateProfileJunior", { firstname, lastname });
    //     // }
    //   })

    //   .catch((err) => {
    //     console.log(`login error ${err}`);
    //   });

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
