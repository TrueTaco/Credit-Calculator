import React, { FC } from "react";
import CalculationInputs from "./CalculationInputs";
import BasicResult from "./BasicResult";

interface ContentProps {}

const Content: FC<ContentProps> = () => {
  return (
    <div className="h-full">
      <div className="h-full flex-col">
        <CalculationInputs />
        <BasicResult />
      </div>
    </div>
  );
};

export default Content;
