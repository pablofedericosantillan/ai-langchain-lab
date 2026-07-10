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
      fill={props.color || "#4F5971"}
      d="M14.795 7.19a.712.712 0 0 1 1.018.05.74.74 0 0 1-.048 1.033l-4.635 4.283a1.66 1.66 0 0 1-2.26 0L4.235 8.273l-.051-.052a.742.742 0 0 1 .003-.982.712.712 0 0 1 .96-.096l.058.048 4.634 4.282a.237.237 0 0 0 .322 0l4.634-4.282Z"
    />
  </svg>
);
export default SvgComponent;
