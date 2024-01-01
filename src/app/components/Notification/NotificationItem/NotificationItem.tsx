import React from "react";
import { Notification } from "../../../../../next-type-d";
import TimeAgo from "../../TimeAgo/TimeAgo";

type Props = {
  notification: Notification;
  last:boolean;
};
const NotificationItem = ({
  notification: { id, message, read, sender, timestamp, title },
}: Props) => {

  
  return (
    <>
      <div className={`flex relative mb-3 border-b p-1 gap-2 w-[320px] h-[90px] ${read?'bg-light border-gray-dark':'bg-primary-dark border-gray-light'}`}>
        <div className={`sender w-1/6 flex flex-col items-center`}>
          <div className="bg-primary-light w-12 h-12 rounded-full flex justify-center items-center font-medium">
            {sender.senderName[0]}
          </div>
          <div>
            <small className={`text-bold capitalize ${read?'text-dark':'text-light'}`}>{sender.senderName}</small>
          </div>
        </div>
        <div className={`body w-4/6 flex flex-col gap-1.5`}>
          <div>
            <p className={`line-clamp-1 ${read?'text-dark':'text-light'}`}>{title}</p>
          </div>
          <div>
            <small className={`line-clamp-1 ${read?'text-gray-dark':'text-gray-light'}`}>{message}</small>
          </div>
        </div>
        <div className={`last w-1.6`}>
          <div className={`text-xs px-1 py-0.5 absolute bottom-1 right-1 w-max rounded-radius-main ${read?'bg-primary-dark':'bg-light'}`}>
            <span className={` ${read?'text-light':'text-primary-dark'}`}>

            <TimeAgo timestamp={timestamp} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationItem;
