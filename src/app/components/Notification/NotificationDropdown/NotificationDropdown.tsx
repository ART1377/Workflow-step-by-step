import React from "react";
import NotificationItem from "../../Notification/NotificationItem/NotificationItem";
import { Notification } from "../../../../../next-type-d";
import NotificationTabs from "../NotificationTabs/NotificationTabs";

type Props = {
  sortedNotifications: Notification[];
  activeTab: string;
  handleTabChange: (tab: string) => void;
};

const NotificationDropdown = ({
  activeTab,
  sortedNotifications,
  handleTabChange,
}: Props) => (
  <div
    className={`max-h-[300px] overflow-y-scroll absolute right-0 mt-2 p-2 rounded-md shadow border-light border-2
    ${activeTab === "unread" ? "bg-primary-dark" : "bg-light"}`}
  >
    {/* Notification Tabs */}
    <NotificationTabs activeTab={activeTab} handleTabChange={handleTabChange} />

    {/* Notification dropdown content */}
    <div className="mt-3">
      {sortedNotifications?.map((notification: Notification, index: number) => {
        if (index < 10) {
          return (
            <NotificationItem
              key={notification.id}
              notification={notification}
              last={
                sortedNotifications?.length > 10 && index === 10
                  ? true
                  : sortedNotifications?.length - 1 === index
              }
            />
          );
        }
      })}
    </div>
  </div>
);

export default NotificationDropdown;
