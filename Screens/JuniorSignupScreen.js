import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  Alert,
} from "react-native";

import Colors from "../Constants/Colors";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { AuthContext } from "../Context/Context";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import Spinner from "react-native-loading-spinner-overlay";

const Juniorsignup = ({ navigation }) => {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const { Junior, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.Primary} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Join Us !</Text>
      </View>
      <ScrollView>
        {/* <Text>{val}</Text> */}

        <Animatable.View style={styles.footer} animation="flipInY">
          <Text style={styles.text_footer}>FirstName</Text>
          <View style={styles.action}>
            <MaterialIcons
              name="account-circle"
              color={Colors.Primary}
              size={20}
            />
            <TextInput
              style={styles.textInput}
              placeholder="firstname"
              value={firstname}
              onChangeText={(text) => setFirstname(text)}
            />
          </View>

          <Text style={styles.text_footer}>Lastname</Text>
          <View style={styles.action}>
            <MaterialIcons
              name="account-circle"
              color={Colors.Primary}
              size={20}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Lastname"
              value={lastname}
              autoCapitalize="none"
              onChangeText={(text) => setLastname(text)}
            />
          </View>

          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <MaterialIcons name="email" color={Colors.Primary} size={20} />
            <TextInput
              style={styles.input}
              placeholder="Enter email address"
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              value={email}
              autoCapitalize="none"
            />
          </View>

          <Text style={{ marginTop: 35 }}>Password</Text>
          <View style={styles.action}>
            <MaterialIcons name="lock" color={Colors.Primary} size={20} />
            <TextInput
              style={styles.input}
              placeholder="Enter password "
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signin}
              onPress={() => {
                Junior(firstname, lastname, email, password, navigation);
              }}
            >
              <Text style={styles.textSign}>signUp</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
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
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signin: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: Colors.Primary,
  },
  signOut: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: Colors.Secondry,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.Secondry,
  },
  textOut: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.Primary,
  },
});

export default Juniorsignup;
