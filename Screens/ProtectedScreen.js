// import React from "react";
// import { Button, StyleSheet, View } from "react-native";
// import Colors from "../Constants/Colors";
// import DashboardScreen from "./ProtectedScreen/JuniorFeed";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import CreatOffersScreen from "../Screens/ProtectedScreen/CreatOffersScreen";
// import ApplyScreen from "../Screens/ProtectedScreen/ApplyScreen";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import ProfileContent from "../Screens/ProtectedScreen/ProfileContentScreen";
// import CreateProfileJunior from "../Screens/CreateProfileJunior";
// import CreateProfileEnterprise from "../Screens/CreateProfileEnterprise";
// import CreateOffers from "../Screens/CreateOffers";
// import OffersScreen from "../Screens/ProtectedScreen/OffersScreen";
// import DrawerNavigation from "../Navigation/DrawerNavigation";

// const ProfileStack = createNativeStackNavigator();
// const FeedStack = createNativeStackNavigator();

// const ProfileStackScreen = () => {
//   return (
//     <ProfileStack.Navigator>
//       <ProfileStack.Screen
//         name="Profile"
//         component={ProfileContent}
//         options={{
//           tabBarLabel: "Profile",
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       {}
//       <ProfileStack.Screen
//         name="Junior"
//         component={CreateProfileJunior}
//         options={{ headerShown: true }}
//       />
//       <ProfileStack.Screen
//         name="Enterprise"
//         component={CreateProfileEnterprise}
//         options={{ headerShown: true }}
//       />
//     </ProfileStack.Navigator>
//   );
// };
// const FeedStackScreen = () => {
//   return (
//     <FeedStack.Navigator>
//       <FeedStack.Screen
//         name="Dashboard"
//         component={DashboardScreen}
//         options={{
//           tabBarLabel: "Dashboard",
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <FeedStack.Screen
//         name="Detail"
//         component={OffersScreen}
//         options={{ headerShown: true }}
//       />
//       <FeedStack.Screen
//         name="Apply"
//         component={ApplyScreen}
//         options={{ headerShown: true }}
//       />
//     </FeedStack.Navigator>
//   );
// };

// const HomeTab = createMaterialBottomTabNavigator();

// const HomeTapScreen = () => {
//   return (
//     <HomeTab.Navigator
//       activeColor={Colors.Primary}
//       barStyle={{ backgroundColor: "white" }}
//     >
//       <HomeTab.Screen
//         name="Dashboard"
//         component={FeedStackScreen}
//         options={{
//           tabBarLabel: "Feed",
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <HomeTab.Screen
//         name="Profile"
//         component={ProfileStackScreen}
//         options={{
//           tabBarLabel: "Profile",
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//     </HomeTab.Navigator>
//   );
// };
// export default HomeTapScreen;
