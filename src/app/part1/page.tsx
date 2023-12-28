"use client";
import React, { useEffect } from "react";
import { Product } from "../../../next-type-d";
import ProductCard from "../components/ProductCard/ProductCard";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { fetchProducts } from "../redux/slices/productSlice";
import Loading from "../loading";

export default function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);
  const productState = useAppSelector((state) => state.product.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (productState === "loading" || productState === "idle") {
    return <Loading />;
  }

  return (
    <>
      <div className="px-2 480:px-4">
        <div className="border-b-2 mb-4">
          <h5>Product List</h5>
        </div>
        <div className="flex flex-wrap gap-3">
          {products &&
            products?.map((product: Product) => {
              return <ProductCard key={product.id} productData={product} />;
            })}
        </div>
      </div>
    </>
  );
}
