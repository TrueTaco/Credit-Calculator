import { FC, useEffect, useState } from "react";
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
  const [rate, setRate] = useState<number>(0);
  const [interestCharges, setInterestCharges] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const [debtAtMonth, setDebtAtMonth] = useState<number[]>([]);

  // Navigation
  const [selectedTab, setSelectedTab] = useState<
    "calculation" | "statistic" | "table"
  >("calculation");

  useEffect(() => {
    calculateLoanDetails();
  }, [loan, interestRate, repayment]);

  const calculateLoanDetails = () => {
    let monthlyInterest: number = 0.0;
    let monthlyRepayment: number = 0.0;
    let totalInterest: number = 0.0;
    let remainingDebt: number = loan;
    let monthlyRate: number = 0.0;

    let month: number = 0;

    // Monthly rate (Annuität) calculation
    monthlyRate = (loan * (interestRate / 100 + repayment / 100)) / 12;
    setRate(parseFloat(monthlyRate.toFixed(2)));

    const tempDebtAtMonth: number[] = [];

    while (remainingDebt > 0.0) {
      monthlyInterest = (remainingDebt * interestRate) / 1200;
      monthlyRepayment = monthlyRate - monthlyInterest;

      if (month % 12 === 0) {
        tempDebtAtMonth.push(remainingDebt);
      }

      remainingDebt -= monthlyRepayment;
      totalInterest += monthlyInterest;

      month++;

      // Final payment adjustment
      if (remainingDebt + (remainingDebt * interestRate) / 1200 < monthlyRate) {
        monthlyInterest = (remainingDebt * interestRate) / 1200;
        totalInterest += monthlyInterest;
        remainingDebt = 0.0;
        month++;
      }

      // Stop if interest rate fixation ends
      if (
        interestRateFixation !== undefined &&
        Math.floor(month / 12) === interestRateFixation
      ) {
        break;
      }
    }

    setDebtAtMonth(tempDebtAtMonth);
    setInterestCharges(parseFloat(totalInterest.toFixed(2)));
    setDuration(Math.ceil(month / 12));
  };

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
              setRate={setRate}
              setInterestCharges={setInterestCharges}
              setDuration={setDuration}
            />
          </>
        )}
      </div>

      <TabSwitcher selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
};

export default Content;
