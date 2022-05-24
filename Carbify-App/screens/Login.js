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

export default class Login extends React.Component {
  state = {
    userName: "",
    password: "",
  };

  login = async () => {
    let hashedPassword = bcrypt.hashSync(
      this.state.password,
      "$2a$10$CwTycUXWue0Thq9StjUM0u" //SALT, nodig voor encryption.. even uitzoeken hoe dit werkt met inloggen..
    );

    response = await fetch("http://18.133.222.150:7000/login", {
      //Aanpassen voor login API
      method: "GET",
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
        <Text style={styles.logo}>Carbify</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Username..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ userName: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={this.login}>
          <Text style={styles.loginText} onPress={this.login}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
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
    backgroundColor: "#fb5b5a",
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
