import type { CSSProperties, ReactNode } from "react";

type Props = {
  as?: "div" | "span";
  children: ReactNode;
};

const visuallyHiddenStyle: CSSProperties = {
  border: 0,
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
};

export const VisuallyHidden = ({ as: Component = "span", children }: Props) => (
  <Component style={visuallyHiddenStyle}>{children}</Component>
);
