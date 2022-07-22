import AsyncStorage from "@react-native-async-storage/async-storage";

// export const BASE_URL = "https://api.torea-patissier.students-laplateforme.io";
export const BASE_URL = "http://172.20.10.13:8000";

export const setAccessToken = async (JwtToken, user) => {
  //console.log("JwtToken", JwtToken);
  await AsyncStorage.setItem("JwtToken", JwtToken);

  await AsyncStorage.setItem("user", JSON.stringify(user));
};

export let getAccessToken = async () => {
  let JwtToken = await AsyncStorage.getItem("JwtToken");
  return JwtToken;
};

export let getUser = async () => {
  let user = await AsyncStorage.getItem("user");
  return JSON.parse(user);
};
