import React from "react";

type Props = {
  children: React.ReactNode;
  classes?:string;
};

const DropDownItem = ({ children,classes }: Props) => {
  return (
    <div
      className={`cursor-pointer flex gap-1 items-center p-2 transition-all duration-500 text-dark border-l-4 border-white opacity-90 shadow hover:border-l-4 hover:border-primary-main hover:opacity-100 ${classes}`}
    >
      {children}
    </div>
  );
};

export default DropDownItem;
