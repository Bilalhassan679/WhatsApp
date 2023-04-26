import { ImageBackground } from "react-native";
import { StyleSheet, Text, View, FlatList } from "react-native";
import bg from "../../assets/images/BG.png";
import message from "../../assets/data/messages.json";
import Message from "../components/Message/Message";
const ChatScreen = () => {
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
