import { FC } from "react";

interface ChevronProps {
  color: "white" | "black";
}

/**
 * Chevron Icon Component
 *
 * A functional React component that renders a calculator icon as an SVG.
 * This component is lightweight, reusable, and follows best practices for maintainability.
 */
const Chevron: FC<ChevronProps> = ({ color }) => {
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
    strokeWidth: "1.5",
    stroke: color,
  };

  /**
   * Path data for the calculator icon
   *
   * Contains the instructions to draw the shapes inside the SVG.
   */

  const pathData = "m19.5 8.25-7.5 7.5-7.5-7.5";

  return (
    <svg {...svgAttributes}>
      <path d={pathData} />
    </svg>
  );
};

export default Chevron;
