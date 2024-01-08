import React from "react";
import Input from "../../../Gloabal/Input/Input";
import DropDownItem from "../../../Gloabal/DropDownItem/DropDownItem";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
};

const Part2NameInput= ({ value, onChange, suggestions, onSuggestionClick }:Props) => (
  <div className="w-1/2">
    <Input bgColor="bg-white" label="Name" type="text" value={value} onChange={onChange} />
    {suggestions.length > 0 && (
      <ul className="absolute bg-white border border-primary-light z-10 ml-1 mt-0.5 rounded-radius-small">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="" onClick={() => onSuggestionClick(suggestion)}>
            <DropDownItem classes="px-4">{suggestion}</DropDownItem>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Part2NameInput;
