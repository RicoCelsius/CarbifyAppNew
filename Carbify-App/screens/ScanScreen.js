import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
// import News from "./News.js";
import CarbonInformation from "./CarbonInformation.js";
import { useNavigation } from "@react-navigation/native";

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("");
  const navigation = useNavigation();
  // useEffect(() => {
  //   askPermissions();
  // }, []);

  const askPermissions = () => {
    (async () => {
      console.log("Asking for permissions");
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
    })();
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    sendData(`${data}`);
    navigation.navigate("CarbonInformation");
  };
  if (hasPermission) {
    console.log("Camera opened, permission true");
    return (
      <View>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
    );
  }

  async function sendData(barcodedata) {
    const response = await fetch(
      "http://Carbify.westeurope.azurecontainer.io:7000/getbarcodeinfo",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          barcode: barcodedata,
        }),
      }
    );
    let data = await response.json();
    console.log(data);
    setScanned(false); //
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#56A5E0",
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
          style={{ height: 300, width: 300, borderRadius: 1000 }}
        />

        <TextInput
          placeholder="Enter barcode"
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 10,
            marginBottom: 10,
          }}
          onChangeText={(newText) => setText(newText)}
        />
        <TouchableOpacity
          onPress={() => sendData(text)}
          style={{
            backgroundColor: "#C6724E",
            width: "100%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 0,
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "#FFFF" }}>Confirm barcode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={askPermissions}
          style={{
            backgroundColor: "#C6724E",
            width: "100%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 0,
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "#FFFF" }}>Scan barcode </Text>
        </TouchableOpacity>
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
