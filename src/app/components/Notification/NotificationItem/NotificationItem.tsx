"use client";
import React from "react";
import { Notification } from "../../../../../next-type-d";
import TimeAgo from 'react-timeago'
import { MdDoneAll } from "react-icons/md";
import { markAsRead } from "../../../redux/slices/notificationSlice";
import { useAppDispatch } from "@/app/redux/hooks/hooks";

type Props = {
  notification: Notification;
  last: boolean;
};
const NotificationItem = ({
  notification: { id, message, read, sender, timestamp, title },
  last,
}: Props) => {
  const dispatch = useAppDispatch();

  const handleMarkAsRead = (notificationId: string) => {
    dispatch(markAsRead(notificationId));
  };

  return (
    <>
      <div
        className={`flex relative mb-3 ${
          !last && "border-b"
        } p-1 gap-2 w-[320px] h-[90px] ${
          read
            ? "bg-light border-gray-dark"
            : "bg-primary-dark border-gray-light"
        }`}
      >
        <div className={`sender w-1/6 flex flex-col items-center`}>
          <div className="bg-primary-light w-12 h-12 rounded-full flex justify-center items-center font-medium">
            {sender?.senderName[0]}
          </div>
          <div>
            <small
              className={`text-bold capitalize ${
                read ? "text-dark" : "text-light"
              }`}
            >
              {sender?.senderName}
            </small>
          </div>
        </div>
        <div className={`body w-4/6 flex flex-col gap-`}>
          <div>
            <p className={`line-clamp-1 ${read ? "text-dark" : "text-light"}`}>
              {title}
            </p>
          </div>
          <div>
            <small
              className={`line-clamp-1 ${
                read ? "text-gray-dark" : "text-gray-light"
              }`}
            >
              {message}
            </small>
          </div>
          {timestamp && (
            <div
              className={`text-xs px-1 py-0.5 mt-2 w-max rounded-radius-main ${
                read ? "bg-primary-dark" : "bg-light"
              }`}
            >
              <span className={` ${read ? "text-light" : "text-primary-dark"}`}>
                <TimeAgo date={timestamp} />
              </span>
            </div>
          )}
        </div>
        <div className={`last w-1.6`}>
          {!read && (
            <div
              onClick={() => handleMarkAsRead(id)}
              className={`text-xs px-1 py-0.5 absolute bottom-1 right-1 w-max rounded-radius-main bg-reject cursor-pointer`}
            >
              <span className={`flex items-center gap-1 text-light`}>
                mark as read
                <MdDoneAll className="text-lg" />
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NotificationItem;
