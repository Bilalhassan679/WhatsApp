import { Image, StyleSheet, Text, View } from "react-native";

const ChatListsItem = () => {
  return (
    <View style={styles.contaier}>
      <Image
        style={styles.image}
        source={{
          uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f0695054161665.59503e209fc7e.jpg",
        }}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            Lukas
          </Text>
          <Text style={styles.subTitle}>8:30</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>
          Hello Ther
        </Text>
      </View>
    </View>
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
