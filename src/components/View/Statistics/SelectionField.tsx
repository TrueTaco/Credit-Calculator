import React, { useState, FC } from "react";

interface DropdownFieldProps {
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownField: FC<DropdownFieldProps> = ({
  options,
  value,
  setValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: string) => {
    setValue(option);
    setIsOpen(false);
  };

  return (
    <div className="relative flex min-w-0 flex-col">
      <div
        className={`flex h-12 cursor-pointer items-center justify-between ${isOpen ? "rounded-t-3xl" : "rounded-full"} border border-white/5 bg-white/5 px-4 text-white hover:ring-blue-500`}
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.08) 100%)",
        }}
        onClick={handleToggle}
      >
        <span>{value || "Select an option"}</span>
        <span className="text-white">&#9660;</span>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-12 bg-black bg-opacity-70">
          {options.map((option, index) => (
            <p
              className={`cursor-pointer rounded p-2 text-white ${option === value ? "font-semibold" : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownField;
