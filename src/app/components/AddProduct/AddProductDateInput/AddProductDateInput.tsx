import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import './AddProductDateInput.css'

type Props = {
  value: DateObject | null;
  onDateChange: (date: DateObject | null) => void;
};

const AddProductDateInput = ({ value, onDateChange }: Props) => {
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
    <>

      <div className="w-1/2">
        <div className="relative h-full">
          <label
            className={`absolute text-primary-main bg-white bottom-[83%] left-3 px-1`}
          >
            Date
          </label>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            value={value}
            onChange={handleDateChange}
          />
        </div>
        {/* <Input
        bgColor="bg-white"
        label="Date"
        type="date"
        value={value}
        onChange={onChange}
      /> */}
      </div>
    </>
  );
};

export default AddProductDateInput;

// import React from "react";
// import Input from "../../../Gloabal/Input/Input";

// type Props = {
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };

// const AddProductDateInput = ({ value, onChange }:Props) => (
//   <div className="w-1/2">
//     <Input bgColor="bg-white" label="Date" type="date" value={value} onChange={onChange} />
//   </div>
// );

// export default AddProductDateInput;
