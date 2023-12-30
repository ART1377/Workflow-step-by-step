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
      <div className={`${style["container"]}`}>
        <label>{label}:</label>
        <input type={type} value={value} onChange={onChange} />
      </div>
    </>
  );
};

export default Input;
