import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Colors from "../../Constants/Colors";
import Card from "../../UI/Card";
import Header from "../../Components/Header";
import axios from "axios";

const DashboardScreen = ({ navigation }) => {
  const data = {
    email: "",
    password: "",
  };

  const getApi = () => {
    axios
      .get(
        "https://api.torea-patissier.students-laplateforme.io/api/users",
        data
      )
      .then(function (response) {
        if (response.status === 201) {
          console.log(response);
        }
        alert(JSON.stringify(response));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <TouchableOpacity onPress={() => getApi()}>
        <Text>Call api</Text>
      </TouchableOpacity>
      {/* <View style={styles.dashboard}>
        <Header />

        <ScrollView style={styles.cards}>
          <Card />
          <Card />
        </ScrollView>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    backgroundColor: Colors.Primary,
    position: "relative",

    borderRadius: Dimensions.get("window").width * 0.05,
  },
  cards: {
    marginTop: 40,
  },
});
export default DashboardScreen;
