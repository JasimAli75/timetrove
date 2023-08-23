// import React from "react";
// import imageUrlBuilder from "@sanity/image-url";
// import { client } from "../../../../sanity/lib/client";
// import Image from "next/image";

// const builder = imageUrlBuilder(client);
// function urlFor(source: any) {
//   return builder.image(source);
// }

// const ProductCard = ({ oneProductData }: any) => {
//   return (
//     <div>
//       {/* ProductCard */}
//       <div>
//         <div className="w-96">
//           <Image
//             src={urlFor(oneProductData.image[0]).width(500).height(500).url()}
//             width={300}
//             height={300}
//             alt={oneProductData.image[0].alt}
//           />
//         </div>
//       </div>
//       <div className="font-semibold text-lg">
//         <h6>{oneProductData.productName}</h6>
//       </div>
//       <div>
//         <h6>${oneProductData.price}</h6>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from "react";

function ProductCard() {
  return <div>product card sanity</div>;
}

export default ProductCard;
