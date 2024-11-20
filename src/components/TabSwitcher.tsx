import React, { FC } from "react";
import CalcIcon from "./Icons/CalcIcon";
import { useTranslation } from "react-i18next";
import StatisticsIcon from "./Icons/StatisticsIcon";
import TableIcon from "./Icons/TableIcon";
import GlowWrapper from "./GlowWrapper";

interface TabSwitcherProps {}

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
const TabSwitcher: FC<TabSwitcherProps> = ({}) => {
  // Translation
  const { t } = useTranslation();

  return (
    <div className=" bg-white/5 rounded-full h-20 w-full flex justify-between items-center gap-4 p-2 pr-4 relative">
      {/* Calculation Icon Section */}
      <div className="bg-white rounded-full h-full flex justify-center items-center gap-6 pr-12 pl-6 relative">
        <GlowWrapper>
          <CalcIcon />
          <p className="font-semibold"> {t("calculation")}</p>
        </GlowWrapper>
      </div>

      {/* Statistics Icon Section - extra div with relative-attribute needed for glow effect */}
      <div className="relative">
        <GlowWrapper strength={80}>
          <StatisticsIcon />
        </GlowWrapper>
      </div>

      {/* Statistics Icon Section - extra div with relative-attribute needed for glow effect */}
      <div className="relative">
        <GlowWrapper strength={80}>
          <TableIcon />
        </GlowWrapper>
      </div>
    </div>
  );
};

export default TabSwitcher;
