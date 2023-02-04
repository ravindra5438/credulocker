import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Button, IconButton, Text, useTheme } from "react-native-paper";
import IconText from "../../components/IconText";
import axios from "../../utils/axiosInstance";

const Profile = () => {
  const theme = useTheme();
  const [edulockeruser, setEdulockerUser] = useState(null);
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

  const getEdulockerUser = async () => {
    try {
      await axios
        .get("/edulockerUser/ravindrayadav5438@gmail.com")
        .then((res) => {
          setEdulockerUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch {
      (err) => {
        console.log(err);
      };
    }
  };

  useEffect(() => {
    getEdulockerUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Avatar.Text
          label={edulockeruser?.name.substring(0, 1).toUpperCase()}
          size={120}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text variant="titleLarge" style={{ color: "white" }}>
            {edulockeruser?.name}
          </Text>
          <IconButton icon="pencil" iconColor={theme.colors.primary} />
        </View>
      </View>
      <View style={styles.linkContainer}>
        <IconText
          onPress={() => console.log("Ravindra")}
          iconName="email"
          text={edulockeruser?.email[0] || "Add Email"}
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
          text={edulockeruser?.socialHandlers?.whatsapp || "Add WhatsApp No."}
        />
      </View>
    </View>
  );
};

export default Profile;
