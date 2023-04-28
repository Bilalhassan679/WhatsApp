import { FlatList } from "react-native";
import chats from "../../assets/data/chats.json";
import ChatListsItem from "../components/Chat/ChatListsItem";
const ChatsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => {
        return <ChatListsItem chats={item} />;
      }}
      contentContainerStyle={{ backgroundColor: "white" }}
    />
  );
};

export default ChatsScreen;
