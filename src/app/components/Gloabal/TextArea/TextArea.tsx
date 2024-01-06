import React from "react";

type Props = {
  label?: string;
  value: string;
  placeHolder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({ label, value, onChange, placeHolder }: Props) => {
  return (
    <div className={`border-primary-main border-2 rounded-radius-large p-1`}>
      {/* <label  className={`absolute text-primary-main bg-light bottom-[85%] left-3 px-1`}>
        {label}
      </label> */}
      <textarea
        placeholder={placeHolder ?? "placeholder ..."}
        value={value}
        onChange={onChange}
        className={`p-1 w-full h-full focus:shadow-none bg-light focus:outline-0 placeholder:text-primary-light`}
      />
    </div>
  );
};

export default TextArea;
