import React, { FC } from "react";

/**
 * TableIcon Component
 *
 * A functional React component that renders a table icon as an SVG.
 * This component is lightweight, reusable, and follows best practices for maintainability.
 */
const TableIcon: FC = () => {
  /**
   * SVG element attributes
   *
   * Common attributes used in the `<svg>` tag for size, view box, and namespace declaration.
   */
  const svgAttributes = {
    width: "26", // Width of the SVG in pixels
    height: "26", // Height of the SVG in pixels
    viewBox: "0 0 26 26", // Coordinate system of the SVG
    fill: "none", // Default fill is set to none
    xmlns: "http://www.w3.org/2000/svg", // Namespace for the SVG
  };

  return (
    <svg {...svgAttributes}>
      <path
        d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 9H8"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 13H8"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 17H8"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TableIcon;