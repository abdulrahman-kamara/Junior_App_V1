import * as React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Avatar,
  Image,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../Constants/Colors";
import PickerImage from "../Components/PickerImage";
import { useTheme } from "react-native-paper";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

const image = "../assets/Image/logo.png";

const CreateProfileModal = (props) => {
  const { colors } = useTheme();

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        // onPress={takePhotoFromCamera}
      >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        // onPress={choosePhotoFromLibrary}
      >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(2)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}
      >
        <View style={{ alignItems: "center" }}>
          {/* <TouchableOpacity> */}
          <View
            style={{
              height: 100,
              width: 100,
              borderWidth: 1,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PickerImage onPress={() => bs.current.snapTo(2)} />
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon
                name="camera"
                size={35}
                colors={colors.text}
                style={{
                  opacity: 0.7,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: Colors.Primary,
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
          {/* </TouchableOpacity> */}
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
            John Doe
          </Text>
        </View>
      </Animated.View>
      <View style={styles.action}>
        <FontAwesome name="phone" size={20} />
        <TextInput
          style={[styles.textInput, { color: colors.text }]}
          autoCorrect={false}
          placeholder="Phone"
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.action}>
        <Icon name="map-marker-outline" size={20} />
        <TextInput
          style={[styles.textInput, { color: colors.text }]}
          autoCorrect={false}
          placeholder="City"
        />
      </View>
      <View style={styles.action}>
        <Icon name="graduation" size={20} />
        <TextInput
          style={[styles.textInput, { color: colors.text }]}
          autoCorrect={false}
          placeholder="Expierence"
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" size={20} />
        <TextInput
          style={[styles.textInput, { color: colors.text }]}
          autoCorrect={false}
          placeholder="Diplomer"
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" size={20} />
        <TextInput
          style={[styles.textInput, { color: colors.text }]}
          autoCorrect={false}
          placeholder="Proffesion"
        />
      </View>
      <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
        <Text style={styles.panelButtonTitle}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    borderBottomWidth: 1,
    borderBottomColor: "#666666",
  },
});
export default CreateProfileModal;
