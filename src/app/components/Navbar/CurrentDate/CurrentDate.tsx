import React, { useEffect, useState } from "react";


const CurrentDate = () => {

  // Set current date
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const getCurrentDate = () => {
      const options = {
        weekday: "short",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        // second: "numeric",
        hour12: false,
      };

      const formattedDate = new Date().toLocaleDateString(
        "en-US",
        options as any
      );
      setCurrentDate(formattedDate);
    };

    // Update the current date on component mount
    getCurrentDate();

    // Update the current date every minute
    const interval = setInterval(getCurrentDate, 60000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="text-light text-lg h-12 flex items-center justify-center ml-4 font-medium px-3 py-2 bg-primary-light rounded-radius-large">
      <span className="text-primary-dark mr-1">Today is : </span>
      {currentDate}
    </div>
  );
};

export default CurrentDate;
