import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScanScreen  from "./screens/ScanScreen.js"; 
import Login  from "./screens/Login.js"; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import News from './screens/News.js'
import ScanScreen from "./screens/ScanScreen.js";
import Registration from "./screens/Registration.js";
import { render } from "react-dom";

function HomeScreen({ navigation }) {
  return (
    
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Scan"
        onPress={() => navigation.navigate("ScanScreen")}
      />
      <Button
        title="Go to Regisration"
        onPress={() => navigation.navigate("Registration")}
      />
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();


export default function App() {
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
        paddingVertical: 10
      }}
      >
        <Tab.Screen 
        name="Scan" 
        component={ScanScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper" color={color} size={26}/>
          ),
        }} />

        <Tab.Screen 
        name="Scan" 
        component={ScanScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={26}/>
          ),
          }} /> 
        <Tab.Screen 
        name="Profile" 
        component={Login} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26}/>
          ),
        }} />
      </Tab.Navigator>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
        <Stack.Screen name="Register here" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
