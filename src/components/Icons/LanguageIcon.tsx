import { FC } from "react";

interface LanguageIconProps {}

/**
 * LanguageIcon Component
 *
 * A functional React component that renders a calculator icon as an SVG.
 * This component is lightweight, reusable, and follows best practices for maintainability.
 */
const LanguageIcon: FC<LanguageIconProps> = () => {
  /**
   * SVG element attributes
   *
   * Common attributes used in the `<svg>` tag for size, view box, and namespace declaration.
   */
  const svgAttributes = {
    width: "28", // Width of the SVG in pixels
    height: "28", // Height of the SVG in pixels
    viewBox: "0 0 28 28", // Coordinate system of the SVG
    fill: "none", // Default fill is set to none
    xmlns: "http://www.w3.org/2000/svg", // Namespace for the SVG
  };

  /**
   * Path data for the icon shapes
   *
   * Each `path` represents a different layer or detail in the SVG.
   */
  const paths = [
    {
      d: "M0.856445 9.28744H26.9366C25.0388 3.91952 19.9238 0.0719928 13.9068 0.0673828H13.8859C7.86922 0.0719928 2.75424 3.91952 0.856445 9.28744Z",
    },
    {
      d: "M26.9366 18.5068H0.856445C2.75547 23.8778 7.87537 27.7269 13.8967 27.7269C19.918 27.7269 25.0376 23.8778 26.9366 18.5068Z",
      fill: "#FFCE00", // Fixed color for this layer
    },
    {
      d: "M26.9364 18.5081C27.4463 17.0658 27.7266 15.515 27.7266 13.8981C27.7266 12.2812 27.4466 10.7304 26.9364 9.28809H0.856258C0.346389 10.7304 0.0664062 12.2812 0.0664062 13.8981C0.0664062 15.515 0.346696 17.0658 0.856565 18.5081H26.9364Z",
      fill: "#DD0000", // Fixed color for this layer
    },
  ];

  return (
    <svg {...svgAttributes}>
      {/* Define clip path for the icon */}
      <g clipPath="url(#clip0_204_1119)">
        {paths.map((path, index) => (
          <path key={index} d={path.d} fill={path.fill} />
        ))}
      </g>
      {/* Define clipping region */}
      <defs>
        <clipPath id="clip0_204_1119">
          <rect
            width="27.8667"
            height="27.8667"
            fill="white"
            transform="translate(0.0668945 0.0664062)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LanguageIcon;
