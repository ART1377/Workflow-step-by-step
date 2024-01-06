import React from "react";

type Props = {
  label?: string;
  value: string;
  placeHolder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  bgColor?:string;
};

const TextArea = ({ label, value, onChange, placeHolder,bgColor='bg-light' }: Props) => {
  return (
    <div className={``}>
      {/* <label  className={`absolute text-primary-main bg-light bottom-[80%] left-3 px-1`}>
        {label}
      </label> */}
      <textarea
        placeholder={placeHolder ?? "placeholder ..."}
        value={value}
        onChange={onChange}
        className={`${bgColor} p-2 w-full h-full focus:shadow-none focus:outline-0 border-primary-main border-2 rounded-radius-large placeholder:text-primary-light min-h-[100px]`}
      />
    </div>
  );
};

export default TextArea;
