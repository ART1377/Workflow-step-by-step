"use client";
import React, { useState } from "react";
import { Product, Step } from "../../../../../next-type-d";
import { MdAdd } from "react-icons/md";
import style from "./ProductCard.module.css";
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal";
import StepIndicator from "./StepsIndicator/StepsIndicator";
import ProductCardInfo from "./ProductCardInfo/ProductCardInfo";

type Props = {
  productData: Product;
  columns: number;
};

const ProductCard = ({ productData, columns }: Props) => {
  const { id, productName, productDescription, steps } = productData;

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
      <div className={`m-auto ${columns === 1 ? "w-full" : "w-[46%]"}`}>
        <ProductCardInfo
          productName={productName}
          productDescription={productDescription}
          steps={steps}
          openModal={openModal}
        />
      </div>
      {isModalOpen && (
        <ProductDetailModal
          activeTab={activeTab}
          switchTab={switchTab}
          productData={productData}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ProductCard;
