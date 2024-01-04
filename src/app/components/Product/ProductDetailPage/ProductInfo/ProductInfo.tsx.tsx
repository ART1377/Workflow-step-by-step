import React from "react";
import { Product } from "../../../../../../next-type-d";

type ProductInfoProps = {
  productData: Product;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ productData }) => (
  <section className="flex flex-col justify-center text-center">
    <h3 className="text-dark">{productData?.productName}</h3>
    <p className="text-gray-main">{productData?.productDescription}</p>
    <ul className="mt-4 text-left mx-auto lg:flex lg:gap-5 lg:mt-8">
      {productData?.steps?.map((step) => (
        <li
          key={step.step}
          className={`mb-1 ${
            step.state === "succeed"
              ? "text-success"
              : step.state === "rejected"
              ? "text-reject"
              : step.state === "uploaded"
              ? "text-upload"
              : "text-gray-main"
          }`}
        >
          Step {step.step} : {step.state}
        </li>
      ))}
    </ul>
  </section>
);

export default ProductInfo;
