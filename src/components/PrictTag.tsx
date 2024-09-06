import { twMerge } from "tailwind-merge";
import PriceFormat from "./PriceFormat";

interface Props {
  regularPrice?: number;
  discountedPrice?: number;
  className?: string;
}

const PriceTag = ({ regularPrice, discountedPrice, className }: Props) => {
  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      <p className="line-through text-gray-500 font-medium">
        <PriceFormat amount={regularPrice} />
      </p>
      <p className="font-bold text-skyText">
        <PriceFormat amount={discountedPrice} />
      </p>
    </div>
  );
};

export default PriceTag;
