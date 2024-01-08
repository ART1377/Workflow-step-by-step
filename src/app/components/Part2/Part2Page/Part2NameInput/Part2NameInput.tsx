import React from "react";
import Input from "../../../Gloabal/Input/Input";
import DropDownItem from "../../../Gloabal/DropDownItem/DropDownItem";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
  setProductSuggestions: ([]) => void;
};

const Part2NameInput = ({
  value,
  onChange,
  suggestions,
  onSuggestionClick,
  setProductSuggestions,
}: Props) => {

  
  const clearSuggestion = () => {
    setTimeout(() => {
      setProductSuggestions([]);
    }, 500);
  };

  return (
    <div className="w-1/2">
      <Input
        bgColor="bg-white"
        label="Name"
        type="text"
        value={value}
        onChange={onChange}
        onBlur={clearSuggestion}
      />
      {
        suggestions.length > 0 && (
          <ul className="absolute bg-white border border-primary-light z-10 ml-1 mt-0.5 rounded-radius-small">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className=""
                onClick={() => onSuggestionClick(suggestion)}
              >
                <DropDownItem classes="px-4">{suggestion}</DropDownItem>
              </li>
            ))}
          </ul>
        )
        //  : (
        //   value.length > 2 && (
        //     <div className="absolute bg-white border border-primary-light z-10 ml-1 mt-0.5 rounded-radius-small px-2 py-1">
        //       <p className="text-gray-main">No Suggession!</p>
        //     </div>
        //   )
        // )
      }
    </div>
  );
};

export default Part2NameInput;
