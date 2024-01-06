import { AuthContext } from "@/app/context/AuthContext";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import {
  MdPerson,
  MdLogout,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";
import DropDownItem from "../../Gloabal/DropDownItem/DropDownItem";
import Link from "next/link";

type Props = {};

const ProfileMenu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const authCtx = useContext(AuthContext);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    if (!localStorage.getItem('user')) {
      return toast.error("Already Loged out!");
    }
    authCtx?.logout();
  };

  return (
    <div className="relative mr-4">
      <div className="flex items-center gap-1">
        <button
          onClick={toggleProfile}
          className={`text-light flex items-end ${
            isProfileOpen && "bg-primary-light rounded-radius-main"
          }`}
        >
          {/* Your profile icon */}
          <MdPerson className="text-light text-3xl" />
          {isProfileOpen ? (
            <MdArrowDropUp className="text-light text-3xl -ms-1" />
          ) : (
            <MdArrowDropDown className="text-light text-3xl -ms-1" />
          )}
        </button>
        <div>
          <p className="text-light text-xl font-bold whitespace-nowrap text-ellipsis overflow-hidden w-24">
            {authCtx?.user?.username && authCtx?.user?.username}
          </p>
        </div>
      </div>
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
  );
};

export default ProfileMenu;
