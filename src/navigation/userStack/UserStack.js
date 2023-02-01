import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home/Home";
import Profile from "../../screens/profile/Profile";
import HeaderRight from "../../screens/home/HeaderRight";
import ProfileHeaderRight from "../../screens/profile/ProfileHeaderRight";

const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "left",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#0d98ba",
        },
      }}
    >
      <Stack.Screen
        name="Documents"
        component={Home}
        options={({ navigation }) => ({
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerRight: () => <ProfileHeaderRight />,
        })}
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
