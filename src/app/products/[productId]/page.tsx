import React from "react";
import type { Metadata } from "next";
import { products } from "@/app/db/db";
import { Product } from "../../../../next-type-d";
import Workflow from "@/app/components/Workflow/Workflow";

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
  const productData = products.find(
    (product: Product) => product.productId === productId
  );

  return (
    <>
      <div>
        <section className="flex flex-col justify-center text-center mt-10">
          <h3 className="text-gray-900">{productData?.productName}</h3>
          <p className="text-gray-500">{productData?.productDescription}</p>
          <ul className="mt-4 text-left mx-auto">
            {productData?.steps.map((item) => {
              return (
                <li key={item.step} className="mb-1">
                  step {item.step} : {item.state}
                </li>
              );
            })}
          </ul>
        </section>
        <section className="mt-10">
          <Workflow steps={productData?.steps!} />
        </section>
      </div>
    </>
  );
};

export default productDetailPage;
