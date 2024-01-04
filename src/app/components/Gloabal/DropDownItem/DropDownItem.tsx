import React from "react";

type Props = {
  children: React.ReactNode;
};

const DropDownItem = ({ children }: Props) => {
  return (
    <div
      className={`cursor-pointer flex gap-1 items-center p-2 transition-all duration-500 text-dark border-l-4 border-white opacity-90 shadow hover:border-l-4 hover:border-primary-main hover:opacity-100 `}
    >
      {children}
    </div>
  );
};

export default DropDownItem;
