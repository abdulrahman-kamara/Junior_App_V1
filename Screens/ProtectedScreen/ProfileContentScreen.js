import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import Colors from "../../Constants/Colors";
import Divider from "react-native-divider";
import { useState } from "react-native";
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
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = (props) => {
  const [text, onChangeText] = React.useState("Useless Text");

  const { signOut } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 2,
                padding: 20,
                borderRadius: 20,
              }}
            >
              <Avatar.Image
                source={require("../../assets/Image/logo.png")}
                size={50}
              />
              <View style={{ marginLeft: 15 }}>
                <Title style={styles.title}>Kunta24</Title>
                <Caption style={styles.caption}>@Developper web</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  30
                </Paragraph>
                <Caption style={styles.caption}>Job Viewed</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  40
                </Paragraph>
                <Caption style={styles.caption}>Job Posted</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  10
                </Paragraph>
                <Caption style={styles.caption}>profile vist</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <View style={styles.inputarea}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <View style={styles.buttonText}>
              <Pressable
                onPress={() => {
                  props.navigation.navigate("ProfileContent");
                }}
              >
                <Text style={styles.button}>SAVE</Text>
              </Pressable>
            </View>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 10,
  },
  userInfoSection: {},
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    padding: 10,
    color: Colors.Primary,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    height: 100,
    justifyContent: "space-around",
    borderWidth: 2,
    borderColor: Colors.Primary,
    padding: 10,
    borderRadius: 20,
    backgroundColor: Colors.Secondry,
    borderRightWidth: 1,
  },
  section: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 2,
  },
  paragraph: {
    fontWeight: "bold",

    marginTop: 5,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    // fontFamily: "NunitoSans-Bold",
    borderColor: Colors.Secondry,
    borderWidth: 3,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: Colors.Primary,
    height: 50,
    width: 130,
  },
  button: {
    flexWrap: "wrap",
    color: Colors.Secondry,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    fontSize: 20,
  },

  drawerSection: {},
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default ProfileScreen;
