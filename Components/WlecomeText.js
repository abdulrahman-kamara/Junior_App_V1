import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../Constants/Colors";

const WelcomeText = (props) => {
  return (
    <View styles={{ ...styles.textContainer, ...props.styles }}>
      <Text style={styles.titleText}>WELCOME TO JUNIOR </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  titleText: {
    color: Colors.Primary,
    fontSize: 20,
    fontFamily: "nunito-sans-bold",
  },
});

export default WelcomeText;
