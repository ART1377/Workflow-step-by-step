import React from "react";
import Input from "../../Global/Input/Input";
import CheckBox from "../../Global/CheckBox/CheckBox";

type Props = {
  number: string;
  check: boolean;
  onNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: () => void;
};

const AddProductNumberAndCheckbox = ({
  number,
  check,
  onNumberChange,
  onCheckboxChange,
}: Props) => (
  <div className="w-full flex gap-2">
    <div className="w-full">
      <Input
        label="Number"
        min={1}
        type="number"
        value={number}
        onChange={onNumberChange}
      />
    </div>
    <CheckBox
      label="Check"
      value={check}
      onChange={onCheckboxChange}
      required={false}
    />
  </div>
);

export default AddProductNumberAndCheckbox;
