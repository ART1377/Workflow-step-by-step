"use client";
import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { MdSearch } from "react-icons/md";
import Notification from "../Notification/Notification";
import { useRouter } from "next/navigation";
import CurrentDate from "@/app/components/Navbar/CurrentDate/CurrentDate";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

const Navbar = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  // Set search query
  useEffect(() => {
    const setSearchInput = setTimeout(() => {
      const searchParams = new URLSearchParams(window.location.search);
      if (!searchInput) {
        searchParams.delete("search");
      } else {
        searchParams.set("search", searchInput);
      }

      const newPathName = `${
        window.location.pathname
      }?${searchParams.toString()}`;

      router.push(newPathName);
    }, 1000);

    return () => {
      clearTimeout(setSearchInput);
    };
  }, [searchInput, router]);

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
    <nav
      className={`bg-primary-dark shadow p-4 sticky top-0 z-10 h-[64px] flex border-none`}
    >
      <div className="flex justify-between items-center w-full">
        {/* Profile Icon */}
        <ProfileMenu />

        {/* Search Bar */}
        <div className="flex items-center justify-center w-full">
          {/* Input */}
          <div className="relative">
            <div
              // onClick={handleSearchClick}
              className={`${style.searchIcon} bg-primary-light absolute transform -translate-y-1/2 top-1/2 right-1 rounded-full h-8 w-8 flex justify-center items-center cursor-pointer`}
            >
              <MdSearch strokeWidth="1" className="text-2xl text-light" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearchInputChange}
              className="py-2 pl-3 pr-12 border border-primary-main rounded-full focus:outline-none focus:border-primary-light max-w-[320px] sm:w-full"
            />
          </div>

          {/* Date Display */}
          <CurrentDate />
        </div>

        {/* Icons */}
        <div className="flex items-center">
          {/* Notification Icon */}
          <Notification />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
