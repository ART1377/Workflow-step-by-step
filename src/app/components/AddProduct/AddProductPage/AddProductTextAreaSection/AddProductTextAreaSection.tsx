import React from "react";
import TextArea from "../../../Gloabal/TextArea/TextArea";

type Props = {
  check: boolean;
  textAreaValues: string[];
  onTextAreaChange: (index: number, value: string) => void;
};

const AddProductTextAreaSection= ({ check, textAreaValues, onTextAreaChange }:Props) => (
  <div className="flex flex-col gap-4">
    {check
      ? textAreaValues.map((value, index) => (
          <TextArea
            key={index}
            bgColor="bg-white"
            label={`Textarea ${index + 1}`}
            placeHolder="product code"
            value={value}
            onChange={(e) => onTextAreaChange(index, e.target.value)}
          />
        ))
      : (
        <TextArea
          bgColor="bg-white"
          label="text"
          placeHolder="product code"
          value={textAreaValues[0]}
          onChange={(e) => onTextAreaChange(0, e.target.value)}
        />
      )}
  </div>
);

export default AddProductTextAreaSection;
