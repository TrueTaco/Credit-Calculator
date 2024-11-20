import React, { FC, ReactNode } from "react";

interface TabSwitcherProps {
  children: ReactNode;
  strength?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
}

const TabSwitcher: FC<TabSwitcherProps> = ({ children, strength = 20 }) => {
  // Translation

  return (
    <>
      <div
        className={`absolute inset-0 rounded-full bg-white opacity-${strength} blur-xl`}
      />
      {children}
    </>
  );
};

export default TabSwitcher;
