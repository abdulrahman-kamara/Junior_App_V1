import React, { createContext, useContext } from "react";
import ProtectedScreen from "../Screens/ProtectedScreen";
import RootStackScreen from "./RootStackScreen";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "../Navigation/StackNavigation";
import jwt_decode from "jwt-decode";

import { AuthContext } from "../Context/Context";
import { View, ActivityIndicator } from "react-native";

const AuthNav = () => {
  const { isLoading, userToken, userInfo } = useContext(AuthContext);
  // const userInfo = useContext(AuthContext);
  console.log("AUT USER TOKEN", userToken);
  //console.log("MON USER INFO AUTH NAV", userInfo);
  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>;
  }

  return (
    <ActionSheetProvider>
      <NavigationContainer>
        {userToken !== null ? <StackNavigation /> : <RootStackScreen />}
      </NavigationContainer>
    </ActionSheetProvider>
  );
};

export default AuthNav;
