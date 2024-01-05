import React from "react";

type Props ={
  activeTab: string;
  handleTabChange: (tab: string) => void;
}

const NotificationTabs= ({ activeTab, handleTabChange }:Props) => (
  <div className="flex mb-2">
    <button
      className={`w-1/2 py-1 text-center rounded-radius-main ${
        activeTab === "unread" ? "bg-light text-primary-dark" : "text-primary-main"
      }`}
      onClick={() => handleTabChange("unread")}
    >
      Unread
    </button>
    <button
      className={`w-1/2 py-1 text-center text-light rounded-radius-main ${
        activeTab === "read" ? "bg-primary-dark" : "text-light"
      }`}
      onClick={() => handleTabChange("read")}
    >
      Read
    </button>
  </div>
);

export default NotificationTabs;
