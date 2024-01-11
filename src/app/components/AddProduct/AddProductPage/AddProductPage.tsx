"use client";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline, MdDoneOutline } from "react-icons/md";

import AddProductNameInput from "../AddProductNameInput/AddProductNameInput";
import AddProductDateInput from "../AddProductDateInput/AddProductDateInput";
import AddProductFileInput from "../AddProductFileInput/AddProductFileInput";
import AddProductCategorySelect from "../AddProductCategorySelect/AddProductCategorySelect";
import AddProductNumberAndCheckbox from "../AddProductNumberAndCheckbox/AddProductNumberAndCheckbox";
import AddProductTextAreaSection from "../AddProductTextAreaSection/AddProductTextAreaSection";
import Button from "../../Gloabal/Button/Button";
import AddProductSubmissionResult from "../AddProductSubmissionResult/AddProductSubmissionResult";

import { fetchProducts } from "../../../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";

import { DateObject } from "react-multi-date-picker";

const AddProductPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [date, setDate] = useState<DateObject | null>(null);
  // const [date, setDate] = useState('');
  const [number, setNumber] = useState<string>("1");
  const [check, setCheck] = useState<boolean>(false);
  // const [textArea, setTextArea] = useState<string>("");
  const [category, setCategory] = useState<string>("Category 1");

  const [textAreaValues, setTextAreaValues] = useState<string[]>([""]);

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [productSuggestions, setProductSuggestions] = useState<string[]>([]);

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
    setDate(null);
    setNumber("1");
    setCheck(false);
    // setTextArea("");
    setCategory("Category 1");
    setTextAreaValues([""]);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDateChange = (date: DateObject | null) => {
    setDate(date);
    // console.log(date.format("DD MM YYYY"));
  };

  return (
    <form
      onSubmit={submitFormHandler}
      className="p-4 flex flex-col gap-12 bg-white mx-auto max-w-[1100px] 1400:mt-10"
    >
      <div className="flex gap-6">
        <div className="flex flex-col gap-8 w-2/5 h-[420px] py-2">
          <AddProductNameInput
            value={name}
            onChange={handleNameChange}
            suggestions={productSuggestions}
            onSuggestionClick={handleProductSuggestionClick}
            setProductSuggestions={setProductSuggestions}
          />
          <AddProductDateInput value={date} onDateChange={handleDateChange} />

          <AddProductFileInput
            label="Image"
            type="image"
            value={image}
            onChange={handleImageChange}
          />
          <AddProductFileInput
            label="File"
            type="pdf"
            value={file}
            onChange={handlePdfChange}
          />
          <AddProductCategorySelect
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={["Category 1", "Category 2", "Category 3"]}
          />
          <AddProductNumberAndCheckbox
            number={number}
            check={check}
            onNumberChange={handleNumberChange}
            onCheckboxChange={() => setCheck(!check)}
          />
        </div>
        <div className="w-3/5 h-[420px] py-2 overflow-y-scroll">
          <AddProductTextAreaSection
            check={check}
            textAreaValues={textAreaValues}
            onTextAreaChange={textareaChangeHandler}
          />
        </div>
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
      <AddProductSubmissionResult
        isOpen={modalOpen}
        onClose={closeModal}
        formValues={{
          name,
          date,
          image,
          file,
          category,
          number,
          check,
          textAreaValues,
          // textArea,
        }}
      />
    </form>
  );
};

export default AddProductPage;
