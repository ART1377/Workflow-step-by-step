import React from "react";
import style from "./Input.module.css";

type Props = {
  label?: string;
  type: "text" | "checkbox" | "date" | "image" | "pdf" | "password";
  value: string | boolean | File | null; // Adjust this as needed for different input types
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSearchBar?: boolean;
};

const Input = ({ label, type, value, onChange, isSearchBar }: Props) => {
  const renderInput = () => {
    switch (type) {
      case "checkbox":
        return (
          <input
            type="checkbox"
            checked={value as boolean}
            onChange={onChange}
            className={`${style.checkbox} ${style.input} `}
          />
        );
      case "date":
        return (
          <input
            type="date"
            value={value as string}
            onChange={onChange}
            className={`${style.input} bg-light text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0`}
          />
        );
      case "image":
        return (
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .gif"
            onChange={onChange}
            className={`${style.input} bg-light text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0`}
          />
        );
      case "pdf":
        return (
          <input
            type="file"
            accept=".pdf"
            onChange={onChange}
            className={`${style.input} bg-light text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0`}
          />
        );
      case "password":
        return (
          <input
            type="password"
            value={value as string}
            onChange={onChange}
            className={`${style.input} bg-light text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0`}
          />
        );
      default:
        return (
          <input
            type="text"
            value={value as string}
            onChange={onChange}
            className={`${style.input} bg-light text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0`}
          />
        );
    }
  };

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
          {renderInput()}
        </div>
      ) : (
        <input
          type="text"
          placeholder="Search..."
          value={value as string}
          onChange={onChange}
          className="py-2 pl-3 pr-12 border border-primary-main rounded-full focus:outline-none focus:border-primary-light max-w-[320px] sm:w-full"
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
//           className={`${style.container} border-primary-main border-2 rounded-radius-large relative`}
//         >
//           <label
//             className={`absolute text-primary-main bg-light bottom-[65%] left-[5%] p-1 ${style.label}`}
//           >
//             {label}
//           </label>
//           <input
//             type={type}
//             value={value}
//             onChange={onChange}
//             className={`${style.input} bg-light text-primary-dark w-full px-3 py-2 focus:shadow-none focus:outline-0`}
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
