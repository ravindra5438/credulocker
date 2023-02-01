import { View } from "react-native";
import { IconButton, Button } from "react-native-paper";
import React from "react";

const IconText = ({ onPress, text, iconName }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <IconButton size={30} iconColor="grey" icon={iconName} />
      <Button
        onPress={() => onPress()}
        labelStyle={{ fontSize: 18, lineHeight: 20 }}
      >
        {text}
      </Button>
    </View>
  );
};

export default IconText;
