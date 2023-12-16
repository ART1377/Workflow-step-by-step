import React, { useState } from "react";
import { MdDoneAll, MdClose, MdCircle, MdCheck } from "react-icons/md";
import style from "./Workflow.module.css";
import { Step } from "../../../../next-type-d";
import { MdPerson, MdOutlineFileUpload, MdDeleteOutline } from "react-icons/md";
import { useAppDispatch } from "@/app/redux/hooks/hooks";
import { useParams } from "next/navigation";
import { updateProduct } from "@/app/redux/slices/productSlice";

type Props = {
  step: Step;
};

const WorkflowItem = ({ step }: Props) => {
  const params = useParams();
  const id = params.productId.toString();

  const [file, setFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files![0]);
    // if (!file) {
    //   return;
    // } else {
    //   dispatch(
    //     updateProduct({
    //       productId: id,
    //       updatedStep: { ...step, state: "uploaded" },
    //     })
    //   );
    // }
  };

  console.log(file);

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
          {step.file && (
            <p className="text-gray-500 text-xs my-1 font-bold flex items-center gap-px">
              <MdPerson className="text-sm" />
              {step.person.personName}
            </p>
          )}

          <div className="flex gap-1">
            <label className="inline-block mt-0.5">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="p-0.5 rounded cursor-pointer bg-upload">
                <MdOutlineFileUpload className="text-base text-white" />
              </div>
            </label>
            <div className="p-0.5 rounded cursor-pointer bg-reject">
              <MdDeleteOutline className="text-base text-white" />
            </div>
            <div className="p-0.5 rounded cursor-pointer bg-success">
              <MdCheck className="text-base text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkflowItem;

{
  //   const [file, setFile] = useState<File | null>(null);
  //   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setFile(event.target.files![0]);
  //   };
  /* <label className={` ${style.input}`}>
              <input type="file" onChange={handleFileChange} />
              Upload
            </label> */
}
