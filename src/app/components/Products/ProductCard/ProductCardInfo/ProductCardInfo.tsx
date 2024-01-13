import React from "react";
import { Step } from "../../../../../../next-type-d";
import StepIndicator from "../StepsIndicator/StepsIndicator";
import { MdAdd } from "react-icons/md";
import style from "./ProductCard.module.css";

type Props = {
  productName: string;
  productDescription: string;
  steps: Step[];
  openModal: () => void;
};

const ProductCardInfo = ({
  openModal,
  productDescription,
  productName,
  steps,
}: Props) => {
  return (
    <div className="flex-grow bg-white rounded-radius-main shadow-xl overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-[2px] border-primary-light border">
      <div className="p-4">
        <h3 className="text-lg font-medium text-dark">{productName}</h3>
        <p className="mt-1 text-sm text-gray-main">{productDescription}</p>
      </div>
      <div className="bg-light flex gap-2 relative min-h-10">
        <div className="max-w-[90%] flex gap-2 overflow-x-hidden px-3">

        {steps.map((step: Step, index: number) => (
          <StepIndicator
          key={step.step}
          index={index}
          step={step}
          length={steps.length}
          />
          ))}
          </div>
        <div
          onClick={openModal}
          className={`bg-primary-main absolute right-0 bottom-0 h-full w-10 flex justify-end items-end p-px shadow-md rounded-radius-small cursor-pointer transition-all duration-300 hover:bg-primary-dark ${style.plus}`}
        >
          <MdAdd strokeWidth="1" className="text-light text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardInfo;
