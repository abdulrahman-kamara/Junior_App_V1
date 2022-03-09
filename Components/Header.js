import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import Colors from "../Constants/Colors";

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerinside}>
        <View style={styles.image1}>
          <Image
            source={require("../assets/Image/logo.png")}
            style={{
              height: "100%",
              width: "50%",
            }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: Dimensions.get("window").height * 0.1,
    width: "100%",
  },
  headerinside: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.Primary,
    padding: 5,
    borderRadius: 20,
  },
  image1: {
    flex: 1,
    alignItems: "flex-start",
    height: 40,
    paddingRight: 60,
  },
  image2: {
    flex: 1,
    alignItems: "flex-end",
    padding: 5,
  },
});
export default Header;
