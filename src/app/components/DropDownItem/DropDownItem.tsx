import React from "react";

type Props = {
  children: React.ReactNode;
};

const DropDownItem = ({ children }: Props) => {
  return (
    <div
      className={`mx-0.5 my-1.5 p-1 rounded-radius-main border-b-2 bg-light shadow-md transform hover:translate-x-px hover:bg-gray-light duration-300 text-dark cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default DropDownItem;
