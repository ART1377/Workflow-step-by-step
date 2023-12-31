import React from "react";
import Input from "../../../Gloabal/Input/Input";
import CheckBox from "../../../Gloabal/CheckBox/CheckBox";

type Props = {
  number: string;
  check: boolean;
  onNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: () => void;
};

const Part2NumberAndCheckbox = ({ number, check, onNumberChange, onCheckboxChange }:Props) => (
  <div className="w-1/2 flex gap-2">
    <div className="w-full">
      <Input bgColor="bg-white" label="Number" type="number" value={number} onChange={onNumberChange} />
    </div>
    <CheckBox label="Check" value={check} onChange={onCheckboxChange} required={false} />
  </div>
);

export default Part2NumberAndCheckbox;
