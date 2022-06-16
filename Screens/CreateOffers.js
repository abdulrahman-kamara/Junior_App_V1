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
  const [city, setCity] = useState();
  const [contract, setContract] = useState("Contract_Type");
  const [workType, setWorkType] = useState("Work_Type");

  // My ActionBotoom Sheet with its options and its fuction

  // Options Profession
  const MyContract = ["CDD", "CDI", "Alternance", "Stage", "Cancel"];
  const ContractdestructiveButtonIndex = 4;
  const ContractcancelButtonIndex = 4;

  // Options Profession
  const MyworkType = ["Distance", "Partime", "Remote", "Cancel"];
  const WorkTypedestructiveButtonIndex = 3;
  const WorkTypecancelButtonIndex = 3;

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

  // fucntion that handle the Diploma options
  const HandleWorkType = (props) => {
    showActionSheetWithOptions(
      {
        options: MyworkType,
        cancelButtonIndex: WorkTypecancelButtonIndex,
        destructiveButtonIndex: WorkTypedestructiveButtonIndex,
      },
      (buttonIndex) => {
        // Do something here depending on the button index selected
        if (buttonIndex === 3) {
          return;
        }
        setWorkType(MyworkType[buttonIndex]);
      }
    );
  };

  // fucntion that handle the Expirence options
  const HandleContract = (props) => {
    showActionSheetWithOptions(
      {
        options: MyContract,
        cancelButtonIndex: ContractdestructiveButtonIndex,
        destructiveButtonIndex: ContractcancelButtonIndex,
      },
      (buttonIndex) => {
        // Do something here depending on the button index selected
        if (buttonIndex === 4) {
          return;
        }
        setContract(MyContract[buttonIndex]);
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
                  marginTop: 70,
                }}
              >
                <PickerImage />
                <View style={styles.actionTitle}>
                  <TextInput
                    style={[styles.textInput, { color: Colors.Primary }]}
                    autoCorrect={false}
                    placeholder="Title"
                    keyboardType="number-pad"
                    value={phone}
                    onChangeText={(text) => setPhone(text)}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 0,
                justifyContent: "space-around",
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                onPress={HandleDiplom}
                style={{
                  borderWidth: 1,
                  marginTop: 10,
                  width: 150,
                  padding: 10,
                  borderRadius: 15,
                  borderColor: Colors.Primary,
                }}
              >
                <MaterialIcons name="lock" color={Colors.Primary} size={20} />
                <Text>{diplom}</Text>
              </TouchableOpacity>
              <View
                style={{
                  flex: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 5,
                  width: 150,
                  height: 80,
                }}
              >
                <TextInput
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,

                      borderWidth: 1,
                      borderRadius: 15,
                      borderColor: Colors.Primary,
                      width: "95%",
                      padding: 5,
                      marginTop: 10,
                    },
                  ]}
                  autoCorrect={false}
                  placeholder="City"
                  multiline
                  value={description}
                  onChangeText={(text) => setDescription(text)}
                />
              </View>
            </View>
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
            placeholder="About Job"
            multiline
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View
          style={{
            flex: 0,
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={HandleContract}
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 15,
              borderColor: Colors.Primary,
            }}
          >
            <MaterialIcons
              name="lock"
              color={Colors.Primary}
              size={20}
              padding={4}
            />
            <Text>{contract}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={HandleWorkType}
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 15,
              borderColor: Colors.Primary,
            }}
          >
            <MaterialIcons
              name="lock"
              color={Colors.Primary}
              size={20}
              padding={4}
            />
            <Text>{workType}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={HandleExpierence}
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 15,
              borderColor: Colors.Primary,
            }}
          >
            <MaterialIcons
              name="lock"
              color={Colors.Primary}
              size={20}
              padding={4}
            />
            <Text>{expierrence}</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.mainContainer}></View> */}
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
    paddingBottom: 10,
    padding: 20,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  actionTitle: {
    flexDirection: "row",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: Colors.Primary,
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

    color: "#05375a",
  },
  sheet: {
    flex: 3,
    height: 40,
  },
});
export default CreateProfileModal;
