import React, { FC } from "react";
import InputField from "./InputField";
import { useTranslation } from "react-i18next";
import Slider from "./Slider";

interface CalculationInputsProps {
  loan: number;
  setLoan: React.Dispatch<React.SetStateAction<number>>;
  interestRate: number;
  setInterestRate: React.Dispatch<React.SetStateAction<number>>;
  repayment: number;
  setRepayment: React.Dispatch<React.SetStateAction<number>>;
  interestRateFixation: number;
  setInterestRateFixation: React.Dispatch<React.SetStateAction<number>>;
}

const CalculationInputs: FC<CalculationInputsProps> = ({
  loan,
  setLoan,
  interestRate,
  setInterestRate,
  repayment,
  setRepayment,
  interestRateFixation,
  setInterestRateFixation,
}) => {
  // Translation
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 pr-2 pl-2 w-full">
      <InputField
        value={loan}
        setValue={setLoan}
        label={t("loan")}
        placeholder={"100.000€"}
      />
      <div className="flex justify-evenly gap-4">
        <InputField
          value={interestRate}
          setValue={setInterestRate}
          label={t("interestRate")}
          placeholder={"4%"}
        />
        <InputField
          value={repayment}
          setValue={setRepayment}
          label={t("repayment")}
          placeholder={"5%"}
        />
      </div>
      <Slider
        value={interestRateFixation}
        setValue={setInterestRateFixation}
        label={t("interestRateFixation")}
      />
    </div>
  );
};

export default CalculationInputs;
