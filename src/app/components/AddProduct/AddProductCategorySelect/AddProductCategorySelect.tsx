import React from "react";
import SelectOption from "../../Global/SelectOption/SelectOption";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

const AddProductCategorySelect = ({ value, onChange, options }: Props) => (
  <div className="w-full">
    <SelectOption
      label="Category"
      value={value}
      onChange={onChange}
      options={options}
      required={true}
    />
  </div>
);

export default AddProductCategorySelect;
