import React from "react";

type Props = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  bgColor?: string;
};

const SelectOption = ({
  label,
  value,
  onChange,
  options,
  bgColor = "bg-light",
}: Props) => {
  return (
    <div className={`relative`}>
      <label
        className={`${bgColor} absolute text-primary-main bottom-[80%] left-3 px-1`}
      >
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className={`${bgColor} text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0 border-primary-main border-2 rounded-radius-large`}
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
