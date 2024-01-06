import React from "react";

type Props = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

const SelectOption = ({ label, value, onChange, options }: Props) => {
  return (
    <div
      className={`border-primary-main border-2 rounded-radius-large relative`}
    >
      <label
        className={`absolute text-primary-main bg-light bottom-[85%] left-[3%] px-1`}
      >
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className={`bg-light text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0`}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
