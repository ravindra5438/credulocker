import React, { useState } from "react";
import { Button, IconButton } from "react-native-paper";
import { REMOVE_USER } from "../../context/actions";
import { useAppContext } from "../../context/AppContext";
import { View } from "react-native";
import { Text } from "react-native-paper";
import Modal from "../../components/Modal";

const ProfileHeaderRight = () => {
  const { dispatch, logOut } = useAppContext();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <IconButton
        iconColor="white"
        style={{ marginHorizontal: 8 }}
        icon="logout"
        onPress={() => setModalVisible(true)}
      />
      <Modal
        viewStyle={{ width: "50%" }}
        title="Logout"
        visible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ marginVertical: 8, textAlign: "center" }}
            variant="bodyLarge"
          >
            Are you sure you want to logout?
          </Text>
          <Button
            onPress={() => {
              logOut();
              dispatch({
                type: REMOVE_USER,
              });
            }}
            mode="contained"
            style={{ width: "100%", borderRadius: 4 }}
          >
            Logout
          </Button>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileHeaderRight;
