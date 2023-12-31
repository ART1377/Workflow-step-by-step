"use client";
import { Step } from "../../../../../../../next-type-d";
import style from "./WorkflowItems.module.css";
import { MdPlayArrow } from "react-icons/md";
import WorkflowItem from "./WorkflowItem/WorkflowItem";

type Props = {
  steps: Step[];
  id: string;
};

const WorkflowItems = ({ steps, id }: Props) => {
  return (
    <>
      <div className="p-8 flex flex-wrap flex-col 850:!flex-row 850:justify-center 850:items-baseline 850:gap-5">
        {/* Start Step ********* */}

        <div
          id="step"
          className={`flex mt-6 gap-6 justify-center 850:flex-col ${style.succeedItem}`}
        >
          <div className="flex flex-col items-center gap-4 850:flex-row">
            <div className={`${style.dimond}`}>
              <span className="uppercase text-xs font-bold">start</span>
              <div className={style.topLeft}></div>
              <div className={style.topRight}></div>
              <div className={style.bottomLeft}></div>
              <div className={style.bottomRight}></div>
            </div>
            <div className={`w-1 h-20 850:w-20 850:h-1 ${style.line}`}></div>
          </div>
          <div className="content w-[80px]">
            <p className="text-dark uppercase">start</p>
            <span
              className={`capitalize text-sm mt-1 font-bold flex items-center gap-1 ${style.status}`}
            >
              <MdPlayArrow />
              start
            </span>
            <p className="text-gray-main text-xs my-1">Lorem ipsum dolor.</p>
          </div>
        </div>

        {/* All Steps Except Start Step ********* */}

        {/* All Steps Except Start Step ***** */}
        {steps?.map((step: Step, index: number) => (
          <WorkflowItem
            key={step.step}
            step={step}
            id={id}
            length={steps.length}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default WorkflowItems;
