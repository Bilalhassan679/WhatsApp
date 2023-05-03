import { FlatList } from "react-native";
import chats from "../../../assets/data/chats.json";
import ChatListsItem from "../../components/Chat/ChatListsItem";
import { useEffect, useState } from "react";

import { API, graphqlOperation, Auth } from "aws-amplify";
import { listChatRoom } from "./queries";
const ChatsScreen = () => {
  const [chatsUser, setChatsUser] = useState([]);
  useEffect(() => {
    const fetchChatsRoom = async () => {
      const authUser = await Auth.currentAuthenticatedUser();
      const response = await API.graphql(
        graphqlOperation(listChatRoom, { id: authUser.attributes.sub })
      );
      setChatsUser(response.data.getUser.ChatRooms.items);
    };
    fetchChatsRoom();
  }, []);

  return (
    <>
      <FlatList
        data={chatsUser}
        renderItem={({ item }) => {
          return <ChatListsItem chat={item.chatRoom} />;
        }}
        contentContainerStyle={{ backgroundColor: "white" }}
      />
      {console.log(chatsUser)}
    </>
  );
};

export default ChatsScreen;
