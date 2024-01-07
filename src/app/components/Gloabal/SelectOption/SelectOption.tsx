import React from "react";

type Props = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  bgColor?: string;
  required?: boolean;
};

const SelectOption = ({
  label,
  value,
  onChange,
  options,
  bgColor = "bg-light",
  required = true,
}: Props) => {
  return (
    <div className={`relative h-full`}>
      <label
        className={`${bgColor} absolute text-primary-main bottom-[80%] left-3 px-1`}
      >
        {label}
      </label>
      <select
        required={required}
        value={value}
        onChange={onChange}
        className={`${bgColor} text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0 border-primary-main border-2 rounded-radius-main h-full`}
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
