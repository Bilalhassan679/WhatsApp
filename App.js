import { StyleSheet, Text, View, StatusBar } from "react-native";
import ChatsScreen from "./src/Screens/ChatsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
