import { Product } from "../../type";
import Container from "./Container";
import ProductCard from "./ProductCard";

interface ProductsArray {
  products: Product[];
}

const ProductsList = ({ products }: ProductsArray) => {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products?.map((item) => (
        <ProductCard key={item?.id} product={item} />
      ))}
    </Container>
  );
};

export default ProductsList;
