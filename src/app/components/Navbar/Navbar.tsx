"use client";
import React, { useEffect, useState } from "react";
import Notification from "../Notification/Notification";
import { useRouter } from "next/navigation";
import CurrentDate from "@/app/components/Navbar/CurrentDate/CurrentDate";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import SearchBar from "./SearchBar/SearchBar";

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
          <SearchBar/>

          {/* Date Display */}
          <CurrentDate />
        </div>

        {/* Notification */}
        <div className="flex items-center">
          <Notification />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
