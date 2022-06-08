//import libraries
import React, { useState, useEffect } from "react";
import bcrypt from "bcryptjs";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { fontSize } from "styled-system";
import ScanScreen from "./ScanScreen";

export default function CarbonInformation({ route }) {
  const textsize = 25;

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Product information</Text>
      <View>
        <Text style={{ fontSize: textsize }}>
          Name: {route.params.name} {"\n"}
          Carbon: {route.params.carbon}
          {"\n"}Category: {route.params.category}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#56A5E0",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#C6724E",
    marginBottom: 40,
    marginTop: 40,
  },
  innerText: { fontSize: 8, height: 20 },
  inputView: {
    width: "80%",
    backgroundColor: "#444442",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#C6724E",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});
