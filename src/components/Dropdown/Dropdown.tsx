import React, { useState } from 'react';

export interface DropdownProps {
  options: string[];
  onSelect?: (option: string) => void;
}

export const Dropdown = ({ options, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className="sui:relative sui:inline-block sui:text-left">
      <div>
        <button
          type="button"
          className="sui:inline-flex sui:justify-center sui:w-full sui:rounded-md sui:border sui:border-gray-300 sui:shadow-sm sui:px-4 sui:py-2 sui:bg-white sui:text-sm sui:font-medium sui:text-gray-700 sui:hover:bg-gray-50 sui:focus:outline-none sui:focus:ring-2 sui:focus:ring-offset-2 sui:focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption || 'Select an option'}
        </button>
      </div>
      {isOpen && (
        <div className="sui:origin-top-right sui:absolute sui:right-0 sui:mt-2 sui:w-56 sui:rounded-md sui:shadow-lg sui:bg-white sui:ring-1 sui:ring-black sui:ring-opacity-5">
          <div className="sui:py-1">
            {options.map((option) => (
              <a
                key={option}
                href="#"
                className="sui:block sui:px-4 sui:py-2 sui:text-sm sui:text-gray-700 sui:hover:bg-gray-100"
                onClick={() => handleSelect(option)}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
