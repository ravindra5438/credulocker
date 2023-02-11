import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Button, IconButton, Text, useTheme } from "react-native-paper";
import axios from "../../utils/axiosInstance";
import Modal from "../../components/Modal";
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
      marginTop: theme.spacings.large,
    },
    text: {
      fontSize: 18,
      color: "grey",
      paddingHorizontal: theme.spacings.large - theme.spacings.small,
    },
  });

  const getEdulockerUser = async () => {
    try {
      await axios
        .get("/edulockerUser/ravindrayadav5438@gmail.com")
        .then((res) => {
          console.log(res.data);
          setEdulockerUser({
            ...res.data,
            email: [
              "ravindra@gmail.com",
              "monsterbhai@gmail.com",
              "abc@gmail.com",
            ],
            contactNo: ["947865847", "94368264", "83468246"],
          });
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
        <View flexDirection="row" alignItems="center">
          <IconButton icon="email" />
          <View alignItems="flex-start">
            {edulockeruser?.email.map((email) => (
              <Text style={styles.text} key={email}>
                {email}
              </Text>
            ))}
            <Button>Add Email</Button>
          </View>
        </View>
        <View flexDirection="row" alignItems="center">
          <IconButton icon="phone" />
          <View alignItems="flex-start">
            {edulockeruser?.contactNo.map((contact) => (
              <Text style={styles.text} key={contact}>
                {contact}
              </Text>
            ))}
            <Button>Add Contact</Button>
          </View>
        </View>
        <View flexDirection="row" alignItems="center">
          <IconButton icon="facebook" />
          {edulockeruser?.socialHandlers?.facebook ? (
            <View flexDirection="row" alignItems="center">
              <Text style={styles.text}>
                {edulockeruser?.socialHandlers?.facebook}
              </Text>
              <IconButton icon="pencil" iconColor={theme.colors.primary} />
            </View>
          ) : (
            <Button>Add Facebook Profile</Button>
          )}
        </View>
        <View flexDirection="row" alignItems="center">
          <IconButton icon="linkedin" />
          {edulockeruser?.socialHandlers?.linkedIn ? (
            <View flexDirection="row" alignItems="center">
              <Text style={styles.text}>
                {edulockeruser?.socialHandlers?.linkedin}
              </Text>
              <IconButton icon="pencil" iconColor={theme.colors.primary} />
            </View>
          ) : (
            <Button>Add linkedIn Profile</Button>
          )}
        </View>
        <View flexDirection="row" alignItems="center">
          <IconButton icon="whatsapp" />
          {edulockeruser?.socialHandlers?.whatsapp ? (
            <View flexDirection="row" alignItems="center">
              <Text style={styles.text}>
                {edulockeruser?.socialHandlers?.whatsapp}
              </Text>
              <IconButton
                icon="pencil"
                iconColor={theme.colors.primary}
                onPress={() => console.log("ravindra")}
              />
            </View>
          ) : (
            <Button>Add Whatsapp No.</Button>
          )}
        </View>
        <View flexDirection="row" alignItems="center">
          <IconButton icon="twitter" />
          {edulockeruser?.socialHandlers?.twitter ? (
            <View flexDirection="row" alignItems="center">
              <Text style={styles.text}>
                {edulockeruser?.socialHandlers?.twitter}
              </Text>
              <IconButton icon="pencil" iconColor={theme.colors.primary} />
            </View>
          ) : (
            <Button>Add Twitter Profile</Button>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;
