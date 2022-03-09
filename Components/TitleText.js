import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const TitleText = (props) => {
  return (
    <Text style={{ ...styles.title, ...props.styles }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "NunitoSans-Bold",
  },
});

export default TitleText;
