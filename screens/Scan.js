import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { useState } from "react";

export default function App() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          padding: 100,
        }}
      >
        <Image
          source={{
            uri: "https://i.ibb.co/tmvt00w/logo.png",
          }}
          style={{ width: 220, height: 220 }}
        />

        <TextInput
          placeholder="Enter barcode"
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 10,
            marginBottom: 10,
          }}
        />
        <Button title="Open camera" />
        <StatusBar style="auto" />
      </View>
    </View>
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
