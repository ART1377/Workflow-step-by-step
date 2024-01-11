import React from "react";
import { Step } from "../../../../../../next-type-d";

type Props = {
  step: Step;
  index: number;
  length: number;
};

const StepIndicator = ({ step, index, length }:Props) => {

  const getStepIndicatorStyle = () => {
    let stateStyle = "";
    switch (step.state) {
      case "succeed":
        stateStyle = "bg-success";
        break;
      case "rejected":
        stateStyle = "bg-reject";
        break;
      case "uploaded":
        stateStyle = "bg-upload";
        break;
      default:
        stateStyle = "bg-gray-main";
        break;
    }

    return `${stateStyle}`;
  };

  return (
    <div key={step.step} className="item flex items-center gap-1.5">
      <div
        className={`w-4 h-4 transform rotate-45 ${getStepIndicatorStyle()}`}
      ></div>
      {index !== length - 1 && (
        <div className={`w-4 h-1 ${getStepIndicatorStyle()}`}></div>
      )}
    </div>
  );
};

export default StepIndicator;
