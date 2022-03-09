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
import Colors from "../../Constants/Colors";
import { useState } from "react";
import CityModalPicker from "../../Components/CityModalPicker";

import ImagePicker from "../../Components/PickerImage";

const CreateOffers = ({ props, navigation }) => {
  const [email, setemail] = useState("");
  const [firstname, setfirstname] = useState("");

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
              Job Title
            </Text>
            <View style={styles.titleContainer}>
              <Text style={styles.text_container}>Date of published</Text>
              <Text style={styles.text_container}>City</Text>
              <Text style={styles.text_container}>Expierence</Text>
            </View>
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
          <View style={styles.titleContainer}>
            {/* cities select here */}
            <Text style={styles.text}>Type of contact</Text>
            <Text style={styles.text}> Expierence</Text>
            <Text style={styles.text}>Type of work</Text>
          </View>

          <View style={styles.description}>
            <Text style={styles.abouttext}> Job Description</Text>
            <TextInput
              type="text"
              style={styles.inputabout}
              placeholder="Enter your"
              value="Text"
            />
          </View>
          <View style={styles.loginButton}>
            <Button
              style={styles.logintext}
              title="CREATE"
              onPress={() => navigation.navigate("Dashboard")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Primary,
    borderRadius: 30,

    width: "100%",
    height: "100%",
    justifyContent: "center",
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
    width: Dimensions.get("window").width * 0.98,
    height: Dimensions.get("window").height * 0.2,
    borderWidth: 3,
    borderColor: "white",
    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: Dimensions.get("window").height / 15,
    backgroundColor: Colors.Secondry,
    borderRadius: 30,
    padding: 5,
  },
  seclelement: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    borderWidth: 2,
    borderColor: Colors.Primary,
    borderRadius: 30,
  },
  about: {
    marginBottom: 30,
  },
  description: {
    marginTop: 10,
    marginBottom: 30,
  },
  text_container: {
    borderWidth: 2,
    borderColor: Colors.Primary,
    padding: 8,
    marginVertical: 5,
    fontSize: 12,
    color: Colors.Primary,
    borderRadius: 10,
  },
  text: {
    borderWidth: 2,
    borderColor: Colors.Secondry,
    padding: 8,
    marginVertical: 5,
    fontSize: 12,
    color: Colors.Secondry,
    borderRadius: 10,
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
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 5,
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

export default CreateOffers;
