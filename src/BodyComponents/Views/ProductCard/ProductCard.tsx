import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const ProductCard = ({ oneProductData }: any) => {
  return (
    <div className=" mb-10  ">
      {/* ProductCard */}
      <Link href={`/ProductCatalog/${oneProductData.slug.current}`}>
        <div className="w-[300px] h-[400px] bg-white flex flex-col justify-between items-center rounded-md overflow-hidden shadow-lg  text-center hover:shadow-2xl hover:scale-105 duration-300 ">
          <Image
            src={urlFor(oneProductData.image[0]).width(500).height(500).url()}
            width={300}
            height={300}
            alt={oneProductData.image[0].alt}
          />{" "}
        </div>
      </Link>
      <div className="mt-5">
        <h6 className="mb-2 font-bold text-lg">{oneProductData.productName}</h6>

        <p className="mb-2">${oneProductData.price}</p>
        <Button className="bg-blue-600 ">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
