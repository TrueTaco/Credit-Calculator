import { FC, useState } from "react";
import TabSwitcher from "./TabSwitcher";
import Calculation from "./View/Calculation/Calculation";

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
    <div className="h-full p-2 flex flex-col justify-between">
      <div>
        {selectedTab === "calculation" && (
          <>
            <Calculation
              loan={loan}
              setLoan={setLoan}
              interestRate={interestRate}
              setInterestRate={setInterestRate}
              repayment={repayment}
              setRepayment={setRepayment}
              interestRateFixation={interestRateFixation}
              setInterestRateFixation={setInterestRateFixation}
              rate={rate}
              interestCharges={interestCharges}
              duration={duration}
            />
          </>
        )}
      </div>

      <TabSwitcher selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
};

export default Content;
