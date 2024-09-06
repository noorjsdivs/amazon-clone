import Container from "@/src/components/Container";
import SingleProduct from "@/src/components/SingleProduct";
import { fetchData } from "@/src/hooks/fetchter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product View Page | Amazon Clone app",
};

interface Props {
  searchParams: {
    id: string;
  };
}

const ProductPage = async ({ searchParams }: Props) => {
  const { id } = searchParams;
  const endpoint = `https://dummyjson.com/products/${id}`;

  const product = await fetchData(endpoint);

  return (
    <Container className="py-10">
      {product && <SingleProduct product={product} />}
    </Container>
  );
};

export default ProductPage;
