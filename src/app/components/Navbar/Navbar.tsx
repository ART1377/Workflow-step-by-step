"use client";
import React, { useContext, useEffect, useState } from "react";
import style from "./Navbar.module.css";
import {
  MdPerson,
  MdNotifications,
  MdLogout,
  MdArrowDropDown,
  MdSearch,
} from "react-icons/md";
import DropDownItem from "../DropDownItem/DropDownItem";
import Notification from "../Notification/Notification";
import Link from "next/link";
import { AuthContext } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const authCtx = useContext(AuthContext);

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Set current date
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const getCurrentDate = () => {
      const options = {
        weekday: "short",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        // second: "numeric",
        hour12: false,
      };

      const formattedDate = new Date().toLocaleDateString(
        "en-US",
        options as any
      );
      setCurrentDate(formattedDate);
    };

    // Update the current date on component mount
    getCurrentDate();

    // Update the current date every minute
    const interval = setInterval(getCurrentDate, 60000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Set search query
  // useEffect(() => {
  //   const setSearchInput = setTimeout(() => {
  //     const searchParams = new URLSearchParams(window.location.search);
  //     if (!searchInput) {
  //       searchParams.delete("search");
  //     } else {
  //       searchParams.set("search", searchInput);
  //     }

  //     const newPathName = `${
  //       window.location.pathname
  //     }?${searchParams.toString()}`;

  //     router.push(newPathName);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(setSearchInput);
  //   };
  // }, [searchInput,router]);

  // Set search query
  const handleSearchClick = () => {
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
  };

  const handleLogout = () => {
    authCtx?.logout()
    console.log(authCtx?.user)
  };



  return (
    <nav
      className={`bg-primary-dark shadow p-4 sticky top-0 z-10 h-[64px] flex border-none`}
    >
      <div className="flex justify-between items-center w-full">
        {/* Profile Icon */}
        <div className="relative mr-4">
          <button onClick={toggleProfile} className="text-light flex items-end">
            {/* Your profile icon */}
            <MdPerson className="text-light text-2xl" />
            <MdArrowDropDown className="text-light text-2xl -ms-1" />
          </button>
          {isProfileOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-md">
              <DropDownItem>
                <Link href={"profile"} className="flex items-center gap-1">
                  <MdPerson />
                  Profile
                </Link>
              </DropDownItem>
              <DropDownItem>
                <p onClick={handleLogout} className="flex items-center gap-1">
                  <MdLogout />
                  Logout
                </p>
              </DropDownItem>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-center w-full">
          {/* Input */}
          <div className="relative">
            <div
              onClick={handleSearchClick}
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

          <div className="text-light ml-4 font-medium px-3 py-2 bg-primary-light rounded-radius-large">
            <span className="text-primary-dark">Today is : </span>
            {currentDate}
          </div>
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
