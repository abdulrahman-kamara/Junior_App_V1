import * as DocumentPicker from "expo-document-picker";
import React from "react";
import {
  Button,
  View,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Colors from "../../Constants/Colors";
// import { TextInput } from "react-native-paper";

export default function ApplyScreen(props) {
  const [Phone, setPhone] = useState("+33");
  const [LinkedIn, setLinkedIn] = useState("");
  const [Potfolio, setPotfolio] = useState("");
  const [Github, setGithub] = useState("");
  const [text, onChangeText] = useState("");

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri);
    console.log(result);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.title}>
            <Text
              style={{
                padding: 10,
                alignSelf: "center",
                color: Colors.Secondry,
                fontSize: 25,
                fontWeight: "bold",
                paddingTop: 50,
              }}
            >
              Developper Full-Stack
            </Text>
          </View>
          <Text style={styles.textfiled}>Resume/CV</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            underlineColor="false"
          />
          <Text style={styles.textfiled}>Full Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            underlineColor="false"
          />
        </View>
        <Text style={styles.textfiled}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          underlineColor="false"
        />
        <Text style={styles.textfiled}>Phone Number</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={Phone}
          underlineColor="false"
          keyboardType="numeric"
        />
        <Text style={styles.textfiled}>LinkedIn URL</Text>
        <TextInput
          style={styles.input}
          onChangeText={setLinkedIn}
          value={LinkedIn}
          accessibilityRole="link"
          underlineColor="false"
        />
        <Text style={styles.textfiled}>Potfolio</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPotfolio}
          value={Potfolio}
          underlineColor="false"
          accessibilityRole="link"
        />
        <Text style={styles.textfiled}>Github URL</Text>
        <TextInput
          style={styles.input}
          onChangeText={setGithub}
          value={Github}
          underlineColor="false"
          accessibilityRole="link"
        />
        <View
          style={{
            borderWidth: 2,
            backgroundColor: Colors.Secondry,
            borderRadius: 15,
            width: 140,
            height: 50,
            marginBottom: 30,
            marginTop: 10,
            borderColor: Colors.Secondry,
            alignSelf: "center",
          }}
        >
          <Button
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            fontSize={30}
            title="Apply"
            color={Colors.Primary}
            onPress={() => alert("merci pour postuler")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    borderColor: Colors.Primary,
    backgroundColor: Colors.Secondry,
  },

  textfiled: {
    color: Colors.Secondry,
    paddingLeft: 20,
    paddingTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    backgroundColor: Colors.Primary,
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
