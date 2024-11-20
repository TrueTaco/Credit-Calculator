import React, { FC } from "react";

/**
 * CalcIcon Component
 *
 * A functional React component that renders a calculator icon as an SVG.
 * This component is lightweight, reusable, and follows best practices for maintainability.
 */
const CalcIcon: FC = () => {
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

  /**
   * Path data for the calculator icon
   *
   * Contains the instructions to draw the shapes inside the SVG.
   */

  const pathData =
    "M20.2045 3.59912H5.44964C4.29033 3.59912 3.3418 4.54765 3.3418 5.70696V20.4619C3.3418 21.6212 4.29033 22.5697 5.44964 22.5697H20.2045C21.3639 22.5697 22.3124 21.6212 22.3124 20.4619V5.70696C22.3124 4.54765 21.3639 3.59912 20.2045 3.59912ZM13.9126 7.87804L15.0298 6.76089L16.5158 8.24692L18.0018 6.76089L19.119 7.87804L17.633 9.36407L19.119 10.8501L18.0018 11.9673L16.5158 10.4918L15.0298 11.9778L13.9126 10.8606L15.3987 9.37461L13.9126 7.87804ZM6.76704 8.57363H12.0366V10.1545H6.76704V8.57363ZM12.3001 17.3001H10.1923V19.4079H8.6114V17.3001H6.50356V15.7192H8.6114V13.6114H10.1923V15.7192H12.3001V17.3001ZM19.1506 18.6175H13.881V17.0366H19.1506V18.6175ZM19.1506 15.9827H13.881V14.4018H19.1506V15.9827Z";

  return (
    <svg {...svgAttributes}>
      <path d={pathData} fill="black" />
    </svg>
  );
};

export default CalcIcon;
