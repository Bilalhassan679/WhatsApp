import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

import { API, graphqlOperation, Auth } from "aws-amplify";
import { createChatRoom, createUserChatRoom } from "../../graphql/mutations";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const Contants = ({ user }) => {
  const navigation = useNavigation();

  const createChatRoomFunction = async () => {
    console.log("Pressed");
    // Check if we already have a ChatRoom with user
    // If not Then Create a new ChatRoom
    const newChatRoomData = await API.graphql(
      graphqlOperation(createChatRoom, { input: {} })
    );
    console.log(newChatRoomData);
    if (!newChatRoomData?.data?.createChatRoom) {
      console.log("Error creating the chat error");
    }
    const newChatRoom = newChatRoomData?.data?.createChatRoom;

    //add click user to the ChatRoom
    await API.graphql(
      graphqlOperation(createUserChatRoom, {
        input: { chatRoomId: newChatRoom.id, userId: user.id },
      })
    );

    //add the auth user to the ChatRoom
    const authUser = await Auth.currentAuthenticatedUser();
    await API.graphql(
      graphqlOperation(createUserChatRoom, {
        input: {
          chatRoomId: newChatRoom.id,
          userId: authUser?.attributes.sub,
        },
      })
    );

    //navigate to the newly created Room or Exist ChatRoom
    navigation.navigate("Chat", { id: newChatRoom.id });
  };
  return (
    <Pressable
      onPress={createChatRoomFunction}
      //   onPress={() =>
      //     navigation.navigate("Chat", { id: chats?.id, name: chats?.user?.name })
      //   }
      style={styles.contaier}
    >
      <Image
        style={styles.image}
        source={{
          uri: user?.image,
        }}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {user?.name}
          </Text>
        </View>
        <Text numberOfLines={1} style={styles.subTitle}>
          {user?.status}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contaier: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});
export default Contants;
