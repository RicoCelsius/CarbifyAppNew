import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScanScreen  from "./screens/ScanScreen.js"; 


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
<<<<<<< HEAD
        title="Go to Scan"
        onPress={() => navigation.navigate("ScanScreen")}
=======
        title="Go to Details"
        onPress={() => navigation.navigate("Home")}
>>>>>>> 9470e767d6407f217200d43d3791804c23df919c
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
<<<<<<< HEAD
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
=======
        <Stack.Screen name="Details" component={Home} />
>>>>>>> 9470e767d6407f217200d43d3791804c23df919c
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
