import { FC, ReactNode } from "react";

interface TabSwitcherProps {
  children: ReactNode;
  strength?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
  color?: string;
}

const TabSwitcher: FC<TabSwitcherProps> = ({
  children,
  strength = 20,
  color = "white",
}) => {
  return (
    <>
      <div
        className={`absolute inset-0 rounded-full bg-${color} opacity-${strength} blur-xl`}
      />
      {children}
    </>
  );
};

export default TabSwitcher;
