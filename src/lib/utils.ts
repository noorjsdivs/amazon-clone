import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { store } from "./store";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateCartTotals = () => {
  const { cartProduct } = store();
  const totalAmt = cartProduct.reduce(
    (sum, product) => {
      sum.regular += product?.price * product?.quantity!;
      sum.discounted +=
        product?.price *
        (product?.discountPercentage / 100) *
        product?.quantity!;
      return sum;
    },
    { regular: 0, discounted: 0 }
  );

  return { totalAmt };
};
