import { auth } from "@/auth";
import CartProducts from "@/src/components/cart/CartProducts";
import Container from "@/src/components/Container";
import { getSession } from "@/src/hooks";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Cart | Amazon online shopping",
};

const CartPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }
  const { user } = session;

  return <Container>{session && <CartProducts user={user} />}</Container>;
};

export default CartPage;
