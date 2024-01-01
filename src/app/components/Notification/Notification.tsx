import React, { useEffect, useState } from "react";
import DropDownItem from "../DropDownItem/DropDownItem";
import {
  MdNotifications,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";
import {
  fetchNotifications,
  markAsRead,
} from "../../redux/slices/notificationSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import { Notification } from "../../../../next-type-d";
import NotificationItem from "../Notification/NotificationItem/NotificationItem";

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
        {isNotificationsOpen ? (
          <MdArrowDropUp className="text-light text-2xl -ms-1" />
        ) : (
          <MdArrowDropDown className="text-light text-2xl -ms-1" />
        )}
      </button>
      {isNotificationsOpen && (
        <div
          className={`max-h-[300px] overflow-y-scroll absolute right-0 mt-2 p-2 rounded-md shadow border-light border-2  ${
            isNotificationsOpen && "block"
          }
          ${activeTab === "unread" ? "bg-primary-dark" : " bg-light"}
          `}
        >
          {/* Notification Tabs */}
          <div className="flex mb-2">
            <button
              className={`w-1/2 py-1 text-center  rounded-radius-main ${
                activeTab === "unread"
                  ? "bg-light text-primary-dark"
                  : "text-primary-main"
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

          {/* Notification dropdown content */}
          <div className="mt-3">
            {filteredNotifications?.map(
              (notification: Notification, index: number) => {
                if (index < 10) {
                  return (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      last={true}
                    />
                  );
                }
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
