"use client";
import React, { useEffect } from "react";
import type { Metadata } from "next";
// import { products } from "@/app/db/db";
import { Product } from "../../../../next-type-d";
import Workflow from "@/app/components/Workflow/Workflow";
import WorkflowOperations from "@/app/components/WrokflowOperations/WorkflowOperations";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import {
  fetchProductById,
  fetchProducts,
} from "@/app/redux/slices/productSlice";

type Props = {
  params: {
    productId: string;
  };
};

function generateMetadata({
  params: { productId },
}: Props): // Promise<Metadata>
Metadata {
  const products = useAppSelector((state) => state.product.products);
  const productData = products.find(
    (product: Product) => product.id === productId
  );

  return {
    title: productData?.productName,
    description: productData?.productDescription,
  };
}

const productDetailPage = ({ params: { productId } }: Props) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);
  const productData = products[0];

  // const productData = products.find(
  //   (product: Product) => product.id === productId
  // );

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch]);

  return (
    <>
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
        <section className="mt-10">
          <Workflow steps={productData?.steps!} />
        </section>

        <section className="my-10">
          <div className="p-4 flex flex-col items-center gap-6">
            {productData?.steps.map((step) => {
              return <WorkflowOperations key={step.step} step={step} />;
            })}
          </div>
          {/* <WorkflowOperations steps={productData?.steps!} /> */}
        </section>
      </div>
    </>
  );
};

export default productDetailPage;
