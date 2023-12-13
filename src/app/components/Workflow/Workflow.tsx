"use client";
import React, { useState } from "react";
import { Step } from "../../../../next-type-d";
import style from "./Workflow.module.css";
import {
  MdDoneAll,
  MdClose,
  MdCircle,
  MdCheck,
  MdPlayArrow,
} from "react-icons/md";

type Props = {
  steps: Step[];
};

const Workflow = ({ steps }: Props) => {
  //   const [file, setFile] = useState<File | null>(null);

  //   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setFile(event.target.files![0]);
  //   };

  return (
    <>
      <div className="p-8 flex flex-col lg:!flex-row lg:justify-center lg:gap-5">
        {/* Start Step ********* */}

        <div
          id="step"
          className={`flex mt-6 gap-6 justify-center lg:flex-col ${style.succeedItem}`}
        >
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <div className={`${style.dimond}`}>
              <span className="uppercase text-xs font-bold">start</span>
              <div className={style.topLeft}></div>
              <div className={style.topRight}></div>
              <div className={style.bottomLeft}></div>
              <div className={style.bottomRight}></div>
            </div>
            <div
              className={`w-1 h-20 bg-black lg:w-20 lg:h-1 ${style.line}`}
            ></div>
          </div>
          <div className="content">
            <p className="text-gray-900 uppercase">start</p>
            <p className="text-gray-500 text-xs my-1">Lorem ipsum dolor.</p>
            <span
              className={`capitalize text-sm mt-1 font-bold flex items-center gap-1 ${style.status}`}
            >
              <MdPlayArrow />
              start
            </span>
          </div>
        </div>

        {/* All Steps Except Start Step ********* */}

        {steps.map((step: Step) => {
          return (
            <div
              key={step.step}
              id="step"
              className={`flex mt-6 gap-6 justify-center lg:flex-col ${
                step.state == "succeed"
                  ? style.succeedItem
                  : step.state == "rejected"
                  ? style.rejectedItem
                  : step.state == "uploaded"
                  ? style.uploadedItem
                  : style.defaultItem
              }`}
            >
              <div className="flex flex-col items-center gap-4 lg:flex-row">
                <div className={`${style.dimond}`}>
                  <span className="uppercase text-xs font-bold">
                    {step.step}
                  </span>
                  <div className={style.topLeft}></div>
                  <div className={style.topRight}></div>
                  <div className={style.bottomLeft}></div>
                  <div className={style.bottomRight}></div>
                </div>
                {step.step != 5 && (
                  <div
                    className={`w-1 h-20 bg-black lg:w-20 lg:h-1 ${style.line}`}
                  ></div>
                )}
              </div>
              <div className="content">
                <p className="text-gray-900 uppercase">step {step.step}</p>
                <p className="text-gray-500 text-xs my-1">Lorem ipsum dolor.</p>
                <span
                  className={`capitalize text-sm mt-1 font-bold flex items-center gap-1 ${style.status}`}
                >
                  {step.state == "succeed" ? (
                    <MdDoneAll />
                  ) : step.state == "rejected" ? (
                    <MdClose />
                  ) : step.state == "uploaded" ? (
                    <MdCheck />
                  ) : (
                    <MdCircle />
                  )}
                  {step.state}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Workflow;

{
  /* <label className={` ${style.input}`}>
              <input type="file" onChange={handleFileChange} />
              Upload
            </label> */
}
