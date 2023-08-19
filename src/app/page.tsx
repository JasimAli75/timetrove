import Hero from "@/BodyComponents/Views/Hero/Hero";
import Newsletter from "@/BodyComponents/Views/Newsletter/Newsletter";
import ProductCategory from "@/BodyComponents/Views/ProductCategory/ProductCategory";
import PromoProduct from "@/BodyComponents/Views/PromoProducts";
import ShipDetails from "@/BodyComponents/Views/ShippingDetails/ShipDetails";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductCategory />
      <ShipDetails />
      <PromoProduct />
      <Newsletter />
    </main>
  );
}
