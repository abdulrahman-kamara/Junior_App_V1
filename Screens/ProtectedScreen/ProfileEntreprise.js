import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
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
import axios from "axios";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BASE_URL } from "../../config/api";

const ProfileScreen = ({ navigation, route, myInfo }) => {
  const [text, onChangeText] = React.useState("");

  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [id, setId] = useState(null);
  const [email, setEmail] = React.useState("");

  const { logout, userInfo, userToken, setUserInfo } =
    React.useContext(AuthContext);

  //console.log('TEST PROFILENTREPRISE USERINFO',userInfo.token);
  //console.log('TEST PROFILENTREPRISE USERTOKEN',userToken);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/my`, {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      })

      .then((res) => {
        let myInfo = res.data;
        console.log("MYINFO", myInfo);
        setId(myInfo.id);
        setName(myInfo.name);
        setDescription(myInfo.description);
        setEmail(myInfo.email);
        setAddress(myInfo.address);
        setCity(myInfo.city.name);
        setAvatar(myInfo.avatar);
        //setUserInfo(userInfo);
        console.log("GET INFO PROFIL JR :", avatar);
        console.log("image", `${BASE_URL}${avatar}`);
        // console.log('NAME JR :', myInfo.profession.name);
      })
      .catch((err) => {
        console.log(`ERROR  API/My : ${err}`);
      });
  }, []);

  return (
    <ScrollView>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.push("Enterprise", {
                      JwtToken: userInfo.token,
                      roles: userInfo.roles,
                      id: id ?? userInfo.id,
                    })
                  }
                >
                  <Image
                    source={{ url: `${BASE_URL}${avatar}` }}
                    style={styles.avater}
                  />
                </TouchableOpacity>
                <View style={{ marginLeft: 20, marginTop: 20 }}>
                  <Title style={styles.title}>{name}</Title>
                </View>
              </View>
            </View>
            <View style={styles.row}>
              <Icon
                name="email"
                color={Colors.Primary}
                style={{ marginLeft: 30 }}
                size={20}
              />
              <Text style={{ color: "#777777", marginLeft: 20 }}>{email}</Text>
            </View>
            <View style={styles.userInfoSection}>
              <View style={styles.row}>
                <Icon
                  name="map-marker-radius"
                  color={Colors.Primary}
                  size={20}
                />
                <Text style={{ color: "#777777", marginLeft: 20 }}>
                  {address}
                </Text>
              </View>

              <View style={styles.row}>
                <Icon name="home" color={Colors.Primary} size={20} />
                <Text style={{ marginLeft: 20 }}>{city}</Text>
              </View>
              {/* <View style={styles.row}>
                <Icon name="linkedin" color={Colors.Primary} size={20} />
                <Text style={{ marginLeft: 20 }}>{city}</Text>
              </View> */}
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
                <Caption>Job Posted</Caption>
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
                <Title>Bac+3</Title>
                <Caption>Concepteur Déveloper</Caption>
              </View>
              <View style={styles.infoBox}>
                <Icon name="book-outline" color="#FF6347" size={25} />
                <Title>2 years</Title>
                <Caption>Experience</Caption>
              </View>
            </View>

            <View style={styles.menuWrapper}>
              <Text>{description}</Text>
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
      </SafeAreaProvider>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "green",
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
  avater: {
    // backgroundColor: Colors.Primary,
    borderWidth: 1,
    width: 80,
    height: 80,
    borderRadius: 50,
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
