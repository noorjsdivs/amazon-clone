"use client";
import Container from "@/src/components/Container";
import { store } from "@/src/lib/store";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { resetCart } = store();

  !sessionId && redirect("/");

  useEffect(() => {
    if (sessionId) {
      resetCart();
      toast.success("Payment received successfully!");
    }
  }, [sessionId, resetCart]);

  return (
    <Container>
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Your Payment Accepted by amazon.com
        </h2>
        <p>You can view your Orders or continue Shopping with us</p>
        <div className="flex items-center gap-x-5">
          <Link href={"/orders"}>
            <button className="bg-black text-slate-100 w-52 h-12 rounded-full text-base font-semibold hover:bg-primeColor duration-300">
              View Orders
            </button>
          </Link>
          <Link href={"/"}>
            <button className="bg-black text-slate-100 w-52 h-12 rounded-full text-base font-semibold hover:bg-primeColor duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default SuccessPage;
