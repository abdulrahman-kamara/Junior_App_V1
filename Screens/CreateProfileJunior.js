import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../Constants/Colors";
import PickerImage from "../Components/PickerImage";
import { useTheme } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../Context/Context";

const { width, height } = Dimensions.get("window");

const CreateProfileJunior = ({ navigation, route }) => {
  const { ProfileJunior } = useContext(AuthContext);
  // console.log("CREATE PROFIL JR ", route.params.JwtToken);
  // const Token = route.params.JwtToken;
  // const id = route.params.id;

  // my hooks with useState
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState();
  const [city, setCity] = useState();
  const [description, setDescription] = useState();
  const [profession, setProfession] = useState("Profession");
  const [diplom, setDiplom] = useState("Diploma");
  const [expierrence, setExpierrence] = useState("Experience");
  const [image, setImage] = useState(null);

  // My ActionBotoom Sheet with its options and its fuction

  // Options Profession
  const MyProfession = [
    "Developper Full-Stack",
    "Developper Front",
    "Developper Back",
    "Cancel",
  ];
  const ProfessiondestructiveButtonIndex = 3;
  const ProfessioncancelButtonIndex = 3;

  // Options Diploma
  const MyDiplom = ["Bac+ 3", "Bac+ 2", "Bac+ 5", "Cancel"];
  const DiplomdestructiveButtonIndex = 3;
  const DiplomcancelButtonIndex = 3;

  // Options Expirence
  const MyExpierrence = ["1 an", "2 ans", "3 ans", "Cancel"];
  const ExpirencedestructiveButtonIndex = 3;
  const ExpirencecancelButtonIndex = 3;

  // fucntion that handle the profession options
  const HandleProfession = (props) => {
    showActionSheetWithOptions(
      {
        options: MyProfession,
        cancelButtonIndex: ProfessioncancelButtonIndex,
        destructiveButtonIndex: ProfessiondestructiveButtonIndex,
      },
      (buttonIndex) => {
        // Do something here depending on the button index selected
        if (buttonIndex === 3) {
          return;
        }
        setProfession(MyProfession[buttonIndex]);
      }
    );
  };

  // fucntion that handle the Diploma options
  const HandleDiplom = (props) => {
    showActionSheetWithOptions(
      {
        options: MyDiplom,
        cancelButtonIndex: DiplomcancelButtonIndex,
        destructiveButtonIndex: DiplomdestructiveButtonIndex,
      },
      (buttonIndex) => {
        // Do something here depending on the button index selected
        if (buttonIndex === 3) {
          return;
        }
        setDiplom(MyDiplom[buttonIndex]);
      }
    );
  };

  // fucntion that handle the Expirence options
  const HandleExpierence = (props) => {
    showActionSheetWithOptions(
      {
        options: MyExpierrence,
        cancelButtonIndex: ExpirencedestructiveButtonIndex,
        destructiveButtonIndex: ExpirencecancelButtonIndex,
      },
      (buttonIndex) => {
        // Do something here depending on the button index selected
        if (buttonIndex === 3) {
          return;
        }
        setExpierrence(MyExpierrence[buttonIndex]);
      }
    );
  };

  // my hooks that recieve all the fucntion that handle the different options
  const { showActionSheetWithOptions } = useActionSheet();
  const { colors } = useTheme();

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            margin: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <PickerImage setImage={setImage} image={image} />
            </View>
            <Text
              style={{
                marginTop: 10,
                fontSize: 18,
                fontWeight: "bold",
                marginTop: 30,
              }}
            >
              {/* {route.params.firstname} {route.params.lastname} */}
            </Text>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.action}>
            <FontAwesome name="phone" size={20} color={Colors.Primary} />
            <TextInput
              style={[styles.textInput, { color: colors.text }]}
              autoCorrect={false}
              placeholder="Phone"
              keyboardType="number-pad"
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />
          </View>
          <View style={styles.action}>
            <Icon name="map-marker-outline" size={20} color={Colors.Primary} />
            <TextInput
              style={[styles.textInput, { color: colors.text }]}
              autoCorrect={false}
              placeholder="City"
              value={city}
              onChangeText={(text) => setCity(text)}
            />
          </View>
          <View style={styles.action}>
            <Feather name="check-circle" color={Colors.Primary} size={20} />
            <TextInput
              style={[styles.textInput, { color: colors.text }]}
              autoCorrect={false}
              placeholder="Firstname"
              value={firstname}
              onChangeText={(text) => setFirstname(text)}
            />
          </View>
          <View style={styles.action}>
            <Feather name="check-circle" color={Colors.Primary} size={20} />
            <TextInput
              style={[styles.textInput, { color: colors.text }]}
              autoCorrect={false}
              placeholder="Lastname"
              value={lastname}
              onChangeText={(text) => setLastname(text)}
            />
          </View>
        </View>

        <View
          style={{
            flex: 0,
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <TouchableOpacity onPress={HandleProfession} style={{}}>
            <MaterialIcons
              name="lock"
              color={Colors.Primary}
              size={20}
              padding={4}
            />
            <Text>{profession}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={HandleDiplom} style={{}}>
            <MaterialIcons
              name="lock"
              color={Colors.Primary}
              size={20}
              padding={4}
            />
            <Text>{diplom}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={HandleExpierence} style={{}}>
            <MaterialIcons
              name="lock"
              color={Colors.Primary}
              size={20}
              padding={4}
            />
            <Text>{expierrence}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 0,
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
          }}
        >
          <TextInput
            style={[
              styles.textInput,
              {
                color: colors.text,
                height: 100,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: Colors.Primary,
                width: "95%",
                padding: 5,
                marginTop: 10,
              },
            ]}
            autoCorrect={false}
            placeholder="Description"
            multiline
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.commandButton}
            onPress={() => {
              ProfileJunior(
                firstname,
                lastname,
                phone,
                city,
                description,
                profession,
                diplom,
                expierrence,
                image,
                route.params.JwtToken,
                route.params.id
              );
            }}
          >
            <Text style={{ color: Colors.Secondry }}>Create</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  commandButton: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: Colors.Primary,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    width: "40%",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.Primary,
    borderRadius: 15,
    paddingBottom: 10,
    padding: 20,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,

    color: "#05375a",
  },
  sheet: {
    flex: 3,
    height: 40,
  },
});
export default CreateProfileJunior;
