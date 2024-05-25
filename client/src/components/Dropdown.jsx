import React, { useState } from 'react';

const Dropdown = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    const selectedOption = options.find((option) => option.value === value);

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {selectedOption ? selectedOption.label : 'Select an option'}
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1" role="none">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                className={`${option.value === value
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700 hover:bg-yellow-400 hover:text-black'
                                    } block w-full px-4 py-2 text-left text-sm`}
                                role="menuitem"
                                onClick={() => handleOptionClick(option.value)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;