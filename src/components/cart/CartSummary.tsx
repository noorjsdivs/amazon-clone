"use client";
import { store } from "@/src/lib/store";
import { calculateCartTotals } from "@/src/lib/utils";
import BillingSummary from "./BillingSummary";
import { loadStripe } from "@stripe/stripe-js";

const CartSummary = ({ email }: { email: string }) => {
  const { cartProduct } = store();

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const handlePayment = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cartProduct,
        email: email,
      }),
    });
    const checkoutSession = await response?.json();
    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result.error) {
      alert(result?.error?.message);
    }
  };

  return (
    <section className="mt-16 rounded-lg bg-gray-100 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <BillingSummary />
      <button
        onClick={handlePayment}
        type="submit"
        className="w-full mt-6 rounded-md border border-transparent bg-gray-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-skyText focus:ring-offset-2 focus:ring-offset-gray-50 duration-200"
      >
        Checkout
      </button>
    </section>
  );
};

export default CartSummary;
