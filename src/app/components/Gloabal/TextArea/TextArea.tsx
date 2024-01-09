import React from "react";

type Props = {
  label?: string;
  value: string;
  placeHolder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  bgColor?: string;
  required?: boolean;
};

const TextArea = ({
  label,
  value,
  onChange,
  placeHolder,
  bgColor = "bg-light",
  required = true,
}: Props) => {
  return (
    <div className={``}>
      {/* <label  className={`absolute text-primary-main bg-light bottom-[83%] left-3 px-1`}>
        {label}
      </label> */}
      <textarea
        placeholder={placeHolder ?? "text ..."}
        value={value}
        onChange={onChange}
        required={required}
        className={`${bgColor} p-2 w-full h-full focus:shadow-none outline outline-primary-main outline-2 focus:outline-[3px] rounded-radius-main placeholder:text-primary-light min-h-[100px] text-primary-dark`}
      />
    </div>
  );
};

export default TextArea;
