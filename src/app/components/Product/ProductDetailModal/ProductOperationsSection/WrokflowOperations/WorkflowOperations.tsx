"use client";
import React, { useCallback } from "react";
import { Step } from "../../../../../../../next-type-d";
import Button from "../../../../Gloabal/Button/Button";
import { MdDoneAll, MdClose, MdCircle, MdCheck } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { useAppDispatch } from "@/app/redux/hooks/hooks";
import { updateProduct } from "@/app/redux/slices/productSlice";

type Props = {
  step: Step;
  id: string;
};

const WorkflowOperations = ({ step, id }: Props) => {
  // const { productId } = useParams();
  // const id = productId.toString();

  const dispatch = useAppDispatch();

  const rejectHandler = useCallback(() => {
    dispatch(
      updateProduct({
        productId: id,
        updatedStep: { ...step, state: "rejected" },
      })
    );
  }, [dispatch, id, step]);

  const successHandler = useCallback(() => {
    dispatch(
      updateProduct({
        productId: id,
        updatedStep: { ...step, state: "succeed" },
      })
    );
  }, [dispatch, id, step]);

  const defaultHandler = useCallback(() => {
    dispatch(
      updateProduct({
        productId: id,
        updatedStep: { ...step, state: "dafault", file: null },
      })
    );
  }, [dispatch, id, step]);

  return (
    <>
      <div
        key={step.step}
        className={`w-full max-w-[850px] flex flex-col justify-between min-h-[130px] bg-white shadow rounded border-s-8 
                ${
                  step.state === "succeed"
                    ? "border-success shadow-success"
                    : step.state === "rejected"
                    ? "border-reject shadow-reject"
                    : step.state === "uploaded"
                    ? "border-upload shadow-upload"
                    : "border-gray-main shadow-gray-main"
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
            </span>
            <span
              className={`font-bold ${
                step.state === "succeed"
                  ? "text-success"
                  : step.state === "rejected"
                  ? "text-reject"
                  : step.state === "uploaded"
                  ? "text-upload"
                  : "text-gray-main"
              }`}
            >
              {step.state}
            </span>
          </div>

          <div className="flex gap-2">
            <Button variant="gray" size="medium" onClick={defaultHandler}>
              Default
            </Button>
            <Button variant="reject" size="medium" onClick={rejectHandler}>
              Reject
            </Button>
            <Button variant="success" size="medium" onClick={successHandler}>
              Success
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkflowOperations;
