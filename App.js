import { StyleSheet, Text, View, StatusBar } from "react-native";

import Navigator from "./src/Navigation";

//step 1 import amplify
import { Amplify } from "aws-amplify";
import amplifyConfig from "./src/aws-exports";

//step2 For Signup and SignIn Page Import withAuthenticator
import { withAuthenticator } from "aws-amplify-react-native";

//step 1 first step initilize amplify
Amplify.configure({ ...amplifyConfig, Analytics: { disabled: true } });

function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
  },
});

//step2 wrap App with wihtAuthenticator
export default withAuthenticator(App);
