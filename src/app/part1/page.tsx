"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../next-type-d";
import ProductCard from "../components/ProductCard/ProductCard";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { fetchProducts } from "../redux/slices/productSlice";
import Loading from "../loading";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);
  const productState = useAppSelector((state) => state.product.status);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const search = searchParams.get("search");

    setSearchQuery(search?.toString() || "");
  }, [searchParams]);

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (productState === "loading" || productState === "idle") {
    return <Loading />;
  }
console.log(filteredProducts)
  return (
    <>
      <div className="px-2 480:px-4">
        <div className="border-b-2 mb-4">
          <h5>Product List</h5>
        </div>
        <div className="flex flex-wrap gap-3">
          {filteredProducts.length ? (
            filteredProducts.map((product: Product) => (
              <ProductCard key={product.id} productData={product} />
            ))
          ) : (
            <div>
              <p>There is no product with this information.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
