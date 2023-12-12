import React from "react";
import type { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

const productDetailPage = ({ params: { productId } }: Props) => {
  return <div>{productId}</div>;
};

export default productDetailPage;
