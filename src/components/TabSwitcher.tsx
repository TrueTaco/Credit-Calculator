import React, { FC } from "react";
import CalcIcon from "./Icons/CalcIcon";
import { useTranslation } from "react-i18next";
import StatisticsIcon from "./Icons/StatisticsIcon";
import TableIcon from "./Icons/TableIcon";
import GlowWrapper from "./Generics/GlowWrapper";

interface TabSwitcherProps {
  selectedTab: "calculation" | "statistic" | "table";
  setSelectedTab: React.Dispatch<
    React.SetStateAction<"calculation" | "statistic" | "table">
  >;
}

/**
 * TabSwitcher Component
 *
 * A functional React component that displays a horizontal tab switcher
 * containing three icons: Calculation, Statistics, and Table.
 * Each icon is wrapped in a `GlowWrapper` to apply a glow effect.
 *
 * Props:
 * - TabSwitcherProps: An empty interface (can be extended later if needed).
 *
 * Features:
 * - Provides a clean UI for switching between tabs.
 * - Uses the `i18next` library for text localization.
 * - Implements a glow effect for each icon using the `GlowWrapper` component.
 */
const TabSwitcher: FC<TabSwitcherProps> = ({ selectedTab, setSelectedTab }) => {
  // Translation
  const { t } = useTranslation();

  return (
    <div className=" bg-white/5 rounded-full h-20 w-full flex justify-between items-center  p-2 pr-4 pl-4 relative">
      {/* Calculation Icon Section */}
      {selectedTab === "calculation" ? (
        <div className="bg-white rounded-full h-full flex justify-evenly items-center gap-6 pr-12 pl-6 relative w-4/6">
          <GlowWrapper>
            <CalcIcon color="black" />
            <p className="font-semibold"> {t("calculation")}</p>
          </GlowWrapper>
        </div>
      ) : (
        /* Relative-attribute needed for glow effect  */
        <div
          className="relative h-full flex items-center p-2"
          onClick={() => setSelectedTab("calculation")}
        >
          <GlowWrapper strength={20}>
            <CalcIcon color="white" />
          </GlowWrapper>
        </div>
      )}

      {/* Statistics Icon Section */}
      {selectedTab === "statistic" ? (
        <div className="bg-white rounded-full h-full flex justify-around items-center gap-6 pr-16 pl-6 relative w-4/6">
          <GlowWrapper>
            <StatisticsIcon color="black" />
            <p className="font-semibold"> {t("statistic")}</p>
          </GlowWrapper>
        </div>
      ) : (
        /* Relative-attribute needed for glow effect  */
        <div
          className="relative h-full flex items-center p-2"
          onClick={() => setSelectedTab("statistic")}
        >
          <GlowWrapper strength={20}>
            <StatisticsIcon color="white" />
          </GlowWrapper>
        </div>
      )}

      {/* Statistics Icon Section */}
      {selectedTab === "table" ? (
        <div className="bg-white rounded-full h-full flex justify-around items-center gap-6 pr-16 pl-4 relative w-4/6">
          <GlowWrapper>
            <TableIcon color="black" />
            <p className="font-semibold"> {t("table")}</p>
          </GlowWrapper>
        </div>
      ) : (
        /* Relative-attribute needed for glow effect  */
        <div
          className="relative h-full flex items-center p-2"
          onClick={() => setSelectedTab("table")}
        >
          <GlowWrapper strength={20}>
            <TableIcon color="white" />
          </GlowWrapper>
        </div>
      )}
    </div>
  );
};

export default TabSwitcher;
