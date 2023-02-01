import { View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "../../utils/axiosInstance";
import { Button, useTheme } from "react-native-paper";
import { Text } from "react-native-paper";

const SingleDocument = ({ item }) => {
  const theme = useTheme();
  const [thumbnailUri, setThumbnailUri] = useState(null);
  const getThumbnail = () => {
    try {
      axios
        .get(`/signedDocs/thumbnailByDisplayId/${item.displayId}`)
        .then((res) => {
          setThumbnailUri(res.data.response);
        })
        .catch((err) => console.log("err Image", err));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getThumbnail();
  }, []);
  return (
    <View>
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
          <Image
            source={{ uri: thumbnailUri }}
            style={{
              height: "100%",
              width: "100%",
            }}
            resizeMode="cover"
          />
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
            {item.metaData.Name}
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
                borderColor: theme.colors.primary,
              }}
              mode="outlined"
            >
              Share
            </Button>
            <Button style={{ borderRadius: 4, width: "47%" }} mode="contained">
              Download
            </Button>
          </View>
        </View>
      </View>

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
          <Image
            source={{ uri: thumbnailUri }}
            style={{
              height: "100%",
              width: "100%",
            }}
            resizeMode="cover"
          />
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
            {item.metaData.Name}
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
                borderColor: theme.colors.primary,
              }}
              mode="outlined"
            >
              Share
            </Button>
            <Button style={{ borderRadius: 4, width: "47%" }} mode="contained">
              Download
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SingleDocument;
