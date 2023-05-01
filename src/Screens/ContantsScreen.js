import { StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import Contants from "../components/Contacts";
import chats from "../../assets/data/chats.json";

//how to call Api with Graphql
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../graphql/queries";

const ContantsScreen = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    API.graphql(graphqlOperation(listUsers)).then((result) => {
      setUsers(result?.data?.listUsers?.items);
    });
  }, []);

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => {
        return <Contants user={item} />;
      }}
      contentContainerStyle={{ backgroundColor: "white" }}
    />
  );
};

export default ContantsScreen;

const styles = StyleSheet.create({});
