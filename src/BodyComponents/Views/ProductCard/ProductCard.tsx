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
    <div className="bg-gray-100 rounded-lg flex ml-5  flex-wrap gap-3 p-5 ">
      {/* ProductCard */}
      <Link href={"/"}>
        <div className="w-[280px] h-[400px] bg-white flex flex-col justify-between rounded-md overflow-hidden shadow-md  text-center hover:shadow-2xl ">
          <Image
            src={urlFor(oneProductData.image[0]).width(500).height(500).url()}
            width={300}
            height={300}
            alt={oneProductData.image[0].alt}
          />{" "}
        </div>
      </Link>
      <div>
        <h6 className="mb-2 font-bold text-lg">{oneProductData.productName}</h6>

        <p className="mb-2">${oneProductData.price}</p>
        <Button className="bg-blue-600 ">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
