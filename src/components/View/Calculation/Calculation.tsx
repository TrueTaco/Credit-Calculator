import React, { FC } from "react";
import BasicResult from "./BasicResult";
import CalculationInputs from "./CalculationInputs";

interface CalculationProps {
  loan: number;
  setLoan: React.Dispatch<React.SetStateAction<number>>;
  interestRate: number;
  setInterestRate: React.Dispatch<React.SetStateAction<number>>;
  repayment: number;
  setRepayment: React.Dispatch<React.SetStateAction<number>>;
  interestRateFixation: number;
  setInterestRateFixation: React.Dispatch<React.SetStateAction<number>>;
  rate: number;
  setRate: React.Dispatch<React.SetStateAction<number>>;
  interestCharges: number;
  setInterestCharges: React.Dispatch<React.SetStateAction<number>>;
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
}

const Calculation: FC<CalculationProps> = ({
  loan,
  setLoan,
  interestRate,
  setInterestRate,
  repayment,
  setRepayment,
  interestRateFixation,
  setInterestRateFixation,
  rate,
  interestCharges,
  duration,
}) => {
  return (
    <div className="flex flex-col justify-start items-center gap-8 pl-2 pr-2 pb-4">
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
  );
};

export default Calculation;
