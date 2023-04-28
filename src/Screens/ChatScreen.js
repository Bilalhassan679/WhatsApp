import { ImageBackground } from "react-native";
import { StyleSheet, Text, View, FlatList } from "react-native";
import bg from "../../assets/images/BG.png";
import message from "../../assets/data/messages.json";
import Message from "../components/Message/Message";
import InputBox from "../components/InputBox";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
const ChatScreen = ({ route, navigation }) => {
  // const { params } = useRoute();       //we can use this method for destructure navigation params
  // const navigation = useNavigation();

  const { id, name } = route?.params;

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name]);
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={message}
        renderItem={({ item }) => {
          return <Message message={item} />;
        }}
        inverted
        style={styles.message}
      />
      <InputBox />
    </ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  message: {
    marginTop: 10,
    padding: 10,
  },
});
