import React, { FC } from "react";
import CalcIcon from "./Icons/CalcIcon";
import { useTranslation } from "react-i18next";
import StatisticsIcon from "./Icons/StatisticsIcon";
import TableIcon from "./Icons/TableIcon";

interface TabSwitcherProps {}

const TabSwitcher: FC<TabSwitcherProps> = ({}) => {
  // Translation
  const { t } = useTranslation();

  return (
    <div className=" bg-white/5 rounded-full h-20 w-full flex justify-between items-center gap-4 pl-2 pr-4">
      <div className="bg-white rounded-full p-3 flex justify-center items-center gap-6 pr-12 pl-6">
        <CalcIcon />
        <p className="font-semibold"> {t("calculation")}</p>
      </div>
      <StatisticsIcon />
      <TableIcon />
    </div>
  );
};

export default TabSwitcher;
