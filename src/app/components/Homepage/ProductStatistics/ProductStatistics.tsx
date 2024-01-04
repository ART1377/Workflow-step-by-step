import React from "react";

type Props = {
  label: string;
  value: number;
  borderClass: string;
};

const ProductStatistics = ({
  label,
  value,
  borderClass,
}:Props) => {
  return (
    <div className={`bg-gray-white shadow-lg border flex items-center gap-3 min-h-[80px] ms-auto w-full py-3 pe-3 ps-4 rounded-radius-large border-s-8 ${borderClass}`}>
      <p className="">{label}:</p>
      <p>{value}</p>
    </div>
  );
};

export default ProductStatistics;
