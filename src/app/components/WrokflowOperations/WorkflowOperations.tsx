"use client";
import React, { useCallback } from "react";
import { Step } from "../../../../next-type-d";
import Button from "../Button/Button";
import { MdDoneAll, MdClose, MdCircle, MdCheck } from "react-icons/md";
import { useParams } from "next/navigation";
import { MdPerson } from "react-icons/md";
import { useAppDispatch } from "@/app/redux/hooks/hooks";
import { updateProduct } from "@/app/redux/slices/productSlice";

type Props = {
  step: Step;
};

const WorkflowOperations = ({ step }: Props) => {
  const { productId } = useParams();
  const id = productId.toString();

  console.log(productId);

  const dispatch = useAppDispatch();

  const rejectHandler = useCallback(() => {
    dispatch(
      updateProduct({
        productId: id,
        updatedStep: { ...step, state: "rejected" },
      })
    );
  }, []);

  const successHandler = useCallback(() => {
    dispatch(
      updateProduct({
        productId: id,
        updatedStep: { ...step, state: "succeed" },
      })
    );
  }, []);

  return (
    <>
      <div
        key={step.step}
        className={`w-full max-w-[600px] flex flex-col justify-between min-h-[120px] bg-white shadow rounded border-s-8 
                ${
                  step.state === "succeed"
                    ? "border-success shadow-success"
                    : step.state === "rejected"
                    ? "border-reject shadow-reject"
                    : step.state === "uploaded"
                    ? "border-upload shadow-upload"
                    : "border-main-gray shadow-main-gray"
                }`}
      >
        <div className="p-3">
          <h6 className="uppercase">step {step.step}</h6>
          {step.file && (
            <p className="capitalize mt-2 flex items-center">
              <MdPerson className="text-base" />
              name :
              <span className="font-bold ms-1">{step.person.personName}</span>
            </p>
          )}
        </div>
        <div className="flex justify-between items-center gap-3 bg-gray-50 px-3 py-2">
          <div className={`flex items-center`}>
            <span
              className={`ms-2 me-1 ${
                step.state === "succeed"
                  ? "text-success"
                  : step.state === "rejected"
                  ? "text-reject"
                  : step.state === "uploaded"
                  ? "text-upload"
                  : "text-main-gray"
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
            </span>
            <span
              className={`font-bold ${
                step.state === "succeed"
                  ? "text-success"
                  : step.state === "rejected"
                  ? "text-reject"
                  : step.state === "uploaded"
                  ? "text-upload"
                  : "text-main-gray"
              }`}
            >
              {step.state}
            </span>
          </div>

          <div className="flex gap-2">
            <Button variant="reject" onClick={rejectHandler}>
              Reject
            </Button>
            <Button variant="success" onClick={successHandler}>
              Success
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkflowOperations;
