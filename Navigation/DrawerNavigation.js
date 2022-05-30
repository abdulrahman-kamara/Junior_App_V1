import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CreatProfile from "../Screens/CreateProfileModal";
import ProfileContent from "../Screens/ProtectedScreen/ProfileContentScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ProfileContent" component={ProfileContent} />
      <Drawer.Screen name="Dashboard" component={HomeTapScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
