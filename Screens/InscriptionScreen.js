import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import Colors from "../Constants/Colors";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import CityModalPicker from "../Components/CityModalPicker";
import ExpierenceModalPiker from "../Components/ExpierenceModalPiker";
import DiplomaModalPicker from "../Components/DiplomaModalPiker";
import ProfessionModalPiker from "../Components/ProfessionModalPiker";
import ImagePicker from "../Components/PickerImage";
import TextEditor from "../Components/TextEditor";
import { AuthContext } from "../Context/Context";

const InscriptionScreen = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    telephone: "",
    description: "",
    profession_id: "",
    year_of_experience: "",
    city_id: "",
    diploma_id: "",
    avatar: "",
    role: "",
    secureTextEntry: true,
    check_textInputChange: false,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updatepassworwEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const signUp = (
    email,
    password,
    firstname,
    lastname,
    telephone,
    description,
    profession,
    yearOfExperience,
    city,
    diploma,
    avatar
  ) => {
    // setuserToken("fgk");
    // setIsLoading(false);
    const URL =
      "https://api.torea-patissier.students-laplateforme.io/api/users";
    fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        telephone: "",
        description: "",
        profession: "/api/professions/3",
        yearOfExperience: "magenta",
        city: "/api/cities/2",
        diploma: "/api/diplomas/3",
        avatar: "image/jpeg",
      }),
    })
      .then((response) => response.json())

      .then((json) => {
        console.log(json);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.Primary} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome to Junior !</Text>
      </View>
      <ScrollView>
        <Animatable.View style={styles.footer} animation="flipInY">
          <View style={styles.containerOption}>
            {/* profile image */}
            <View style={styles.imageContainer}>
              {/* <ImagePicker style={styles.imagePicker} /> */}
            </View>
            {/* select items here */}
            <View style={styles.seclelement}>
              {/* cities select here */}
              <View style={styles.cities}>
                <CityModalPicker />
              </View>
              {/* profession here */}
              <View style={styles.profession}>
                <ProfessionModalPiker />
              </View>
            </View>
            <View style={styles.exdip}>
              {/* expierence here */}
              <View style={styles.expierence}>
                <ExpierenceModalPiker />
              </View>
              {/* diploma here */}
              <View style={styles.diploma}>
                <DiplomaModalPicker />
              </View>
            </View>
          </View>
          <View style={styles.texteditor}>
            <TextEditor />
          </View>
          <View style={styles.namefiled}>
            <View style={styles.text_fname}>
              <Text style={{ marginBottom: 15, color: Colors.Primary }}>
                Firstname
              </Text>
              <TextInput
                style={styles.inputext}
                placeholder="irstname"
                autoCapitalize="none"
                onChangeText={(val) => {
                  textInputChange(val);
                }}
              />
            </View>
            <View>
              <Text style={{ marginBottom: 15, color: Colors.Primary }}>
                Lastname
              </Text>
              <TextInput
                style={styles.inputext}
                placeholder="Lastname"
                autoCapitalize="none"
                onChangeText={(val) => {
                  textInputChange(val);
                }}
              />
            </View>
          </View>
          <Text style={{ marginTop: 20, color: Colors.Primary }}>
            Telephone
          </Text>
          <View style={styles.action}>
            <MaterialIcons name="lock" color={Colors.Primary} size={20} />
            <TextInput
              style={styles.textInput}
              placeholder="telephone"
              autoCapitalize="none"
              keyboardType="numeric"
              onChangeText={(val) => {
                textInputChange(val);
              }}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="flipInY">
                <Feather name="check-circle" color={Colors.Primary} size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={{ marginTop: 20, color: Colors.Primary }}>email</Text>
          <View style={styles.action}>
            <MaterialIcons name="lock" color={Colors.Primary} size={20} />
            <TextInput
              style={styles.textInput}
              placeholder="email"
              autoCapitalize="none"
              onChangeText={(val) => {
                textInputChange(val);
              }}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="flipInY">
                <Feather name="check-circle" color={Colors.Primary} size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={{ marginTop: 35, color: Colors.Primary }}>Password</Text>
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
          <View style={styles.button}>
            <Pressable
              style={styles.signIn}
              onPress={() =>
                signUp(
                  Object.email,
                  Object.password,
                  Object.firstname,
                  Object.lastname,
                  Object.telephone,
                  Object.description,
                  Object.profession,
                  Object.yearOfExperience,
                  Object.city,
                  Object.diploma,
                  Object.avatar
                )
              }
            >
              <Text style={styles.textSign}>CREATE</Text>
            </Pressable>
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
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  imagePicker: {
    height: 200,
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
  imageContainer: {
    borderRadius: 100,
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: Colors.Primary,
    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "center",
  },
  seclelement: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  exdip: {
    flexDirection: "row",
    marginVertical: 25,
    justifyContent: "space-between",
  },

  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  texteditor: {
    alignSelf: "center",
    paddingBottom: 0,
  },
  inputext: {
    borderColor: Colors.Primary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: 120,
    alignSelf: "center",
  },
  namefiled: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    marginTop: 30,
    flexDirection: "row",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.Primary,
    paddingBottom: 5,
    padding: 15,
    borderRadius: 20,
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
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: Colors.Primary,
    borderColor: Colors.Secondry,
    borderWidth: 4,
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

export default InscriptionScreen;

// import * as React from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   TextInput,
//   Dimensions,
//   Button,

//   VirtualizedList,
// } from "react-native";
// import Colors from "../Constants/Colors";
// import { useState } from "react";
// import CityModalPicker from "../Components/CityModalPicker";
// import ExpierenceModalPiker from "../Components/ExpierenceModalPiker";
// import DiplomaModalPicker from "../Components/DiplomaModalPiker";
// import ProfessionModalPiker from "../Components/ProfessionModalPiker";
// import ImagePicker from "../Components/PickerImage";

// const InscriptionScreen = (props) => {
//   const [email, setemail] = useState("");
//   const [firstname, setfirstname] = useState("");
//   const [lastname, setlastname] = useState("");
//   const [password, setpassword] = useState("");

//   return (
//     <View>
//       <ScrollView>
//         <View style={styles.container}>
//           {/* profile image */}
//           <View style={styles.imageContainer}>
//             <ImagePicker />
//           </View>
//           {/* select items here */}
//           <View style={styles.seclelement}>
//             {/* cities select here */}
//             <View style={styles.cities}>
//               <CityModalPicker />
//             </View>
//             {/* profession here */}
//             <View style={styles.profession}>
//               <ProfessionModalPiker />
//             </View>
//           </View>
//           <View style={styles.exdip}>
//             {/* expierence here */}
//             <View style={styles.expierence}>
//               <ExpierenceModalPiker />
//             </View>
//             {/* diploma here */}
//             <View style={styles.diploma}>
//               <DiplomaModalPicker />
//             </View>
//           </View>

//           <View style={styles.about}>
//             <Text style={styles.abouttext}>About</Text>
//             <TextInput
//               type="text"
//               style={styles.inputabout}
//               placeholder="Enter your"
//               value="Text"
//             />
//           </View>
//           <View style={styles.name}>
//             <TextInput
//               style={styles.nameinput}
//               onChangeText={setfirstname}
//               value="firstname"
//               placeholder="FirstName"
//               autoComplete="FirstName"
//             />
//             <TextInput
//               style={styles.nameinput}
//               onChangeText={setlastname}
//               value="lastname"
//               placeholder="LastName"
//               autoComplete="LastName"
//             />
//           </View>
//           <View style={styles.input}>
//             <TextInput
//               style={styles.inputmail}
//               onChangeText={setemail}
//               value="email"
//               placeholder="Email"
//               autoComplete="email"
//               keyboardType="email-address"
//             />
//             <TextInput
//               style={styles.inputmail}
//               onChangeText={setpassword}
//               value="password"
//               placeholder="password"
//               autoComplete="password"
//               keyboardType="email-address"
//             />
//             <TextInput
//               style={styles.inputmail}
//               onChangeText={setpassword}
//               value="password"
//               placeholder="Confirm password"
//               autoComplete="Confirm password"
//               keyboardType="email-address"
//             />
//           </View>
//           <View style={styles.loginButton}>
//             <Button
//               style={styles.logintext}
//               title="REGISTER"
//               onPress={() => props.navigation.navigate("Protected")}
//             />
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.Primary,
//     borderRadius: 30,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
//   imageContainer: {
//     borderRadius: Dimensions.get("window").width * 0.9,
//     width: Dimensions.get("window").width * 0.5,
//     height: Dimensions.get("window").width * 0.5,
//     borderWidth: 3,
//     borderColor: "white",
//     overflow: "hidden",
//     alignSelf: "center",
//     justifyContent: "center",
//     marginVertical: Dimensions.get("window").height / 15,
//   },
//   seclelement: {
//     flexDirection: "row",

//     justifyContent: "space-between",
//     margin: 10,
//     padding: 10,
//   },
//   exdip: {
//     flexDirection: "row",

//     justifyContent: "space-between",
//     margin: 10,
//     padding: 10,
//   },
//   abouttext: {
//     paddingLeft: 50,
//     paddingBottom: 5,
//     color: "white",
//     fontSize: 20,
//   },
//   inputabout: {
//     borderWidth: 2,
//     width: 250,
//     height: 100,
//     borderRadius: 30,
//     borderColor: Colors.Primary,
//     shadowOpacity: 90,
//     justifyContent: "center",
//     alignSelf: "center",
//     backgroundColor: Colors.Secondry,
//   },
//   name: {
//     flexDirection: "row",
//     paddingVertical: 30,
//     justifyContent: "space-around",
//   },
//   nameinput: {
//     width: 125,
//     padding: 15,
//     borderRadius: 30,
//     marginBottom: 10,
//     borderColor: Colors.Secondry,
//     shadowOpacity: 90,
//     borderWidth: 2,
//     color: Colors.Secondry,
//   },
//   input: {
//     flexDirection: "row",
//     paddingVertical: 30,
//     justifyContent: "space-around",
//   },
//   inputmail: {
//     color: Colors.Secondry,
//     borderWidth: 2,
//     width: 250,
//     padding: 15,
//     borderRadius: 30,
//     marginBottom: 10,
//     borderColor: Colors.Secondry,
//     shadowOpacity: 90,
//   },
//   input: {
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   logintext: {
//     color: Colors.Secondry,
//   },
//   loginButton: {
//     borderWidth: 2,
//     backgroundColor: Colors.Secondry,
//     width: 150,
//     borderColor: Colors.Secondry,
//     borderRadius: 30,
//     alignSelf: "center",
//     padding: 5,
//     marginBottom: 30,
//   },
// });

// export default InscriptionScreen;

// import React, { useContext, useState } from "react";
// import {
//   Button,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   StyleSheet,
// } from "react-native";
// import Spinner from "react-native-loading-spinner-overlay";
// import { AuthContext } from "../Context/Context";

// const RegisterScreen = ({ navigation }) => {
//   const [firstname, setFirstname] = useState(null);
//   const [lastname, setLastname] = useState(null);
//   const [email, setEmail] = useState(null);
//   const [password, setPassword] = useState(null);

//   const { isLoading, register } = useContext(AuthContext);

//   return (
//     <View style={styles.container}>
//       <Spinner visible={isLoading} />
//       <View style={styles.wrapper}>
//         <TextInput
//           style={styles.input}
//           value={firstname}
//           placeholder="Firstname"
//           onChangeText={(text) => setFirstname(text)}
//         />
//         <TextInput
//           style={styles.input}
//           value={lastname}
//           placeholder="Lastname"
//           onChangeText={(text) => setLastname(text)}
//         />

//         <TextInput
//           style={styles.input}
//           value={email}
//           placeholder="Enter email"
//           onChangeText={(text) => setEmail(text)}
//         />

//         <TextInput
//           style={styles.input}
//           value={password}
//           placeholder="Enter password"
//           onChangeText={(text) => setPassword(text)}
//           secureTextEntry
//         />

//         <Button
//           title="Register"
//           onPress={() => {
//             register(firstname, lastname, email, password);
//           }}
//         />

//         <View style={{ flexDirection: "row", marginTop: 20 }}>
//           <Text>Already have an accoutn? </Text>
//           <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//             <Text style={styles.link}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   wrapper: {
//     width: "80%",
//   },
//   input: {
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: "#bbb",
//     borderRadius: 5,
//     paddingHorizontal: 14,
//   },
//   link: {
//     color: "blue",
//   },
// });

// export default RegisterScreen;
