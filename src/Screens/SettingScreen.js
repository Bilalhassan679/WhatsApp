import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";
import { Auth } from "aws-amplify";
const SettingScreen = () => {
  return (
    <View>
      <Button onPress={() => Auth.signOut()} title="Sign Out" />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
