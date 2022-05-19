//import libraries
import React from "react";
import bcrypt from "bcryptjs";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default class Registration extends React.Component {
  state = {
    userName: "",
    email: "",
    password: "",
  };

  registerData = async () => {
    response = fetch("http://3.72.226.236:7000/getmail/:mail", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log(response);

    if (JSON.stringify({}) == JSON.stringify(response)) {
      console.log("test");
    } //moet nog aan gewerkt worden

    const hashedPassword = bcrypt.hashSync(
      this.state.password,
      "$2a$10$CwTycUXWue0Thq9StjUM0u" //SALT, nodig voor encryption.. even uitzoeken hoe dit werkt met inloggen..
    );
    fetch("http://3.72.226.236:7000/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.userName,
        email: this.state.email,
        password: hashedPassword,
      }),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Carbify</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Your email"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ userName: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={this.registerData}>
          <Text style={styles.loginText} onPress={this.registerData}>
            Register
          </Text>
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
    fontFamily: "",
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
