"use client";
import React, { useState } from "react";
import { Product, Step } from "../../../../next-type-d";
import { MdAdd } from "react-icons/md";
import style from "./ProductCard.module.css";
import ProductDetailPage from "../ProductDetailPage/ProductDetailPage";
import BaseModal from "../BaseModal/BaseModal";
import Workflow from "../Workflow/Workflow";
import WorkflowOperations from "../WrokflowOperations/WorkflowOperations";
import NotificationItem from "../NotificationItem/NotificationItem";

type Props = {
  productData: Product;
};

const ProductCard = ({
  productData: { id, productName, productDescription, steps },
}: Props) => {
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
          <div>
            <div className="flex justify-center mb-8 border-b-2 border-gray-light max-w-md mx-auto py-2">
              <button
                className={`mr-4 ${
                  activeTab === "workflow" ? "font-bold" : ""
                }`}
                onClick={() => switchTab("workflow")}
              >
                Workflow
              </button>
              <button
                className={activeTab === "operations" ? "font-bold" : ""}
                onClick={() => switchTab("operations")}
              >
                Operations
              </button>
            </div>
            {activeTab === "workflow" && (
              <>
                <section className="flex flex-col justify-center text-center">
                  <h4 className="text-dark">{productName}</h4>
                  <p className="text-gray-main">{productDescription}</p>
                  <ul className="mt-6 text-left mx-auto lg:flex lg:gap-5 lg:mt-8">
                    {steps?.map((step) => {
                      return (
                        <li
                          key={step.step}
                          className={`mb-1 ${
                            step.state === "succeed"
                              ? "text-success"
                              : step.state === "rejected"
                              ? "text-reject"
                              : step.state === "uploaded"
                              ? "text-upload"
                              : "text-gray-main"
                          }`}
                        >
                          Step {step.step} : {step.state}
                        </li>
                      );
                    })}
                  </ul>
                </section>

                {/* workflow and steps */}
                <section className="mt-8">
                  <Workflow steps={steps!} id={id} />
                </section>
              </>
            )}
            {activeTab === "operations" && (
              <div className="p-4 flex flex-col items-center gap-6">
                <section className="w-full">
                  <div>

                  </div>
                  {/* workflow operations */}
                  <div className="p-4 flex flex-col items-center gap-6">
                    {steps.map((step) => {
                      return (
                        <WorkflowOperations
                          key={step.step}
                          step={step}
                          id={id}
                        />
                      );
                    })}
                  </div>
                </section>
              </div>
            )}
          </div>
       
        </BaseModal>
      )}
    </>
  );
};

export default ProductCard;
