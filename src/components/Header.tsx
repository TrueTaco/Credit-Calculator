import GlowWrapper from "./Generics/GlowWrapper";

const Header = () => {
  return (
    <div className="w-full h-16 items-center flex justify-start pl-4">
      {/* Move into component */}
      <div className="relative">
        <p className="text-[#48D1D9] text-xl font-medium drop-shadow-glow">
          Credit Calculator
        </p>
      </div>

      {/* Move into component */}
      <div></div>
    </div>
  );
};

export default Header;
