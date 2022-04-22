import React from "react";
import { View, TextInput } from "react-native";
import Colors from "../Constants/Colors";

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={250}
    />
  );
};

const UselessTextInputMultiline = (props) => {
  const [value, onChangeText] = React.useState("");

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: Colors.Secondry,
        height: "30%",
      }}
    >
      <UselessTextInput
        multiline
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={{ padding: 10, paddingVertical: 50 }}
      />
    </View>
  );
};

export default UselessTextInputMultiline;
