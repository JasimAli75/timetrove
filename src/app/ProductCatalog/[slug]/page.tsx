import React, { FC } from "react";

const ProductCatalog: FC<{ params: { slug: string } }> = ({ params }) => {
  console.log(params.slug);

  return <div>{params.slug}</div>;
};

export default ProductCatalog;
