import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import Colors from "../../Constants/Colors";
import { Provider as PaperProvider } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import Header from "../../Components/Header";

const SearchScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterData, setFilterData] = useState([]);

  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = "";
  if (timesPressed > 1) {
    textLog = timesPressed + "x onPress";
  } else if (timesPressed > 0) {
    textLog = "onPress";
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Header />
        <View style={styles.main}>
          <View style={styles.cards}>
            <View style={styles.options}>
              <Pressable
                style={styles.optiontext}
                onPress={() => {
                  setTimesPressed((current) => current + 1);
                }}
              >
                <Text>CDI</Text>
              </Pressable>
              <Pressable style={styles.optiontext}>
                <Text>CDD</Text>
              </Pressable>
              <Pressable style={styles.optiontext}>
                <Text>Stage</Text>
              </Pressable>
              <Pressable style={styles.optiontext}>
                <Text> Alternance</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.search}>
            <Searchbar
              placeholder="Search"
              onChangeText={setSearchQuery}
              value={searchQuery}
              style={styles.searchbarstyle}
            />
          </View>
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 230,
  },

  main: {
    alignSelf: "center",
    width: "100%",
    height: "65%",
    backgroundColor: Colors.Secondry,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: Colors.Primary,
  },
  cards: {},
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
  },

  optiontext: {
    padding: 6,
    color: Colors.Primary,
    borderWidth: 2,
    borderColor: Colors.Primary,
    borderRadius: 10,
    backgroundColor: Colors.Secondry,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderColor: Colors.Secondry,
    borderRadius: 15,
  },
  search: {
    padding: 5,
  },

  searchbarstyle: {
    borderRadius: 15,
    borderColor: Colors.Primary,
    borderWidth: 1,
  },
});

export default SearchScreen;
