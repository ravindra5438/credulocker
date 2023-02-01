import { View, Text, Pressable } from "react-native";
import React from "react";
import { Avatar, useTheme } from "react-native-paper";

const HeaderRight = ({ navigation }) => {
  const theme = useTheme();
  return (
    <Pressable onPress={() => navigation.navigate("Profile")}>
      <Avatar.Text
        style={{
          backgroundColor: theme.colors.primaryContainer,
          marginHorizontal: 16,
        }}
        size={40}
        label="R"
      />
    </Pressable>
  );
};

export default HeaderRight;
