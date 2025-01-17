import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation("home");

  return (
    <div className="w-full h-16 items-center flex justify-between pl-4 pr-4">
      {/* Move into component */}
      <div className="relative">
        <p className="text-[#48D1D9] text-xl font-medium drop-shadow-glow">
          Credit Calculator
        </p>
      </div>

      {/* Move into component */}
      <div className="flex cursor-pointer">
        <p className="text-white">{i18n.language.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default Header;
