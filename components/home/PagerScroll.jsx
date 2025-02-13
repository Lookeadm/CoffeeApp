import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import appColor from "@/constants/appColor";
import fontStyles from "@/constants/textSize";
import CardComponent from "./CardComponent";
import AxiosInstance from "@/helpers/AxiosInstance";

const PagerScroll = () => {

  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await AxiosInstance().get("categories");
        setCategories(response.categories);
        setSelectedId(response.categories[0]._id);
      } catch (e) { 
        console.log(e);
      }
    }
    getCategories();
    return () => {
      // cleanup
      // setCategories([]);
    };
  }, [])

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => setSelectedId(item._id)}
      >
        <Text style={{
          color: selectedId === item._id ? appColor.orange : appColor.gray2,
          fontWeight: selectedId === item._id ? 'bold' : 'medium',
          fontFamily: fontStyles.PoppinBold
        }}>
          {item.name}
        </Text>
        {selectedId === item._id && <View style={styles.dot} />}
      </TouchableOpacity>
    )
  }

  return (
    <View style={{flex: 1}}>
      <View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        estimatedItemSize={200}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        extraData={selectedId}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={<Text>No categories available</Text>}
      />
      </View>
    <CardComponent selectedId={selectedId}/>
    </View>
  )
};

export default PagerScroll;

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    rowGap: 5,
    marginLeft: 30,
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: appColor.orange,
  },
});