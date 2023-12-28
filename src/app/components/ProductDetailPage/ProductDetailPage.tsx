"use client";
import React, { useEffect, useState } from "react";
import Workflow from "@/app/components/Workflow/Workflow";
import WorkflowOperations from "@/app/components/WrokflowOperations/WorkflowOperations";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import { fetchProductById } from "@/app/redux/slices/productSlice";
import { notFound } from "next/navigation";

type Props = {
  productId: string;
};

const ProductDetailPage = ({ productId }: Props) => {
  const dispatch = useAppDispatch();
  const productData = useAppSelector((state) => state.product.products[0]);
  const productStatus = useAppSelector((state) => state.product.status);

  
  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch]);

  const [activeTab, setActiveTab] = useState("workflow");

  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };
  
  if (!productData && productStatus === "failed") {
    return notFound();
  }

  
  return (
    <>
    
      {productData && (
          <div>
            <div className="flex justify-center mb-4">
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
                  <h3 className="text-gray-900">{productData?.productName}</h3>
                  <p className="text-gray-500">
                    {productData?.productDescription}
                  </p>
                  <ul className="mt-4 text-left mx-auto lg:flex lg:gap-5 lg:mt-8">
                    {productData?.steps?.map((step) => {
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
                <section className="mt-10">
                  <Workflow steps={productData?.steps!} id={productId} />
                </section>
              </>
            )}
            {activeTab === "operations" && (
              <section className="my-10">
                {/* workflow operations */}
                <div className="p-4 flex flex-col items-center gap-6">
                  {productData?.steps.map((step) => {
                    return <WorkflowOperations key={step.step} step={step} id={productId} />;
                  })}
                </div>
              </section>
            )}
          </div>
      
      )}
    </>
  );
};

export default ProductDetailPage;
