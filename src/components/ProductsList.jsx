import * as React from "react";
import { FlatList, Text } from "react-native";
import { products } from "../ProductsData/data";
import ProductCart from "./ProductCart";

const ProductsList = () => {
  return (
    <FlatList
      contentContainerStyle={{ paddingHorizontal: 15 }}
      data={products}
      keyExtractor={(products) => products.id}
      renderItem={({ item }) => <ProductCart {...item} />}
    />
  );
};

export default ProductsList;
