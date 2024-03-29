"use client";
import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import style from "./SearchBar.module.css";
import Input from "../../Global/Input/Input";
import useSearchParamsInteraction from "@/app/hooks/useSearchParamsInteraction/useSearchParamsInteraction";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  // Custom hook
  const { setSearchParams } = useSearchParamsInteraction();

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  // Set search params using custom hook
  useEffect(() => {
    const setSearchInputTimeout = setTimeout(
      () => setSearchParams(searchInput, "search"),
      1000
    );

    return () => {
      clearTimeout(setSearchInputTimeout);
    };
  }, [searchInput]);

  // Set search query
  // const handleSearchClick = () => {
  //   const searchParams = new URLSearchParams(window.location.search);
  //   if (!searchInput) {
  //     searchParams.delete("search");
  //   } else {
  //     searchParams.set("search", searchInput);
  //   }

  //   const newPathName = `${
  //     window.location.pathname
  //   }?${searchParams.toString()}`;

  //   router.push(newPathName);
  // };

  return (
    <div className="relative w-1/2 max-w-[360px]">
      <div
        className={`${style.searchIcon} bg-primary-light absolute transform -translate-y-1/2 top-1/2 right-1 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer`}
      >
        <MdSearch strokeWidth="1" className="text-3xl text-light" />
      </div>
      <Input
        type="text"
        value={searchInput}
        onChange={handleSearchInputChange}
        isSearchBar
      />
      {/* <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearchInputChange}
        className="py-2 pl-3 pr-12 border border-primary-main rounded-full focus:outline-none focus:border-primary-light max-w-[320px] sm:w-full"
      /> */}
    </div>
  );
};

export default SearchBar;
