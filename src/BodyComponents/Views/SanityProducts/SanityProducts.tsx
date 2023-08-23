"use client";

import ProductCard from "../ProductCard/ProductCard";

const SanityProducts = ({ ProductData }: any) => {
  return (
    <div>
      {ProductData.map((data: any, index: number) => (
        <ProductCard oneProductData={data} key={index} />
      ))}
    </div>
  );
};

export default SanityProducts;
