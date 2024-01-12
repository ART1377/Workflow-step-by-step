"use client";
import React, { useState } from "react";
import { Notification } from "../../../../../next-type-d";
import { MdMoreVert, MdDoneAll } from "react-icons/md";
import { markAsRead } from "../../../redux/slices/notificationSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import TimeAgoComponent from "../../Gloabal/TimeAgoComponent/TimeAgoComponent";
import ProductDetailModal from "../../Products/ProductDetailModal/ProductDetailModal";

type Props = {
  notification: Notification;
  last: boolean;
};
const NotificationItem = ({
  notification: { id, message, read, sender, timestamp, title, productId },
  last,
}: Props) => {
  const dispatch = useAppDispatch();
  const productData = useAppSelector((state) =>
    state.product.products.find((item) => item.id === productId)
  );

  const handleMarkAsRead = (notificationId: string) => {
    dispatch(markAsRead(notificationId));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("workflow");

  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`flex relative mb-3 ${
          !last && "border-b"
        } px-1 py-3 gap-2 w-[320px]  ${
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
              className={`text-xs px-1 py-0.5 mt-2 w-max rounded-radius-main bg-primary-light`}
            >
              <span className={`text-light`}>
                <TimeAgoComponent timestamp={timestamp} />
              </span>
            </div>
          )}
        </div>
        <div className={`absolute top-1 right-1 flex flex-col gap-2`}>
          {!read && (
            <div
              onClick={() => handleMarkAsRead(id)}
              className={`bg-light p-1 rounded-radius-main cursor-pointer`}
            >
              <span className={`flex items-center gap-1 text-primary-dark`}>
                <MdDoneAll className="text-lg" />
              </span>
            </div>
          )}
          <div
            onClick={openModal}
            className={`${
              read ? "bg-primary-dark" : "bg-light"
            } p-1 rounded-radius-main cursor-pointer`}
          >
            <span
              className={`flex items-center gap-1 ${
                !read ? "text-primary-dark" : "text-light"
              }`}
            >
              <MdMoreVert className="text-lg" />
            </span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProductDetailModal
          activeTab={activeTab}
          switchTab={switchTab}
          productData={productData!}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default NotificationItem;
