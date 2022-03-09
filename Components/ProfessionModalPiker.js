import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
import Colors from "../Constants/Colors";
import SelectDropdown from "react-native-select-dropdown";

// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  "Developer Ful-stack",
  "Developper Back",
  "Developper Front",
  "Web Designer",
];

const ProfessionModalPiker = (props) => {
  return (
    <View style={styles.modalcontainer}>
      <View>
        <SelectDropdown
          data={K_OPTIONS}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            props.profession(selectedItem);
          }}
          buttonStyle={{
            borderRadius: 20,
            width: 120,
            borderColor: Colors.Primary,
            borderWidth: 1,
            backgroundColor: Colors.Secondry,
          }}
          dropdownStyle={{ borderRadius: 20 }}
          defaultButtonText="Profession"
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
  selects: {
    width: 130,
    backgroundColor: Colors.Secondry,
    borderRadius: 30,
    padding: 10,
    fontSize: 5,
  },
});

export default ProfessionModalPiker;
