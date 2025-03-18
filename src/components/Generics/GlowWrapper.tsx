import { FC, ReactNode } from "react";

interface TabSwitcherProps {
  children: ReactNode;
  strength:
    | 5
    | 10
    | 15
    | 20
    | 25
    | 30
    | 35
    | 40
    | 45
    | 50
    | 55
    | 60
    | 65
    | 70
    | 75
    | 80
    | 85
    | 90
    | 95
    | 100;

  color?: string;
}

const TabSwitcher: FC<TabSwitcherProps> = ({
  children,
  color = "white",
  strength,
}) => {
  return (
    <>
      <div
        className={`absolute inset-0 rounded-full bg-${color} opacity-${strength} blur-md`}
      />
      {children}
    </>
  );
};

export default TabSwitcher;
