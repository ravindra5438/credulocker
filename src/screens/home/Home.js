import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "../../utils/axiosInstance";
import SingleDocument from "./SingleDocument";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      axios
        .get("/signedDocs/byEmail/ravindrayadav5438@gmail.com")
        .then((res) => {
          setData(res.data.response);
        })
        .catch((err) => {
          console.log("err", err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <SingleDocument item={item} />} //<Text>{item._id}</Text>
      keyExtractor={(item) => item._id}
    />
  );
};

export default Home;
