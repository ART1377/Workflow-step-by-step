"use client";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline, MdDoneOutline } from "react-icons/md";

import Input from "../../Gloabal/Input/Input";
import TextArea from "../../Gloabal/TextArea/TextArea";
import CheckBox from "../../Gloabal/CheckBox/CheckBox";
import SelectOption from "../../Gloabal/SelectOption/SelectOption";
import Button from "../../Gloabal/Button/Button";
import DropDownItem from "../../Gloabal/DropDownItem/DropDownItem";
import BaseModal from "../../Gloabal/BaseModal/BaseModal";

import { fetchProducts } from "../../../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";

const Part2Page = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [productSuggestions, setProductSuggestions] = useState<string[]>([]);

  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [date, setDate] = useState<string>("");
  const [number, setNumber] = useState<string>("1");
  const [check, setCheck] = useState<boolean>(false);
  const [textArea, setTextArea] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const [textAreaValues, setTextAreaValues] = useState<string[]>([]);


  const filterProductNames = (inputValue: string) => {
    const filteredProducts = products.filter((product) =>
      product.productName.toLowerCase().includes(inputValue.toLowerCase())
    );
    return filteredProducts.slice(0, 5).map((product) => product.productName);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setName(inputValue);

    if (inputValue.length >= 3) {
      const suggestions = filterProductNames(inputValue);
      setProductSuggestions(suggestions);
    } else {
      setProductSuggestions([]);
    }
  };

  const handleProductSuggestionClick = (suggestion: string) => {
    setName(suggestion);
    setProductSuggestions([]);
  };

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

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Check if the input value is a valid positive number
    if (+inputValue > 0) {
      setTextAreaValues(Array.from({ length: +inputValue }, () => ""));

      setNumber(inputValue);
    } else {
      // You can handle the invalid number here
      console.error("Invalid number. Please enter a positive number.");
      e.target.value = ""; // Reset the input to clear the invalid number
    }
  };

  const textareaChangeHandler = (index: number, value: string) => {
    // Update the specific textarea value in the array
    const updatedTextAreaValues = [...textAreaValues];
    updatedTextAreaValues[index] = value;
    setTextAreaValues(updatedTextAreaValues);
  };

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const resetFormHandler = () => {
    setName("");
    setImage(null);
    setFile(null);
    setDate("");
    setNumber("1");
    setCheck(false);
    setTextArea("");
    setCategory("");
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  


  return (
    <form
      onSubmit={submitFormHandler}
      className="p-8 flex flex-col gap-8 bg-white mx-auto max-w-[1200px] 1400:mt-10"
    >
      <div className="flex gap-4">
        <div className="w-1/2">
          <Input
            bgColor="bg-white"
            label="Name"
            type="text"
            value={name}
            onChange={(e) => handleNameChange(e)}
          />
          {productSuggestions.length > 0 && (
            <ul className="absolute bg-white border border-primary-light z-10 ml-1 mt-0.5 rounded-radius-small">
              {productSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className=""
                  onClick={() => handleProductSuggestionClick(suggestion)}
                >
                  <DropDownItem classes="px-4">{suggestion}</DropDownItem>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-1/2">
          <Input
            bgColor="bg-white"
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
            bgColor="bg-white"
            label="Image"
            type="image"
            value={image}
            onChange={(e) => handleImageChange(e)}
          />
        </div>
        <div className="w-1/2">
          <Input
            bgColor="bg-white"
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
            bgColor="bg-white"
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={["Category 1", "Category 2", "Category 3"]}
          />
        </div>
        <div className="w-1/2 flex gap-2">
          <div className="w-full">
            <Input
              bgColor="bg-white"
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
            required={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
      {check
      ? textAreaValues.map((value, index) => (
          <TextArea
            key={index}
            bgColor="bg-white"
            label={`Textarea ${index + 1}`}
            placeHolder="product code"
            value={value}
            onChange={(e) => textareaChangeHandler(index, e.target.value)}
          />
        ))
      : (
          <TextArea
            bgColor="bg-white"
            label="text"
            placeHolder="product code"
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
          />
        )
    }
      </div>
      <div className="w-full mx-auto grid grid-flow-col gap-4 max-w-[400px]">
        <Button
          type="submit"
          variant="primary-main"
          size="large"
          classes="flex items-center justify-center gap-1"
        >
          <MdDoneOutline />
          Submit
        </Button>
        <Button
          variant="reject"
          size="large"
          onClick={resetFormHandler}
          classes="flex items-center justify-center gap-1"
        >
          <MdDeleteOutline />
          Reset
        </Button>
      </div>
      {/* Modal for displaying submission result */}
      <BaseModal isOpen={modalOpen} onClose={closeModal}>
  <div className="p-4">
    <h2 className="text-lg font-semibold mb-4">Form Submission Result</h2>

    <div className="grid grid-cols-2 gap-4">
      <p className="text-sm">Name:</p>
      <p className="text-sm">{name}</p>

      <p className="text-sm">Date:</p>
      <p className="text-sm">{date}</p>

      <p className="text-sm">Image:</p>
      <p className="text-sm">{image ? image.name : "Not provided"}</p>

      <p className="text-sm">PDF File:</p>
      <p className="text-sm">{file ? file.name : "Not provided"}</p>

      <p className="text-sm">Category:</p>
      <p className="text-sm">{category}</p>

      <p className="text-sm">Number:</p>
      <p className="text-sm">{number}</p>

      <p className="text-sm">Check:</p>
      <p className="text-sm">{check ? "Checked" : "Not checked"}</p>
    </div>

    {/* {check ? (
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: +number }, (_, index) => (
          <p key={index} className="text-sm">{`Textarea ${index + 1}: ${textAreaValues[index]}`}</p>
        ))}
      </div>
    ) : (
      <p className="text-sm">Textarea: {textArea}</p>
    )} */}
  </div>
</BaseModal>

    </form>
  );
};

export default Part2Page;
