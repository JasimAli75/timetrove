"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "../ProductCard/ProductCard";
import { Component, ReactNode } from "react";

const SanityProducts = ({ ProductData }: any) => {
  let initialX: number;
  let isDragging = false;
  let tabBox: any;
  const isBrowser = () => typeof window !== "undefined";

  if (isBrowser()) {
    tabBox = document.querySelector(".scrollGrab");
  }
  // Desktop functions
  function mouseMoves(e: any) {
    if (!isDragging) return;
    if (tabBox) {
      tabBox.scrollLeft -= e.movementX;
    }
  }
  function mouseDown() {
    isDragging = true;
  }
  function mouseUp() {
    isDragging = false;
  }
  // mobile functions
  function mouseMovesForMobile(e: any) {
    if (!isDragging) return;
    if (tabBox) {
      var currentX = e.touches[0].clientX;
      var movementX = currentX - initialX;
      tabBox.scrollLeft -= movementX / 5;
    }
  }
  function mouseDownForMobile(e: any) {
    isDragging = true;
    initialX = e.touches[0].clientX;
  }
  let dataToItrate = ProductData.slice(0, 15);

  return (
    <div className="space-y-4 gap-10">
      <div className="text-center space-y-3">
        <p className="text-blue-800 text-sm">PROMOTIONS</p>
        <h3 className="text-3xl text-gray-800 font-bold">
          Our Promotions Events
        </h3>
      </div>
      <div
        onMouseMove={mouseMoves}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        className="select-none flex gap-4 overflow-x-hidden scrollGrab py-4 overflow-y-hidden"
        onTouchMove={mouseMovesForMobile}
        onTouchStart={mouseDownForMobile}
        onTouchEnd={mouseUp}
      >
        {dataToItrate.map((data: any, index: number) => (
          <ProductCard key={index + 4} oneProductData={data} />
        ))}
      </div>
    </div>
  );
};
//   return (
//     <div className="flex gap-5">
//       {ProductData.map((data: any, index: number) => (
//         <ProductCard oneProductData={data} key={index} />
//       ))}
//     </div>
//   );
// };

export default SanityProducts;

// export default class SanityProducts extends Component<{ ProductData: any }> {
//   render(): ReactNode {
//     const settings = {
//       dots: true,
//       centerMode: true,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       pauseOnHover: true,

//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: true,
//           },
//         },
//       ],
//     };
//     return (
//       <Slider {...settings}>
//         {this.props.ProductData.map((data: any, index: number) => (
//           <ProductCard oneProductData={data} key={index} />
//         ))}
//       </Slider>
//     );
//   }
// }
