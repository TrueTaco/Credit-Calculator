import React, { FC } from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: number | undefined;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const InputField: FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <div className="flex flex-col min-w-0">
      <label className=" text-white text-lg font-thin pl-3 pb-1">{label}</label>
      <input
        type="number"
        className="hover:ring-blue-500 indent-4 text-white bg-white/5 rounded-full border border-white/5 h-12"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.08) 100%)",
        }}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </div>
  );
};

export default InputField;

/*
 <p className="text-white/60 text-sm font-light pl-6 text-base">
          {placeholder}
        </p>*/
//className="bg-glass h-12 flex content-center rounded-full border border-white/5 flex items-center hover:cursor-pointer
