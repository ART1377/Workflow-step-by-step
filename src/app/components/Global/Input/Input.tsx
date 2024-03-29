import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";

type Props = {
  label?: string;
  type: "text" | "date" | "image" | "pdf" | "password" | "number";
  value: string | File | null; // Adjust this as needed for different input types
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  isSearchBar?: boolean;
  placeHolder?: string;
  bgColor?: string;
  required?: boolean;
  min?: number;
  max?: number;
};

const Input = ({
  label,
  type,
  value,
  onChange,
  onBlur,
  onFocus,
  isSearchBar,
  placeHolder,
  required = true,
  bgColor = "bg-white",
  max,
  min,
}: Props) => {
  const renderInput = () => {
    switch (type) {
      case "number":
        return (
          <input
            type="number"
            required={required}
            placeholder={placeHolder ? placeHolder : ""}
            value={value as string}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            min={min}
            max={max}
            className={`${bgColor} text-primary-dark w-full min-h-[42px] p-2 focus:shadow-none outline outline-primary-main outline-2 focus:outline-[3px] rounded-radius-main`}
          />
        );
      case "date":
        return (
          <input
            type="date"
            required={required}
            placeholder={placeHolder ? placeHolder : ""}
            value={value as string}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`${bgColor} text-primary-dark w-full min-h-[42px] p-2 focus:shadow-none outline outline-primary-main outline-2 focus:outline-[3px] rounded-radius-main`}
          />
        );
      case "image":
        return (
          <input
            type="file"
            required={required}
            placeholder={placeHolder ? placeHolder : ""}
            accept=".jpg, .jpeg, .png, .gif"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`${bgColor} text-primary-dark w-full min-h-[42px] p-2 focus:shadow-none outline outline-primary-main outline-2 focus:outline-[3px] rounded-radius-main hidden`}
          />
        );
      case "pdf":
        return (
          <input
            type="file"
            required={required}
            placeholder={placeHolder ? placeHolder : ""}
            accept=".pdf"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`${bgColor} text-primary-dark w-full min-h-[42px] p-2 focus:shadow-none outline outline-primary-main outline-2 focus:outline-[3px] rounded-radius-main hidden`}
          />
        );
      case "password":
        return (
          <input
            type="password"
            required={required}
            placeholder={placeHolder ? placeHolder : ""}
            value={value as string}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`${bgColor} text-primary-dark w-full min-h-[42px] p-2 focus:shadow-none outline outline-primary-main outline-2 focus:outline-[3px] rounded-radius-main`}
          />
        );
      default:
        return (
          <input
            type="text"
            required={required}
            placeholder={placeHolder ? placeHolder : ""}
            value={value as string}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`${bgColor} text-primary-dark w-full min-h-[42px] p-2 focus:shadow-none outline outline-primary-main outline-2 focus:outline-[3px] rounded-radius-main`}
          />
        );
    }
  };

  return (
    <>
      {!isSearchBar ? (
        <div className={`relative`}>
          {type === "image" || type === "pdf" ? (
            <>
              <label
                className={`absolute text-primary-main ${bgColor} bottom-[83%] left-3 px-1`}
              >
                {label}
              </label>
              <label className="inline-block w-full min-h-[42px] p-2 outline outline-primary-main outline-2 focus:outline-[3px] rounded-radius-main">
                {renderInput()}
                <div className="text-sm cursor-pointer hover:opacity-70 transition-all duration-300 border-2 border-primary-main rounded-radius-main text-primary-main px-1 w-fit flex items-center gap-1 line-clamp-1">
                  <MdOutlineFileUpload className="text-lg" />
                  Upload your {type}
                </div>
              </label>
            </>
          ) : (
            <>
              <label
                className={`absolute text-primary-main ${bgColor} bottom-[83%] left-3 px-1`}
              >
                {label}
              </label>
              {renderInput()}
            </>
          )}
          {/* <label
            className={`absolute text-primary-main ${bgColor} bottom-[83%] left-3 px-1`}
          >
            {label}
          </label>
          {renderInput()} */}
        </div>
      ) : (
        <input
          type="text"
          placeholder="Search..."
          value={value as string}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className="py-2 pl-3 pr-12 h-12 border border-primary-main rounded-full focus:outline-none focus:border-primary-light w-full text-primary-dark"
        />
      )}
    </>
  );
};

export default Input;
