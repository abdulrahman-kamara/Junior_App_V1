import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../Constants/Colors";

const Card = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: "600%",
    borderRadius: 20,
    backgroundColor: Colors.Secondry,
    alignSelf: "center",
    marginVertical: 10,
    position: "relative",
  },
});
export default Card;
