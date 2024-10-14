/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const FormInput = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      {/* <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {name}
      </label> */}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 p-2 border border-gray-300 rounded w-full "
      />
    </div>
  );
};

export default FormInput;
