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
  // my hooks with useState
  const [jobs, setJobs] = useState(""); //ok
  const [description, setDescription] = useState(""); //ok
  const [image, setImage] = useState(null); // av
  const [city, setCity] = useState("");
  // const [diploma, setDiploma] = useState("Diploma"); //OK
  // const [contract, setContract] = useState("Contract type"); //OK
  // const [workType, setWorkType] = useState("Work type"); //ok
  const [currentDate, setCurrentDate] = useState(""); //ok
  const [dateOfExpiration, setDateOfExpiration] = useState(""); //ok
  const entreprise = 15; //ok
  // const entreprise = "nom de l'entreprise";
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(year + "-" + month + "-" + date);
  }, []);

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 2; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setDateOfExpiration(year + "-" + month + "-" + date);
  }, []);

  // Options Profession
  const MyContract = 1;
  // const MyContract = ["CDD", "CDI", "Internship", "Cancel"];
  const ContractdestructiveButtonIndex = 4;
  const ContractcancelButtonIndex = 4;

  // Options Profession
  const MyworkType = 3;
  // const MyworkType = ["Distance", "Partime", "Remote", "Cancel"];
  const WorkTypedestructiveButtonIndex = 3;
  const WorkTypecancelButtonIndex = 3;

  // Options Diploma
  const MyDiplom = 3;
  const DiplomdestructiveButtonIndex = 3;
  const DiplomcancelButtonIndex = 3;

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
        // setDiploma(2);
        setDiploma(MyDiplom[buttonIndex]);
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
        // setWorkType(2);
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
        // setContract(2);
        setContract(MyContract[buttonIndex]);
      }
    );
  };

  // my hooks that recieve all the fucntion that handle the different options
  const { showActionSheetWithOptions } = useActionSheet();
  const { colors } = useTheme();
  const { userInfo } = useContext(AuthContext);

  // const myTokenToSend = {
  //   headers: {
  //     authorization: `Bearer ${userInfo.token}`
  //   }
  // }
//COUCOU
  const url = "http://10.0.3.232:8000/api/offers";

  const TestOffer = () => {
  axios({
    method: 'post',
    url: url,
    data: {
        jobs: "test",
        description: "test description",
        type_of_contract: "CDD",
        type_of_work: "CDI",
    }
  })
    .then(function (response) {
      console.log("OFFER OK", response);
    })
    .catch(function (error) {
      // console.log('OFFER ERROR',error);
      console.log("OFFER ERROR", error);
    });
  };


  console.log("TEST USERINFO CREATE OFFER", userInfo);
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
                <PickerImage setImage={setImage} image={image} />
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
                <Text>{diploma}</Text>
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
                {/* <Text>{currentDate}</Text>
                <Text>{dateOfExpiration}</Text> */}
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
                  value={city}
                  onChangeText={(text) => setCity(text)}
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
          {/* <TextInput
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
          /> */}
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
          {/* <TouchableOpacity
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
          </TouchableOpacity> */}
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

        <View style={styles.actionTitle}>
          {/* <TextInput
            style={[styles.textInput, { color: Colors.Secondry }]}
            autoCorrect={false}
            placeholder="Title"
            value={jobs}
            onChangeText={(text) => setJobs(text)}
          /> */}
          <TextInput
            value={jobs}
            placeholder="Enter Title"
            onChangeText={(text) => setJobs(text)}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.commandButton}
            onPress={() => {TestOffer()}}
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
