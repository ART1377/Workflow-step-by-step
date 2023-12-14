import React from "react";
import {
  MdDoneAll,
  MdClose,
  MdCircle,
  MdCheck,
} from "react-icons/md";
import style from "./Workflow.module.css";
import { Step } from "../../../../next-type-d";

type Props = {
  step: Step;
};

const WorkflowItem = ({ step }: Props) => {
  return (
    <>
      <div
        key={step.step}
        id="step"
        className={`flex mt-6 gap-6 justify-center lg:flex-col ${
          step.state === "succeed"
            ? style.succeedItem
            : step.state === "rejected"
            ? style.rejectedItem
            : step.state === "uploaded"
            ? style.uploadedItem
            : style.defaultItem
        }`}
      >
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <div className={`${style.dimond}`}>
            <span className="uppercase text-xs font-bold">{step.step}</span>
            <div className={style.topLeft}></div>
            <div className={style.topRight}></div>
            <div className={style.bottomLeft}></div>
            <div className={style.bottomRight}></div>
          </div>
          {step.step !== 5 && (
            <div
              className={`w-1 h-20 bg-black lg:w-20 lg:h-1 ${style.line}`}
            ></div>
          )}
        </div>
        <div className="content w-[80px]">
          <p className="text-gray-900 uppercase">step {step.step}</p>
          <span
            className={`capitalize text-sm mt-1 font-bold flex items-center gap-1 ${style.status}`}
          >
            {step.state === "succeed" ? (
              <MdDoneAll />
            ) : step.state === "rejected" ? (
              <MdClose />
            ) : step.state === "uploaded" ? (
              <MdCheck />
            ) : (
              <MdCircle />
            )}
            {step.state}
          </span>
          <p className="text-gray-500 text-xs my-1">
            {step.person.personName}
          </p>
        </div>
      </div>
    </>
  );
};

export default WorkflowItem;
