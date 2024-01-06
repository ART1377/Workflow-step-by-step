"use client";
import React, { useState } from "react";
import Input from "../../Gloabal/Input/Input"; // Adjust the path as needed
import TextArea from "../../Gloabal/TextArea/TextArea";
import CheckBox from "../../Gloabal/CheckBox/CheckBox";
import SelectOption from "../../Gloabal/SelectOption/SelectOption";
import Button from "../../Gloabal/Button/Button";

const Part2DetailPage = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [date, setDate] = useState<string>("");
  const [number, setNumber] = useState<string>("1");
  const [check, setCheck] = useState<boolean>(false);
  const [textArea, setTextArea] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    // Check if a file is selected and if its type is PDF
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      // You can handle the invalid file type here
      console.error("Invalid file type. Please select a PDF file.");
      e.target.value = ""; // Reset the input to clear the invalid file
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    // Check if a file is selected and if its type is one of the allowed image types
    if (
      selectedFile &&
      /(image\/jpeg|image\/jpg|image\/png|image\/gif)/.test(selectedFile.type)
    ) {
      setImage(selectedFile);
    } else {
      // You can handle the invalid file type here
      console.error(
        "Invalid file type. Please select a PNG, JPG, JPEG, or GIF file."
      );
      e.target.value = ""; // Reset the input to clear the invalid file
    }
  };

  console.log(number);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Check if the input value is a valid positive number
    if (+inputValue > 0) {
      setNumber(inputValue);
    } else {
      // You can handle the invalid number here
      console.error("Invalid number. Please enter a positive number.");
      e.target.value = ""; // Reset the input to clear the invalid number
    }
  };

  return (
    <form onSubmit={()=>console.log('first')} className="p-8 flex flex-col gap-8 bg-light">
      <div className="flex gap-4">
        <div className="w-1/2">
          <Input
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-1/2">
          <Input
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <Input
            label="Image"
            type="image"
            value={image}
            onChange={(e) => handleImageChange(e)}
          />
        </div>
        <div className="w-1/2">
          <Input
            label="File"
            type="pdf"
            value={file}
            onChange={(e) => handlePdfChange(e)}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <SelectOption
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={["Category 1", "Category 2", "Category 3"]}
          />
        </div>
        <div className="w-1/2 flex gap-2">
          <div className="w-full">
            <Input
              label="Number"
              type="number"
              value={number}
              onChange={(e) => handleNumberChange(e)}
            />
          </div>
          <CheckBox
            label="Check"
            value={check}
            onChange={() => setCheck(!check)}
          />
        </div>
      </div>
      {check ? (
        Array.from({ length: +number }, (_, index) => (
          <TextArea
            key={index}
            label={`Textarea ${index + 1}`}
            placeHolder="product code"
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
          />
        ))
      ) : (
        <TextArea
          label="text"
          placeHolder="product code"
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        />
      )}
      <div className="w-56 mx-auto">
        <Button variant="primary-dark">submit</Button>
      </div>
    </form>
  );
};

export default Part2DetailPage;
