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
  TouchableOpacity,
} from "react-native";
import Colors from "../../Constants/Colors";
import Card from "../../UI/Card";
import Header from "../../Components/Header";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect, useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import { AuthContext } from "../../Context/Context";

const DashboardScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [feed, setFeed] = useState([]);
  const [filterData, setFilterData] = useState([]);

  // we get our feed here with our fetch function and handle the refresh with our useeffect function
  useEffect(() => {
    const URL = "https://reqres.in/api/users?page=2";

    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setFeed(res.data);
        setFilterData(res.data);
        // console.log("res.data", filterData);
      });
  }, []);

  const searchFilter = (text) => {
    // if the searched is not blank
    if (text) {
      //Inserted text is not blank
      // Filter the feed
      // Update FilteredData
      const newFilteredData = feed.filter((item) => {
        // console.log("feed", feed);
        const itemData = item.last_name
          ? item.last_name.toLowerCase()
          : "".toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) !== -1;
      });
      setFilterData(newFilteredData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredData with feed
      setFilterData(feed);
      setSearch(text);
    }
  };

  const { isLoading } = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const resderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.push("Detail", item)}>
          <View style={styles.offerView}>
            <View style={styles.userProfile}>
              <View style={styles.avaterView}>
                <Image source={{ url: item.avatar }} style={styles.avater} />

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

            <Image source={{ url: item.avatar }} style={styles.coverAvater} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.dashboard}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="search job here"
            onChangeText={(text) => searchFilter(text)}
            value={search}
            color="black"
          />
        </View>

        <View style={styles.postJobView}>
          {filterData.length < 1 ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList
              data={filterData}
              keyExtractor={(item, index) => {
                return item.id.toFixed();
              }}
              renderItem={resderItem}
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
    backgroundColor: "red",
    borderRadius: Dimensions.get("window").width * 0.05,
    height: "100%",
  },
  postJobView: {
    width: "100%",
    height: "100%",
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
