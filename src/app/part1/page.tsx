"use client";
import React, { useEffect, useState } from "react";
import style from './Part1.module.css'
import { Product } from "../../../next-type-d";
import ProductCard from "../components/ProductCard/ProductCard";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { fetchProducts } from "../redux/slices/productSlice";
import Loading from "../loading";
import { useSearchParams } from "next/navigation";
import {
  MdOutlineHorizontalRule,
  MdHorizontalDistribute,
} from "react-icons/md";

export default function Home() {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);
  const productState = useAppSelector((state) => state.product.status);
  const [searchQuery, setSearchQuery] = useState("");
  const [columnsNumber, setColumnsNumber] = useState(2);

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


  return (
    <>
      <div className="px-2 480:px-4">
        <div className="border-b-2 mb-4 p-1 flex justify-between">
          <h5 className="font-medium">Product List</h5>
          <div className={`${style.icons} flex gap-2`}>
            <div onClick={()=>setColumnsNumber(1)} className="p-1 bg-light text-gray-dark text-2xl flex justify-center items-center rounded-radius-main hover:scale-105 transition-all duration-300 cursor-pointer">
              <MdOutlineHorizontalRule strokeWidth='2' />
            </div>
            <div onClick={()=>setColumnsNumber(2)} className="p-1 bg-light text-gray-dark text-2xl flex justify-center items-center rounded-radius-main hover:scale-105 transition-all duration-300 cursor-pointer">
              <MdHorizontalDistribute strokeWidth='2' />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {filteredProducts.length ? (
            filteredProducts.map((product: Product) => (
              <ProductCard key={product.id} productData={product} columns={columnsNumber} />
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
