import React from "react";

type Props = {
  label?: string;
  value: boolean;
  onChange: () => void;
  required?: boolean;
};

const CheckBox = ({ label, value, onChange, required = true }: Props) => {
  return (
    <div
      className={`border-primary-main border-2 rounded-radius-main flex items-center gap-2 max-w-max px-2 py-1`}
    >
      <input
        type="checkbox"
        required={required}
        checked={value}
        onChange={onChange}
        className={`bg-light`}
      />
      <label className={`text-primary-dark`}>{label}</label>
    </div>
  );
};

export default CheckBox;
