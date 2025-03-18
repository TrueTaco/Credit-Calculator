import { FC } from "react";
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
    <div className="relative flex h-16 w-full items-center justify-between rounded-full bg-white/5 p-2">
      {/* Calculation Icon Section */}
      {selectedTab === "calculation" ? (
        <div className="relative flex h-full w-4/6 items-center justify-evenly gap-6 rounded-full bg-white pl-6 pr-12">
          <GlowWrapper strength={20}>
            <CalcIcon color="black" />
            <p className="font-semibold"> {t("calculation")}</p>
          </GlowWrapper>
        </div>
      ) : (
        /* Relative-attribute needed for glow effect  */
        <div
          className="relative flex h-full items-center p-3"
          onClick={() => setSelectedTab("calculation")}
        >
          <GlowWrapper strength={20}>
            <CalcIcon color="white" />
          </GlowWrapper>
        </div>
      )}

      {/* Statistics Icon Section */}
      {selectedTab === "statistic" ? (
        <div className="relative flex h-full w-4/6 items-center justify-around gap-6 rounded-full bg-white pl-6 pr-16">
          <GlowWrapper strength={20}>
            <StatisticsIcon color="black" />
            <p className="font-semibold"> {t("statistic")}</p>
          </GlowWrapper>
        </div>
      ) : (
        /* Relative-attribute needed for glow effect  */
        <div
          className="relative flex h-full items-center p-3"
          onClick={() => setSelectedTab("statistic")}
        >
          <GlowWrapper strength={20}>
            <StatisticsIcon color="white" />
          </GlowWrapper>
        </div>
      )}

      {/* Statistics Icon Section */}
      {selectedTab === "table" ? (
        <div className="relative flex h-full w-4/6 items-center justify-around gap-6 rounded-full bg-white pl-4 pr-16">
          <GlowWrapper strength={20}>
            <TableIcon color="black" />
            <p className="font-semibold"> {t("table")}</p>
          </GlowWrapper>
        </div>
      ) : (
        /* Relative-attribute needed for glow effect  */
        <div
          className="relative flex h-full items-center p-2"
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
