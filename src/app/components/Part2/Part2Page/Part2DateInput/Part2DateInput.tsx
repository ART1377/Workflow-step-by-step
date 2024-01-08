import React from "react";
import Input from "../../../Gloabal/Input/Input";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Part2DateInput = ({ value, onChange }:Props) => (
  <div className="w-1/2">
    <Input bgColor="bg-white" label="Date" type="date" value={value} onChange={onChange} />
  </div>
);

export default Part2DateInput;
