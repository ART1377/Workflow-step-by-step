"use client";
import React, { useEffect } from "react";
import Workflow from "@/app/components/Workflow/Workflow";
import WorkflowOperations from "@/app/components/WrokflowOperations/WorkflowOperations";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import { fetchProductById } from "@/app/redux/slices/productSlice";
import { notFound, useParams } from "next/navigation";

type Props = {
  params: {
    productId: string;
  };
};

const productDetailPage = ({ params: { productId } }: Props) => {
  const dispatch = useAppDispatch();
  const productData = useAppSelector((state) => state.product.products[0]);
  const productStatus = useAppSelector((state) => state.product.status);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch]);

  if (!productData && productStatus === "failed") return notFound();

  return (
    <>
      {productData && (
        <div>
          <section className="flex flex-col justify-center text-center mt-10">
            <h3 className="text-gray-900">{productData?.productName}</h3>
            <p className="text-gray-500">{productData?.productDescription}</p>
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
                        : "text-main-gray"
                    }`}
                  >
                    step {step.step} : {step.state}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* workflow and steps */}

          <section className="mt-10">
            <Workflow steps={productData?.steps!} />
          </section>

          {/* workflow operations */}

          <section className="my-10">
            <div className="p-4 flex flex-col items-center gap-6">
              {productData?.steps.map((step) => {
                return <WorkflowOperations key={step.step} step={step} />;
              })}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default productDetailPage;


