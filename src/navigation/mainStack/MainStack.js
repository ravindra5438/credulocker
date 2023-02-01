import AuthStack from "../authStack/AuthStack";
import UserStack from "../userStack/UserStack";
import { useAppContext } from "../../context/AppContext";

const MainStack = () => {
  const { user } = useAppContext();
  console.log("userCheck", user);
  return user ? <UserStack /> : <AuthStack />;
};

export default MainStack;
