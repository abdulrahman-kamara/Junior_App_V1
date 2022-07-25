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
const { width, height } = Dimensions.get("window");
import { BASE_URL } from "../../config/api";

const DashboardScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [feed, setFeed] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [data, setData] = useState([]);
  const { userInfo } = useContext(AuthContext);

  // we get our feed here with our fetch function and handle the refresh with our useeffect function
  useEffect(() => {
    const URL = `${BASE_URL}/api/offers`;

    fetch(URL, {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const data = res;
        console.log("data", data);
        setFeed(data);
        setFilterData(data);
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
        const itemData = item.firstnamej
          ? item.firstname.toLowerCase()
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
    console.log("item", item.jobs);
    console.log("image", `${BASE_URL}${item.image}`);
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.push("Detail", item)}
          style={{
            borderWidth: 1,
            margin: 10,
            borderRadius: 15,
            backgroundColor: Colors.Secondry,
            paddingBottom: 20,
          }}
        >
          <View style={styles.offerView}>
            <View style={styles.userProfile}>
              <View style={styles.avaterView}>
                <Image
                  source={{ url: `${BASE_URL}${item.image}` }}
                  style={styles.avater}
                />

                <View style={styles.titleView}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        paddingRight: 10,
                      }}
                    >
                      {item.name}
                    </Text>
                    {/* <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {item.lastname}
                    </Text> */}
                  </View>

                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {item.jobs}
                  </Text>
                  <Text style={{ fontSize: 15, marginTop: 10 }}>
                    {item.type_of_contract}
                  </Text>
                </View>
              </View>
              <View>
                <Ionicons name="ellipsis-vertical-outline"></Ionicons>
              </View>
            </View>
          </View>

          <View
            style={{
              // backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ url: `${BASE_URL}${item.image}` }}
              style={styles.coverAvater}
            />
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                backgroundColor: Colors.Secondry,
                fontSize: 29,
                width: "90%",
                height: 40,
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 10,
                borderColor: Colors.Secondry,
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 10,
                  height: 30,
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                {item.description}
              </Text>
            </View>
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
              keyExtractor={(item) => item.id}
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
    backgroundColor: Colors.Primary,
    borderRadius: Dimensions.get("window").width * 0.01,
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
    // backgroundColor: "rgba(0,0,0,06)",
    borderWidth: 1,
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
  cardView: {
    backgroundColor: "white",
    margin: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  title: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.02,
    color: "gray",
    fontSize: 18,
  },
  image: {
    height: height / 6,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
  author: {
    marginBottom: width * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: "gray",
  },
});
export default DashboardScreen;
