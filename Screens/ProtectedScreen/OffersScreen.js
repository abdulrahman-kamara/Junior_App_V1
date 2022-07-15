import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  Button,
  ScrollView,
} from "react-native";
import Colors from "../../Constants/Colors";
import { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import PickerImage from "../../Components/PickerImage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";


const AboutTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={400}
    />
  );
};
const MissonTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={400}
    />
  );
};

const OffersScreen = ({ route, navigation }) => {
  const [value, onChangeText] = useState("About Job");
  const [mission, onChangeMission] = useState("Misson");
  console.log('test', route);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {/* profile image */}

          <View style={styles.imageContainer}>
            <PickerImage />
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 25, color: Colors.Primary }}>
             
              </Text>
            </View>
            <View style={styles.imagetext}>
              <Feather name="book" color={Colors.Primary} size={20} />
              <Text> {route.params.last_name}</Text>
              <Feather name="map-pin" color={Colors.Primary} size={20} />
              <Text>Paris</Text>
              <Ionicons
                name="school-outline"
                size={20}
                color={Colors.Primary}
              />
              <Text>Bac+3</Text>
              <Ionicons
                name="school-outline"
                size={20}
                color={Colors.Primary}
              />
              <Text>1 an</Text>
            </View>
          </View>

          <View style={styles.aboutJob}>
            <AboutTextInput
              multiline
              numberOfLines={10}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              style={{
                flex: 1,
                justifyContent: "center",
                fontSize: 20,
                color: Colors.Primary,
              }}
            />
          </View>
          {/* select items here */}
          <View style={styles.titleContainer}>{/* cities select here */}</View>

          <View style={styles.aboutMission}>
            <MissonTextInput
              multiline
              numberOfLines={10}
              onChangeText={(text) => onChangeMission(text)}
              value={mission}
              style={{
                flex: 1,
                justifyContent: "center",
                fontSize: 20,
                color: Colors.Primary,
              }}
            />
          </View>
          <View style={styles.loginButton}>
            <Button
              style={styles.logintext}
              title="APPLY"
              onPress={() => navigation.navigate("Apply")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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

  seclelement: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    borderWidth: 2,
    borderColor: Colors.Primary,
    borderRadius: 30,
  },
  aboutJob: {
    marginBottom: 30,
    width: "100%",
    height: 140,
    borderColor: Colors.Primary,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.Secondry,
    paddingTop: 10,
    padding: 10,
  },

  aboutMission: {
    marginBottom: 30,
    width: "100%",
    height: 140,
    borderColor: Colors.Primary,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.Secondry,
    paddingTop: 10,
    padding: 10,
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
    borderRadius: 10,
    padding: 5,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 5,
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
    width: "90%",
    height: 100,
    borderRadius: 20,
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
  imagetext: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default OffersScreen;
