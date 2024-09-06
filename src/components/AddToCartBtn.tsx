"use client";
import { useEffect, useState } from "react";
import { Product } from "../../type";
import { store } from "@/lib/store";
import { cn } from "@/lib/utils";
import { FaMinus, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";

interface Props {
  product: Product;
  className?: string;
  title?: string;
  showPrice?: boolean;
}

const AddToCartBtn = ({ product, className }: Props) => {
  const { addToCart, cartProduct, decreaseQuantity } = store();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);

  useEffect(() => {
    const availableItem = cartProduct.find((item) => item?.id === product?.id);

    setExistingProduct(availableItem || null);
  }, [product, cartProduct]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(
        `${product?.title.substring(0, 12)}... added successfully!`
      );
    }
  };

  const handleDeleteProduct = () => {
    if (existingProduct) {
      if (existingProduct?.quantity! > 1) {
        decreaseQuantity(existingProduct?.id);
        toast.success(
          `${product?.title.substring(0, 10)} decreased successfully`
        );
      } else {
        toast.error("You can not decrease less than 1");
      }
    } else {
    }
  };

  return (
    <>
      {existingProduct ? (
        <div className="flex self-start items-center justify-center gap-2 py-2 mb-2">
          <button
            disabled={existingProduct?.quantity! <= 1}
            onClick={handleDeleteProduct}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]"
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
            {existingProduct?.quantity}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className={cn(
            "text-sm tracking-wide font-medium mb-2 border-[1px] border-amazonBlue/50 py-2 rounded-full bg-amazonLight/10 hover:bg-amazonYellowDark duration-200",
            className
          )}
        >
          Add to cart
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
