"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import Loading from "../../../loading";
import Part1ProductsListHeader from "./Part1ProductsListHeader/Part1ProductsListHeader";
import Part1ProductsList from "./Part1ProductsList/Part1ProductsList";
import { fetchProducts } from "../../../redux/slices/productSlice";

const Part1Page = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);
  // const productState = useAppSelector((state) => state.product.status);
  const [searchQuery, setSearchQuery] = useState("");
  const [columnsNumber, setColumnsNumber] = useState(1);

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

  // Makes redundent reload
  // if (productState === "loading" || productState === "idle") {
  //   return <Loading />;
  // }

  return (
    <>
      <div className="px-2 480:px-4">
        <Part1ProductsListHeader setColumnsNumber={setColumnsNumber} />
        <Part1ProductsList
          columnsNumber={columnsNumber}
          filteredProducts={filteredProducts}
        />
      </div>
    </>
  );
};

export default Part1Page;
