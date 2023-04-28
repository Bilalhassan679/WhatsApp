import { ImageBackground, KeyboardAvoidingView, Platform } from "react-native";
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
      style={styles.bg}
    >
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
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  message: {
    padding: 10,
  },
});
