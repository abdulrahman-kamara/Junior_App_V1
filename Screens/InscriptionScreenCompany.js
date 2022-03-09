import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  Button,
  Image,
  ScrollView,
  VirtualizedList,
} from "react-native";
import Colors from "../Constants/Colors";
import { useState } from "react";
import CityModalPicker from "../Components/CityModalPicker";
import ImagePicker from "../Components/PickerImage";

const InscriptionScreenCompany = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {/* profile image */}
          <View style={styles.imageContainer}>
            <ImagePicker />
            <Text
              style={{
                fontSize: 25,
                color: Colors.Primary,
                alignSelf: "center",

                justifyContent: "center",
              }}
            >
              Company Name
            </Text>
          </View>

          <View style={styles.about}>
            <Text style={styles.abouttext}>About</Text>
            <TextInput
              type="text"
              style={styles.inputabout}
              placeholder="Enter your"
              value="Text"
            />
          </View>
          {/* select items here */}
          <View style={styles.seclelement}>
            {/* cities select here */}
            <View style={styles.cities}>
              <CityModalPicker />
            </View>
            <View style={styles.address}>
              <TextInput
                style={styles.nameinput}
                onChangeText={setfirstname}
                value="firstname"
                placeholder="FirstName"
                autoComplete="FirstName"
              />
            </View>
          </View>

          <View style={styles.input}>
            <TextInput
              style={styles.inputmail}
              onChangeText={setemail}
              value="email"
              placeholder="Email"
              autoComplete="email"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.inputmail}
              onChangeText={setpassword}
              value="password"
              placeholder="password"
              autoComplete="password"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.inputmail}
              onChangeText={setpassword}
              value="password"
              placeholder="Confirm password"
              autoComplete="Confirm password"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.loginButton}>
            <Button style={styles.logintext} title="REGISTER" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
    borderRadius: 30,
    position: "relative",
  },
  companyname: {
    justifyContent: "center",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.2,
    borderWidth: 3,
    borderColor: "white",
    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: Dimensions.get("window").height / 15,
    backgroundColor: Colors.Secondry,
    borderRadius: 30,
  },
  seclelement: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  exdip: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  abouttext: {
    paddingLeft: 50,
    paddingBottom: 5,
    color: "white",
    fontSize: 20,
  },
  inputabout: {
    borderWidth: 2,
    width: 250,
    height: 100,
    borderRadius: 30,
    borderColor: Colors.Primary,
    shadowOpacity: 90,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: Colors.Secondry,
  },
  cities: {
    height: 60,
    marginBottom: 35,
  },
  name: {
    flexDirection: "row",
    paddingVertical: 30,
    justifyContent: "space-around",
  },
  nameinput: {
    width: 125,
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
    borderColor: Colors.Secondry,
    shadowOpacity: 90,
    borderWidth: 2,
    color: Colors.Secondry,
  },
  input: {
    flexDirection: "row",
    paddingVertical: 30,
    justifyContent: "space-around",
  },
  inputmail: {
    color: Colors.Secondry,
    borderWidth: 2,
    width: 250,
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
    borderColor: Colors.Secondry,
    shadowOpacity: 90,
  },
  input: {
    flexDirection: "column",
    alignItems: "center",
  },
  logintext: {
    color: Colors.Secondry,
  },
  loginButton: {
    borderWidth: 2,
    backgroundColor: Colors.Secondry,
    width: 150,
    borderColor: Colors.Secondry,
    borderRadius: 30,
    alignSelf: "center",
    padding: 5,
    marginBottom: 30,
  },
});

export default InscriptionScreenCompany;
