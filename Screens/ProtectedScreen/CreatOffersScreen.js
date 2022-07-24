import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Button,
  Image,
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
import * as ImagePicker from "expo-image-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { ScrollView } from "react-native-gesture-handler";

const CreateProfileModal = ({ route, navigation }) => {
  const { userInfo } = useContext(AuthContext);
  const url = "http://10.0.3.105:8000/api/offers";

  const myEntreprise = 1;

  const [jobs, setJobs] = useState(""); // OK
  const [description, setDescription] = useState(""); //OK
  const [typeOfContract, setTypeOfContract] = useState("Type of contract"); //OK
  const [typeOfWork, setTypeOfWork] = useState("Work type"); // OK
  const [image, setImage] = useState(); // av

  //DROPDOWN DIPLOMA
  const [openDiploma, setOpenDiploma] = useState(false);
  const [valueDiploma, setValueDiploma] = useState(null);
  const [itemsDiploma, setItemsDiploma] = useState([
    { label: "Licence", value: 1 },
    { label: "Master", value: 2 },
  ]);

  //DROPDOWN CITY
  const [openCity, setOpenCity] = useState(false);
  const [valueCity, setValueCity] = useState(null);
  const [itemsCity, setItemsCity] = useState([
    { label: "Calvi", value: 1 },
    { label: "Marseille", value: 2 },
    { label: "Toulouse", value: 3 },
    { label: "Paris", value: 4 },
    { label: "Lille", value: 5 },
  ]);

  //DATE EXPIRATION
  const [dateOfExpiration, setDateOfExpiration] = useState(""); //ok
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 2; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setDateOfExpiration(year + "-" + month + "-" + date);
  }, []);




  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log("MY RESULT ", result);

    if (!result.cancelled) {
      // setImage(result);
      setImage(result.uri);
    }
  };

  const TestOffer = () => {
    axios({
      method: "post",
      url: url,
      data: {
        jobs: jobs, //ok
        description: description,//ok
        // image: image,
        typeOfContract: typeOfContract,//ok
        typeOfWork: typeOfWork,//ok
        city: `/api/cities/${valueCity}`,//ok
        entreprise: `/api/entreprises/${myEntreprise}`,
        diploma: `/api/diplomas/${valueDiploma}`,//ok
        expirationDate: dateOfExpiration,//ok
      },
    })
      .then(function (response) {
        console.log("OFFER OK", response);
        console.log("OKOKOKOK", image);
        alert("ok");
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
      height:'20%',
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

  {/* TEST */}
  {/* <View
    style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
  >
    <Button title="Pick an image from camera roll" onPress={pickImage} />
    {image && (
      <Image
        source={{ uri: image }}
        style={{ width: 200, height: 200 }}
      />
    )}
  </View> */}
  {/* TEST */}



  <View style={styles.DiplomaCity}>
  {/* DIPLOMA */}
  <View
  style={styles.dropDownLeft}
  >
  <DropDownPicker
    open={openDiploma}
    value={valueDiploma}
    items={itemsDiploma}
    setValue={setValueDiploma}
    setItems={setItemsDiploma}
    setOpen={setOpenDiploma}
    placeholder="Diploma"
  />
  </View>
  {/* DIPLOMA */}

  {/* CITY */}
  <View
  style={styles.dropDownRight}
  >
  <DropDownPicker
    open={openCity}
    value={valueCity}
    items={itemsCity}
    setValue={setValueCity}
    setItems={setItemsCity}
    setOpen={setOpenCity}
    placeholder='City'
  />
  </View>
  {/* CITY */}
  </View>


  <View style={styles.button}>
    <TouchableOpacity
      style={styles.commandButton}
      onPress={() => {
        //   console.log('MY IMAGE',image);
        TestOffer();
      }}
    >
      <Text style={{ color: Colors.Secondry }}>Create</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  DiplomaCity:{
    display:'flex',
    flexDirection:'row',
    marginHorizontal:20,
    zIndex:10
  },
  dropDownLeft:{
    width:'50%',
    marginRight:5,
    
  },
  dropDownRight:{
    width:'50%',
    marginLeft:5,
  },
  button: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex:1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: Colors.Primary,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    width: "40%",
    zIndex:1,
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
    zIndex:1
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
