import AuthStack from "../authStack/AuthStack";
import UserStack from "../userStack/UserStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useAppContext } from "../../context/AppContext";

SplashScreen.preventAutoHideAsync();
const MainStack = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user, getUserData } = useAppContext();

  const prepare = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.getItem("user").then((data) => {
        getUserData(data);
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch {
      (e) => console.warn(e);
    } finally {
      await SplashScreen.hideAsync();
    }
    setIsLoading(false);
  };
  useEffect(() => {
    prepare();
  }, []);

  if (isLoading) {
    return null;
  }

  return user ? <UserStack /> : <AuthStack />;
};

export default MainStack;
