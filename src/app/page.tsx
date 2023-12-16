"use client";
import React, { useEffect } from "react";
import { Product } from "../../next-type-d";
import ProductCard from "./components/ProductCard/ProductCard";
// import { products } from "./db/db";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { fetchProducts } from "./redux/slices/productSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // npx json-server -w db.json -p 3500 -H 127.0.0.1

  return (
    <>
      <div className="p-2 xs:p-4 md:p-8">
        <div className="border-b-2 mb-4">
          <h5>Product List</h5>
        </div>
        <div className="flex flex-wrap gap-3">
          {products?.map((product: Product) => {
            return (
              <ProductCard key={product.id} productData={product} />
            );
          })}
        </div>
      </div>
    </>
  );
}
