import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Button,
} from "react-native";
import Colors from "../Constants/Colors";

const ComapnyButton = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6}>
        <View style={styles.button}>
          <Button
            style={{ ...styles.buttonText, ...styles.props }}
            title="COMPANY"
            onPress={() => navigation.navigate("LoginScreen")}
          />
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 30,
  },
  button: {
    shadowRadius: 50,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: Colors.Secondry,
    backgroundColor: Colors.Secondry,
  },
  buttonText: {
    // fontFamily: "NunitoSans-Bold",
    color: Colors.Primary,
    fontSize: 20,

    padding: 15,
  },
});

export default ComapnyButton;
