// Part2CategorySelect.tsx
import React from "react";
import SelectOption from "../../../Gloabal/SelectOption/SelectOption";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

const Part2CategorySelect = ({ value, onChange, options }:Props) => (
  <div className="w-1/2">
    <SelectOption bgColor="bg-white" label="Category" value={value} onChange={onChange} options={options} required={true} />
  </div>
);

export default Part2CategorySelect;
