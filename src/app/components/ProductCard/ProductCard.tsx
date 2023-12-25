import React from "react";
import Link from "next/link";
import { Product } from "../../../../next-type-d";

type Props = {
  productData: Product;
};

const ProductCard = ({
  productData: { id, productName, productDescription, steps },
}: Props) => {
  return (
    <>
      <Link href={`products/${id}`} className="w-full lg:w-[47%] max-w-[800px]">
        <div className="flex-grow bg-white rounded-radius-main shadow-xl overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-[2px] border-gray-light border">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900">{productName}</h3>
            <p className="mt-1 text-sm text-gray-main">{productDescription}</p>
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
