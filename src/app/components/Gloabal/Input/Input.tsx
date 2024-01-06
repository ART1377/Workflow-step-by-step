import React from "react";

type Props = {
  label?: string;
  type: "text" | "date" | "image" | "pdf" | "password" | "number";
  value: string | File | null; // Adjust this as needed for different input types
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSearchBar?: boolean;
};

const Input = ({ label, type, value, onChange, isSearchBar }: Props) => {
  const renderInput = () => {
    switch (type) {
      case "number":
        return (
          <input
            type="number"
            value={value as string}
            onChange={onChange}
            className={`bg-light text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0 border-primary-main border-2 rounded-radius-large`}
          />
        );
      case "date":
        return (
          <input
            type="date"
            value={value as string}
            onChange={onChange}
            className={`bg-light text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0 border-primary-main border-2 rounded-radius-large`}
          />
        );
      case "image":
        return (
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .gif"
            onChange={onChange}
            placeholder="some text"
            className={`bg-light text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0 border-primary-main border-2 rounded-radius-large hidden`}
          />
        );
      case "pdf":
        return (
          <input
            type="file"
            accept=".pdf"
            onChange={onChange}
            className={`bg-light text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0 border-primary-main border-2 rounded-radius-large hidden`}
          />
        );
      case "password":
        return (
          <input
            type="password"
            value={value as string}
            onChange={onChange}
            className={`bg-light text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0 border-primary-main border-2 rounded-radius-large`}
          />
        );
      default:
        return (
          <input
            type="text"
            value={value as string}
            onChange={onChange}
            className={`bg-light text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0 border-primary-main border-2 rounded-radius-large`}
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
                className={`absolute text-primary-main bg-light bottom-[80%] left-3 px-1`}
              >
                {label}
              </label>
              <label className="inline-block w-full px-3 py-2 border-primary-main border-2 rounded-radius-large">
                {renderInput()}
                <div>hiii</div>
              </label>
            </>
          ) : (
            <>
              <label
                className={`absolute text-primary-main bg-light bottom-[80%] left-3 px-1`}
              >
                {label}
              </label>
              {renderInput()}
            </>
          )}
          {/* <label
            className={`absolute text-primary-main bg-light bottom-[80%] left-3 px-1`}
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

// import React from "react";
// import style from "./Input.module.css";

// type Props = {
//   label?: string;
//   type: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   isSearchBar?: boolean;
// };

// const Input = ({ label, type, value, onChange, isSearchBar }: Props) => {
//   return (
//     <>
//       {!isSearchBar ? (
//         <div
//           className={`border-primary-main border-2 rounded-radius-large relative`}
//         >
//           <label
//             className={`absolute text-primary-main bg-light bottom-[65%] left-[5%] p-1`}
//           >
//             {label}
//           </label>
//           <input
//             type={type}
//             value={value}
//             onChange={onChange}
//             className={`bg-light text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0`}
//           />
//         </div>
//       ) : (
//         <input
//           type="text"
//           placeholder="Search..."
//           value={value}
//           onChange={onChange}
//           className="py-2 pl-3 pr-12 border border-primary-main rounded-full focus:outline-none focus:border-primary-light max-w-[320px] sm:w-full"
//         />
//       )}
//     </>
//   );
// };

// export default Input;
