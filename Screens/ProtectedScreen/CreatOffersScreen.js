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
import Colors from "../../Constants/Colors";
import PickerImage from "../../Components/PickerImage";
import { useTheme } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const { width, height } = Dimensions.get("window");
import { AuthContext } from "../../Context/Context";
import axios from "axios";
import { BASE_URL } from "../../config/api";

const CreateProfileModal = ({ route, navigation }) => {
  const { userInfo } = useContext(AuthContext);
  const url = "http://10.0.3.232:8000/api/offers";

  const myCity = 1;
  const myDiploma = 1;
  const myEntreprise = 1;

  const [jobs, setJobs] = useState(""); // OK
  const [description, setDescription] = useState(""); //OK
  const [typeOfContract, setTypeOfContract] = useState('Type of contract');//OK
  const [typeOfWork, setTypeOfWork] = useState('Work type');// OK

  const TestOffer = () => {
    axios({
      method: "post",
      url: url,
      data: {
        jobs: jobs,
        description: description,
        typeOfContract: typeOfContract,
        typeOfWork: typeOfWork,
        city: `/api/cities/${myCity}`,
        entreprise: `/api/entreprises/${myEntreprise}`,
        diploma: `/api/diplomas/${myDiploma}`,
      },
    })
      .then(function (response) {
        console.log("OFFER OK", response);
      })
      .catch(function (error) {
        console.log("OFFER ERROR", error);
      });
  };

  const { showActionSheetWithOptions } = useActionSheet();

  //CONTRAT TYPE OPTIONS
  const MyContract = ["CDD", "CDI", "Internship", "Cancel"];
  const ContractdestructiveButtonIndex = 4;
  const ContractcancelButtonIndex = 4;
  // fucntion that handle the Expirence options
  const HandleContract = () => {
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
        // setContract(2);
        setTypeOfContract(MyContract[buttonIndex]);
      }
    );
  };
  //CONTRAT TYPE OPTIONS

  //CONTRAT OF WORKS OPTIONS
    const MyworkType = ["In office", "Part time", "Remote", "Cancel"];
    const WorkTypedestructiveButtonIndex = 4;
    const WorkTypecancelButtonIndex = 4;
      // fucntion that handle the Diploma options
  const HandleWorkType = () => {
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
        // setWorkType(2);
        setTypeOfWork(MyworkType[buttonIndex]);
      }
    );
  };
  //CONTRAT OF WORKS OPTIONS

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {/* TITRE */}
        <View style={styles.actionTitle}>
          <TextInput
            value={jobs}
            placeholder="Enter Title"
            onChangeText={(text) => setJobs(text)}
          />
        </View>
        {/* TITRE */}

        {/* DESCRIPTION */}
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
        {/* DESCRIPTION */}

        {/* TYPE_OF_CONTRACT */}
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
          <Text>{typeOfContract}</Text>
        </TouchableOpacity>
        {/* TYPE_OF_CONTRACT */}

        {/* WORK TYPE */}
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
            <Text>{typeOfWork}</Text>
          </TouchableOpacity>
        {/* WORK TYPE */}

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.commandButton}
            onPress={() => {
              TestOffer();
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
