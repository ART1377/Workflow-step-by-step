import React from "react";
import type { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

const productDetailPage = ({ params: { productId } }: Props) => {
  return (
    <>
      <h1>hi</h1>
      <div>{productId}</div>
    </>
  );
};

export default productDetailPage;
