import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 20}
    height={props.height || 20}
    fill="none"
    {...props}
    viewBox="0 0 20 20"
  >
    <path
      fill={props.color || "#4F5971"}
      d="M16.067 15.183a.624.624 0 1 1-.884.884L10 10.884l-5.183 5.183a.625.625 0 1 1-.884-.884L9.116 10 3.933 4.818a.625.625 0 1 1 .884-.885L10 9.117l5.183-5.184a.625.625 0 1 1 .884.885L10.883 10l5.184 5.183Z"
    />
  </svg>
);
export default SvgComponent;
