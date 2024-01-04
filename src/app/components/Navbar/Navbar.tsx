"use client";
import React from "react";
import Notification from "../Notification/Notification";
import CurrentDate from "@/app/components/Navbar/CurrentDate/CurrentDate";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import SearchBar from "./SearchBar/SearchBar";

const Navbar = () => {
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
          <SearchBar />

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
