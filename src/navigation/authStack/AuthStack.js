import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/login/Login";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitle: "Login",
        headerTitleStyle: { color: "white" },
        headerStyle: {
          backgroundColor: "#0d98ba",
        },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
