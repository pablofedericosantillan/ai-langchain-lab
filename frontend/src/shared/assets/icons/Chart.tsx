import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={props.color || "#4F5971"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 21V3M15.62 5.6V4c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1.6c0 .55.45 1 1 1h8.62c.55 0 1-.45 1-1ZM18.81 12.801v-1.6c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1.6c0 .55.45 1 1 1h11.81c.55 0 1-.45 1-1ZM22 20v-1.6c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1V20c0 .55.45 1 1 1h15c.55 0 1-.45 1-1Z"
    />
  </svg>
);
export default SvgComponent;
