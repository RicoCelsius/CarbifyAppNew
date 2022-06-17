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
import { fontSize, lineHeight } from "styled-system";
import ScanScreen from "./ScanScreen";

export default function CarbonInformation({ route }) {
  const textsize = 25;

  return (
    <View style={{ flex: 1, backgroundColor: "#56A5E0" }}>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 40,
            color: "#C6724E",
            marginBottom: 40,
            alignItems: "center",
            marginTop: 40,
          }}
        >
          Product information
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: textsize,
            marginLeft: 30,
            lineHeight: 200,
            fontWeight: "bold",
          }}
        >
          Name: {route.params.name} {"\n"}
          Carbon: {route.params.carbon}
          {"\n"}Category: {route.params.category}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#C6724E",
    marginBottom: 40,

    marginTop: 40,
  },
});
