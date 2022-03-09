import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  Button,
  ScrollView,
} from "react-native";
import JuniorButton from "../../Components/JuniorButton";
import ComapnyButton from "../../Components/ComapnyButton";
import Colors from "../../Constants/Colors";
import WelcomeText from "../../Components/WlecomeText";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <View style={styles.welcometext}>
          <WelcomeText />
        </View>
        <View style={styles.welcomeScreen}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/Image/logo.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.loginAs}>
            <Button style={styles.logintext} title="LOGIN AS " />
          </View>
          <View style={styles.buttons}>
            <View style={styles.buttonText}>
              <Button
                title="JUNIOR"
                color={Colors.Primary}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              />
            </View>
            <View style={styles.buttonText}>
              <Button
                title="COMPNAY"
                color={Colors.Primary}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  welcometext: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  welcomeScreen: {
    backgroundColor: Colors.Primary,
    height: "100%",
    borderRadius: Dimensions.get("window").width * 0.2,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: Dimensions.get("window").width * 0.9,
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderWidth: 3,
    borderColor: "white",
    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: Dimensions.get("window").height / 15,
  },
  loginAs: {
    justifyContent: "center",
    alignItems: "center",
  },
  logintext: {
    color: Colors.Secondry,
    fontSize: 18,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 70,
  },
  buttonText: {
    // fontFamily: "NunitoSans-Bold",
    color: Colors.Primary,
    fontSize: 20,
    padding: 15,
    borderColor: Colors.Primary,
    borderWidth: 3,
    backgroundColor: Colors.Secondry,
    borderRadius: 30,
    shadowRadius: 90,
  },
});

export default WelcomeScreen;
