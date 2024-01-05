"use client";
import React, { useState } from "react";
import Input from "../../Gloabal/Input/Input"; // Adjust the path as needed

const Part2DetailPage = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [date, setDate] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);
  const [textArea, setTextArea] = useState<string>("");

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    // Check if a file is selected and if its type is PDF
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      // You can handle the invalid file type here, e.g., show a message or reset the input
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
      // You can handle the invalid file type here, e.g., show a message or reset the input
      console.error(
        "Invalid file type. Please select a PNG, JPG, JPEG, or GIF file."
      );
      e.target.value = ""; // Reset the input to clear the invalid file
    }
  };

  console.log("Name:", name);
  console.log("Image:", image);
  console.log("File:", file);
  console.log("Date:", date);
  console.log("Number:", number);
  console.log("Check:", check);
  console.log("TextArea:", textArea);

  return (
    <div>
      <Input
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Image"
        type="image"
        value={image}
        onChange={(e) => handleImageChange(e)}
      />
      <Input
        label="File"
        type="pdf"
        value={file}
        onChange={(e) => handlePdfChange(e)}
      />
      <Input
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Input
        label="Number"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <Input
        label="Check"
        type="checkbox"
        value={check}
        onChange={() => setCheck(!check)}
      />
      <Input
        label="text"
        type="textarea"
        value={textArea}
        onTextChange={(e) => setTextArea(e.target.value)}
      />
    </div>
  );
};

export default Part2DetailPage;
