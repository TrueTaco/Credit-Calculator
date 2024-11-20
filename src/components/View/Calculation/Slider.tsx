import React, { ChangeEvent, FC } from "react";

interface SliderProps {
  label: string;
  value: number | undefined;
  setValue: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const Slider: FC<SliderProps> = ({ label, value, setValue }) => {
  // Event-Handler für den Slider
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10); // Wert aus dem Event auslesen und in eine Zahl umwandeln
    setValue(newValue);
  };

  return (
    <div className="flex flex-col gap-2 pl-4 pr-4">
      <div className="flex flex-row justify-between">
        <label className=" text-white text-lg font-thin pl-3 pb-1">
          {label}
        </label>
        <input
          className="hover:ring-blue-500 text-white bg-white/10 rounded-full border border-white/5 h-8 max-w-24 text-sm font-thin text-center"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.10) 100%)",
          }}
          value={`${value} Jahre`}
          onChange={(event) => {
            const inputValue = event.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
            setValue(inputValue ? Number(inputValue) : 0); // Set the numeric value or 0 if empty
          }}
        />
      </div>

      <div className="inline relative w-full h-2">
        {/* Glow-Layer */}
        <div
          className="absolute top-3 left-0 h-2 rounded-lg pointer-events-none"
          style={{
            width: `${value}%`, // Dynamische Breite für den linken Teil
            background: "rgba(72, 209, 217, 0.5)", // Glow-Farbe
            filter: "blur(24px)", // Blur für den Glow
          }}
        />
        {/* Slider */}
        <input
          id="custom-slider"
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full h-1 bg-[#48D1D9] rounded-lg appearance-none cursor-pointer "
          style={{
            background: `
            linear-gradient(to right, #48D1D9 ${value}%, transparent ${value}%),
            radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.10) 100%)`,
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
