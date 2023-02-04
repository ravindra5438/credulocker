import { FlatList, Text, View } from "react-native";
import React, { useEffect } from "react";
import SingleDocument from "./SingleDocument";
import { useAppContext } from "../../context/AppContext";

const Home = () => {
  const { userData } = useAppContext();
  return (
    <FlatList
      data={userData}
      renderItem={({ item }) => <SingleDocument item={item} />} //<Text>{item._id}</Text>
      keyExtractor={(item) => item._id}
    />
  );
};

export default Home;
