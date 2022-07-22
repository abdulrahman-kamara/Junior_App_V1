import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import axios from "axios";
import Colors from "../../Constants/Colors";
import Divider from "react-native-divider";
import { AuthContext } from "../../Context/Context";
import { Text, Drawer, Title, Caption } from "react-native-paper";
import { DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BASE_URL } from "../../config/api";
// import { useEffect } from "react";

const ProfileScreen = ({ navigation, route }) => {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [profession, setProfession] = React.useState("");
  const [yearOfExperience, setYearOfExperience] = React.useState("");
  const [diploma, setDiploma] = React.useState("");
  const [city, setCity] = React.useState("");
  const [avatar, setAvatar] = React.useState("");

  const { logout, userToken, userInfo, setUserInfo } =
    React.useContext(AuthContext);
  const [id, setId] = useState(null);

  //useeffect qui prendre notre fuction fetch de notre profile
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/me`, {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      })

      .then((res) => {
        let myInfo = res.data;
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
        setAvatar(myInfo.avatar);
        console.log("GET INFO PROFIL JR :", myInfo);
        console.log("image", `${BASE_URL}${avatar}`);
      })
      .catch((err) => {
        console.log(`ERROR  GET INFO PROFIL JR : ${err}`);
      });
  });

  return (
    <ScrollView>
      {
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <View style={styles.drawerContent}>
              <View style={styles.userInfoSectionHeader}>
                <View
                  style={{
                    margin: 2,
                    marginBottom: 90,
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.push("Junior", {
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
                            <Title style={styles.title}>
                              {firstname} {lastname}
                            </Title>
                            <Caption style={styles.caption}>
                              {profession}
                            </Caption>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.userInfoSection}>
                <View style={styles.row}>
                  <Icon
                    name="map-marker-radius"
                    color={Colors.Primary}
                    size={25}
                  />
                  <Text
                    style={{
                      color: "#777777",
                      marginLeft: 10,
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                  >
                    {city}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Icon name="phone" color={Colors.Primary} size={25} />
                  <Text
                    style={{
                      color: "#777777",
                      marginLeft: 10,
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                  >
                    {tel}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Icon name="email" color={Colors.Primary} size={25} />
                  <Text
                    style={{
                      color: "#777777",
                      marginLeft: 10,
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                  >
                    {email}
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
                  <Icon name="school-outline" color="#FF6347" size={25} />
                  <Title>{diploma}</Title>
                </View>
                <View style={styles.infoBox}>
                  <Icon name="book-outline" color="#FF6347" size={25} />
                  <Title>{yearOfExperience}</Title>
                  <Caption>Experience</Caption>
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
                    <Icon
                      name="exit-to-app"
                      color={Colors.Primary}
                      size={size}
                    />
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
      }
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
    flex: 1,
    justifyContent: "center",
    margin: "auto",
    paddingHorizontal: 20,
    marginBottom: 25,
    width: "100%",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: "500",
    color: Colors.Primary,
    marginLeft: 5,
    marginBottom: 10,
  },
  avater: {
    borderWidth: 1,
    width: 100,
    height: 100,
    borderRadius: 50,
    // marginTop: 80,
  },
  coverAvater: {
    marginTop: 125,
    width: 360,
    height: 150,
    backgroundColor: "rgba(0,0,0,06)",
    borderRadius: 15,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 15,
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
  bottomDrawerSection: {
    marginLeft: 10,
    width: "50%",
    borderWidth: 2,
    backgroundColor: Colors.Secondry,
    borderColor: "#dddddd",
    borderRadius: 15,
    marginBottom: 10,
  },
});

export default ProfileScreen;
