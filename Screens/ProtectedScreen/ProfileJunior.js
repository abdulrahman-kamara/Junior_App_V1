// import React from "react";
// import {
//   View,
//   StyleSheet,
//   Dimensions,
//   TextInput,
//   Pressable,
//   ScrollView,
// } from "react-native";
// import Colors from "../../Constants/Colors";
// import Divider from "react-native-divider";
// import { useState } from "react-native";
// import { AuthContext } from "../../Context/Context";
// import {
//   Avatar,
//   Text,
//   Drawer,
//   Paragraph,
//   Title,
//   Caption,
//   Switch,
//   TouchableRipple,
//   Button,
// } from "react-native-paper";
// import {
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from "@react-navigation/drawer";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { TouchableOpacity } from "react-native-gesture-handler";

// const ProfileScreen = ({ navigation, route }) => {
//   const [text, onChangeText] = React.useState("");

//   const { logout } = React.useContext(AuthContext);

//   return (
//     <ScrollView>
//       <SafeAreaProvider>
//         <SafeAreaView style={styles.container}>
//           <View style={styles.drawerContent}>
//             <View style={styles.userInfoSection}>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   marginLeft: 15,
//                 }}
//               >
//                 <TouchableOpacity onPress={() => navigation.navigate("Junior")}>
//                   <Avatar.Image
//                     source={require("../../assets/Image/logo.png")}
//                     size={80}
//                   />
//                 </TouchableOpacity>
//                 <View style={{ marginLeft: 20 }}>
//                   <Title style={styles.title}>Kunta Kante</Title>
//                   <Caption style={styles.caption}>Developper web</Caption>
//                 </View>
//               </View>
//             </View>
//             <View style={styles.userInfoSection}>
//               <View style={styles.row}>
//                 <Icon
//                   name="map-marker-radius"
//                   color={Colors.Primary}
//                   size={20}
//                 />
//                 <Text style={{ color: "#777777", marginLeft: 20 }}>
//                   Freetown, Sierra Leone
//                 </Text>
//               </View>
//               <View style={styles.row}>
//                 <Icon name="phone" color={Colors.Primary} size={20} />
//                 <Text style={{ color: "#777777", marginLeft: 20 }}>
//                   +3367804656
//                 </Text>
//               </View>
//               <View style={styles.row}>
//                 <Icon name="email" color={Colors.Primary} size={20} />
//                 <Text style={{ color: "#777777", marginLeft: 20 }}>
//                   rahmanraynkunta@gmail.com
//                 </Text>
//               </View>
//               <View style={styles.row}>
//                 <Icon name="linkedin" color={Colors.Primary} size={20} />
//                 <Text style={{ color: "#777777", marginLeft: 20 }}>
//                   Freetown, Sierra Leone
//                 </Text>
//               </View>
//             </View>
//             <View style={styles.infoBoxWrapper}>
//               <View
//                 style={[
//                   styles.infoBox,
//                   {
//                     borderRightColor: "#dddddd",
//                     borderRightWidth: 1,
//                   },
//                 ]}
//               >
//                 <Title>40.50</Title>
//                 <Caption>Job Posted</Caption>
//               </View>
//               <View style={styles.infoBox}>
//                 <Title>12</Title>
//                 <Caption>Job</Caption>
//               </View>
//             </View>
//             <View style={styles.infoBoxWrapper}>
//               <View
//                 style={[
//                   styles.infoBox,
//                   {
//                     borderRightColor: "#dddddd",
//                     borderRightWidth: 1,
//                   },
//                 ]}
//               >
//                 <Icon name="school-outline" color="#FF6347" size={25} />
//                 <Title>Bac+3</Title>
//                 <Caption>Concepteur D??veloper</Caption>
//               </View>
//               <View style={styles.infoBox}>
//                 <Icon name="book-outline" color="#FF6347" size={25} />
//                 <Title>2 years</Title>
//                 <Caption>Experience</Caption>
//               </View>
//             </View>

//             <View style={styles.menuWrapper}>
//               <Text>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, when an unknown printer took a galley
//                 of type and scrambled it to make a type specimen book. It has
//                 survived not only five centuries, but also the leap into
//                 electronic typesetting, remaining essentially unchanged. It was
//                 popularised in the 1960s with the release of Letraset sheets
//                 containing Lorem Ipsum passages, and more recently with desktop
//                 publishing software like Aldus PageMaker including versions of
//                 Lorem Ipsum.
//               </Text>
//             </View>
//           </View>

//           <Drawer.Section style={styles.bottomDrawerSection}>
//             <DrawerItem
//               icon={({ color, size }) => (
//                 <Icon name="exit-to-app" color={color} size={size} />
//               )}
//               label="Sign out"
//               onPress={() => {
//                 logout();
//               }}
//             />
//           </Drawer.Section>
//         </SafeAreaView>
//       </SafeAreaProvider>
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   userInfoSection: {
//     paddingHorizontal: 30,
//     marginBottom: 25,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//     fontWeight: "500",
//   },
//   row: {
//     flexDirection: "row",
//     marginBottom: 10,
//   },
//   infoBoxWrapper: {
//     borderBottomColor: "#dddddd",
//     borderBottomWidth: 1,
//     borderTopColor: "#dddddd",
//     borderTopWidth: 1,
//     flexDirection: "row",
//     height: 100,
//   },
//   input: {},

//   infoBox: {
//     width: "50%",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   menuWrapper: {
//     marginTop: 20,
//     padding: 20,
//     borderWidth: 2,
//     borderRadius: 15,
//     marginBottom: 30,
//     height: Dimensions.get("window").height * 0.15,
//   },
//   menuItem: {
//     flexDirection: "row",
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//   },
//   menuItemText: {
//     color: "#777777",
//     marginLeft: 20,
//     fontWeight: "600",
//     fontSize: 16,
//     lineHeight: 26,
//   },
// });

// export default ProfileScreen;


import React, {useState} from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import axios from "axios";

import Colors from "../../Constants/Colors";
import Divider from "react-native-divider";
import { AuthContext } from "../../Context/Context";
import {
  Avatar,
  Text,
  Drawer,
  Paragraph,
  Title,
  Caption,
  Switch,
  TouchableRipple,
  Button,
} from "react-native-paper";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BASE_URL } from "../../config/api";
import { useEffect } from "react";

const ProfileScreen = ({ navigation, route }) => {
  const [text, onChangeText] = React.useState("");

  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [tel, setTel] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [profession, setProfession] = React.useState('');
  const [yearOfExperience, setYearOfExperience] = React.useState('');
  const [diploma, setDiploma] = React.useState('');
  const [city, setCity] = React.useState('');
  const [image, setImage] = React.useState('');

  const { logout, userToken, userInfo, setUserInfo } = React.useContext(AuthContext);
  const [id, setId] = useState(null);

  useEffect(()=> {
    //console.log("MON USER INFO OPOP", userInfo.roles);

    axios.get(`${BASE_URL}/api/me`, {
      headers: {
        authorization: `Bearer ${userInfo.token}`
      }
    })
  
      .then(res => {
        let myInfo = res.data;
        console.log("MYINFO",myInfo);
        setId(myInfo.id);
        setFirstname(myInfo.firstname);
        setLastname(myInfo.lastname);
        setTel(myInfo.telephone);
        setDescription(myInfo.description);
        setEmail(myInfo.email);
        setProfession(myInfo.profession.name);
        setYearOfExperience(myInfo.year_of_experience);
        setDiploma(myInfo.diploma.name);
        setCity(myInfo.city.name);
        setImage(myInfo.photoFile);
        // setUserInfo(userInfo);
        //console.log('GET INFO PROFIL JR :', myInfo);
        // console.log('NAME JR :', myInfo.profession.name);
      })
      .catch(err => {
        console.log(`ERROR  GET INFO PROFIL JR : ${err}`);
      })

  })
  // console.log('MON USER TOKEN', userToken);
  // console.log('MON USER TOKEN', userInfo);
  
//console.log(userInfo.roles);
  return (
    <ScrollView>
      {
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <View style={styles.drawerContent}>
              <View style={styles.userInfoSection}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 15,
                  }}
                >
                  <TouchableOpacity onPress={() => navigation.push("Junior", {JwtToken: userInfo.token, roles: userInfo.roles, id:id ?? userInfo.id})}>
                    <Avatar.Image
                      source={require("../../assets/Image/logo.png")}
                      size={80}
                    />
                  </TouchableOpacity>
                  <View style={{ marginLeft: 20 }}>
                    <Title style={styles.title}>{firstname} {lastname}</Title>
                    <Caption style={styles.caption}>{profession}</Caption>
                  </View>
                </View>
              </View>
              <View style={styles.userInfoSection}>
                <View style={styles.row}>
                  <Icon
                    name="map-marker-radius"
                    color={Colors.Primary}
                    size={20}
                  />
                  <Text style={{ color: "#777777", marginLeft: 20 }}>
                    {city}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Icon name="phone" color={Colors.Primary} size={20} />
                  <Text style={{ color: "#777777", marginLeft: 20 }}>
                    {tel}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Icon name="email" color={Colors.Primary} size={20} />
                  <Text style={{ color: "#777777", marginLeft: 20 }}>
                    {email}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Icon name="linkedin" color={Colors.Primary} size={20} />
                  <Text style={{ color: "#777777", marginLeft: 20 }}>
                    {city}
                  </Text>
                </View>
              </View>
              <View style={styles.infoBoxWrapper}>
                <View
                  style={[
                    styles.infoBox,
                    {
                      borderRightColor: "#dddddd",
                      borderRightWidth: 1,
                    },
                  ]}
                >
                  <Title>40.50</Title>
                  <Caption>{image}</Caption>
                </View>
                <View style={styles.infoBox}>
                  <Title>12</Title>
                  <Caption>Job</Caption>
                </View>
              </View>
              <View style={styles.infoBoxWrapper}>
                <View
                  style={[
                    styles.infoBox,
                    {
                      borderRightColor: "#dddddd",
                      borderRightWidth: 1,
                    },
                  ]}
                >
                  <Icon name="school-outline" color="#FF6347" size={25} />
                  <Title>{diploma}</Title>
                </View>
                <View style={styles.infoBox}>
                  <Icon name="book-outline" color="#FF6347" size={25} />
                  <Title>{yearOfExperience} years</Title>
                  <Caption>Experience</Caption>
                </View>
              </View>

              <View style={styles.menuWrapper}>
                <Text>
                  {description}
                </Text>
              </View>
            </View>

            <Drawer.Section style={styles.bottomDrawerSection}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="exit-to-app" color={color} size={size} />
                )}
                label="Sign out"
                onPress={() => {
                  logout();
                }}
              />
            </Drawer.Section>
          </SafeAreaView>
        </SafeAreaProvider>}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  input: {},

  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 20,
    padding: 20,
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 30,
    height: Dimensions.get("window").height * 0.15,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});

export default ProfileScreen;