import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface BasicResultProps {
  loan: number;
  rate: number;
  interestCharge: number;
  duration: number;
}

const BasicResult: FC<BasicResultProps> = ({
  loan,
  rate,
  interestCharge,
  duration,
}) => {
  const { t } = useTranslation();

  return (
    <div className="h-2/6 w-full grid grid-cols-2">
      <div>
        <p className=" text-white text-lg font-thin pl-3 pb-1 opacity-80">
          {t("fullLoan")}
        </p>
        <p className=" text-white text-lg font-regualr pl-3 pb-1">{loan}€</p>
      </div>
      <div>
        <p className=" text-white text-lg font-thin pl-3 pb-1 opacity-80">
          {t("rate")}
        </p>
        <p className=" text-white text-lg font-regualr pl-3 pb-1">{rate}€</p>
      </div>
      <div>
        <p className=" text-white text-lg font-thin pl-3 pb-1 opacity-80">
          {t("interestCharges")}
        </p>
        <p className=" text-white text-lg font-regualr pl-3 pb-1">
          {interestCharge}€
        </p>
      </div>
      <div>
        <p className=" text-white text-lg font-thin pl-3 pb-1 opacity-80">
          {t("duration")}
        </p>
        <p className=" text-white text-lg font-regualr pl-3 pb-1">
          {duration + " " + t("years")}
        </p>
      </div>
    </div>
  );
};

export default BasicResult;
