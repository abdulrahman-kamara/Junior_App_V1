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
const { width, height } = Dimensions.get("window");
import { AuthContext } from "../Context/Context";

const CreateProfileEnterprise = ({ navigation, route }) => {
  const { ProfileEnterprise } = useContext(AuthContext);

  // my hooks with useState
  const [name, setName] = useState(route.params.name);
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
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
          <View
            style={{
              borderWidth: "1px",
              width: "100%",
              height: 150,
              borderColor: Colors.Primary,
              borderRadius: 15,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <View>
                <PickerImage setImage={setImage} image={image} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.action}>
            <FontAwesome name="home" size={20} color={Colors.Primary} />
            <TextInput
              style={[styles.textInput, { color: colors.text }]}
              autoCorrect={false}
              placeholder="city"
              keyboardType="number-pad"
              value={city}
              onChangeText={(text) => setCity(text)}
            />
          </View>

          <View style={styles.action}>
            <Feather name="check-circle" color={Colors.Primary} size={20} />
            <TextInput
              style={[styles.textInput, { color: colors.text }]}
              autoCorrect={false}
              placeholder="name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.action}>
            <Feather name="check-circle" color={Colors.Primary} size={20} />
            <TextInput
              style={[styles.textInput, { color: colors.text }]}
              autoCorrect={false}
              placeholder="Adress"
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
          </View>
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
            placeholder="description_entreprise"
            multiline
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.commandButton}
            onPress={() => {
              console.log("route.params.id", route.params.id);
              ProfileEnterprise(
                address,
                city,
                name,
                description,
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
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.Primary,
    borderRadius: 15,
    padding: 20,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  actionTitle: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: Colors.Secondry,
    borderRadius: 15,
    paddingBottom: 10,
    padding: 20,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: Colors.Secondry,
  },
  sheet: {
    flex: 3,
    height: 40,
  },
});
export default CreateProfileEnterprise;
