"use client";
import React from "react";
import { Step } from "../../../../next-type-d";
import Button from "../Button/Button";
import { MdDoneAll, MdClose, MdCircle, MdCheck } from "react-icons/md";
import { useParams } from "next/navigation";
import { MdPerson } from "react-icons/md";

type Props = {
  steps: Step[];
};

const WorkflowOperations = ({ steps }: Props) => {
  const { productId } = useParams();

  return (
    <>
      <div className="p-4 flex flex-col items-center gap-6">
        {steps.map((step: Step) => {
          return (
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
                    <span className="font-bold ms-1">
                      {step.person.personName}
                    </span>
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
                  <Button
                    variant="reject"
                    onClick={() => console.log("Rejected")}
                  >
                    Reject
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => console.log("Success")}
                  >
                    Success
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WorkflowOperations;
