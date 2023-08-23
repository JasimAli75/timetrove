import BASE_PATH_FOR_API from "@/BodyComponents/Shared/BasePath";
import Hero from "@/BodyComponents/Views/Hero/Hero";
import Newsletter from "@/BodyComponents/Views/Newsletter/Newsletter";
import ProductCategory from "@/BodyComponents/Views/ProductCategory/ProductCategory";
import PromoProduct from "@/BodyComponents/Views/PromoProducts";
import SanityProducts from "@/BodyComponents/Views/SanityProducts/SanityProducts";
import ShipDetails from "@/BodyComponents/Views/ShippingDetails/ShipDetails";

async function FetchAllProductData() {
  let res = await fetch(`${BASE_PATH_FOR_API}/api/product`);

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  let { response } = await FetchAllProductData();

  return (
    <main>
      <Hero />
      <SanityProducts ProductData={response} />
      <ProductCategory />
      <ShipDetails />
      <PromoProduct />
      <Newsletter />
    </main>
  );
}
