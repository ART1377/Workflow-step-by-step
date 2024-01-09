import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

type Props = {
  value: DateObject | null;
  onDateChange: (date: DateObject | null) => void;
};

const Part2DateInput = ({ value, onDateChange }: Props) => {
  const handleDateChange = (e: any) => {
    const date = new DateObject({
      year: e.year,
      month: e.month.index + 1,
      day: e.day,
      calendar: persian,
      locale: persian_fa,
    });
    
    onDateChange(date);
    // console.log(date.format("DD MM YYYY"));
  };

  return (
    <div className="w-1/2">
      <DatePicker
      // style={{
      //   color: "#2d3a45",         // text-primary-dark
      //   width: "100%",            // w-full
      //   padding: "8px 12px",      // px-3 py-2
      //   boxShadow: "none",        // focus:shadow-none
      //   outline: "2px solid #3490dc",   // outline outline-primary-main outline-2
      //   focusOutline: "3px solid #3490dc",   // focus:outline-[3px]
      //   borderRadius: "8px",      // rounded-radius-main
      // }}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        value={value}
        onChange={handleDateChange}
      />
      {/* <Input
        bgColor="bg-white"
        label="Date"
        type="date"
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
