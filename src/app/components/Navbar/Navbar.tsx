import React, { useState } from "react";
import { MdPerson, MdNotifications } from "react-icons/md";
import DropDownItem from "../DropDownItem/DropDownItem";
import Link from "next/link";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsProfileOpen(false);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsNotificationsOpen(false);
  };

  const [activeTab, setActiveTab] = useState("unread");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <nav className="bg-primary-dark shadow p-4 sticky top-0 z-10 h-[64px] flex border-none">
      <div className="flex justify-between items-center w-full">
        {/* Profile Icon */}
        <div className="relative mr-4">
          <button onClick={toggleProfile} className="text-light">
            {/* Your profile icon */}
            <MdPerson className="text-light text-2xl" />
          </button>
          {isProfileOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white p-2 rounded-md shadow-md">
              <DropDownItem>
                <Link href={"profile"}>Profile</Link>
              </DropDownItem>
              <DropDownItem>
                <p onClick={() => console.log("Logout clicked")}>Logout</p>
              </DropDownItem>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleSearchInputChange}
          className="p-2 border border-gray-main rounded-md focus:outline-none focus:border-primary-light max-w-[400px] sm:w-full"
        />

        {/* Icons */}
        <div className="flex items-center">
          {/* Notification Icon */}
          <div className="relative">
            <button onClick={toggleNotifications} className="text-light">
              {/* Your notification icon */}
              <MdNotifications className="text-light text-2xl" />
            </button>
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white p-2 rounded-md shadow">
                {/* Notification Tabs */}
                <div className="flex">
                  <button
                    className={`w-1/2 py-1 text-center ${
                      activeTab === "unread" ? "bg-primary-light" : ""
                    }`}
                    onClick={() => handleTabChange("unread")}
                  >
                    Unread
                  </button>
                  <button
                    className={`w-1/2 py-1 text-center ${
                      activeTab === "read" ? "bg-primary-light" : ""
                    }`}
                    onClick={() => handleTabChange("read")}
                  >
                    Read
                  </button>
                </div>

                {/* Your notification dropdown content */}
                {activeTab === "unread" && (
                  <>
                    <p>Unread Notification 1</p>
                    <p>Unread Notification 2</p>
                  </>
                )}
                {activeTab === "read" && (
                  <>
                    <p>Read Notification 1</p>
                    <p>Read Notification 2</p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
