import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/navigation/mainStack/MainStack";
import { Provider as PaperProvider } from "react-native-paper";
import { View } from "react-native";
import Theme from "./src/constants/Theme";
import { AppProvider } from "./src/context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <PaperProvider theme={Theme}>
          <StatusBar style="light" />
          <View style={{ flex: 1 }}>
            <MainStack />
          </View>
        </PaperProvider>
      </NavigationContainer>
    </AppProvider>
  );
}
