import React from "react";
import { Product } from "../../type";
import Image from "next/image";
import PriceFormat from "./PriceFormat";
import AddToCartBtn from "./AddToCartBtn";
import Link from "next/link";
import ProductIcon from "./ProductIcon";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border border-gray-200 rounded-md bg-white overflow-hidden">
      <div className="relative group overflow-hidden h-72">
        <Link
          href={{
            pathname: `/product/${product?.id}`,
            query: { id: product?.id },
          }}
          className="h-full"
        >
          <Image
            src={product.images[0]}
            alt="product-image"
            width={600}
            height={600}
            loading="lazy"
            className="w-full h-full object-contain bg-[#f8f8f8] group-hover:scale-110 duration-200 overflow-hidden"
          />
          <ProductIcon
            discountPercentage={product?.discountPercentage}
            product={product}
          />
        </Link>
      </div>
      <div className="flex flex-col py-2 px-4 gap-2 justify-between">
        <div className="flex flex-col gap-1 h-36">
          <h2 className=" line-clamp-1">{product?.title}</h2>
          <p className="text-sm text-amazonBlue/90 line-clamp-3">
            {product?.description}
          </p>
          <p className="font-semibold">
            <PriceFormat amount={product?.price} />
          </p>
          <p className="text-sm">
            Category: <span className="font-semibold">{product?.category}</span>
          </p>
        </div>
        <AddToCartBtn product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
