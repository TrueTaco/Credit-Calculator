import React, { FC } from "react";

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

const BackgroundWrapper: FC<BackgroundWrapperProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-tr from-[#4E0000]  to-90% via-[#192C43] via-39% to-[#000C13] w-screen h-screen">
      <div className="w-full h-full backdrop-blur-2xl">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
