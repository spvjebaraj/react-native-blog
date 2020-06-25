import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text style={styles.textStyle}>Enter Name</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text style={{ marginLeft: 15 }}>My name is {name}</Text>
      <Text style={styles.textStyle}>Enter Password</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 5 ? (
        <Text style={{ marginLeft: 15 }}>
          Password should be more than 5 characters
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 15,
    marginLeft: 15,
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
