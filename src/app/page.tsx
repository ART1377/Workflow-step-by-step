"use client";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./redux/hooks/hooks";
import { fetchProducts } from "./redux/slices/productSlice";
import { Product } from "../../next-type-d";

export default function Home() {
  const products = useAppSelector((state) => state.product.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const totalSteps = products.reduce((acc, product: Product) => {
    const stepsCount = product.steps.length;
    return acc + stepsCount;
  }, 0);

  const totalDefaultSteps = products.reduce((acc, product) => {
    const defaultStepsCount = product.steps.reduce((accSteps, step) => {
      return accSteps + (step.state === "default" ? 1 : 0);
    }, 0);
    return acc + defaultStepsCount;
  }, 0);

  const totalRejectedSteps = products.reduce((acc, product) => {
    const rejectedStepsCount = product.steps.reduce((accSteps, step) => {
      return accSteps + (step.state === "rejected" ? 1 : 0);
    }, 0);
    return acc + rejectedStepsCount;
  }, 0);

  const totalSucceedSteps = products.reduce((acc, product) => {
    const succeedStepsCount = product.steps.reduce((accSteps, step) => {
      return accSteps + (step.state === "succeed" ? 1 : 0);
    }, 0);
    return acc + succeedStepsCount;
  }, 0);

  return (
    <>
      <div className="flex flex-col gap-5 max-w-[90%] m-8 ml-auto">
        <div className="bg-gray-white shadow-lg border flex items-center gap-3 min-h-[80px] ms-auto w-full py-3 pe-3 ps-4 rounded-radius-large border-s-8 border-dark">
          <p className="">Numbers of All Products : </p>
          <p>{products.length}</p>
        </div>
        <div className="bg-gray-white shadow-lg border flex items-center gap-3 min-h-[80px] ms-auto w-full py-3 pe-3 ps-4 rounded-radius-large border-s-8 border-gray-mein">
          <p className="">Numbers of All Steps : </p>
          <p>{totalSteps}</p>
        </div>
        <div className="bg-gray-white shadow-lg border flex items-center gap-3 min-h-[80px] ms-auto w-full py-3 pe-3 ps-4 rounded-radius-large border-s-8 border-gray-main">
          <p className="">Numbers of All Default Steps : </p>
          <p>{totalDefaultSteps}</p>
        </div>
        <div className="bg-gray-white shadow-lg border flex items-center gap-3 min-h-[80px] ms-auto w-full py-3 pe-3 ps-4 rounded-radius-large border-s-8 border-success">
          <p className="">Numbers of All Successfull Steps : </p>
          <p>{totalSucceedSteps}</p>
        </div>
        <div className="bg-gray-white shadow-lg border flex items-center gap-3 min-h-[80px] ms-auto w-full py-3 pe-3 ps-4 rounded-radius-large border-s-8 border-reject">
          <p className="">Numbers of All Rejected Steps : </p>
          <p>{totalRejectedSteps}</p>
        </div>
      </div>
    </>
  );
}
