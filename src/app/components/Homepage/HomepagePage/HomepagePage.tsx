"use client";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks/hooks";
import { fetchProducts } from "../../../redux/slices/productSlice";
import { Product } from "../../../../../next-type-d";
import ProductStatistics from "../ProductsStatistics/ProducsStatistics";

export default function HomepagePage() {
  const products = useAppSelector((state) => state.product.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const totalSteps = products.reduce((acc, product: Product) => {
    return acc + product.steps.length;
  }, 0);

  return (
    <>
      <div className="flex flex-col gap-5 max-w-[90%] m-8 ml-auto">
        <ProductStatistics
          label="Numbers of All Products"
          value={products.length}
          borderClass="border-dark"
        />
        <ProductStatistics
          label="Numbers of All Steps"
          value={totalSteps}
          borderClass="border-gray-mein"
        />
        <ProductStatistics
          label="Numbers of All Default Steps"
          value={countStepsByState(products, "default")}
          borderClass="border-gray-main"
        />
        <ProductStatistics
          label="Numbers of All Successfull Steps"
          value={countStepsByState(products, "succeed")}
          borderClass="border-success"
        />
        <ProductStatistics
          label="Numbers of All Rejected Steps"
          value={countStepsByState(products, "rejected")}
          borderClass="border-reject"
        />
      </div>
    </>
  );
}

// Helper function to count steps by state
const countStepsByState = (products: Product[], state: string): number => {
  return products.reduce((acc, product) => {
    return (
      acc +
      product.steps.reduce(
        (accSteps, step) => accSteps + (step.state === state ? 1 : 0),
        0
      )
    );
  }, 0);
};
