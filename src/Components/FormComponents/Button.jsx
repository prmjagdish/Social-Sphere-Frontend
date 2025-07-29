import React from "react";

function Button({ButtonName}) {
  return (
    <button
      type="submit"
      className="w-full py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-md"
    >
      {ButtonName}
    </button>
  );
}

export default Button;
