import BASE_PATH_FOR_API from "@/BodyComponents/Shared/BasePath";
import Hero from "@/BodyComponents/Views/Hero/Hero";
import Newsletter from "@/BodyComponents/Views/Newsletter/Newsletter";
import ProductCategory from "@/BodyComponents/Views/ProductCategory/ProductCategory";
import PromoProduct from "@/BodyComponents/Views/PromoProducts";
import SanityProducts from "@/BodyComponents/Views/SanityProducts/SanityProducts";
import ShipDetails from "@/BodyComponents/Views/ShippingDetails/ShipDetails";

export default function Home() {
  return (
    <main>
      <Hero />
      <SanityProducts />
      <ProductCategory />
      <ShipDetails />
      <PromoProduct />
      <Newsletter />
    </main>
  );
}
