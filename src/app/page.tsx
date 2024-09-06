import CarouselBanner from "@/components/CarouselBanner";
import ProductsList from "@/components/ProductsList";
import { fetchData } from "@/hooks/fetchter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Amazon Clone app",
};

export default async function Home() {
  const endpoint = "https://dummyjson.com/products";
  const { products } = await fetchData(endpoint);

  return (
    <main>
      <CarouselBanner />
      <div className="-mt-10 md:-mt-20 lg:-mt-60 flex items-center justify-center pb-10">
        <ProductsList products={products} />
      </div>
    </main>
  );
}
