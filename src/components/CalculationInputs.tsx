import React, { FC, useEffect, useState } from "react";
import InputField from "./InputField";
import { useTranslation } from "react-i18next";
import Slider from "./Slider";

interface CalculationInputsProps {}

const CalculationInputs: FC<CalculationInputsProps> = () => {
  const [loan, setLoan] = useState<number>();
  const [interestRate, setInterestRate] = useState<number>();
  const [repayment, setRepayment] = useState<number>();
  const [interestRateFixation, setInterestRateFixation] = useState<number>(50);

  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 p-6 w-full">
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
          label={"Zinssatz"}
          placeholder={"4%"}
        />
        <InputField
          value={repayment}
          setValue={setRepayment}
          label={"Tilgung"}
          placeholder={"5%"}
        />
      </div>
      <Slider
        value={interestRateFixation}
        setValue={setInterestRateFixation}
        label="Zinsbindung"
      />
    </div>
  );
};

export default CalculationInputs;
