import React, { useContext, useReducer } from "react";
import axios from "../utils/axiosInstance";
import reducer from "./reducer";
import {
  ADD_USER,
  ADD_USER_DATA,
  REMOVE_USER,
  REMOVE_USER_DATA,
} from "./actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  user: null,
  userData: null,
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const storeData = async (email) => {
    try {
      const da = await AsyncStorage.setItem("user", email);
      console.log("user is saved", email, da);
    } catch (err) {
      console.log("user save error", err);
    }
  };

  const login = async (email, otp) => {
    try {
      await axios
        .post("/otp/verify", {
          otp: otp,
          firstTime: true,
          loginId: email,
        })
        .then((res) => {
          if (res?.data?.status === "SUCCESS") {
            dispatch({
              type: ADD_USER,
              payload: { user: email },
            });
            storeData(email);
            getUserData(email);
          }
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } catch {
      (err) => {
        console.log(err);
      };
    }
  };

  const getUserData = async (email) => {
    try {
      await axios
        .get(`/signedDocs/byEmail/${email}`)
        .then((res) => {
          dispatch({
            type: ADD_USER_DATA,
            payload: { userData: res?.data?.response, email },
          });
        })
        .catch((err) => {
          console.log("err", err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppContext.Provider value={{ ...state, dispatch, login, getUserData }}>
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
