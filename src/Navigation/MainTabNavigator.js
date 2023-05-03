import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotImplemented from "../Screens/NotImplemented";
import ChatsScreen from "../Screens/ChatsScreen/ChatsScreen";
import { Ionicons, Entypo } from "@expo/vector-icons";
import SettingScreen from "../Screens/SettingScreen";
const Tab = createBottomTabNavigator();
const MainTabNavigator = () => {
  //Re-usable function
  const tabBarComponent = (name) => {
    return {
      tabBarIcon: ({ color, size }) => (
        <Ionicons name={name} color={color} size={size} />
      ),
      headerRight: () => {
        <Entypo name="new-message" color={"royalblue"} size={18} />;
      },
    };
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "smokeswhite" },
        tabBarStyle: { backgroundColor: "white" },
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="Status"
        component={NotImplemented}
        options={tabBarComponent("logo-whatsapp")}
      />
      <Tab.Screen
        name="Calls"
        component={NotImplemented}
        options={tabBarComponent("call-outline")}
      />
      <Tab.Screen
        name="Camera"
        component={NotImplemented}
        options={tabBarComponent("camera-outline")}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        // options={tabBarComponent("ios-chatbubbles-sharp")}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name={"ios-chatbubbles-sharp"}
              color={color}
              size={size}
            />
          ),

          headerRight: () => {
            return (
              <Entypo
                onPress={() => navigation.navigate("Contants")}
                name="new-message"
                color={"royalblue"}
                size={20}
                style={{ marginRight: 20 }}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={tabBarComponent("settings-outline")}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
