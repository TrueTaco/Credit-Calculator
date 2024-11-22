import { FC } from "react";
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
    <div className="h-2/6 w-full flex justify-start gap-8 pl-4">
      <div>
        <p className=" text-white text-lg font-thin pl-3 pb-1 opacity-80">
          {t("fullLoan")}
        </p>
        <p className=" text-white text-lg font-regualr pl-3 pb-1">
          {loan.toFixed(2)}€
        </p>
        <p className=" text-white text-lg font-thin pl-3 pb-1 opacity-80">
          {t("interestCharges")}
        </p>
        <p className=" text-white text-lg font-regualr pl-3 pb-1">
          {interestCharge.toFixed(2)}€
        </p>
      </div>
      <div>
        <p className=" text-white text-lg font-thin pl-3 pb-1 opacity-80">
          {t("rate")}
        </p>
        <p className=" text-white text-lg font-regualr pl-3 pb-1">
          {rate.toFixed(2)}€
        </p>
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
