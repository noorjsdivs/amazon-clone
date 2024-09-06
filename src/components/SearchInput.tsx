"use client";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { fetchData } from "@/hooks/fetchter";
import { Product } from "@/type";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false); // New state to manage input focus
  const searchContainerRef = useRef(null); // Ref to detect clicks outside
  useEffect(() => {
    const getData = async () => {
      const endpoint = "https://dummyjson.com/products";
      try {
        const data = await fetchData(endpoint);
        setProducts(data?.products);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    getData();
  }, [products]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((item: Product) =>
      item?.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);
  // Effect to detect click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        // @ts-ignore
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsInputFocused(false); // Hide the list if clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchContainerRef}
      className="flex-1 h-10 mx-4 hidden md:inline-flex items-center justify-between relative"
    >
      <input
        className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazonOrange"
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        placeholder="Search amazon"
        onFocus={() => setIsInputFocused(true)} // Set focus state
      />
      {searchQuery && (
        <MdOutlineClose
          onClick={() => setSearchQuery("")}
          className="text-xl text-amazonLight hover:text-red-600 absolute right-14 duration-200 cursor-pointer"
        />
      )}
      <span className="w-12 h-full bg-amazonOrange hover:bg-amazonOrangeDark duration-200 cursor-pointer text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
        <HiOutlineSearch />
      </span>
      {/*  ============= Searchfield start here ========== */}
      {isInputFocused && searchQuery && (
        <div className="absolute left-0 top-12 w-full mx-auto h-auto max-h-96 bg-white rounded-md overflow-y-scroll cursor-pointer text-black">
          {filteredProducts?.length > 0 ? (
            <div className="flex flex-col">
              {filteredProducts?.map((item: Product) => (
                <Link
                  key={item?.id}
                  href={{
                    pathname: `/product/${item?.id}`,
                    query: { id: item?.id },
                  }}
                  onClick={() => setSearchQuery("")}
                  className="flex items-center gap-x-2 text-base font-medium hover:bg-lightText/30 px-3 py-1.5"
                >
                  <CiSearch className="text-lg" /> {item?.title}
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-10 px-5">
              <p className="text-base">
                Nothing matched with{" "}
                <span className="font-semibold underline underline-offset-2 decoration-[1px]">
                  {searchQuery}
                </span>{" "}
                please try again.
              </p>
            </div>
          )}
        </div>
      )}
      {/* {searchQuery && (
  <div className="absolute left-0 top-12 w-full mx-auto h-auto max-h-96 bg-gray-200 rounded-lg overflow-y-scroll cursor-pointer text-black">
    {filteredProducts.length > 0 ? (
      <>
        {searchQuery &&
          filteredProducts.map((item: StoreProduct) => (
            <Link
              href={{
                pathname: `/${item._id}`,
                query: {
                  _id: item._id,
                  title: item.title,
                  brand: item.brand,
                  category: item.category,
                  description: item.description,
                  image: item.image,
                  isNew: item.isNew,
                  oldPrice: item.oldPrice,
                  price: item.price,
                },
              }}
              onClick={() => setSearchQuery("")}
              key={item._id}
              className="w-full border-b-[1px] border-b-gray-400 flex items-center gap-4"
            >
              <div>
                <img
                  className="w-24"
                  src={item.image}
                  alt="productImage"
                />
              </div>
              <div>
                <p className="text-xs -mb-1">
                  {item.brand}_{item.category}
                </p>
                <p className="text-lg font-medium">{item.title}</p>
                <p className="text-xs">
                  {item.description.substring(0, 100)}
                </p>
                <p className="text-sm flex items-center gap-1">
                  price:{" "}
                  <span className="font-semibold">
                    <FormattedPrice amount={item.price} />
                  </span>
                  <span className="text-gray-600 line-through">
                    <FormattedPrice amount={item.oldPrice} />
                  </span>
                </p>
              </div>
              <div className="flex-1 text-right px-4">
                <p className="text-base font-semibold animate-bounce text-amazonBlue">
                  Save{" "}
                  <FormattedPrice
                    amount={item.oldPrice - item.price}
                  />
                </p>
              </div>
            </Link>
          ))}
      </>
    ) : (
      <div className="py-10 bg-gray-50 flex items-center justify-center">
        <p className="text-xl font-semibold animate-bounce">
          Nothing is matches with your search keywords. Please try
          again
        </p>
      </div>
    )}
  </div>
)} */}
      {/*  ============= Searchfield end here ============ */}
    </div>
  );
};

export default SearchInput;
