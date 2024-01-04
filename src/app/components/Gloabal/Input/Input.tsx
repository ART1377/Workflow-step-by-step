import React from "react";
import style from './Input.module.css'


type Props = {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, type, value, onChange }: Props) => {
  return (
    <>
      <div className={`${style.container} border-primary-main border-2 rounded-radius-large relative`}>
        <label className={`absolute text-primary-main bg-light bottom-[65%] left-[5%] p-1 ${style.label}`}>{label}</label>
        <input type={type} value={value} onChange={onChange} className={`${style.input} bg-light text-primary-dark w-full border-primary-main border-2 px-3 py-2 focus:shadow-none focus:outline-0`} />
      </div>
    </>
  );
};

export default Input;
