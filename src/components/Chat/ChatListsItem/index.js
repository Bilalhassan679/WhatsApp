import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
dayjs.extend(relativeTime);
const ChatListsItem = ({ chat }) => {
  const navigation = useNavigation();
  const [users, setUser] = useState(null);
  const user = chat.users.items[0].user;

  useEffect(() => {
    const fetchUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser();
      const userItem = chat.users.items.find(
        (item) => item.user.id !== authUser.attributes.sub
      );
      setUser(userItem?.user);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Pressable
        onPress={() =>
          navigation.navigate("Chat", { id: chat.id, name: users?.name })
        }
        style={styles.contaier}
      >
        <Image
          style={styles.image}
          source={{
            uri: users?.image,
          }}
        />
        <View style={styles.content}>
          <View style={styles.row}>
            <Text numberOfLines={1} style={styles.name}>
              {users?.name}
            </Text>
            <Text style={styles.subTitle}>
              {dayjs(chat?.lastMessage).fromNow(true)}
            </Text>
          </View>
          <Text numberOfLines={2} style={styles.subTitle}>
            {chat?.LastMessage}
          </Text>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 10,
    // marginVertical: 3,
    marginTop: 5,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
    marginVertical: 6,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
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
export default ChatListsItem;
