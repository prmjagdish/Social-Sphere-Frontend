import React from "react";

export const Modal = ({ title, children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
      <div className="bg-[#1A1C2D] p-6 rounded-xl w-full max-w-md text-white relative">
        <button
          className="absolute top-2 right-3 text-white/70 hover:text-white"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};
