"use client";
import React, { useEffect, useState } from "react";
import { fetchNotifications } from "../../redux/slices/notificationSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import NotificationIcon from "./NotificationIcon/NotificationIcon";
import NotificationDropdown from "./NotificationDropdown/NotificationDropdown";


const Notification = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(
    (state) => state.notifications.notifications
  );

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("unread");

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch, isNotificationsOpen]);

  const filteredNotifications =
    activeTab === "unread"
      ? notifications.filter((notification) => !notification.read)
      : notifications.filter((notification) => notification.read);


  const sortedNotifications=filteredNotifications
  .sort(
    (a, b) =>
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div className={`relative`}>
      <NotificationIcon
        isOpen={isNotificationsOpen}
        onClick={toggleNotifications}
      />
      {isNotificationsOpen && (
        <NotificationDropdown
          activeTab={activeTab}
          handleTabChange={handleTabChange}
          sortedNotifications={sortedNotifications}
        />
      )}
    </div>
  );
};

export default Notification;
