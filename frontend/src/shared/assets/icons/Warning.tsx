import { SVGProps } from "react";
const Warning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color || "#FCF9E5"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.728}
      d="M12 9v5M12 21.411H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62 2.94-5.28c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H12v-.01Z"
    />
    <path
      stroke={props.color || "#FCF9E5"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.304}
      d="M11.995 17h.009"
    />
  </svg>
);
export default Warning;
