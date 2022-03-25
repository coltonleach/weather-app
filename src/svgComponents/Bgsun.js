import * as React from "react";

const SvgBgsun = (props) => (
  <svg
    viewBox="0 0 1000 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="500" cy="500" r="500" fill="#FFED90" fill-opacity="0.1"/>
    <circle cx="500" cy="500" r="370" fill="#FFED90" fill-opacity="0.15"/>
    <circle cx="500" cy="500" r="260" fill="#FFED90" fill-opacity="0.45"/>
    <circle cx="500" cy="500" r="160" fill="#FFED91" fill-opacity="0.6"/>
  </svg>
);

export default SvgBgsun;
