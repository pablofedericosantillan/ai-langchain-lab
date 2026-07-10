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
      stroke={props.color || "#E0F8E6"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.728}
      d="m19.395 6.895-9.723 9.722-4.894-4.895"
    />
  </svg>
);
export default SvgComponent;
