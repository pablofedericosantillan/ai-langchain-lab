import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 25}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      stroke={props.color || "#4F5971"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.296}
      d="m17.44 15.286 2.56-2.56-2.56-2.56M9.76 12.727h10.17M11.76 20.666c-4.42 0-8-3-8-8s3.58-8 8-8"
    />
  </svg>
);
export default SvgComponent;
