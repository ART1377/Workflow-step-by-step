import React from "react";
import type { Metadata } from "next";
import { products } from "@/app/db/db";
import { Product } from "../../../../next-type-d";

type Props = {
  params: {
    productId: string;
  };
};

export function generateMetadata({
  params: { productId },
}: Props): // Promise<Metadata>
Metadata {
  const id = productId;

  const productData = products.find(
    (product: Product) => product.productId === id
  );

  return {
    title: productData?.productName,
    description: productData?.productDescription,
  };
}

const productDetailPage = ({ params: { productId } }: Props) => {
  return (
    <>
      <h1>hi</h1>
      <div>{productId}</div>
    </>
  );
};

export default productDetailPage;
