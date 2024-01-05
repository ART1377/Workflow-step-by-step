import React from "react";
import { MdNotifications, MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

type Props ={
  isOpen: boolean;
  onClick: () => void;
}

const NotificationIcon= ({ isOpen, onClick }:Props) => (
  <button
    onClick={onClick}
    className={`text-light flex items-end ${isOpen && "bg-primary-light rounded-radius-main"}`}
  >
    <MdNotifications className="text-light text-2xl" />
    {isOpen ? (
      <MdArrowDropUp className="text-light text-2xl -ms-1" />
    ) : (
      <MdArrowDropDown className="text-light text-2xl -ms-1" />
    )}
  </button>
);

export default NotificationIcon;
