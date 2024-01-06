import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";

type Props = {
  label?: string;
  type: "text" | "date" | "image" | "pdf" | "password" | "number";
  value: string | File | null; // Adjust this as needed for different input types
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSearchBar?: boolean;
  placeHolder?: string;
  bgColor?: string;
  required?: boolean;
};

const Input = ({
  label,
  type,
  value,
  onChange,
  isSearchBar,
  placeHolder,
  required = true,
  bgColor = "bg-light",
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
            className={`${bgColor} text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0 border-primary-main border-2 rounded-radius-large`}
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
            className={`${bgColor} text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0 border-primary-main border-2 rounded-radius-large`}
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
            className={`${bgColor} text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0 border-primary-main border-2 rounded-radius-large hidden`}
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
            className={`${bgColor} text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0 border-primary-main border-2 rounded-radius-large hidden`}
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
            className={`${bgColor} text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0 border-primary-main border-2 rounded-radius-large`}
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
            className={`${bgColor} text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0 border-primary-main border-2 rounded-radius-large`}
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
                className={`absolute text-primary-main ${bgColor} bottom-[80%] left-3 px-1`}
              >
                {label}
              </label>
              <label className="inline-block w-full px-3 py-2 border-primary-main border-2 rounded-radius-large">
                {renderInput()}
                <div className="text-base cursor-pointer hover:opacity-70 transition-all duration-300 border-2 border-primary-main rounded-radius-main text-primary-main px-2 w-fit flex items-center gap-1">
                <MdOutlineFileUpload className='text-lg' />
                  Upload your {type}
                  </div>
              </label>
            </>
          ) : (
            <>
              <label
                className={`absolute text-primary-main ${bgColor} bottom-[80%] left-3 px-1`}
              >
                {label}
              </label>
              {renderInput()}
            </>
          )}
          {/* <label
            className={`absolute text-primary-main ${bgColor} bottom-[80%] left-3 px-1`}
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
          className="py-2 pl-3 pr-12 border border-primary-main rounded-full focus:outline-none focus:border-primary-light w-full"
        />
      )}
    </>
  );
};

export default Input;
