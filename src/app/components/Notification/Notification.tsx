import React, { useEffect, useState } from "react";
import DropDownItem from "../DropDownItem/DropDownItem";
import { MdNotifications, MdArrowDropDown } from "react-icons/md";
import {
  fetchNotifications,
  markAsRead,
} from "../../redux/slices/notificationSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import { Notification } from "../../../../next-type-d";
import NotificationItem from "../NotificationItem/NotificationItem";

const Notification = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(
    (state) => state.notifications.notifications
  );
  const status = useAppSelector((state) => state.notifications.status);

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
  }, [dispatch]);

  const handleMarkAsRead = (notificationId: string) => {
    dispatch(markAsRead(notificationId));
  };

  const filteredNotifications =
    activeTab === "unread"
      ? notifications.filter((notification) => !notification.read)
      : notifications.filter((notification) => notification.read);

  return (
    <div className={`relative`}>
      <button
        onClick={toggleNotifications}
        className="text-light flex items-end"
      >
        <MdNotifications className="text-light text-2xl" />
        <MdArrowDropDown className="text-light text-2xl -ms-1" />
      </button>
      {isNotificationsOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 bg-white p-2 rounded-md shadow ${
            isNotificationsOpen && "block"
          }`}
        >
          {/* Notification Tabs */}
          <div className="flex mb-2">
            <button
              className={`w-1/2 py-1 text-center text-light rounded-radius-main ${
                activeTab === "unread" ? "bg-primary-dark" : "text-primary-main"
              }`}
              onClick={() => handleTabChange("unread")}
            >
              Unread
            </button>
            <button
              className={`w-1/2 py-1 text-center text-light rounded-radius-main ${
                activeTab === "read" ? "bg-primary-dark" : "text-primary-main"
              }`}
              onClick={() => handleTabChange("read")}
            >
              Read
            </button>
          </div>

          {/* Notification dropdown content */}
          {filteredNotifications?.map((notification: Notification) => {
            return (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Notification;

// import React from 'react'
// import { Notification } from '../../../../../next-type-d';

// type Props = {
//     notification:Notification;
// }

// const NotificationItem = ({notification}: Props) => {
//   return (
//     <>
    
//     </>
//   )
// }

// export default NotificationItem
