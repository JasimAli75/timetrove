"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "../ProductCard/ProductCard";
import { Component, ReactNode } from "react";

// const SanityProducts = ({ ProductData }: any) => {
//   return (
//     <div className="flex gap-5">
//       {ProductData.map((data: any, index: number) => (
//         <ProductCard oneProductData={data} key={index} />
//       ))}
//     </div>
//   );
// };

// export default SanityProducts;

export default class SanityProducts extends Component<{ ProductData: any }> {
  render(): ReactNode {
    const setting = {
      centerMode: true,
      dots: true,

      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };
    return (
      <Slider {...setting}>
        {this.props.ProductData.map((data: any, index: number) => (
          <ProductCard oneProductData={data} key={index} />
        ))}
      </Slider>
    );
  }
}
