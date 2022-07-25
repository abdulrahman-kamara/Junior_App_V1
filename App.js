import React from "react";

import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthProvider } from "./Context/Context";
import AuthNav from "./Navigation/AuthNav";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AuthNav />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  navcontainer: {
    backgroundColor: "black",
  },
  WelcomeScreenPage: {
    width: "100%",
  },
  WelcomeContainer: {
    paddingVertical: 30,
    padding: 50,
  },
  WelcomeContainerText: {
    padding: 50,
  },
});
