import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";
import HeaderBottom from "./HeaderBottom";
import SignInButton from "./SignInButton";
import SearchInput from "./SearchInput";
import SignOutButton from "./SignOutButton";
import { getSession } from "../hooks";
import CartButton from "./CartButton";
import FavoriteButton from "./FavoriteButton";

const Header = async () => {
  const session = await getSession();

  return (
    <header className="bg-transparent sticky top-0 z-50">
      <div className="w-full h-20 bg-amazonBlue text-lightText sticky top-0 z-50">
        <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
          {/* Logo */}
          <Link href={"/"}>
            <div className="headerItem">
              <Image
                className="w-28 object-cover mt-1"
                src={logo}
                alt="logo"
                priority
              />
            </div>
          </Link>
          {/* Deliver */}
          <div className="headerItem hidden xl:inline-flex gap-1">
            <SlLocationPin className="text-lg text-white" />
            <div className="text-xs">
              <p>Deliver to</p>
              <p className="text-white font-bold uppercase">USA</p>
            </div>
          </div>
          <SearchInput />

          {session?.user ? <SignOutButton /> : <SignInButton />}

          {/* Favorite */}
          <FavoriteButton />
          {/* Cart */}
          <CartButton />
        </div>
      </div>
      <HeaderBottom />
    </header>
  );
};

export default Header;
