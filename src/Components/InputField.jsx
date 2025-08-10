import React from "react";

function InputField({ label, id, name, type, value, onChange, error, placeholder }) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-0.5"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 rounded-md text-sm border text-gray-400 outline-none bg-transparent ${
          error
            ? "border-red-500"
            : "border-gray-300 dark:border-gray-800 focus:border-blue-600 focus:ring-1 focus:ring-green-300"
        } placeholder-gray-400`}
      />
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}

export default InputField;
