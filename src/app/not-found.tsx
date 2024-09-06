"use client";
import { usePathname } from "next/navigation";
import {
  HiBookOpen,
  HiBookmarkSquare,
  HiMiniQueueList,
  HiRss,
} from "react-icons/hi2";
import { LuChevronRight } from "react-icons/lu";
import Container from "../components/Container";
import Link from "next/link";

const links = [
  {
    name: "Product",
    href: "/product",
    description: "You will find all available products here.",
    icon: HiBookOpen,
  },
  {
    name: "Shop",
    href: "/shop",
    description: "Maximum collections of shopping products.",
    icon: HiMiniQueueList,
  },
  {
    name: "My Account",
    href: "/profile",
    description: "Find your information here.",
    icon: HiBookmarkSquare,
  },
  {
    name: "Blog",
    href: "/blog",
    description: "Read our latest news and articles on shopping.",
    icon: HiRss,
  },
];
const NotFound = () => {
  const pathname = usePathname();
  const path = pathname.split("/").filter(Boolean).pop();

  return (
    <Container>
      <div className="bg-white">
        <main className="px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
          <div className="text-center">
            <p className="text-4xl font-bold leading-8 text-amazonOrangeDark">
              404
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-amazonBlue">
              <span className="text-amazonGreen underline underline-offset-2 decoration-[1px] capitalize">
                {path}
              </span>{" "}
              does not exist
            </h1>
            <p className="mt-2 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              Sorry, we couldn’t find the {path} page you’re looking for.
            </p>
          </div>
          <div className="mx-auto mt-6 flow-root max-w-lg">
            <h2 className="sr-only">Popular pages</h2>
            <ul
              role="list"
              className="divide-y divide-gray-900/5 border-b border-gray-900/5 flex flex-col"
            >
              {links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="relative flex gap-x-6 py-4 hover:bg-amazonOrangeDark/20 px-4 rounded-md"
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                    <link.icon
                      className="h-6 w-6 text-amazonOrangeDark"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-auto">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">
                      <Link href={link.href}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        {link.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {link.description}
                    </p>
                  </div>
                  <div className="flex-none self-center">
                    <LuChevronRight
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex justify-center">
              <Link
                href={"/"}
                className="bg-amazonOrangeDark/80 hover:bg-darkText text-whiteText py-2.5 px-6 rounded-full flex items-center gap-2 duration-200 hover:bg-amazonOrangeDark"
              >
                home
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default NotFound;
