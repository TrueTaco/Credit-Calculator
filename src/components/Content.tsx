import React, { FC, useEffect, useState } from "react";
import CalculationInputs from "./CalculationInputs";
import BasicResult from "./BasicResult";
import TabSwitcher from "./TabSwitcher";

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

  // Navigation
  const [selectedTab, setSelectedTab] = useState<
    "calculation" | "statistic" | "table"
  >("calculation");

  return (
    <div className="h-full">
      <div className="h-full flex flex-col justify-start items-center gap-8 pl-4 pr-4">
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
        <TabSwitcher
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
    </div>
  );
};

export default Content;
