import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, SafeAreaView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../Constants/Colors";
import { useTheme } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const { colors } = useTheme();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

        borderRadius: 100,
      }}
    >
      <TouchableOpacity
        onPress={pickImage}
        style={{
          justifyContent: "center",
          flex: 0,
          alignItems: "center",
          borderRadius: 15,
          borderColor: Colors.Primary,

          width: 330,
          height: 150,
          marginBottom: 10,
        }}
      >
        {/* <Icon name="camera" size={20} /> */}
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 330,
              height: 150,
              borderRadius: 15,
              marginLeft: 0,
            }}
          />
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}
