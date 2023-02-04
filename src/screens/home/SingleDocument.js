import { View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "../../utils/axiosInstance";
import { Button, useTheme, Text } from "react-native-paper";
import PdfView from "../../components/PdfView";
import { downloadFile } from "../../utils/downloadFile";

const SingleDocument = ({ item }) => {
  const theme = useTheme();
  const [thumbnailUri, setThumbnailUri] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [pdfLink, setPdfLink] = useState("");
  const [downloadState, setDownloadState] = useState({ downloadProgress: 0 });

  const getThumbnail = async () => {
    try {
      await axios
        .get(`/signedDocs/thumbnailByDisplayId/${item.displayId}`)
        .then((res) => {
          setThumbnailUri(res.data.response);
        })
        .catch((err) => console.log("err Image", err));
    } catch (err) {
      console.log(err);
    }
  };

  const getPdfUrl = async () => {
    await axios.get(`/doc/download/${item.displayId}`).then((res) => {
      console.log(res.data);
      setPdfLink(res?.data);
    });
  };

  useEffect(() => {
    getThumbnail();
    getPdfUrl();
  }, []);
  return (
    <View
      style={{
        backgroundColor: theme.colors.primaryContainer,
        alignItems: "center",
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 8,
        elevation: 2,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          width: "95%",
          height: 120,
          borderRadius: 16,
          marginTop: 8,
          position: "relative",
        }}
      >
        <Pressable onPress={() => setShowModal(true)}>
          <Image
            source={{ uri: thumbnailUri }}
            style={{
              height: "100%",
            }}
            resizeMode="cover"
          />
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: 8,
          borderTopWidth: 1,
          borderTopColor: theme.colors.primaryContainer,
        }}
      >
        <Text style={{ color: "grey" }} variant="titleMedium">
          {item.fileName}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8,
          }}
        >
          <Button
            style={{
              borderRadius: 4,
              width: "47%",
            }}
            mode="contained"
          >
            Share
          </Button>
          <Button
            onPress={() => downloadFile(pdfLink, setDownloadState)}
            style={{ borderRadius: 4, width: "47%" }}
            mode="outlined"
          >
            Download
          </Button>
        </View>
      </View>
      <PdfView
        fileName={item.fileName}
        visible={showModal}
        setShowModal={setShowModal}
        pdfLink={pdfLink}
      />
    </View>
  );
};

export default SingleDocument;
