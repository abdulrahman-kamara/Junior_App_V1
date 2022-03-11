import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Colors from "../../Constants/Colors";
import Card from "../../UI/Card";
import Header from "../../Components/Header";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";

const DashboardScreen = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  const [feed, setFeed] = useState([]);

  // we get our feed here
  useEffect(() => {
    const URL = "https://reqres.in/api/users?page=2";

    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setFeed(res.data);
        console.log(res.data);
      });
  }, []);

  // const getApi = () => {
  //   axios
  //     .get(
  //       "https://api.torea-patissier.students-laplateforme.io/api/users",
  //       data
  //     )
  //     .then(function (response) {
  //       if (response.status === 201) {
  //         console.log(response);
  //       }
  //       alert(JSON.stringify(response));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={styles.dashboard}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="search job here"
            onChangeText={onChangeText}
            value={text}
            color="black"
          />
        </View>

        <View style={styles.postJobView}>
          {feed.length < 1 ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList
              data={feed}
              keyExtractor={(item, index) => {
                return item.id.toFixed();
              }}
              renderItem={({ item, index }) => (
                <View style={styles.offerView}>
                  <View style={styles.userProfile}>
                    <View style={styles.avaterView}>
                      <Image
                        source={{ url: item.avatar }}
                        style={styles.avater}
                      />
                      <View style={styles.titleView}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                          {item.first_name}
                        </Text>
                        <Text style={{ fontSize: 11 }}>{item.last_name}</Text>
                      </View>
                    </View>
                    <View>
                      <Ionicons name="ellipsis-vertical-outline"></Ionicons>
                    </View>
                  </View>

                  <Image
                    source={{ url: item.avatar }}
                    style={styles.coverAvater}
                  />
                </View>
              )}
            />
          )}
        </View>
        {/* <Card />
          <Card /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    backgroundColor: Colors.Secondry,

    borderRadius: Dimensions.get("window").width * 0.05,
  },
  postJobView: {
    width: "100%",
  },

  input: {
    height: 40,
    width: Dimensions.get("window").width * 0.9,
    margin: 12,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#EBEBEB",
    alignSelf: "center",
  },
  offerView: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
  userProfile: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  avater: {
    backgroundColor: "rgba(0,0,0,06)",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  avaterView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  titleView: {
    marginLeft: 15,
  },
  coverAvater: {
    marginTop: 10,
    width: "90%",
    height: 200,
    backgroundColor: "rgba(0,0,0,06)",
    borderRadius: 20,
  },
});
export default DashboardScreen;
