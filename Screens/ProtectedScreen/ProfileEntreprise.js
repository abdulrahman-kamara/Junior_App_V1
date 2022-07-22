import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import Colors from "../../Constants/Colors";
import Divider from "react-native-divider";
import { AuthContext } from "../../Context/Context";
import { Text, Drawer, Title, Caption } from "react-native-paper";
import axios from "axios";

import { DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BASE_URL } from "../../config/api";

const ProfileScreen = ({ navigation, route, myInfo }) => {
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [id, setId] = useState(null);
  const [email, setEmail] = React.useState("");

  const { logout, userInfo, userToken, setUserInfo } =
    React.useContext(AuthContext);

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

        console.log("GET INFO PROFIL JR :", avatar);
        console.log("image", `${BASE_URL}${avatar}`);
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
            <View style={styles.userInfoSectionHeader}>
              <View
                style={{
                  margin: 2,
                  marginBottom: 50,
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
                  style={{}}
                >
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignSelf: "center",
                      borderWidth: "1px",
                      width: 360,
                      height: 150,
                      borderColor: Colors.Primary,
                      borderRadius: 15,
                    }}
                  >
                    <View>
                      <Image
                        source={{ url: `${BASE_URL}${avatar}` }}
                        style={styles.coverAvater}
                      />
                    </View>
                    <View>
                      <View style={{ marginTop: -50, marginLeft: 10 }}>
                        <View>
                          <Image
                            source={{ url: `${BASE_URL}${avatar}` }}
                            style={styles.avater}
                          />
                        </View>
                        <View style={{ marginTop: 5, marginLeft: 20 }}>
                          <Title style={styles.title}>{name}</Title>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.row}>
              <Icon
                name="email"
                color={Colors.Primary}
                style={{ marginLeft: 30 }}
                size={20}
              />
              <Text
                style={{
                  color: "#777777",
                  marginLeft: 20,
                  fontSize: 17,
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                {email}
              </Text>
            </View>
            <View style={styles.userInfoSection}>
              <View style={styles.row}>
                <Icon
                  name="map-marker-radius"
                  color={Colors.Primary}
                  size={20}
                />
                <Text
                  style={{
                    color: "#777777",
                    marginLeft: 20,
                    fontSize: 17,
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  {address}
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
                <Icon name="map-marker-radius" color="#FF6347" size={25} />
                <Title>City</Title>
                <Caption
                  style={{
                    color: "#777777",
                    marginLeft: 10,
                    fontSize: 17,
                    fontWeight: "bold",
                  }}
                >
                  {city}
                </Caption>
              </View>
              <View style={styles.infoBox}>
                <Icon name="book-outline" color="#FF6347" size={25} />
                <Title>Job Posted</Title>
                <Caption
                  style={{
                    color: "#777777",
                    marginLeft: 10,
                    fontSize: 17,
                    fontWeight: "bold",
                  }}
                >
                  20
                </Caption>
              </View>
            </View>

            <View style={styles.menuWrapper}>
              <Text>{description}</Text>
            </View>
          </View>
          <View style={styles.bottomDrawerSection}>
            <Drawer.Section style={{ color: Colors.Secondry }}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="exit-to-app" color={Colors.Primary} size={size} />
                )}
                label="Sign out"
                labelStyle={{
                  color: Colors.Primary,
                  fontSize: 13,
                  fontWeight: "bold",
                }}
                onPress={() => {
                  logout();
                }}
              />
            </Drawer.Section>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSectionHeader: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 40,
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
    borderWidth: 1,
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  coverAvater: {
    marginTop: 70,
    width: 360,
    height: 150,
    backgroundColor: "rgba(0,0,0,06)",
    borderRadius: 15,
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
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    padding: 20,
    borderWidth: 2,
    marginBottom: 30,
    width: 360,
    height: 150,

    borderRadius: 15,
    borderColor: "#dddddd",
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
