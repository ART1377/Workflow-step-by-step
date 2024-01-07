import React from "react";
import {
  MdOutlineHorizontalRule,
  MdHorizontalDistribute,
} from "react-icons/md";
import style from "./Part1ProductsListHeader.module.css";

type Props = {
  setColumnsNumber: (columns: number) => void;
};

const Part1ProductsListHeader = ({ setColumnsNumber }: Props) => {
  return (
    <div className={`border-b-2 mb-4 p-1 flex justify-between ${style.icons}`}>
      <h5 className="font-medium">Product List</h5>
      <div className="flex gap-2">
        <div
          onClick={() => setColumnsNumber(1)}
          className="p-1 bg-light text-gray-dark text-2xl flex justify-center items-center rounded-radius-main hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <MdOutlineHorizontalRule strokeWidth="2" />
        </div>
        <div
          onClick={() => setColumnsNumber(2)}
          className="p-1 bg-light text-gray-dark text-2xl flex justify-center items-center rounded-radius-main hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <MdHorizontalDistribute strokeWidth="2" />
        </div>
      </div>
    </div>
  );
};

export default Part1ProductsListHeader;
