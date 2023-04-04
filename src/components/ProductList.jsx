import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ items, isLoading }) => {
  return (
    <>
      {items.map((item) => (
        <ProductCard item={item} key={item.id} isLoading={isLoading} />
      ))}
    </>
  );
};

export default ProductList;
