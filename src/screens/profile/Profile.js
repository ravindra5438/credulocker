import { View, StyleSheet } from "react-native";
import React from "react";
import { Avatar, Button, IconButton, Text, useTheme } from "react-native-paper";
import IconText from "../../components/IconText";

const Profile = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
    },
    nameContainer: {
      flexGrow: 0.3,
      backgroundColor: "#36454f",
      borderTopEndRadius: 8,
      borderTopStartRadius: 8,
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    linkContainer: {
      backgroundColor: theme.colors.primaryContainer,
      borderBottomEndRadius: 8,
      borderBottomStartRadius: 8,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Avatar.Text label="R" size={120} />
        <Text variant="titleLarge" style={{ color: "white" }}>
          ravindrayadav5438
        </Text>
      </View>
      <View style={styles.linkContainer}>
        <IconText
          onPress={() => console.log("Ravindra")}
          iconName="email"
          text="Add Email"
        />
        <IconText
          onPress={() => console.log("Ravindra")}
          iconName="phone"
          text="Add Contact No."
        />
        <IconText
          onPress={() => console.log("Ravindra")}
          iconName="linkedin"
          text="Add LinkedIn Profile"
        />
        <IconText
          onPress={() => console.log("Ravindra")}
          iconName="facebook"
          text="Add Facebook Profile"
        />
        <IconText
          onPress={() => console.log("Ravindra")}
          iconName="twitter"
          text="Add Twitter Profile"
        />
        <IconText
          onPress={() => console.log("Ravindra")}
          iconName="whatsapp"
          text="Add WhatsApp No."
        />
      </View>
    </View>
  );
};

export default Profile;
