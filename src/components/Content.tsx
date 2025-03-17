import { FC, useEffect, useState } from "react";
import TabSwitcher from "./TabSwitcher";
import Calculation from "./View/Calculation/Calculation";
import Statistics from "./View/Statistics/Statistics";
import Table from "./View/Table/Table";

interface ContentProps {}

/**
 * Main Content Component
 * Manages input values for loan calculation, handles calculation logic, and switches between views.
 */
const Content: FC<ContentProps> = () => {
  // Input values (Loan details entered by the user)
  const [loan, setLoan] = useState<number>(100000); // Principal loan amount
  const [interestRate, setInterestRate] = useState<number>(2); // Annual interest rate (%)
  const [repayment, setRepayment] = useState<number>(5); // Annual repayment rate (%)
  const [interestRateFixation, setInterestRateFixation] = useState<number>(20); // Fixed interest rate period (years)

  // Output values (Results of the loan calculations)
  const [rate, setRate] = useState<number>(0); // Monthly payment amount (Annuität)
  const [interestCharges, setInterestCharges] = useState<number>(0); // Total interest paid over the loan duration
  const [duration, setDuration] = useState<number>(0); // Total loan duration (years)

  // Tracks the remaining debt at the end of each year
  const [debtAtMonth, setDebtAtMonth] = useState<number[]>([]);

  // Navigation (Switches between views)
  const [selectedTab, setSelectedTab] = useState<
    "calculation" | "statistic" | "table"
  >("calculation"); // Default tab is "calculation"

  // Recalculates loan details whenever the inputs change
  useEffect(() => {
    calculateLoanDetails();
  }, [loan, interestRate, repayment]);

  /**
   * Calculates loan repayment details based on input values.
   * Updates monthly payment, total interest charges, loan duration, and yearly debt status.
   */
  const calculateLoanDetails = () => {
    let monthlyInterest: number = 0.0; // Interest portion of the monthly payment
    let monthlyRepayment: number = 0.0; // Principal repayment portion of the monthly payment
    let totalInterest: number = 0.0; // Accumulated interest over the loan term
    let remainingDebt: number = loan; // Outstanding loan balance
    let monthlyRate: number = 0.0; // Total monthly payment (Annuität)

    let month: number = 0; // Tracks the number of months passed

    // Calculate the monthly payment (Annuität) based on loan, interest, and repayment rates
    monthlyRate = (loan * (interestRate / 100 + repayment / 100)) / 12;
    setRate(parseFloat(monthlyRate.toFixed(2))); // Update state with the calculated monthly rate

    const tempDebtAtMonth: number[] = []; // Temporary array to store yearly remaining debt

    // Loop to simulate the loan repayment process month by month
    while (remainingDebt > 0.0) {
      // Calculate the monthly interest portion
      monthlyInterest = (remainingDebt * interestRate) / 1200;
      // Calculate the monthly repayment portion
      monthlyRepayment = monthlyRate - monthlyInterest;

      // Store the remaining debt at the end of each year
      if (month % 12 === 0) {
        tempDebtAtMonth.push(remainingDebt);
      }

      // Update remaining debt and accumulate interest charges
      remainingDebt -= monthlyRepayment;
      totalInterest += monthlyInterest;

      month++;

      // Adjust the final payment to settle the remaining balance
      if (remainingDebt + (remainingDebt * interestRate) / 1200 < monthlyRate) {
        monthlyInterest = (remainingDebt * interestRate) / 1200;
        totalInterest += monthlyInterest;
        remainingDebt = 0.0; // Loan is fully repaid
        month++;
      }

      // Stop calculations if the interest rate fixation period ends
      if (
        interestRateFixation !== undefined &&
        Math.floor(month / 12) === interestRateFixation
      ) {
        break;
      }
    }

    // Update output states with calculated values
    setDebtAtMonth(tempDebtAtMonth); // Update yearly debt tracking
    setInterestCharges(parseFloat(totalInterest.toFixed(2))); // Total interest paid
    setDuration(Math.ceil(month / 12)); // Loan duration in years
  };

  return (
    <div className="flex h-full flex-col justify-between p-2">
      <div>
        {selectedTab === "calculation" && (
          <>
            {/* Calculation Component: Displays loan details and input fields */}
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
        {selectedTab === "statistic" && (
          <>
            {/* Calculation Component: Displays loan details and input fields */}
            <Statistics />
          </>
        )}
        {selectedTab === "table" && (
          <>
            {/* Calculation Component: Displays loan details and input fields */}
            <Table />
          </>
        )}
      </div>

      {/* TabSwitcher Component: Allows navigation between views */}
      <TabSwitcher selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
};

export default Content;
