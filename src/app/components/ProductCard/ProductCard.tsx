import React from "react";
import Link from "next/link";
import { Product } from "../../../../next-type-d";

type Props = {
  productData: Product;
};

const ProductCard = ({
  productData: { productId, productName, productDescription, steps },
}: Props) => {
  return (
    <>
      <Link href={`products/${productId}`} className="w-full sm:w-[47%] lg:w-[30%] max-w-[600px]">
        <div className=" flex-grow bg-white rounded-lg shadow-xl overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-[2px] border-gray-200 border">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900">{productName}</h3>
            <p className="mt-1 text-sm text-gray-500">{productDescription}</p>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6">
            <div className="text-sm text-center">
              <span className="font-medium text-gray-900">100</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
