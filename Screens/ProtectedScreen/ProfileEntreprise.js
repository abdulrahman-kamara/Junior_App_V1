import React, {useState, useEffect} from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
  ScrollView,
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

const ProfileScreen = ({ navigation, route }) => {
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');
  const [id, setId] = useState(null);
  const [email, setEmail] = React.useState('');
  
  const { logout, userInfo, userToken, setUserInfo} = React.useContext(AuthContext);

  console.log('TEST PROFILENTREPRISE USERINFO.TOKEN////',userInfo.token);
  //console.log('TEST PROFILENTREPRISE USERTOKEN',userToken);

  useEffect( () => {

    axios.get(`${BASE_URL}/api/my`, {
      headers: {
        authorization: `Bearer ${userInfo.token}`
      }
    })
    .then(res => {
      let myInfo = res.data;
      console.log('MY INFO == ',myInfo);
      setId(myInfo.id);
      setName(myInfo.name);
      setDescription(myInfo.description);
      setEmail(myInfo.email);
      setAddress(myInfo.address);
      setCity(myInfo.city.name);
      setImage(myInfo.photoFile);
      //setUserInfo(userInfo);
      // console.log('GET INFO PROFIL JR :', myInfo);
      // console.log('////////////////////COMPOSANT MONTEE//////////////////////////////');
      // console.log('NAME JR :', myInfo.profession.name);
    })
    .catch(err => {
      console.log(`ERROR  API/My : ${err}`);
    })

  });

  return (
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
                <TouchableOpacity
                  onPress={() => navigation.push("Enterprise", {JwtToken: userInfo.token, roles: userInfo.roles, id: id ?? userInfo.id})}
                >
                  <Avatar.Image
                    size={80}
                    style={{ marginTop:10 }}
                  />
                </TouchableOpacity>
                <View style={{ marginLeft: 20 }}>
                  <Title style={styles.title}>{name}</Title>
                </View>
              </View>
            </View>
            {/* <View style={styles.row}>
                <Icon name="email" color={Colors.Primary} size={22} />
                <Text style={styles.InfoPerso}>
                  {address}
                </Text>
              </View> */}
            <View style={styles.userInfoSection}>
              <View style={styles.row}>
                <Icon
                  name="map-marker-radius"
                  color={Colors.Secondry}
                  size={22}
                />
                <Text style={styles.InfoPerso}>
                 City : {city}
                </Text>
              </View>
              
              <View style={styles.row}>
                <Icon name="email" color={Colors.Secondry} size={22} />
                <Text style={styles.InfoPerso}>
                  Email : {email}
                </Text>
              </View>
              <View style={styles.row}>
                <Icon name="home" color={Colors.Secondry} size={22} />
                <Text style={styles.InfoPerso}>
                  Address : {address}
                </Text>
              </View>
            </View>
            <View style={styles.infoBoxWrapper}>
              <View
                style={[
                  styles.infoBox,
                  {
                    borderRightColor: Colors.Secondry,
                    borderRightWidth: 1,
                  },
                ]}
              >
                <Title>4</Title>
                <Caption>Offers Posted</Caption>
              </View>
              <View style={styles.infoBox}>
                <Title>12</Title>
                <Caption>Job</Caption>
              </View>
            </View>
            {/* <View style={styles.infoBoxWrapper}>
              <View
                style={[
                  styles.infoBox,
                  {
                    borderRightColor: Colors.Secondry,
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
            </View> */}
<Text style={styles.textDescription}>Description :</Text>
            <View style={styles.menuWrapper}>
              <Text style={{ color : '#000' }}>
                {description}
              </Text>
            </View>
          </View>

          <Drawer.Section>
            {/* <Text style={{ color:Colors.Secondry }}>Log out</Text> */}
            <DrawerItem
              icon={() => (
                <Icon name="exit-to-app" color={Colors.Secondry} size={22} />
                )}
                label='Sign out'
                onPress={() => {
                  logout();
                }}
            />
          </Drawer.Section>
        </SafeAreaView>
      </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary
  },
  //City Email Home
  InfoPerso:{
    color: Colors.Secondry,
    marginLeft: 20
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color:'#ffff',
    marginTop:10,
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
    borderBottomColor: Colors.Secondry,
    borderWidth: 2,
    borderTopColor: Colors.Secondry,
    borderTopWidth: 2,
    flexDirection: "row",
    height: 120,
    marginTop:10,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    
  },
  //Texte description
  textDescription:{
    color:Colors.Secondry,
    marginTop:50,
    marginHorizontal:10,
    fontWeight:"bold",
    fontSize:20,
    marginLeft: 20,
  },
  //Description
  menuWrapper: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal:20,
    backgroundColor:Colors.Secondry,
    marginBottom: 30,
    borderColor: Colors.Secondry,
    height: Dimensions.get("window").height * 0.15,
    marginLeft: 20,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: Colors.Secondry,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});

export default ProfileScreen;