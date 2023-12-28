import React, { useState } from "react";
import { Product, Step } from "../../../../next-type-d";
import { MdAdd } from "react-icons/md";
import style from "./ProductCard.module.css";
import BaseModal from "../BaseModal/BaseModal";
import ProductDetailPage from "../ProductDetailPage/ProductDetailPage";

type Props = {
  productData: Product;
};

const ProductCard = ({
  productData: { id, productName, productDescription, steps },
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full lg:w-[47%] max-w-[800px]">
        <div className="flex-grow bg-white rounded-radius-main shadow-xl overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-[2px] border-primary-light border">
          <div className="p-4">
            <h3 className="text-lg font-medium text-dark">{productName}</h3>
            <p className="mt-1 text-sm text-gray-main">{productDescription}</p>
          </div>
          <div className="bg-light p-3 flex gap-2 relative">
            {steps.map((step: Step) => {
              return (
                <div key={step.step} className="item flex items-center gap-1.5">
                  <div
                    className={`w-4 h-4 transform rotate-45 ${
                      step.state === "succeed"
                        ? "bg-success"
                        : step.state === "rejected"
                        ? "bg-reject"
                        : step.state === "uploaded"
                        ? "bg-upload"
                        : "bg-gray-main"
                    }`}
                  ></div>
                  {step.step != steps.length && (
                    <div
                      className={`w-4 h-1  ${
                        step.state === "succeed"
                          ? "bg-success"
                          : step.state === "rejected"
                          ? "bg-reject"
                          : step.state === "uploaded"
                          ? "bg-upload"
                          : "bg-gray-main"
                      }`}
                    ></div>
                  )}
                </div>
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
              <BaseModal isOpen={isModalOpen} onClose={closeModal}>
              <ProductDetailPage productId={id} />
              </BaseModal>
              // <BaseModal isOpen={isModalOpen} onClose={closeModal}>
              //   <ProductDetailPage productId={id} />
              // </BaseModal>
            )}
    </>
  );
};

export default ProductCard;
