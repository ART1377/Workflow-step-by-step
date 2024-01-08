import BaseModal from "@/app/components/Gloabal/BaseModal/BaseModal";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  formValues: {
    name: string;
    date: string;
    image: File | null;
    file: File | null;
    category: string;
    number: string;
    check: boolean;
    textAreaValues: string[];
    // textArea: string;
  };
};

const Part2SubmissionResult = ({ formValues, isOpen, onClose }: Props) => {
  const {
    name,
    date,
    image,
    file,
    category,
    number,
    check,
    textAreaValues,
    // textArea,
  } = formValues;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-8 max-w-fit-content bg-gray-dark text-light py-1 px-2">
          Form Submission Result
        </h2>

        <ul className="grid grid-cols-2 gap-5">
          <li className="text-base flex gap-4 line-clamp-1">
            <p>Name:</p>
            <p className="font-bold">{name}</p>
          </li>
          <li className="text-base flex gap-4 line-clamp-1">
            <p>Date:</p>
            <p className="font-bold">{date}</p>
          </li>
          <li className="text-base flex gap-4 line-clamp-1">
            <p>Image:</p>
            <p className="font-bold">{image ? image.name : "Not provided"}</p>
          </li>
          <li className="text-base flex gap-4 line-clamp-1">
            <p>PDF File:</p>
            <p className="font-bold">{file ? file.name : "Not provided"}</p>
          </li>
          <li className="text-base flex gap-4 line-clamp-1">
            <p>Category:</p>
            <p className="font-bold">{category}</p>
          </li>
          <li className="text-base flex gap-4 line-clamp-1">
            <p>Number:</p>
            <p className="font-bold">{number}</p>
          </li>
          <li className="text-base flex gap-4 line-clamp-1">
            <p>Check:</p>
            <p className="font-bold">{check ? "Checked" : "Not checked"}</p>
          </li>
        </ul>
        {/* {check ? (
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: +number }, (_, index) => (
              <p key={index} className="text-sm">{`Textarea ${index + 1}: ${
                textAreaValues[index]
              }`}</p>
            ))}
          </div>
        ) : (
          <p className="text-sm">Textarea: {textArea}</p>
        )} */}
      </div>
    </BaseModal>
  );
};

export default Part2SubmissionResult;
