import React from "react";
import { View } from "react-native";
import {
  Card,
  Button,
  Portal,
  Text,
  Modal as RnModal,
  Divider,
} from "react-native-paper";

const Modal = ({ title, children, visible, viewStyle, setModalVisible }) => {
  return (
    <Portal>
      <RnModal visible={visible} onDismiss={() => setModalVisible(false)}>
        <View
          style={[
            {
              marginHorizontal: 16,
              backgroundColor: "#fff",
              borderRadius: 8,
              overflow: "hidden",
              alignSelf: "center",
            },
            viewStyle,
          ]}
        >
          <Text
            style={{ alignSelf: "center", color: "grey" }}
            variant="titleMedium"
          >
            {title}
          </Text>
          <Divider bold={true} />
          <View>{children}</View>
        </View>
      </RnModal>
    </Portal>
  );
};

export default Modal;
