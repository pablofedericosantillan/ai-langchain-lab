import Container from "./Container";
import { LayoutProps } from "./types";

export default function BaseLayout({ children }: LayoutProps) {
  return <Container>{children}</Container>;
}
