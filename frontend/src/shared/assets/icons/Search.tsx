import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || "#4F5971"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.296}
      d="M9.583 17.5a7.917 7.917 0 1 0 0-15.834 7.917 7.917 0 0 0 0 15.833ZM18.333 18.333l-1.666-1.667"
    />
  </svg>
);
export default SvgComponent;
