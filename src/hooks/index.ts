import { auth } from "@/auth";

export const getSession = async () => {
  const session = await auth();
  return session;
};
