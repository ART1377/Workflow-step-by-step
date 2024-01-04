"use client";
import React, { useState } from "react";
import { Product, Step } from "../../../../../next-type-d";
import { MdAdd } from "react-icons/md";
import style from "./ProductCard.module.css";
import ProductDetailPage from "../ProductDetailPage/ProductDetailPage";
import StepIndicator from "./StepsIndicator/StepsIndicator";

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

  const columnsNumber = () => {
    switch (columns) {
      case 1:
        return "w-full";
      case 2:
        return "w-[46%]";
    }
  };

  return (
    <>
      <div className={`m-auto ${columnsNumber()}`}>
        <div className="flex-grow bg-white rounded-radius-main shadow-xl overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-[2px] border-primary-light border">
          <div className="p-4">
            <h3 className="text-lg font-medium text-dark">{productName}</h3>
            <p className="mt-1 text-sm text-gray-main">{productDescription}</p>
          </div>
          <div className="bg-light p-3 flex gap-2 relative">
            {steps.map((step: Step, index: number) => {
              return (
                <StepIndicator
                  key={step.step}
                  index={index}
                  step={step}
                  length={steps.length}
                />
              );
            })}
            <div
              onClick={openModal}
              className={`bg-primary-main absolute right-0 bottom-0 h-full w-10 flex justify-end items-end p-px shadow-md rounded-radius-small cursor-pointer transition-all duration-300 hover:bg-primary-dark ${style.plus}`}
            >
              <MdAdd strokeWidth="1" className="text-light text-2xl" />
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ProductDetailPage
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
