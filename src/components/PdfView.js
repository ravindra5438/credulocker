import {
  Portal,
  Modal,
  useTheme,
  Text,
  Button,
  IconButton,
} from "react-native-paper";
import { View, StyleSheet } from "react-native";
import WebView from "react-native-webview";
import React, { useEffect, useState } from "react";
import { downloadFile } from "../utils/downloadFile";

const PdfView = ({ fileName, visible, setShowModal, pdfLink }) => {
  const [downloadState, setDownloadState] = useState({ downloadProgress: 0 });
  const theme = useTheme();
  const styles = StyleSheet.create({
    bottomButton: {
      width: "49%",
      borderRadius: theme.spacings.small,
    },
    fileName: {
      lineHeight: 40,
      color: "grey",
    },
  });

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={() => setShowModal(false)}
        contentContainerStyle={{
          width: "90%",
          height: "75%",
          alignSelf: "center",
          borderRadius: theme.spacings.medium,
          overflow: "hidden",
          backgroundColor: "white",
        }}
        style={{
          backgroundColor: "rgba(0,0,0,.7)",
        }}
      >
        <View flexDirection="row" justifyContent="space-between">
          <View flexDirection="row" alignItems="center">
            <IconButton icon="shield-check" iconColor="#40AD8E" />
            <Text variant="bodyLarge" style={styles.fileName}>
              {fileName}
            </Text>
          </View>
          <View>
            <IconButton
              icon="close"
              style={{
                position: "absolute",
                right: 0,
                zIndex: 9,
                backgroundColor: "white",
              }}
              size={30}
              iconColor="grey"
              onPress={() => setShowModal(false)}
            />
          </View>
        </View>
        <WebView
          bounces={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          source={{
            uri: `http://docs.google.com/viewerng/viewer?embedded=true&url=${pdfLink}`,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: theme.spacings.medium,
          }}
        >
          <Button style={styles.bottomButton} mode="contained">
            Share
          </Button>
          <Button
            onPress={() => downloadFile(pdfLink, setDownloadState)}
            style={styles.bottomButton}
            mode="outlined"
          >
            Download
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};

export default PdfView;
