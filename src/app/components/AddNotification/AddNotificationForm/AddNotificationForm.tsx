"use client";
import React, { useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import { addNotification } from "../../../redux/slices/notificationSlice";
import { fetchProducts } from "../../../redux/slices/productSlice";
import Input from "../../Global/Input/Input";
import TextArea from "../../Global/TextArea/TextArea";
import SelectOption from "../../Global/SelectOption/SelectOption";
import Button from "../../Global/Button/Button";
import toast from "react-hot-toast";
import { AuthContext } from "@/app/context/AuthContext";

import { nanoid } from "nanoid";

const AddNotificationForm = () => {
  const authCtx = useContext(AuthContext);
  
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);
  
    // Fetch products on component mount
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const productOptions = products.map((product) => product.productName);
  const relatedProduct = products.find(
    (product) => product.productName === selectedProduct
  );
  const productId = relatedProduct?.id;

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      selectedProduct === ""
    ) {
      // Handle validation or show an error message
      toast.error("All fields must be filled !");
      return;
    }

    // Dispatch the addNotification action
    dispatch(
      addNotification({
        id: nanoid(),
        title,
        message: description,
        sender: {
          senderName: authCtx?.user?.username!,
          senderId: nanoid(),
        },
        timestamp: new Date().toString(),
        read: false,
        productId: productId!,
      })
    );

    toast.success("Notification Added Successfully");

    // reset the form fields after submission
    setTitle("");
    setDescription("");
    setSelectedProduct("");
  };

  return (
    <form
      onSubmit={submitFormHandler}
      className="p-4 flex flex-col gap-6 max-w-[1000px] mx-auto mt-8"
    >
      <div className="flex gap-4">
        <div className="w-1/2">
          <Input
            label="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-1/2">
          <SelectOption
            label="Related Product"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            options={["", ...productOptions]}
          />
        </div>
      </div>
      <TextArea
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeHolder={"Description"}
      />
      <Button type="submit" variant="primary-main" size="large">
        Add Notification
      </Button>
    </form>
  );
};

export default AddNotificationForm;
