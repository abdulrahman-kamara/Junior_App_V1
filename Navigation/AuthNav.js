import React, { createContext, useContext } from "react";
import ProtectedScreen from "../Screens/ProtectedScreen";
import RootStackScreen from "./RootStackScreen";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../Context/Context";
import { View, ActivityIndicator } from "react-native";

const AuthNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>;
  }

  return (
    <ActionSheetProvider>
      <NavigationContainer>
        {userToken !== null ? <ProtectedScreen /> : <RootStackScreen />}
      </NavigationContainer>
    </ActionSheetProvider>
  );
};

export default AuthNav;
