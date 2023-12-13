"use client";
import React, { useState } from "react";
import { Step } from "../../../../next-type-d";
import style from "./Workflow.module.css";

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
      <div className="p-8">
        <div className={`flex gap-6 justify-center md:flex-col ${style.succeedItem}`}>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className={`${style.dimond}`}>
              <span className="uppercase text-xs font-bold">start</span>
              <div className={style.topLeft}></div>
              <div className={style.topRight}></div>
              <div className={style.bottomLeft}></div>
              <div className={style.bottomRight}></div>
 
            </div>
            <div className={`w-1 h-20 bg-black md:w-20 md:h-1 ${style.line}`}></div>
          </div>
          <div className="content">
            <p className="text-gray-900 uppercase">start</p>
            <p className="text-gray-500 text-xs my-1">Lorem ipsum dolor.</p>
            <span className={`capitalize block text-sm mt-1 font-bold ${style.status}`}>succeed</span>
          </div>
        </div>
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
