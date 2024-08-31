import React, { useState } from "react";
import countryCodes from "./countryCodes.json";

const CustomSelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedCountry = countryCodes.find(
    (country) => country.code === value
  );

  return (
    <div className=''>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='w-full px-2 min-w-[85px] rounded-l-lg focus:outline-none  whitespace-nowrap'>
        {selectedCountry.labelPart}
      </button>
      {isOpen && (
        <ul className='absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto'>
          {countryCodes.map((country) => (
            <li
              key={country.code}
              onClick={() => {
                onChange(country.code);
                setIsOpen(false);
              }}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
              {country.labelFull}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const PhoneInput = ({ label, description, name, value, handleChange }) => {
  const [country, setCountry] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (code) => {
    setCountry(code);
  };

  const handlePhoneChange = (event) => {
    const input = event.target.value.replace(/\D/g, "");
    setPhoneNumber(input);
    handleChange({ target: { name, value: country + input } });
  };

  const validatePhoneNumber = () => {
    if (!phoneNumber || !country) {
      return getErrorMessage("emptyField");
    }

    const selectedCountry = countryCodes.find((c) => c.code === country);
    if (!selectedCountry) {
      return getErrorMessage("invalidCountryCode");
    }

    const numberWithoutCountryCode = phoneNumber.replace(country, "").trim();
    const allowedCharacters = /^[0-9\s\-]+$/;

    // Check if phone number length matches the required length
    if (numberWithoutCountryCode.length !== selectedCountry.length) {
      return getErrorMessage("lengthMismatch");
    }

    // Check if phone number contains only allowed characters (digits, spaces, hyphens)
    if (!allowedCharacters.test(numberWithoutCountryCode)) {
      return getErrorMessage("invalidCharacters");
    }

    return true; // All validation checks passed
  };

  const getErrorMessage = (errorType) => {
    switch (errorType) {
      case "emptyField":
        return "Phone number or country code cannot be empty.";
      case "invalidCountryCode":
        return "The selected country code is not valid.";
      case "lengthMismatch":
        return "The phone number length does not match the expected length for the selected country.";
      case "invalidCharacters":
        return "The phone number contains invalid characters. Only digits, spaces, and hyphens are allowed.";
      default:
        return "Please enter a valid phone number.";
    }
  };
  const errorMessage = validatePhoneNumber();

  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block text-sm text-gray-700 mb-1'>
        {label}
      </label>
      <p className='text-xs text-gray-500 mb-2'>{description}</p>
      <div className='flex items-center relative border-2 rounded-lg border-gray-300 focus-within:border-yellow-600'>
        <CustomSelect value={country} onChange={handleCountryChange} />
        <input
          id={name}
          name={name}
          type='text'
          placeholder='Phone number'
          value={phoneNumber}
          onChange={handlePhoneChange}
          className='w-full border-gray-300 rounded-r-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600'
        />
      </div>
      {/* Your input field and other components */}
      {errorMessage !== true && (
        <p className='text-xs text-red-600 mt-1'>{errorMessage}</p>
      )}
    </div>
  );
};

export default PhoneInput;
