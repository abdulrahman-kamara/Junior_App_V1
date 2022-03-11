import React, { useState, useRef, useEffect, Button, FlatList } from "react";

import { Modal, View, StyleSheet, Animated, Dimensions } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Colors from "../Constants/Colors";

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const CityModalPicker = (props) => {
  // const getApi = (cities) => {
  //   axios
  //     .get("https://api.torea-patissier.students-laplateforme.io/api/cities", {
  //       cities,
  //     })
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
    <View style={styles.modalcontainer}>
      <View>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          placeholder="City"
          buttonStyle={{
            borderRadius: 20,
            width: 120,
            borderColor: Colors.Primary,
            borderWidth: 1,
            backgroundColor: Colors.Secondry,
          }}
          dropdownStyle={{ borderRadius: 20 }}
          defaultButtonText="Cities"
          row
          style={styles.containerContent}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerContent: {
    margin: 5,
    width: 110,

    borderRadius: 30,
    padding: 10,
    fontSize: 5,
  },
  modalcontainer: {
    margin: 5,
    width: 5,
  },
  headerContent: {
    marginTop: 0,
  },
  Modal: {
    backgroundColor: "#005252",
    marginTop: 0,
  },
});

export default CityModalPicker;
