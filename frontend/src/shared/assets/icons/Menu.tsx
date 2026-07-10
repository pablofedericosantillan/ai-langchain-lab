import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color || "#4F5971"}
      d="M20.813 12a.562.562 0 0 1-.563.563H3.75a.563.563 0 0 1 0-1.126h16.5a.562.562 0 0 1 .563.563ZM3.75 6.562h16.5a.562.562 0 1 0 0-1.125H3.75a.563.563 0 1 0 0 1.125Zm16.5 10.875H3.75a.563.563 0 0 0 0 1.125h16.5a.562.562 0 1 0 0-1.125Z"
    />
  </svg>
);
export default SvgComponent;
