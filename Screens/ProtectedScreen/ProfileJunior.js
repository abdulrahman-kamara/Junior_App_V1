import React, {useState, useEffect} from "react";
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
  const [id, setId] = useState(null);

  const { logout, userToken, userInfo } = React.useContext(AuthContext);

  useEffect(()=> {

    axios.get(`${BASE_URL}/api/me`, {
      headers: {
        authorization: `Bearer ${userInfo.token}`
      }
    })
      .then(res => {
        let myInfo = res.data;
        console.log("PROFIL JR USERINFO",myInfo);
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
        console.log('GET INFO PROFIL JR :', myInfo);
      })
      .catch(err => {
        console.log(`ERROR  GET INFO PROFIL JR : ${err}`);
      })

  });

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
                  <TouchableOpacity onPress={() => navigation.push("Update profile", 
                  {
                    JwtToken: userInfo.token,
                    roles: userInfo.roles,
                    id:id ?? userInfo.id,
                    myPhone : tel,
                    myCity: city,
                    myFirstname : firstname,
                    myLastName : lastname,
                    myProfession : profession,
                    myDiploma : diploma,
                    myXp : yearOfExperience,
                    myDescription : description
                  })}>
                    <Avatar.Image
                      // source={require(BASE_URL + image)}
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
                    color={Colors.Secondry}
                    size={20}
                  />
                  <Text style={{ color: Colors.Secondry, marginLeft: 20 }}>
                    {city}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Icon name="phone" color={Colors.Secondry} size={20} />
                  <Text style={{ color: Colors.Secondry, marginLeft: 20 }}>
                    {tel}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Icon name="email" color={Colors.Secondry} size={20} />
                  <Text style={{ color: Colors.Secondry, marginLeft: 20 }}>
                    {email}
                  </Text>
                </View>
                {/* <View style={styles.row}>
                  <Icon name="linkedin" color={Colors.Secondry} size={20} />
                  <Text style={{ color: Colors.Secondry, marginLeft: 20 }}>
                    {city}
                  </Text>
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

                  <Icon name="school-outline" color={Colors.Secondry} size={25} />
                  <Title style={{ color:Colors.Secondry }}>{diploma}</Title>
                  <Caption style={{ color:Colors.Secondry }}>Diploma</Caption>
                </View>
                <View style={styles.infoBox}>
                  <Icon name="book-outline" color={Colors.Secondry} size={25} />
                  <Title style={{ color:Colors.Secondry }}>{yearOfExperience}</Title>
                  <Caption style={{ color:Colors.Secondry }}>Experience</Caption>
                </View>
              </View> 
                  <Text style={styles.textDescription}>Description:</Text>
              <View style={styles.menuWrapper}>
                <Text style={{ color:'black' }}>
                  {description}
                </Text>
              </View>
            </View>

            <Drawer.Section style={styles.bottomDrawerSection}>
              <DrawerItem
                icon={() => (
                  <Icon name="exit-to-app" color={Colors.Secondry} size={20} />
                )}
                style={{ marginLeft: 20 }}
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
    backgroundColor:Colors.Primary
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginTop:20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color:Colors.Secondry,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
    color:Colors.Secondry,
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
    marginTop:30,
  },
  input: {},

  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  //Texte description
  textDescription:{
    color:Colors.Secondry,
    marginTop:30,
    marginHorizontal:10,
    fontWeight:"bold",
    fontSize:20,
    marginLeft: 20,
  },
  //Description
  menuWrapper: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 30,
    borderColor:Colors.Secondry,
    height: Dimensions.get("window").height * 0.15,
    backgroundColor:Colors.Secondry,
    marginHorizontal:20,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: 'red',
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});

export default ProfileScreen;