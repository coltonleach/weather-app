import * as React from "react";

const SvgCompassarrow = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="compassarrow_svg__feather compassarrow_svg__feather-navigation-2"
    {...props}
  >
    <path d="m12 2 7 19-7-4-7 4 7-19z" />
  </svg>
);

export default SvgCompassarrow;
