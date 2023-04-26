import { FlatList } from "react-native";
import chats from "../../assets/data/chats.json";
import ChatListsItem from "../components";
const ChatsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => {
        return <ChatListsItem chats={item} />;
      }}
    />
  );
};

export default ChatsScreen;
