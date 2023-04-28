import { StyleSheet, FlatList } from "react-native";
import React from "react";
import Contants from "../components/Contacts";
import chats from "../../assets/data/chats.json";
const ContantsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => {
        return <Contants user={item} />;
      }}
      contentContainerStyle={{ backgroundColor: "white" }}
    />
  );
};

export default ContantsScreen;

const styles = StyleSheet.create({});
