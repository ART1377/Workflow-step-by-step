import React from "react";
import Input from "../../../Gloabal/Input/Input";

// import DatePicker from "react-multi-date-picker";
// import type { Value } from "react-multi-date-picker";
// import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Part2DateInput = ({ value, onChange }: Props) => {
  return (
    <div className="w-1/2">
      <Input
        bgColor="bg-white"
        label="Date"
        type="date"
        value={value}
        onChange={onChange}
      />

      {/* <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        value={value}
        onChange={onChange}
      /> */}
    </div>
  );
};

export default Part2DateInput;

// import React from "react";
// import Input from "../../../Gloabal/Input/Input";

// type Props = {
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };

// const Part2DateInput = ({ value, onChange }:Props) => (
//   <div className="w-1/2">
//     <Input bgColor="bg-white" label="Date" type="date" value={value} onChange={onChange} />
//   </div>
// );

// export default Part2DateInput;
