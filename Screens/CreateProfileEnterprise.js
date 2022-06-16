import React, { useState, useEffect } from "react";
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

const CreateProfileModal = (props) => {
  // my hooks with useState
  const [diplom, setDiplom] = useState("Diplom");
  const [profession, setProfession] = useState("Profession");
  const [expierrence, setExpierrence] = useState("Expierrence");
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [Adress, setAdress] = useState();
  const [description, setDescription] = useState();

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

  // A call to the api
  // const getUser = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://api.torea-patissier.students-laplateforme.io/api/users",
  //       {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           Authorization: `Token ${token}`,
  //         },
  //       }
  //     );
  //     const json = await response.json();
  //     console.log("json", json);
  //     setData(json.users);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            margin: 20,
          }}
        >
          <View style={{}}>
            <View
              style={{
                borderWidth: "1px",
                width: "100%",
                height: 150,
                borderColor: Colors.Primary,
                borderRadius: 15,
              }}
            >
              <View
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  marginTop: 60,
                }}
              >
                <PickerImage />
                <View style={styles.actionTitle}>
                  <TextInput
                    style={[styles.textInput, { color: Colors.Secondry }]}
                    autoCorrect={false}
                    placeholder="Title"
                    keyboardType="number-pad"
                    value={phone}
                    onChangeText={(text) => setPhone(text)}
                  />
                </View>
              </View>
            </View>
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
              value={Adress}
              onChangeText={(text) => setAdress(text)}
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
          <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
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
export default CreateProfileModal;
