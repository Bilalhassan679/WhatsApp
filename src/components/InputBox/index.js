import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
const InputBox = () => {
  const [message, setMessage] = useState("");
  const onSend = () => {
    console.warn("Message : ", message);

    setMessage("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <AntDesign style={styles.add} name="plus" size={24} color={"royalblue"} />

      <TextInput
        multiline
        value={message}
        onChangeText={(e) => setMessage(e)}
        style={styles.textInput}
        placeholder="Text put in...."
      />

      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name="send"
        size={24}
        color={"white"}
      />
    </KeyboardAvoidingView>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "whitesmoke",
    alignItems: "center",
  },
  add: {
    padding: 5,
  },
  textInput: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 15,
    padding: 6,
    marginHorizontal: 15,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    borderRadius: 25,
    backgroundColor: "royalblue",
    padding: 8,
    overflow: "hidden",
  },
});
