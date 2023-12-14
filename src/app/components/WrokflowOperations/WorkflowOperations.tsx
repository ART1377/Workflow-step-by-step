import React from "react";
import { Step } from "../../../../next-type-d";

type Props = {
  steps: Step[];
};

const WorkflowOperations = ({ steps }: Props) => {
  return (
    <>
      <div>
        {steps.map((step: Step) => {
          return (
            <div key={step.step}>
              <div>
                <h6 className="uppercase">step {step.step}</h6>
                <p className="capitalize">
                    person name : {step.person.personName}
                </p>
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WorkflowOperations;
