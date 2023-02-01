import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Keyboard,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import emailSentPng from "../../../assets/emailSent.png";
import otpImage from "../../../assets/otp.png";
import { useAppContext } from "../../context/AppContext";
import { ADD_USER } from "../../context/actions";
import { isValidEmail } from "../../utils/emailValidator";
import axios from "../../utils/axiosInstance";

const Login = () => {
  const theme = useTheme();
  const [otpScreen, setOtpScreen] = useState(false);
  const { dispatch } = useAppContext();
  const [email, setEmail] = useState();
  const [errorEmail, setErrorEmail] = useState({});
  const [otp, setOtp] = useState();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      paddingHorizontal: 16,
      justifyContent: "center",
    },
    image: {
      width: "90%",
    },
    imageContainer: {
      flex: 0.6,
      width: "100%",
      justifyContent: "center",
    },
    textContainer: {
      alignItems: "center",
      justifyContent: "space-evenly",
      marginHorizontal: 16,
    },
    hintText: {
      textAlign: "center",
      color: "gray",
    },
    inputContainer: {
      width: "90%",
      justifyContent: "center",
    },
    labelText: {
      color: theme.colors.primary,
      fontStyle: "italic",
    },
    getOtpButton: {
      borderRadius: 8,
      marginTop: 16,
    },
    submit: {
      borderRadius: 8,
      marginTop: 16,
      width: "47%",
    },
    resendText: {
      color: theme.colors.primary,
      fontStyle: "italic",
    },
    otpBoxesContainer: {
      flexDirection: "row",
    },
    otpBox: {
      padding: 10,
      marginRight: 10,
      borderWidth: 1,
      borderColor: "lightGrey",
      height: 45,
      width: 45,
      textAlign: "center",
    },
  });
  const [keyboardShow, setKeyboardShow] = useState();
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleSendOtp = async () => {
    try {
      if (isValidEmail(email)) {
        await axios
          .post("/otp", {
            config: {
              sendVia: [{ deliveryMethod: "email", deliveryAddress: email }],
            },
            firstTime: true,
            loginId: email,
          })
          .then((res) => {
            setOtpScreen(true);
          })
          .catch((err) => {
            console.log(err.response.data);
            setOtpScreen(true);
          });
      } else {
        setErrorEmail({
          error: true,
          errorMessage: "please enter a valid email",
        });
        setTimeout(() => {
          setErrorEmail({});
        }, 3000);
      }
    } catch (error) {
      console.log("err 2", error);
      setOtpScreen(true);
    }
  };

  const handleSubmitOtp = async () => {
    try {
      await axios
        .post("/otp/verify", {
          otp: otp,
          firstTime: true,
          loginId: email,
        })
        .then((res) => {
          console.log("res.data", res.data);
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={otpScreen ? otpImage : emailSentPng}
        />
      </View>
      <View
        style={{
          flex: keyboardShow ? 0.6 : 0.3,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "white",
          paddingVertical: 16,
        }}
      >
        <View style={styles.textContainer}>
          <Text
            style={[styles.hintText, { color: theme.colors.primary }]}
            variant="headlineSmall"
          >
            OTP Verification
          </Text>
          <Text style={styles.hintText} variant="titleMedium">
            {otpScreen
              ? `we have sent you an otp on ${email}`
              : "we will send you an OTP on this email"}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText} variant="labelLarge">
            {otpScreen ? "Enter your OTP" : "Enter your email here"}
          </Text>
          {otpScreen ? (
            <TextInput
              underlineColor={theme.colors.primary}
              backgroundColor={theme.colors.primaryContainer}
              textColor={theme.colors.primary}
              mode="flat"
              onChangeText={(text) => {
                setOtp(text);
              }}
            />
          ) : (
            <View>
              <TextInput
                underlineColor={theme.colors.primary}
                backgroundColor={theme.colors.primaryContainer}
                textColor={theme.colors.primary}
                error={errorEmail?.error}
                mode="flat"
                onChangeText={(text) => setEmail(text)}
              />
              {errorEmail?.errorMessage && (
                <Text style={{ fontStyle: "italic", color: "red" }}>
                  {errorEmail.errorMessage}
                </Text>
              )}
            </View>
          )}

          {otpScreen && (
            <View
              style={{
                justifyContent: "flex-end",
                flexDirection: "row",
                marginTop: 8,
              }}
            >
              <Pressable>
                <Text style={styles.resendText}>Resend Code</Text>
              </Pressable>
            </View>
          )}
          {otpScreen ? (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Button
                style={styles.submit}
                onPress={() => setOtpScreen(false)}
                labelStyle={{ fontSize: 17, lineHeight: 30 }}
                mode="outlined"
              >
                BACK
              </Button>
              <Button
                icon="send"
                onPress={() => {
                  handleSubmitOtp();
                }}
                style={styles.submit}
                labelStyle={{ fontSize: 17, lineHeight: 30 }}
                mode="contained"
              >
                SUBMIT
              </Button>
            </View>
          ) : (
            <Button
              icon="email"
              onPress={() => handleSendOtp()}
              style={styles.getOtpButton}
              labelStyle={{ fontSize: 17, lineHeight: 30 }}
              mode="contained"
            >
              GET OTP
            </Button>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
