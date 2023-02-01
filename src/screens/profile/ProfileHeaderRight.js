import React from "react";
import { IconButton } from "react-native-paper";
import { REMOVE_USER } from "../../context/actions";
import { useAppContext } from "../../context/AppContext";

const ProfileHeaderRight = () => {
  const { dispatch } = useAppContext();
  return (
    <IconButton
      iconColor="white"
      style={{ marginHorizontal: 8 }}
      icon="logout"
      onPress={() =>
        dispatch({
          type: REMOVE_USER,
        })
      }
    />
  );
};

export default ProfileHeaderRight;
