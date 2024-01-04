import React from "react";
import style from "./Input.module.css";

type Props = {
  label?: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSearchBar?: boolean;
};

const Input = ({ label, type, value, onChange, isSearchBar }: Props) => {
  return (
    <>
      {!isSearchBar ? (
        <div
          className={`${style.container} border-primary-main border-2 rounded-radius-large relative`}
        >
          <label
            className={`absolute text-primary-main bg-light bottom-[65%] left-[5%] p-1 ${style.label}`}
          >
            {label}
          </label>
          <input
            type={type}
            value={value}
            onChange={onChange}
            className={`${style.input} bg-light text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0`}
          />
        </div>
      ) : (
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChange}
          className="py-2 pl-3 pr-12 border border-primary-main rounded-full focus:outline-none focus:border-primary-light max-w-[320px] sm:w-full"
        />
      )}
    </>
  );
};

export default Input;
