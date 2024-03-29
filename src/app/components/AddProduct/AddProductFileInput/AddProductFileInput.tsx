import React from "react";
import Input from "../../Global/Input/Input";

type Props = {
  label: string;
  type: "image" | "pdf";
  value: File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AddProductFileInput = ({ label, type, value, onChange }: Props) => (
  <div className="w-full">
    <Input label={label} type={type} value={value} onChange={onChange} />
    {value?.name && (
      <small className="text-dark line-clamp-1 max-w-[90%]">
        {value?.name}
      </small>
    )}
  </div>
);

export default AddProductFileInput;
