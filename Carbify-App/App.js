import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ScanScreen from "./screens/ScanScreen.js";
import Login from "./screens/Login.js";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import News from "./screens/News.js";
import GifImage from "@lowkey/react-native-gif";
import Registration from "./screens/Registration.js";
import Forgotpassword from "./screens/Forgotpassword.js";
import Profile from "./screens/Profile.js";
import CarbonInformation from "./screens/CarbonInformation.js";
import { render } from "react-dom";

const Tab = createMaterialBottomTabNavigator();

export default function nav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Scan"
        shifting={true}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{
          backgroundColor: "#56a5e0",
          height: 90,
          paddingVertical: 10,
        }}
      >
        <Tab.Screen
          name="Scan"
          component={ScanScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="barcode-scan"
                color={color}
                size={23}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Registration"
          component={Registration}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        {
          <Tab.Screen
            name="CarbonInformation"
            component={CarbonInformation}
            initialParams={{ name: "" }}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="information"
                  color={color}
                  size={24}
                />
              ),
            }}
          />
        }
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="News"
          component={News}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
