import { FC } from "react";

interface StatisticsIconProps {
  color: "white" | "black";
}

/**
 * StatisticsIcon Component
 *
 * A functional React component that renders a statistics icon as an SVG.
 * This component is lightweight, reusable, and follows best practices for maintainability.
 */
const StatisticsIcon: FC<StatisticsIconProps> = ({ color }) => {
  /**
   * SVG element attributes
   *
   * Common attributes used in the `<svg>` tag for size, view box, and namespace declaration.
   */
  const svgAttributes = {
    width: "24", // Width of the SVG in pixels
    height: "24", // Height of the SVG in pixels
    viewBox: "0 0 24 24", // Coordinate system of the SVG
    fill: "none", // Default fill is set to none
    xmlns: "http://www.w3.org/2000/svg", // Namespace for the SVG
  };

  return (
    <svg {...svgAttributes}>
      <path
        d="M12 16V21"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 14V21"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 10V21"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 3L13.354 11.646C13.3076 11.6926 13.2524 11.7295 13.1916 11.7547C13.1309 11.7799 13.0658 11.7929 13 11.7929C12.9342 11.7929 12.8691 11.7799 12.8084 11.7547C12.7476 11.7295 12.6924 11.6926 12.646 11.646L9.354 8.354C9.26024 8.26026 9.13308 8.20761 9.0005 8.20761C8.86792 8.20761 8.74076 8.26026 8.647 8.354L2 15"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 18V21"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 14V21"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default StatisticsIcon;
