"use client";
import React, { useState } from "react";
import { MdDoneAll, MdClose, MdCircle, MdCheck } from "react-icons/md";
import style from "./Workflow.module.css";
import { Step } from "../../../../next-type-d";
import { MdPerson, MdOutlineFileUpload, MdDeleteOutline } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import { useParams } from "next/navigation";
import { updateProduct } from "@/app/redux/slices/productSlice";
import toast from "react-hot-toast";

type Props = {
  step: Step;
};

const WorkflowItem = ({ step }: Props) => {
  const params = useParams();
  const id = params.productId.toString();

  const [file, setFile] = useState<File | null>();
  const dispatch = useAppDispatch();
  const productState = useAppSelector((state) => state.product);

  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files![0]);
  };

  const deleteHandler = () => {
    if (!file) {
      return;
    } else {
      setFile(null);
    }
  };

  const submitHandler = () => {
    if (!file) {
      return;
    } else {
      const test = dispatch(
        updateProduct({
          productId: id,
          updatedStep: {
            ...step,
            state: "uploaded",
            file: {
              ...file,
              name: file.name,
              type: file.type,
              size: file.size,
            },
          },
        })
      );
      if (productState.status === "succeeded") {
        return toast.success("Successfully Submited!");
      }
      if (productState.status === "failed") {
        return toast.error("Failed to Submit!");
      }
      setFile(null);
    }
  };

  return (
    <>
      <div
        key={step.step}
        id="step"
        className={`flex mt-6 gap-6 justify-center 850:flex-col ${
          step.state === "succeed"
            ? style.succeedItem
            : step.state === "rejected"
            ? style.rejectedItem
            : step.state === "uploaded"
            ? style.uploadedItem
            : style.defaultItem
        }`}
      >
        <div className="flex flex-col items-center gap-4 850:flex-row">
          <div className={`${style.dimond}`}>
            <span className="uppercase text-xs font-bold">{step.step}</span>
            <div className={style.topLeft}></div>
            <div className={style.topRight}></div>
            <div className={style.bottomLeft}></div>
            <div className={style.bottomRight}></div>
          </div>
          {step.step !== 5 && (
            <div className={`w-1 h-20 850:w-20 850:h-1 ${style.line}`}></div>
          )}
        </div>
        <div className="content w-[80px]">
          <p className="text-gray-900 uppercase">step {step.step}</p>
          <span
            className={`capitalize text-sm mt-1 font-bold flex items-center gap-0.5 ${
              style.status
            } ${
              step.state === "succeed"
                ? "text-success"
                : step.state === "rejected"
                ? "text-reject"
                : step.state === "uploaded"
                ? "text-upload"
                : "text-gray-main"
            }`}
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

          <div className="flex gap-1.5 mt-1">
            <label className="inline-block">
              <input
                type="file"
                onChange={fileChangeHandler}
                className="hidden"
              />
              <div className="p-0.5 rounded cursor-pointer shadow-lg bg-upload">
                <MdOutlineFileUpload className="text-base text-light" />
              </div>
            </label>
            <div
              onClick={deleteHandler}
              className={`p-0.5 rounded shadow-lg bg-reject ${
                file ? "!cursor-pointer" : "!cursor-not-allowed !opacity-40"
              }`}
            >
              <MdDeleteOutline className="text-base text-light" />
            </div>
            <div
              onClick={submitHandler}
              className={`p-0.5 rounded shadow-lg bg-success ${
                file ? "!cursor-pointer" : "!cursor-not-allowed !opacity-40"
              }`}
            >
              <MdCheck className="text-base text-light" />
            </div>
          </div>
          {step.file && (
            <small className="line-clamp-1 text-gray-main mt-0.5">
              {file?.name}
            </small>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkflowItem;
