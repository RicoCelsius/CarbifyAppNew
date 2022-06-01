//import libraries
import React, { useState, useEffect } from "react";
import bcrypt from "bcryptjs";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class Profile extends React.Component {
  state = {
    userName: "",
    password: "",
  };

  login = async () => {
    const response1 = await fetch(
      "http://Carbify.westeurope.azurecontainer.io:7000/getsalt",
      {
        //Aanpassen voor login API
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.userName,
        }),
      }
    );
    let data1 = await response1.json();
    console.log(data1[0]["salt"]);

    let hashedPassword = bcrypt.hashSync(
      this.state.password,
      data1[0]["salt"] //SALT
    );

    const response = await fetch("http://18.133.222.150:7000/login", {
      //Aanpassen voor login API
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.userName,
        password: hashedPassword,
      }),
    });
    let data = await response.json();
    if (JSON.stringify(data) != "[]") {
      alert("Login succesful");
    } else {
      alert("Login failed");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Your profile</Text>
      </View>
    );
  }
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
