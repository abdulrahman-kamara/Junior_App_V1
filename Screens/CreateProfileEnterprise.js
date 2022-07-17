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
  const { ProfileEnterprise, userInfo, userToken } = useContext(AuthContext);
  // console.log('TEST CREATE PROFILE ENTREPRISE USERINFO',userInfo);
  // console.log('TEST CREATE PROFILE ENTREPRISE USER_TOKEN',userToken);
  console.log('//createProfilEntreprise userInfo.token =//',userInfo.token);
  console.log('//createProfilEntreprise route.params =//',route.params);
  const [name, setName] = useState("");
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

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
            placeholder="Description entreprise"
            multiline
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.commandButton}
            onPress={() => {
              ProfileEnterprise(
                name,
                address,
                city,
                description,
                image,
                userInfo.token,
                route.params.id,
                ), navigation.pop();
              // );
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
