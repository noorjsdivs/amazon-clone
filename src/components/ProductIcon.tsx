"use client";
import { Product } from "@/type";
import { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { store } from "../lib/store";
import toast from "react-hot-toast";

interface Props {
  discountPercentage: number;
  product: Product;
}

const ProductIcon = ({ discountPercentage, product }: Props) => {
  const { favoriteProduct, addToFavorite } = store();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);

  useEffect(() => {
    const availableItem = favoriteProduct.find(
      (item) => item?.id === product?.id
    );
    setExistingProduct(availableItem || null);
  }, [product, favoriteProduct]);

  const handleFavorite = (e: any) => {
    e.preventDefault();
    if (product) {
      addToFavorite(product).then(() => {
        toast.success(
          existingProduct
            ? `${product?.title.substring(0, 10)} removed successfully!`
            : `${product?.title.substring(0, 10)} added successfully!`
        );
      });
    }
  };
  return (
    <div className="absolute top-2 right-2 flex items-center gap-2">
      <p className="bg-transparent text-amazonBlue border border-amazonBlue group-hover:bg-amazonBlue group-hover:text-white duration-200 text-xs rounded-full py-1 px-2">
        {discountPercentage}%
      </p>
      <span onClick={handleFavorite} className="text-xl z-40">
        {existingProduct ? <MdFavorite /> : <MdFavoriteBorder />}
      </span>
    </div>
  );
};

export default ProductIcon;
