import React, { useRef } from "react";

const FileInput = ({
  label,
  subtext,
  name,
  required = false,
  className = "",
  wrapperClassName = "",
  ...props // accept, multiple, register, onChange etc.
}) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={`flex flex-col ${wrapperClassName}`}>
      {label && (
        <label
          htmlFor={name}
          className="font-bold text-sm mb-2 block text-[#4A2C2A]"
        >
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}

      {/* Hidden file input */}
      <input
        type="file"
        id={name}
        name={name}
        required={required}
        ref={fileInputRef}
        className="hidden"
        {...props} // for register/accept/multiple/onChange
      />

      {/* Custom styled button */}
      <button
        type="button"
        onClick={handleButtonClick}
        className={`bg-[#8B5E3C] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#A17A5D] transition-colors w-max ${className}`}
      >
        Choose File
      </button>

      {subtext && <p className="text-xs text-red-500 mt-2">{subtext}</p>}
    </div>
  );
};

export default FileInput;
