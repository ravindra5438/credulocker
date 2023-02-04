import { View } from "react-native";
import { IconButton, Button, useTheme } from "react-native-paper";
import React from "react";

const IconText = ({ onPress, text, iconName, edit, onEditIconPress }) => {
  const theme = useTheme();
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
      {edit && (
        <IconButton
          onPress={onEditIconPress}
          iconColor={theme.colors.primary}
          icon="pencil"
        />
      )}
    </View>
  );
};

export default IconText;
