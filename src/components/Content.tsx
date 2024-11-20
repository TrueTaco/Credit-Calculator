import React, { FC, useEffect, useState } from "react";
import CalculationInputs from "./CalculationInputs";
import BasicResult from "./BasicResult";

interface ContentProps {}

const Content: FC<ContentProps> = () => {
  // Input values
  const [loan, setLoan] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(2);
  const [repayment, setRepayment] = useState<number>(5);
  const [interestRateFixation, setInterestRateFixation] = useState<number>(20);

  // Output values
  const [rate, setRate] = useState<number>(582.36);
  const [interestCharges, setInterestCharges] = useState<number>(17863.42);
  const [duration, setDuration] = useState<number>(17);

  return (
    <div className="h-full">
      <div className="h-full flex flex-col justify-start items-center gap-4">
        <CalculationInputs
          loan={loan}
          setLoan={setLoan}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          repayment={repayment}
          setRepayment={setRepayment}
          interestRateFixation={interestRateFixation}
          setInterestRateFixation={setInterestRateFixation}
        />
        <hr className="h-[0.5px] w-5/6 bg-white opacity-20 " />
        <BasicResult
          loan={loan + interestCharges}
          rate={rate}
          interestCharge={interestCharges}
          duration={duration}
        />
      </div>
    </div>
  );
};

export default Content;
