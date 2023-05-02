import { StyleSheet, Text, View, StatusBar } from "react-native";

import Navigator from "./src/Navigation";

//step 1 import amplify
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import amplifyConfig from "./src/aws-exports";

//step2 For Signup and SignIn Page Import withAuthenticator
import { withAuthenticator } from "aws-amplify-react-native";
import { useEffect } from "react";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";
//step 1 first step initilize amplify
Amplify.configure({ ...amplifyConfig, Analytics: { disabled: true } });

function App() {
  useEffect(() => {
    const syncData = async () => {
      //Get User Auth Data
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      console.log("first", authUser);

      //query the database using Auth user id (sub)
      const userData = await API.graphql(
        graphqlOperation(getUser, { id: authUser.attributes.sub })
      );
      console.log("second", userData.data.getUser);

      if (userData.data.getUser) {
        console.log("User Already Exists in Db");
        return;
      }

      //if there is no user in database in db:create one
      const newUser = {
        id: authUser.attributes.sub,
        name: authUser.attributes.phone_number,
        status: "Hey There! I am using WhatsApp.",
      };

      const newUserResponse = await API.graphql(
        graphqlOperation(createUser, { input: newUser })
      );
    };

    syncData();
  }, []);

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
