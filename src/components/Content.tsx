import React, { FC } from "react";
import CalculationInputs from "./CalculationInputs";
import BasicResult from "./BasicResult";

interface ContentProps {}

const Content: FC<ContentProps> = () => {
  return (
    <div className="h-full">
      <div className="h-full flex flex-col justify-start items-center gap-4">
        <CalculationInputs />
        <hr className="h-[0.5px] w-5/6 bg-white opacity-20 " />
        <BasicResult />
      </div>
    </div>
  );
};

export default Content;
