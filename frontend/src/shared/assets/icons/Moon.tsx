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
      stroke={props.stroke || "#4F5971"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M1.353 8.28c.24 3.434 3.154 6.227 6.64 6.38a7.006 7.006 0 0 0 5.98-2.846c.547-.74.254-1.233-.66-1.067a6.33 6.33 0 0 1-1.386.094C8.667 10.707 6 7.98 5.987 4.76a5.93 5.93 0 0 1 .5-2.434c.36-.826-.074-1.22-.907-.866-2.64 1.113-4.447 3.773-4.227 6.82Z"
    />
  </svg>
);
export default SvgComponent;
