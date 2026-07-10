import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || "#A88A26"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12.333a4.333 4.333 0 1 0 0-8.666 4.333 4.333 0 0 0 0 8.666Z"
    />
    <path
      stroke={props.stroke || "#A88A26"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m12.76 12.76-.087-.087m0-9.346.087-.087-.087.087ZM3.24 12.76l.087-.087-.087.087ZM8 1.387v-.054.054Zm0 13.28v-.054.054ZM1.387 8h-.054.054Zm13.28 0h-.054.054ZM3.327 3.327 3.24 3.24l.087.087Z"
    />
  </svg>
);
export default SvgComponent;
