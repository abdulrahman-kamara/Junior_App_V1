import React, { useState } from "react";
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
import Users from "../Model/users";
import axios from "axios";

const LoginScreen = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    secureTextEntry: true,
    check_textInputChange: false,
    isValidEmail: true,
    isValidPassword: true,
  });

  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidEmail: false,
      });
    }
  };

  const handleEmailChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        isValidEmail: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updatepassworwEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const LoginHandleFunction = (email, password) => {
    signIn(email, password);
  };

  // const submitLogin = function (email, password) {
  //   props.object = JSON.stringify({
  //     email: email,
  // //     password: password,
  // //   });

  // };

  // const loginHandler = (email, password) => {
  //   // fetch(
  //   //   "https://api.torea-patissier.students-laplateforme.io/authentication_token",
  //   //   {
  //   //     method: "POST",
  //   //     headers: {
  //   //       Accept: "application/json",
  //   //       "Content-Type": "application/json",
  //   //     },
  //   //     body: object,
  //   //   }
  //   // )
  //   //   .then((response) => response.json())
  //   //   .then((json) => {
  //   //     console.log(json.token);
  //   //   });
  //   const userAuth = Users.filter((item) => {
  //     return email === item.email && password === item.password;
  //   });
  //   if (data.email.length == 0 || data.password.length == 0) {
  //     Alert.alert("Wrong input", "email or password cannot be empty", [
  //       { text: "Okey" },
  //     ]);
  //     return;
  //   }

  //   if (userAuth.length == 0) {
  //     Alert.alert("Invalid user", "email or password is incorrect", [
  //       { text: "Okey" },
  //     ]);
  //     return;
  //   }
  //   signIn(userAuth);
  // };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.Primary} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome to Junior !</Text>
      </View>
      <Animatable.View style={styles.footer} animation="flipInY">
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <MaterialIcons name="lock" color={Colors.Primary} size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(val) => {
              textInputChange(val);
            }}
            onEndEditing={(e) => handleEmailChange(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="flipInY">
              <Feather name="check-circle" color={Colors.Primary} size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidEmail ? null : (
          <Animatable.View animation="flipInY" duration={500}>
            <Text style={styles.errorMsg}>
              the mail should have a format email
            </Text>
          </Animatable.View>
        )}

        <Text style={{ marginTop: 35 }}>Password</Text>
        <View style={styles.action}>
          <MaterialIcons name="lock" color={Colors.Primary} size={20} />
          <TextInput
            style={styles.textInput}
            secureTextEntry={data.secureTextEntry ? true : false}
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={(val) => {
              handlePasswordChange(val);
            }}
          />
          <TouchableOpacity onPress={updatepassworwEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="gray" size={20} />
            ) : (
              <Feather name="eye" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="flipInY" duration={500}>
            <Text style={styles.errorMsg}>
              the password should have atleast 8 characters{" "}
            </Text>
          </Animatable.View>
        )}

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signin}
            onPress={
              // () => getApi(data.email, data.password)
              () => LoginHandleFunction(data.email, data.password)

              // (loginHandler(data.email, data.password),
            }
          >
            <Text style={styles.textSign}>Sgin in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Welcome")}
            style={[
              styles.signOut,
              {
                borderColor: Colors.Primary,
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text style={styles.textOut}>Sigin Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
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
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
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

export default LoginScreen;
