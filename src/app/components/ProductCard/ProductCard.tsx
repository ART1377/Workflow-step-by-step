import React from "react";
import Link from "next/link";
import { Product, Step } from "../../../../next-type-d";
import { MdAdd } from "react-icons/md";
import style from './ProductCard.module.css'

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
            <h3 className="text-lg font-medium text-dark">{productName}</h3>
            <p className="mt-1 text-sm text-gray-main">{productDescription}</p>
          </div>
          <div className="bg-gray-50 p-3 flex gap-2 relative">
            {steps.map((step: Step) => {
              return (
                <div className="item flex items-center gap-1.5">
                  <div
                    className={`w-4 h-4 transform rotate-45 ${
                      step.state === "succeed"
                        ? "bg-success"
                        : step.state === "rejected"
                        ? "bg-reject"
                        : step.state === "uploaded"
                        ? "bg-upload"
                        : "bg-gray-main"
                    }`}
                  ></div>
                  {step.step != steps.length && (
                    <div
                      className={`w-4 h-1  ${
                        step.state === "succeed"
                          ? "bg-success"
                          : step.state === "rejected"
                          ? "bg-reject"
                          : step.state === "uploaded"
                          ? "bg-upload"
                          : "bg-gray-main"
                      }`}
                    ></div>
                  )}
                </div>
              );
            })}
            <div className={`bg-primary-main absolute right-0 bottom-0 h-full w-10 flex justify-end items-end p-px ${style.plus}`}>
              <MdAdd strokeWidth="1" className='text-light text-xl' size='24px' />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
